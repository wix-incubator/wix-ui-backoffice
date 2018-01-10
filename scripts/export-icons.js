// Ignore the scss module
require.extensions['.scss'] = () => {};

const fs = require('fs');
const icons = require('wix-ui-icons-common');
const exportFolder = 'Icons';
const removeFolder = path => {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(file => fs.unlinkSync(`${path}/${file}`));
    fs.rmdirSync(path);
  }
};

removeFolder(exportFolder);
fs.mkdirSync(exportFolder);
Object.keys(icons)
  .forEach(icon =>
    fs.writeFileSync(`${exportFolder}/${icon}.js`, `module.exports = require('wix-ui-icons-common/${icon}');\n`)
  );
