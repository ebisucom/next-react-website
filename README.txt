# 作って学ぶ Next.js/React Webサイト構築

**ダウンロードデータ**

セットアップPDFや、本書で作成するプロジェクトデータ、使用する画像素材、インポート用のコンテンツデータなどを収録しています。詳しくは、本書を参照してください。

* [サポートサイト](https://book.mynavi.jp/supportsite/detail/9784839980177.html) 
* [書籍情報](https://ebisu.com/next-react-website/)

---

※最新の情報は著者NOTE（https://ebisu.com/note/ ） や Twitter ( https://twitter.com/ebisucom ) でも出していますので、参考にしてください。

---

## ■【セットアップPDF】setup.pdf

開発環境などを準備する方法についてまとめたPDFです。

### setup.pdfの内容

* アカウントの作成［GitHub、microCMS、Vercel、Netlify、Figma］
* 開発環境の準備［Node.js、Git、エディタ（Visual Studio Code）］
* サイトの公開と更新
* microCMSで管理するコンテンツの準備
* Figmaとデザインデータの使い方

## ■【プロジェクトデータ】

本書で作成するブログサイトのプロジェクトデータです。

ディレクトリ | 内容 
------------ | -----
blog/        | Chapter 10で完成させるプロジェクトデータです。microCMSのデータを使用します。
blog-chap6/  | Chapter 6のプロジェクトデータです。外部データは使用しません。

※プロジェクトデータをそのまま利用する場合、各ディレクトリのルートで

```
npm install
```

を実行してください。

## ■【デモ】

本書で作成するブログサイトをVercelとNetlifyにデプロイしたものです。

* https://next-react-website.vercel.app
* https://next-react-website.netlify.app

## ■【インポートデータ】

microCMS用のフィールドとコンテンツのインポートデータです。

ディレクトリ | ファイル                 | 内容
------------ | ----------------------- | ---------------------
import/      | api-blogs.json          | ブログAPIのフィールド
             | contents-blogs.csv      | ブログ記事のコンテンツ
             | api-categories.json     | カテゴリAPIのフィールド
             | contents-categories.csv | カテゴリのコンテンツ

## ■【画像データ】

ブログサイトで使用する画像データです。

ディレクトリ  | 内容 
------------- | -----
images-local/ | ローカル環境で使用する画像です。
images-post/  | microCMSで使用するアイキャッチ画像と記事本文に挿入する画像です。

## ■【Figmaのデザインデータ】

Figmaで作成したデザインデータです。

ディレクトリ | ファイル＆ディレクトリ    | 内容
------------ | ----------------------- | ---------------------------------------------
Figma/       | next-react-website.fig  | Figmaのデザインデータ
             | jpg/                    | FigmaのデザインデータをJPEG画像として出力したもの


## ■ ブログサイトのコンテンツについて

ブログサイトのコンテンツは、日本語に特化したrinna株式会社のGPT言語モデル（rinna/japanese-gpt-1b）を使用して生成した文章を編集したものです。

* [rinna/japanese-gpt-1b](https://huggingface.co/rinna/japanese-gpt-1b) ［[License](https://huggingface.co/rinna/japanese-gpt-1b#licenese)］

-----------------------------------------------

## ■ ご利用にあたって

本書に記載されている内容や本ダウンロードデータの運用によって、いかなる損害が生じても、株式会社マイナビ出版および著者は責任を負いかねますので、あらかじめご了承ください。

（c）2022 EBISUCOM / マイナビ出版
