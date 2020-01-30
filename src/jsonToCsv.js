const fs = require('fs')
const jsonexport = require('jsonexport')
const convertJsonToCsv = require('./modules/JsonToCsv')


const jsonPath = process.env.JSON_PATH || undefined
if (jsonPath === undefined) {
    console.log('Please provide json file with full path')
    return
}

console.log('==> Start processing...')

const savedPath = './result/data.csv'
convertJsonToCsv(jsonPath, (csv, err) => {
    if (err) {
        return console.log(err)
    }

    fs.writeFile(savedPath, csv, function (err) {
        if (err) {
            return console.log(err)
        }
        console.log(`==> Finished. Your converted CSV file is at ${savedPath}`)
    })
})