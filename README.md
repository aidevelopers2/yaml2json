# yaml2json

The conversion core behind **[yaml2json.com](https://yaml2json.com)** — a YAML ↔ JSON converter that runs entirely in the browser. Nothing is uploaded; conversion happens client-side.

## Why
Every online YAML converter we tried either sent the file to a server or choked on multi-document files. This is the small, honest core: [js-yaml](https://github.com/nodeca/js-yaml) with the details handled —

- **Multi-document YAML** (`---` separators — Kubernetes manifests, CI configs) → JSON array
- **Real parse errors** with line/column, not a silent blank
- **Both directions** — JSON → YAML too
- Client-side friendly: no Node APIs, bundles clean

## Use
```js
import { yamlToJson, jsonToYaml } from "./convert.mjs";

yamlToJson("a: 1\nb: [x, y]");       // '{ "a": 1, "b": ["x", "y"] }'
jsonToYaml('{"name":"fleet"}');       // 'name: fleet\n'
```

Or skip the code: **[yaml2json.com](https://yaml2json.com)** — free, no signup, works offline once loaded.

MIT © Zac Frulloni
