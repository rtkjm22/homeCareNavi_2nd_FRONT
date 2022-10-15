# PRUMアカデミー

<br />

## ホームケアナビ作成用PJ(FRONT)

<br />

### 環境構築
1. FRONTリポジトリをクローンする　`git clone https://github.com/rtkjm22/homeCareNavi_2nd_FRONT.git`
2. クローンしたFRONTリポジトリに移動する　`cd homeCareNavi_2nd_FRONT`
3. 本番環境をいじらないよう、すぐに開発環境のブランチに移動する　`git checkout develop`
4. パッケージをインストールする　`npm install`
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

<br />

### 表示画面のスクリーンショット比較テスト（ビジュアルリグレッションテスト）
#### 概要
現在起動しているwebページのスクリーンショットを取得します。その際前回撮って保存してある画像と差異があれば差分ページが表示されます。これにより、意図しないUIの崩壊を防ぐことができます。使用するパッケージは[Playwright](https://playwright.dev/docs/test-snapshots)です。


#### 運用方針
テストを強制するものではないし、自動テストを回したりといったこともしません。あくまで個人で現在の表示が正しいのか確認するものになります。


#### 設定
1. `npm i`でplaywrightをインストール
2. `npx playwright install`でplaywrightで使用するものをインストール
3. `npm run dev`でnuxtを起動する
4. `npm run test_screenshot`でスクリーンショットを取得する。初回なのでエラー表示になりますが、tests/screenshot.spec.ts-snapshots内にスクリーンショットが保存されていれば成功です。次回以降は保存してある画像と現在表示されている画面と差分を比較します。


#### デスクトップ版chrome及びスマホ版safariのスクリーンショット
1. `npm run dev`でnuxtを起動する
2. `npm run test_screenshot`でスクリーンショットを取得する
3. 前回撮ったスクリーンショット（tests/screenshot.spec.ts-snapshots）と比較し、エラーになると結果ページが自動で表示される


#### デスクトップ版chromeのみのスクリーンショット（高速）
1. vscodeの拡張機能で[Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)を取得
2. /tests/screenshot.spec.tsを開く
3. vscodeの一番左にあるフラスコマークをクリック
4. 緑の矢印をクリック
![image](https://user-images.githubusercontent.com/68116815/195978354-e43c6ba4-9606-4020-9353-f1396c0eb528.png) 
5. 失敗した際の差分を見たい場合は、/playwright-report/index.htmlをブラウザにドラッグアンドドロップする


#### 全てのスクリーンショットを更新する
`npm run screenshot_update`でスクリーンショットを現在ブラウザに表示されているものに更新します


#### スクリーンショットを撮るパスの追加や変更
tests/screenshot.spec.ts内のPATHSを編集すればOKです


#### 個別のスクリーンショットを更新する
自分も調べたけど便利なやり方は分かりませんでした(´・ω・｀)。逆に誰か教えて下さい。現状は手動でやってます。

例：/client/profile/loginの画面を今回取得した画像に変えたい
![image](https://user-images.githubusercontent.com/68116815/195979556-502af30c-23ed-4761-b324-410e28c9591f.png)
のReceived（今回のスクショ）のパスをコピーする

`mv コピーした画像パス 前回の画像パス`で上書きします。今回だと以下のようになります。正直面倒ですが、コンソールのパス補完が効いてくれるためなんとかなります。

`mv /Users/hirabayashinaoki/Public/production/homeCareNavi_2nd/homeCareNavi_2nd_FRONT/test-results/screenshot-screenshot-manager-login-chromium/-manager-login-actual.png tests/screenshot.spec.ts-snapshots/-manager-login-chromium-darwin.png`

#### たまにテストが落ちる
仕様です。画像比較テストはそんなもんです。