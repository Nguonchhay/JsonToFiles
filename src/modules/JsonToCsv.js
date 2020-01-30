const fs = require('fs')
const jsonexport = require('jsonexport')


const convertJsonToCsv = (fileAndPath, callback) => {
    if (fileAndPath === undefined) {
        console.log('Please provide json file with full path')
        return
    }

    const jsonData = JSON.parse(fs.readFileSync(fileAndPath))
    jsonexport(jsonData, function(err, csv) {
        callback(csv, err)
    })
}

module.exports = convertJsonToCsv

