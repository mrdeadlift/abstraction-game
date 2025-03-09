# 抽象化ゲーム

これは Next.js で構築された、プレイヤーの抽象化スキルに挑戦するウェブベースのゲームアプリケーションです。

## 特徴

- インタラクティブなゲームインターフェース
- リアルタイムの結果とフィードバック
- すべてのデバイスに対応したレスポンシブデザイン

## 技術スタック

- [Next.js](https://nextjs.org) - React フレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全な JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストの CSS フレームワーク
- [Geist Font](https://vercel.com/font) - モダンなフォントファミリー

## 始め方

### 前提条件

- Node.js (v18 以上)
- npm (v9 以上)

### インストール

1. リポジトリをクローンする
2. 依存関係をインストールする：

```bash
npm install
```

3. 環境変数を設定する：

ルートディレクトリに`.env.local`ファイルを作成し、以下の内容を記入してください：

```env
NEXT_PUBLIC_API_KEY=your_api_key_here
```

4. 開発サーバーを起動する：

```bash
npm run dev
```

ブラウザで[http://localhost:3000](http://localhost:3000)を開いてください。

## プロジェクト構造

```
abstraction-game/
├── public/            # 静的アセット
├── src/
│   ├── app/           # アプリケーションページ
│   │   ├── game/      # ゲームインターフェース
│   │   ├── result/    # 結果表示
│   │   ├── data.ts    # ゲームデータとロジック
│   │   └── ...        # その他のページとコンポーネント
├── tailwind.config.js # Tailwind CSS設定
└── ...                # 設定ファイル
```

## データ管理

ゲームデータとロジックは`src/app/data.ts`で管理されています。このファイルには以下が含まれています：

- ゲームの質問と回答
- スコアリングロジック
- ゲーム状態管理

## デプロイ

Next.js アプリをデプロイする最も簡単な方法は、Next.js の作成者による[Vercel プラットフォーム](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)を使用することです。

詳細については、[Next.js デプロイメントドキュメント](https://nextjs.org/docs/app/building-your-application/deploying)をご覧ください。

## 貢献

貢献は歓迎します！以下の手順に従ってください：

1. プロジェクトをフォークする
2. 機能ブランチを作成する（`git checkout -b feature/素晴らしい機能`）
3. 変更をコミットする（`git commit -m '素晴らしい機能を追加'`）
4. ブランチにプッシュする（`git push origin feature/素晴らしい機能`）
5. プルリクエストを開く

## ライセンス

MIT ライセンスの下で配布されています。詳細は`LICENSE`をご覧ください。
