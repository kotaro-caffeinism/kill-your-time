# Kill your time

## 目次

- [アプリ概要](#アプリ概要)
- [使用 API](#使用-api)
- [使用技術](#使用技術)
- [展望](#展望)

## アプリ概要

時間を潰すためのしょうもないアプリ。”Get An Advice”ボタンを押すとそれっぽいアドバイス(数回に一回フリとオチのあるジョーク)が表示される。"Get An Empty Phrase"ボタンを押すと特に中身のない文章が、"What Will I do?"ボタンを押すと暇を潰す手段が表示される。
　 nickname 記入欄にユニークな nickname を記入し、"Signin"ボタンを押すと nickname が Users テーブルに登録され、同時に${nickname}_itemsテーブルが作成される。上述のいずれかのボタンを押してデフォルト以外の文章を表示させた状態で➕💖ボタンを押すと、${nickname}\_items に文章が追加される。
　 nickname を記入して、固有のテーブルがすでにあれば画面下部のテーブルにお気に入り登録した文章のリストが表示される。

## 使用 API

- [ ] Officail Joke API (https://github.com/Kiki-her/official_joke_api)
- [ ] Bullshit/Buzzword Generator API (https://github.com/sameerkumar18/corporate-bs-generator-api)
- [ ] Advice Slip JSON API (https://api.adviceslip.com/#endpoint-random)
- [ ] The Bored API (https://www.boredapi.com/)

## 使用技術

- [ ] chekra
- [ ] express
- [ ] React
- [ ] postgreSQL
- [ ] Heroku
- [ ] Node.js
- [ ] http-proxy-middleware
- [ ] knex
- [ ] chai / mocha
- [ ] pg
- [ ] nodemon

## 展望
