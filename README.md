# Classify Script

Classifies bitcoin scripts as a specific tag. Examples: `payment`, `data`, `twetch`, `21e8` or `boost`.

To add more classifications, create a pull request, or don't, whatever.

## Installation

```bash
npm install @matterpool/classify-script
```

```javascript
const bsv = require('bsv');
const classifyScript = require('@matterpool/classify-script');
const script = new bsv.Script();
classifyScript(script);
```

## Authors

- [@1](https://twetch.app/u/1)
