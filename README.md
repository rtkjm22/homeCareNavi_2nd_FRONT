# PRUMアカデミー

<br />

## ホームケアナビ作成用PJ(FRONT)

<br />

### 環境構築
1. FRONTリポジトリをクローンする　`git clone https://github.com/rtkjm22/homeCareNavi_2nd_FRONT.git`
2. クローンしたFRONTリポジトリに移動する　`cd homeCareNavi_2nd_FRONT`
3. 本番環境をいじらないよう、すぐに開発環境のブランチに移動する　`git checkout develop`
4. パッケージをインストールする　`npm run install`
5. nuxt3を起動する　`npm run dev`

<br />

### 作業開始時のgit操作
1. 現在のブランチがdevelopであることを確認する　`git branch`
2. 最新のdevelopブランチをプルする　`git pull origin develop`
3. 自分のissueに基づきfeatureブランチを作成及び移動する(例：マネージャー側の新規登録画面を追加する)　`git checkout -b feature/add-manager-signup-page`

<br />

### 作業完了時のgit操作
1. 実装が完了したら、lintチェックを実施しコードを綺麗にする。自動修正できないところは手動で修正し、出来れば引っかかる箇所を0にする　`npm run lint` 及び `npm run lint_fix`
2. 作業によって変更,追加,削除されたファイルを確認する。ここで不要なファイルがあれば.gitignoreに追加したり、うっかり異なるファイルを変更していないか確認する　`git status`
3. 作業によって変更したファイルの差分を表示し、余計なコードが含まれていないか確認する　`git diff`
4. 実装したファイルをインデックスに登録し、コミット対象にする　`git add -A`(全部登録)
5. コミットする　`git commit -m "Add: マネージャー側の新規登録画面を追加"`
6. リモートリポジトリにプッシュする　`git push origin feature/add-manager-signup-page`

<br />

### プルリクエスト作成
1. githubの[FRONTのページ](https://github.com/rtkjm22/homeCareNavi_2nd_FRONT/tree/develop)に移動する
2. 画面上部の*Compare & pull request*のボタンを押下する
![プルリクエストを選択](https://user-images.githubusercontent.com/68116815/189954659-43d6caa9-d316-4812-bd2a-4a8fdfa13923.jpg) 
3. 画面左上のセレクトボックスから、developブランチをマージ先として選択する
![developを選択](https://user-images.githubusercontent.com/68116815/189954686-c8b544a6-5a1b-40fb-b6f8-6083b1091bee.jpg)
4. 画面右上の*Reviewrs*の歯車マークをクリックし、チームメンバー全員をレビュワーとして追加する
5. 画面中央のコメント欄に必要事項を記載する。特に画面追加時はそのスクショを添付する(Macなら`⌘+Shift+4`で選択範囲をスクショするとデスクトップに保存されるので、そのままドラッグアンドドロップする)
6. 画面右下の*Create pull request*を押下すればプルリクエスト作成完了

<br />

### レビュワー
`git fetch origin pull/ID/head:BRANCHNAME`でローカルにプルリクエストを落とせるので、手元で確認したい人は左記を実行する。
詳しくは[こちら](https://qiita.com/tarr1124/items/d807887418671adbc46f)
