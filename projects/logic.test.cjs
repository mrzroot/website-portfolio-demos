const test = require("node:test");
const assert = require("node:assert/strict");
require("./logic.js");
const lab = globalThis.ProjectLab;
test("ranks Persian passages and normalizes mixed Arabic spelling", () => {
  assert.deepEqual(lab.tokens("كِتاب مي‌رود"), ["کتاب", "می", "رود"]);
  assert.equal(lab.search("كتاب خوب\n\nقهوه گرم\n\nكتاب كتاب", "کتاب")[0].passage, 3);
  assert.deepEqual(lab.search("abc", "z"), []);
  assert.throws(() => lab.search("abc", ""));
});
test("handles quoted commas, newlines, escapes and missing values", () => {
  const data = lab.csv('\ufeffname,n,notes\r\nAli,3,"a,b"\r\nMina,,"first\nsecond"\r\nReza,3,"a""b"');
  assert.equal(data.count, 3);
  assert.deepEqual(data.columns[1], {name:"n",filled:2,empty:1,unique:1,kind:"numeric"});
  assert.throws(() => lab.csv('x,y\n"bad,1'));
  assert.throws(() => lab.csv("x,x\n1,2"));
  assert.throws(() => lab.csv("x,y\n1"));
});
test("maps nested own fields and counts missing separately from null", () => {
  const result = lab.map([{a:{b:4}},{a:{b:null}},{a:{}}], {x:"a.b"});
  assert.deepEqual(result.rows.map(row => row.x), [4,null,null]);
  assert.equal(result.missing, 1);
  const safe = lab.map([{}], JSON.parse('{"__proto__":"constructor"}')).rows[0];
  assert.equal(Object.getPrototypeOf(safe), null);
  assert.equal(safe.__proto__, null);
  assert.throws(() => lab.map([3], {y:"a.b"}));
});
