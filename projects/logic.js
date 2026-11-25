// Browser-only project logic. These functions do not perform network requests.
(function (root) {
  "use strict";
  function tokens(text) {
    return (text.normalize("NFKC").toLowerCase().replace(/[يى]/g,"ی").replace(/ك/g,"ک")
      .replace(/[\u064B-\u065F\u0670]/g,"").replace(/\u200c/g," ").match(/[\p{L}\p{N}]+/gu) || []);
  }
  function search(text, query) {
    const rows = text.trim().split(/\r?\n\s*\r?\n/u).map(x => x.trim()).filter(Boolean);
    if (!rows.length) throw Error("Paste at least one passage. | دست‌کم یک پاراگراف وارد کنید.");
    const terms = [...new Set(tokens(query))];
    if (!terms.length) throw Error("Enter a search query. | عبارت جست‌وجو را وارد کنید.");
    const docs = rows.map(tokens);
    const avg = docs.reduce((s,d) => s + d.length, 0) / docs.length || 1;
    const weights = terms.map(t => {
      const df = docs.filter(d => d.includes(t)).length;
      return Math.log(1 + (docs.length - df + 0.5) / (df + 0.5));
    });
    return docs.map((d,i) => {
      const freq = Object.create(null);
      for (const word of d) freq[word] = (freq[word] || 0) + 1;
      const score = terms.reduce((s,t,j) => {
        const f = freq[t] || 0;
        return s + (f ? weights[j] * (2.2*f)/(f + 1.2*(0.25+0.75*d.length/avg)) : 0);
      },0);
      return {passage:i+1, score, text:rows[i]};
    }).filter(row => row.score > 0).sort((a,b) => b.score-a.score || a.passage-b.passage).slice(0,5);
  }
  function csv(text) {
    const rows = [];
    let row=[], field="", state=0;
    text = text.replace(/^\uFEFF/,"");
    const cell = () => {row.push(field); field=""; state=0;};
    const record = () => {cell(); rows.push(row); row=[];};
    for (let i=0;i<text.length;i++) {
      const c=text[i];
      if(state===1) {
        if(c==='"' && text[i+1]==='"') {field+='"'; i++;}
        else if(c==='"') state=2;
        else field+=c;
      } else if(c===",") cell();
      else if(c==="\n" || c==="\r") {if(c==="\r" && text[i+1]==="\n") i++; record();}
      else if(state===2) throw Error("Unexpected character after closing quote. | نویسهٔ نامعتبر پس از گیومه.");
      else if(c==='"') {
        if(field) throw Error("Quote inside an unquoted field. | گیومه در ستون بدون نقل‌قول.");
        state=1;
      } else field+=c;
    }
    if(state===1) throw Error("Unclosed quoted field. | گیومهٔ بسته‌نشده.");
    if(row.length || field || state===2) record();
    if(!rows.length) throw Error("Paste a CSV with a header row. | فایل باید ردیف عنوان داشته باشد.");
    const headers=rows.shift().map(x => x.trim());
    if (headers.some(x=>!x) || new Set(headers).size!==headers.length)
      throw Error("Headers must be nonempty and unique. | عنوان ستون‌ها باید یکتا و غیرخالی باشد.");
    for(let i=0;i<rows.length;i++)
      if(rows[i].length!==headers.length) throw Error("Column count differs in record " + (i+2) + ".");
    return { count:rows.length, columns:headers.map((name,i)=>{
      const values=rows.map(r=>r[i].trim()).filter(Boolean);
      const numeric=values.filter(x=>/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(x) && Number.isFinite(Number(x)));
      return {name, filled:values.length, empty:rows.length-values.length, unique:new Set(values).size,
        kind:!values.length?"empty":numeric.length===values.length?"numeric":numeric.length?"mixed":"text"};
    })};
  }
  function map(input, spec) {
    if (!Array.isArray(input)) throw Error("Input must be a JSON array. | ورودی باید آرایهٔ JSON باشد.");
    if (!spec || typeof spec!=="object" || Array.isArray(spec)) throw Error("Mapping must be a JSON object. | نگاشت باید شیء JSON باشد.");
    const entries=Object.entries(spec);
    if(!entries.length || entries.length>40 || input.length>1000) throw Error("Use 1–40 fields and at most 1,000 records.");
    let missing=0;
    const rows=input.map((row,i)=>{
      if(!row || typeof row!=="object" || Array.isArray(row)) throw Error("Record " + (i+1) + " must be an object.");
      const out=Object.create(null);
      for(const [key,path] of entries){
        if(!key || typeof path!=="string" || !path || path.split(".").some(p=>!p)) throw Error("Each mapping value must be a dotted field path.");
        let cur=row;
        for (const part of path.split(".")) cur=cur && typeof cur === "object" && Object.hasOwn(cur,part) ? cur[part] : undefined;
        if(cur===undefined) {out[key]=null; missing++;}
        else out[key]=cur;
      }
      return out;
    });
    return {rows,missing};
  }
  root.ProjectLab = Object.freeze({tokens,search,csv,map});
})(globalThis);
