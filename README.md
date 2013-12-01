# bem toolsを試してみた

[BEM Advent Calendar 2013][0]の[2日目の記事][3]で使用したサンプルです。

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

サーバーを立ち上げます。[http://localhost:8080/][1]でルートディレクトリを確認することが可能です。


```zsh
$ ./node_modules/bem/bin/bem server
```

index.html相当のものは [http://localhost:8080/desktop.bundles/index][2] になるようです。

[0]: http://www.adventar.org/calendars/61
[1]: http://localhost:8080
[2]: http://localhost:8080/desktop.bundles/index
[3]: http://geckotang.tumblr.com/post/68662389684/bem

