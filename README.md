# google_spreadsheet_for_node.js

スプレッドシートの読み書きが速攻でできるモジュール．Node.js

### git clone or DownloadZip

`git clone https://github.com/keitalab/google_spreadsheet_for_node.js.git`

or DownloadZip

### npm install

`npm install`

- modules

  - google-spreadsheet


### 準備

1. Google Developer コンソールでDrive APIを許可
2. 認証情報が書いてあるJSONを取得
3. コードをコピペ
4. jsonに記述してあるメールアドレスをアクセス許可する
5. スプレッドシートのIDを入れる

- スプレッドシートのID
  - URL - https: //docs.google.com/spreadsheets/d/***1Fj7oeRnJKqUfiJ_Jyxgd5s7dpAso3XNJgkVNo-be3_w***/edit#gid=1830222911
    <br>.../d/〇〇/edit...　〇〇の部分


- メールの認証
  - シート，他のユーザと共有でメールアドレスを登録する
  <br>（このEmailは認証情報で発行されるもの．token.jsonに記載）


## 使い方

***example.jsを見るとだいたいわかる***


`let Sheet = require('./google_spreadsheet_for_node.js/index.js')` （`/index.js`は省略可）


Sheet('スプレッドシートのID', コールバック関数)

`Sheet('スプレッドシートのID', (info) => { console.log(info) })`

infoにシートの必要な情報が入っている

info.worksheets[]に各シートタグの情報が入っている

info.worksheets[0].getRows((err, rows) => {})
<br>とすると書いてある情報が取得できる

`info.worksheets[0].addRows`<br>もしくは<br>
`rows[0].colname = '新しい名前'`<br>
`rows[0].save()`<br>
などの方法で記入できる


### 注意
token.jsonに認証情報が入っていて，それを読み取っている<br>
本来なら，自身で取得したモノを利用すべきであるが，keitalab内での利用に限って私が取得した認証情報を共有する


### リファレンス
https://www.npmjs.com/package/google-spreadsheet

Sheetで返ってくるinfoはGoogleSpreadsheet.getInfo()で返ってくるデータ
