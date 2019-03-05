const fs = require('fs');
const glob = require('glob');
const path = require('path');

const targetDir = path.resolve(__dirname, '..', 'dist/src/components');

const STYLABLE_PATTERN = '/**/*.st.css';
const STYLABLE_ES_PATTERN = '/**/*.es.st.css';
const files = glob.sync(targetDir + STYLABLE_PATTERN, { ignore: [ targetDir + STYLABLE_ES_PATTERN ] });

files.forEach(filepath => {
  fs.readFile(filepath, 'utf-8', function (e, content) {
    if (e != null) {
      console.warn(e);
      return;
    }
    const codeWithEsImport = content.replace(/wix\-ui\-core\/index\.st\.css/g, 'wix-ui-core/index.es.st.css');
    const esFilename = filepath.replace('st.css', 'es.st.css');
    fs.writeFile(esFilename, codeWithEsImport, function (e) {
      if (e) {
        console.warn(e);
        return;
      }
      console.log(filepath, '->', esFilename);
    });
  });
});
