const PathNormalyzer = require("./pathNormalyzer")


const normalyzer = new PathNormalyzer();


console.log(normalyzer.normalizePath("./user/../user/documents//file.txt"))
console.log(normalyzer.joinPaths("/home", "user", "documents", "file.txt"))