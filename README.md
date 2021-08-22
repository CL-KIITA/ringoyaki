# ringoyaki

ringoyaki（りんご焼き）は、SCJ共通りんご文の翻訳を手軽に表示させることができるツールです。

![](images/screenshot.png)

ringoyakiはSCJ共通りんご文と同じく開発途中です。
あらかじめご了承ください。

[デモを確認する](https://CL-KIITA.github.io/ringoyaki/)

## 何ができるの？

- SCJ共通りんご文を翻訳したものがブラウザに美しく描画されます。
- 画一されたデザインのため、他の言語で翻訳されたりんご文と見比べやすいです。
- 編集しながら、出来具合を確認することができます。
- 翻訳されていない部分は描画されないため、未完成でも見やすいです。
- 手軽にそのままの状態でWebページとしてインターネット上に公開することができます。

## デモを試してみる

1. `git clone https://github.com/CL-KIITA/ringoyaki` でリポジトリをクローンします。
2. `cd ringoyaki` でリポジトリ内に移動して、
3. `npm install` でパッケージの復元をします。
4. `npm run start` でコンパイルします。ブラウザが表示されれば成功です。

## 実際に導入する

実際に導入するときは、GitHub Pagesでウェブサイトをインターネット上に公開することを見据えて、GitHubアカウントを作っておきましょう。

1. https://github.com/CL-KIITA/ringoyaki へ行きます。
2. Forkボタンを押して、フォークしたいアカウントを選択し、フォークします。
3. リポジトリ名を適宜変更します。
4. `git clone https://github.com/(username)/ringoyaki`をしてフォークしたあなたのリポジトリをクローンします。`(username)`にはユーザ名を入力してください。
5. `cd ringoyaki` でリポジトリ内に移動して、
6. `npm install` でパッケージの復元をします。
7. `npm run start` でコンパイルします。ブラウザが表示されればコンパイルが成功しました。
8. この状態で`./src/data/translation.json`をSCJ共通りんご文のドキュメントを見ながら訳していきます。
   - `translation`のところに`id`に対応した翻訳文を埋めていきます。
   - ファイルを保存するたびに、webpackの機能で自動的にリビルトします。保存して、ウェブページが更新されていくのを確認しましょう。
   - `translation`が空文字列の場合は表示されないため、未翻訳の部分はそのまにしておきましょう。
9. 終了する際はターミナルに<kbd>Ctrl</kbd> + <kbd>C</kbd>を入力します。

## GitHub PagesでWebサイトを公開する

1. `./package.json`の`homepage`の14行目くらいにある`https://CL-KIITA.github.io/ringoyaki`を`https://(username).github.io/ringoyaki`に変更します。
2. `npm run deploy`をします。
3. パスワードが聞かれたり認証を求められたりしたら適宜対応します。
4. `https://(username).github.io/ringoyaki`にアクセスして、公開されていたら成功です。やったね！ちなみに、この処理には15分ほどかかるので、コーヒーでも飲みながら気長に待ちましょう。

## Dockerを使って導入する

上級者向けです。（いまいちDockerに慣れていないので、もし改善できるところがあったらプルリクください♡）

以下の通りにコマンドを打ってください。

```sh
$ git clone https://github.com/CL-KIITA/ringoyaki
$ cd ringoyaki
$ docker-compose build
$ docker-compose up
```
