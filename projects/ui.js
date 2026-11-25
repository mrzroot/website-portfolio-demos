"use strict";
const form=document.querySelector("#tool");
const status=document.querySelector("#status");
const result=document.querySelector("#result");
const source=document.querySelector("#source");
const extra=document.querySelector("#extra");
function element(tag,text){const el=document.createElement(tag);if(text!==undefined)el.textContent=text;return el;}
form.addEventListener("reset",()=>{
  result.replaceChildren();
  status.classList.remove("error");
  status.textContent="Sample restored. Run the tool to see the results.";
});
form.addEventListener("submit",event=>{
  event.preventDefault();
  result.replaceChildren();
  status.classList.remove("error");
  try{
    if(source.value.length>150000 || (extra?.value.length||0)>50000)throw Error("Input is too large for this demo.");
    if(form.dataset.tool==="search"){
      const rows=ProjectLab.search(source.value,extra.value);
      status.textContent=rows.length ? rows.length+" matching passages / پاراگراف مرتبط" : "No matching passages. / نتیجه‌ای پیدا نشد.";
      const list=element("ol");list.className="matches";
      rows.forEach(row=>{
        const li=element("li"), p=element("p",row.text);p.dir="auto";
        li.append(element("strong","Passage "+row.passage+" · BM25 "+row.score.toFixed(2)),p);list.append(li);
      });result.append(list);
    }else if(form.dataset.tool==="csv"){
      const data=ProjectLab.csv(source.value);
      status.textContent=data.count+" data rows · "+data.columns.length+" columns";
      const table=element("table"), head=element("thead"), top=element("tr"), body=element("tbody");
      ["Column","Filled","Empty","Unique","Type"].forEach(name=>{const th=element("th",name);th.scope="col";top.append(th);});head.append(top);table.append(head,body);
      data.columns.forEach(col=>{const row=element("tr");
        const name=element("th",col.name);name.scope="row";name.dir="auto";row.append(name);
        [col.filled,col.empty,col.unique,col.kind].forEach(value=>row.append(element("td",value)));body.append(row);
      });const scroll=element("div");scroll.className="table-wrap";scroll.tabIndex=0;scroll.setAttribute("role","region");scroll.setAttribute("aria-label","CSV column results");scroll.append(table);result.append(scroll);
    }else{
      const data=ProjectLab.map(JSON.parse(source.value),JSON.parse(extra.value));
      status.textContent=data.rows.length+" records · "+data.missing+" missing fields";
      result.append(element("pre",JSON.stringify(data.rows,null,2)));
    }
  }catch(error){status.classList.add("error");status.textContent=error.message;}
});
