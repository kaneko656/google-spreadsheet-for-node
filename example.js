let Sheet = require('./index.js')

// リファレンス
// https://www.npmjs.com/package/google-spreadsheet
// GoogleSpreadsheet.getInfo(callback)したデータがコールバックで返ってくる

let sheetID = ''
Sheet(sheetID, (info) => {
    console.log('\r\ngetIngo')
    console.log(info)

    // シートのタグをみる
    info.worksheets.forEach((worksheet, i) => {

        // 「今日やる」シートを見つける
        if (worksheet.title == '今日やる') {
            console.log('\r\nworksheet')
            console.log(worksheet)
            someWork(worksheet)
        }
    })
})

let someWork = (worksheet) => {

    // 書いてある内容を取得
    worksheet.getRows((err, rows) => {
        console.log('\r\nrows')
        console.log(rows)
    })
}
