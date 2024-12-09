const PathAnalyzer = require("./pathAnalyzer")


const filePath = "/home/user/documents/report.pdf";
const analyzer = new PathAnalyzer();


console.log(analyzer.getBaseName(filePath))
console.log(analyzer.getDirName(filePath))
console.log(analyzer.getExtension(filePath))
console.log(analyzer.isAbsolutePath(filePath))