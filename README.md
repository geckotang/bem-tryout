# bem toolsを試してみた

[BEM Advent Calendar 2013][0]の2日目の記事で使用したしたサンプルです。

サンプルプロジェクトを引っ張ってきます。

```zsh
$ git clone git@github.com:geckotang/bem-tryout.git bem-tryout
$ cd bem-tryout
$ npm install
$ ./node_modules/bem/bin/bem make
```

.gitのフォルダを消して、新しくgit環境下に置きます

```zsh
$ rm -rf .git
$ git init
```

サーバーを立ち上げます。[http://localhost:8080/][5]で確認することが可能です。

```zsh
$ ./node_modules/bem/bin/bem server
```

[0]: http://www.adventar.org/calendars/61
