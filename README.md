# PRUMアカデミー

<br />

## ホームケアナビ作成用PJ(FRONT)

<br />

## [API仕様定義書（OpenAPI）リンク](https://rahhi555.stoplight.io/docs/home-care-navi-second/oyf2pt1k0zz67-home-care-navi-second)

<br />


### 環境構築
1. FRONTリポジトリをクローンする　`git clone https://github.com/rtkjm22/homeCareNavi_2nd_FRONT.git`
2. クローンしたFRONTリポジトリに移動する　`cd homeCareNavi_2nd_FRONT`
3. 本番環境をいじらないよう、すぐに開発環境のブランチに移動する　`git checkout develop`
4. パッケージをインストールする　`npm install`
5. nuxt3を起動する　`npm run dev`

<br />

### モックを有効化して開発環境を起動する
API側と通信するため、本来はAPIのリポジトリをクローンして環境構築しなければなりません。しかし、モック（ダミーレスポンス）を有効にすればフロントエンドのみで開発できます。
1. モックの元となるOpenAPIファイルをダウンロードする　`npm run fetch_openapi`
2. モック有効化モードで環境構築を起動する　`npm run dev_mock`
3. モックを有効化した状態でログイン等をすると、API通信をせずにダミーのレスポンスを受け取る。注意点として、現状はどんな値を入力しても常に成功レスポンスを返します。

<br />

### OpenAPI（API定義書）から作成したフェッチ関数を使用する
現在API側はOpenAPIを用いて定義書を作成しています（[URL](https://rahhi555.stoplight.io/docs/home-care-navi-second/oyf2pt1k0zz67-home-care-navi-second)）。OpenAPIの特徴として、実態はyamlファイルであるため、リクエスト、レスポンス等の情報をいろんなエコシステムで使い回すことができます。今回は[aspida](https://github.com/aspida/aspida/tree/main/packages/aspida/docs/ja)及び[openapi2aspida](https://github.com/aspida/openapi2aspida)を用いて、形安全なフェッチ関数を作成しています。

#### 使用方法：

- 主に認証系など、キャッシュしたくない通信を行う場合
```ts
// 1. useNuxtApp()から$apiを呼び出す
const { $api } = useNuxtApp()

// 2. '/api/v1/auth/sign_in'のpostを呼び出す（例）
await $api.client.api.v1.auth.sign_in.post({ body: signInBody })

    .then((res) => {
      // 3. 成功時の処理
    })

    .catch(async (e) => {
      // 4. エラー時の処理。エラーメッセージは $api.getErrorMessage にeを渡すことで取得できる
      const message = await $api.getErrorMessage(e)
    })
```

- 主にスタッフ一覧など、キャッシュしたい場合はNuxt3の[useAsyncData](https://zenn.dev/ytr0903/articles/6acccb5fa816ee)でラップする
```ts
// 1. useNuxtApp()から$apiを呼び出す
const { $api } = useNuxtApp()

// 2. '/api/v1/manager/staffs'を呼び出す（例）
const { data, error } = useAsyncData(() => $api.client.api.v1.manager.staffs.get())

data.value // 3. 成功時の処理

const message = await $api.getErrorMessage(error.value) // 4. 失敗時の処理
```
最新のOpenAPI定義に追従する場合は以下のコマンドを打ってください
- `npm run generate_api`

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
