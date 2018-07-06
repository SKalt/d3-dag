const tape = require("tape"),
  fs = require("fs"),
  d3_dag = require("../");

const [square, en, ex] = [
  "test/data/square.json",
  "test/data/en.json",
  "test/data/ex.json",
].map(file => d3_dag.dagStratify()(JSON.parse(fs.readFileSync(file))));
const genealogy = d3_dag.dagStratify().parentIds(d => d.advisors)(JSON.parse(fs.readFileSync("test/data/genealogy.json"))).reverse();

tape("dagLayout() works for square", test => {
  d3_dag.dagLayout()(square);
  test.end();
});

tape("dagLayout() works for N", test => {
  d3_dag.dagLayout()(en);
  test.end();
});

tape("dagLayout() works for X", test => {
  d3_dag.dagLayout()(ex);
  test.end();
});

tape("dagLayout() works for genealogy", test => {
  d3_dag.dagLayout()(genealogy);
  test.end();
});