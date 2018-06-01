// FS is a built in module to node that let's us read files from the system we're running on
const fs = require('fs');

// inserting an SVG
exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`);