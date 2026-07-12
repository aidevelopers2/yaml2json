// yaml2json core — the conversion logic behind https://yaml2json.com
// Thin, honest wrapper over js-yaml: multi-document support, stable output,
// real parse errors. MIT.
import { loadAll, dump } from "js-yaml";

/** YAML (1+ documents) → pretty JSON string. Single doc → object, multi → array. */
export function yamlToJson(text, { indent = 2 } = {}) {
  const docs = [];
  loadAll(text, (d) => docs.push(d));
  return JSON.stringify(docs.length === 1 ? docs[0] : docs, null, indent);
}

/** JSON string → YAML. Arrays stay arrays; lineWidth keeps long strings unfolded. */
export function jsonToYaml(text, { lineWidth = 100 } = {}) {
  return dump(JSON.parse(text), { lineWidth });
}
