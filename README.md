# 宮崎支社WGアプリ（仮）

システム概要

Frontend：React

Backend：Ruby(3.0.2)/Rails(6.1.4)

DB：MySQL(8.0)


## 開発環境設定

1. Docker imageの作成
```
docker-compose build
```

2.コンテナ起動
```
docker-compose up (-d)
```

3.MySQL接続
```
docker-compose run backend bundle exec rails db:create
```
