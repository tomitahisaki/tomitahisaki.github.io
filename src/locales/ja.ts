import type { ResumeData } from '../types/resume';

export const jaData: ResumeData = {
  header: {
    name: "冨田 久樹",
    title: "ウェブデベロッパー",
    email: "alltimelow2011@gmail.com",
    linkedin: "https://linkedin.com/in/hisaki-tomita",
    github: "https://github.com/tomitahisaki"
  },
  summary: {
    title: "概要",
    content: "学習塾向けの会員サイトリプレイスや基幹システム連携APIの開発、物流業界向けの業務システムの機能開発、ECサイトの運用・保守など、複数のプロダクトに携わってきました。要件が曖昧な部分についてはマネージャーと仕様を擦り合わせ、認識の齟齬や手戻りを防ぐことで、開発効率の向上に貢献しました。物流業界の業務支援システム開発では、Rails・Vue.js・React.js を用いた新規機能や外部API連携機能を実装。プルリクエストの粒度を調整し、タスクを適切に分割することで、コードレビューの負担を軽減し、開発サイクルの円滑化に寄与しました。また、ECサイト（Shopifyベース）の運用・改善にも携わっており、複数のプロダクトでバックエンド・フロントエンドの両面から価値提供しています。業務外では、技術ブログ執筆や資格取得、Raspberry Pi を用いた電子工作などに取り組み、基礎技術の底上げにも継続的に努めています。",
  },
  skills: {
    title: "スキル",
    categories: [
      {
        name: "実務で使用した主な技術",
        items: [
          "言語・フレームワーク：Ruby（Rails）、JavaScript（React.js, Vue.js）",
          "データベース：MySQL",
          "環境・ツール：Docker、GitHub、GitHub Actions、Slack、Figma",
          "スタイル：GitHub Flow、アジャイル開発"
        ]
      },
      {
        name: "学習・個人開発で使用中の技術",
        items: [
          "Python, Golang, TypeScript",
          "Raspberry Piを使ったIoT工作",
          "技術ブログ執筆、資格取得のための学習（Web API設計、CS基礎など）"
        ]
      }
    ]
  },
  projects: {
    title: "職務経歴・プロジェクト",
    categories: [
      {
        name: "物流DX SaaS開発 | 株式会社WYRD (2023年6月 - 現在)",
        items: [
          "SaaS（物流DX）アプリケーションのバックエンド開発（Ruby on Rails）",
          "フロントエンド開発（Vue.js）を担当し、ユーザーインターフェースを構築",
          "バックエンドAPI設計・実装により処理速度を30%向上",
          "Vue.jsを使用したレスポンシブフロントエンド構築",
          "リアルタイム配送追跡機能の実装"
        ]
      },
      {
        name: "教育プラットフォーム刷新 | 株式会社WYRD (2023年6月 - 2023年10月)",
        items: [
          "教育サイトのCakePHPからReact・Railsへの大規模リファクタリング",
          "フロントエンドの完全刷新によりUXを向上",
          "API設計によりフロントエンドとバックエンドの疎結合を実現",
          "基幹システムとの安定したAPI連携を確立",
          "基幹システムとのAPI連携設計・実装"
        ]
      },
      {
        name: "ECサイト運用・保守・拡張 | 株式会社WYRD (2023年6月 - 現在)",
        items: [
          "ECサイトの運用・保守及び拡張アプリケーション開発",
          "新機能実装と機能改善",
          "パフォーマンス最適化とバグ修正",
          "拡張機能のためのカスタムアプリ開発"
        ]
      },
      {
        name: "Ruby on Rails学習・ポートフォリオ開発 | RUNTEQ (2022年8月 - 2023年5月)",
        items: [
          "Ruby on Railsを使用したWebアプリケーション開発の学習",
          "チーム開発でのGitワークフローの習得",
          "AWSを使用したインフラ構築・デプロイの実践",
          "ポートフォリオアプリケーションの企画・開発・運用",
          "ユーザー認証・認可機能の実装",
          "画像アップロード機能（AWS S3連携）",
          "レスポンシブデザインの実装"
        ]
      }
    ]
  },
  education: {
    title: "学歴・資格",
    categories: [
      {
        name: "学歴",
        items: [
          "理工学部 情報工学科、名城大学 (2010年4月 - 2014年3月、愛知県)"
        ]
      },
      {
        name: "資格・認定",
        items: [
          "Ruby技術者認定試験 Gold - Ruby Association (2023年)",
          "基本情報技術者試験 (FE) - IPA 情報処理推進機構 (2022年)",
          "応用情報技術者試験 (AP) - IPA 情報処理推進機構 (2023年)"
        ]
      }
    ]
  },
  publications: {
    title: "技術活動・個人開発",
    categories: [
      {
        name: "ブログ紹介",
        items: [
          "技術ブログ「フルスタック開発者の備忘録」- Ruby on Rails、Vue.js、React.jsを中心とした技術記事を定期投稿、月間1万PV達成",
          "Qiita技術記事投稿 - Ruby on Rails、JavaScript関連の記事を30本以上投稿、総いいね数500以上獲得"
        ]
      },
      {
        name: "コミュニティ運営",
        items: [
          "地域プログラミングコミュニティ「Tech Meetup Nagoya」運営 - 50名規模のイベントを月1回定期開催",
          "社内技術勉強会の企画・運営 - 月2回の勉強会でチーム全体のスキル向上に寄与"
        ]
      },
      {
        name: "個人開発",
        items: [
          "IoT気象観測システム - Raspberry Piとセンサーを使った気象データ収集・リアルタイム可視化システム（Python、Flask、SQLite）",
          "家計簿管理アプリ「MoneyTracker」- React Native製、レシート撮影による自動入力機能付き",
          "タスク管理ツール「TaskFlow」- Vue.js + Rails APIで構築、ドラッグ&ドロップ操作とチーム協働機能を実装"
        ]
      }
    ]
  }
};
