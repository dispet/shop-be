const { importProductsFile } = require('./src/handlers/importProductsFile');
const { importFileParser } = require('./src/handlers/importFileParser');
const { catalogBatchProcess } = require('./src/handlers/catalogBatchProcess');

module.exports = {
    importProductsFile,
    importFileParser,
    catalogBatchProcess
}
