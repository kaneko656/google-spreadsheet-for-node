// 参考
// https://dev.classmethod.jp/server-side/node-js-server-side/nodegooglespreadsheet/

// リファレンス
// https://www.npmjs.com/package/google-spreadsheet
let GoogleSpreadsheet = require('google-spreadsheet')

// 認証情報　json
let credentials = require('./token.json')

module.exports = (spreadSheetID, callback = () => {}) => {
    let sheet = new GoogleSpreadsheet(spreadSheetID)

    // token期限は１時間だが，切れたら内部処理で更新してくれる（要約：気にしなくていい）
    sheet.useServiceAccountAuth(credentials, (err) => {
        if (err) {
            console.log(err)
            callback({
                err: err
            })
        }
        sheet.getInfo((err, data) => {
            if (err) {
                console.log(err)
                callback({
                    err: err
                })
            }
            callback(data)
        })

    })
}
