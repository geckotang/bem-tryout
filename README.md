# bem toolsを試してみた

サンプルプロジェクトを引っ張ってきます。（僕のリポジトリをcloneしても同じことが出来ると思います）

```
$ git clone git://github.com/bem/project-stub.git bem-tryout
$ cd bem-tryout
$ npm install
$ ./node_modules/bem/bin/bem make
```

.gitのフォルダを消して、新しくgit環境下に置きます

```
$ rm -rf .git
$ git init
```

サーバーを立ち上げます。[http://localhost:8080/][5]で確認することが可能です。

```
$ ./node_modules/bem/bin/bem server
```
