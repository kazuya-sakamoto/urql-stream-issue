# urql-stream-issue

Expo/React Native 環境での urql のストリームディレクティブ使用時のバグ再現リポジトリ

## 環境

- Expo SDK: 52.0.31
- React Native: 0.76.7
- urql: latest
- @urql/exchange-context: latest

## セットアップ

```bash
npm install
```

## 実行方法

```bash
npm run android  # Androidエミュレータで実行
```

## バグの再現手順

1. アプリを起動
2. "Execute Query" ボタンを押して GraphQL クエリを実行
3. 複数回ボタンを押すことで、クエリが正常に再実行されることを確認

## 期待される動作

- GraphQL クエリが正常に実行され、結果が表示される
- ボタンを押すたびに新しいリクエストが実行される

## 実際の動作

- 通常のクエリは正常に動作
- （stream ディレクティブ追加後にバグが再現される予定）
