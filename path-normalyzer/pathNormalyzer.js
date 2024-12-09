const path = require("path");

class PathNormalyzer {

    normalizePath(filePath){
        return path.normalize(filePath)
    }

    joinPaths(...paths){
        return path.join(...paths)
    }
 
}

module.exports = PathNormalyzer;