# 宮崎支社 WG アプリ（仮）

システム概要

Frontend：React

Backend：Ruby(3.0.2)/Rails(6.1.4)

DB：MySQL(8.0)

## 開発環境設定

1. frontend のディレクトリに移動し、node_modules を作成する

```
cd frontend
yarn install
```

2. Docker image の作成

```
docker-compose build
```

3.コンテナ起動

```
docker-compose up (-d)
```

4.MySQL 接続

```
docker-compose run backend bundle exec rails db:create
```
