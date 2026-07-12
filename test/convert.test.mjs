import { test } from "node:test";
import assert from "node:assert/strict";
import { yamlToJson, jsonToYaml } from "../convert.mjs";

test("basic yaml → json", () => {
  assert.equal(JSON.parse(yamlToJson("a: 1\nb: [x, y]")).a, 1);
});
test("multi-document yaml → json array", () => {
  const out = JSON.parse(yamlToJson("a: 1\n---\nb: 2"));
  assert.equal(out.length, 2);
});
test("json → yaml round trip", () => {
  const y = jsonToYaml('{"name":"fleet","n":18}');
  assert.match(y, /name: fleet/);
  assert.equal(JSON.parse(yamlToJson(y)).n, 18);
});
test("bad yaml throws a real error", () => {
  assert.throws(() => yamlToJson("a: [unclosed"));
});
