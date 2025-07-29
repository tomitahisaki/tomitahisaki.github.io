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
        name: "物流DX SaaS開発 | 株式会社WYRD (2024/01 - 現在)",
        items: [
          "SaaS（物流DX）アプリケーションのバックエンド(Rails),フロントエンド開発(Vue, React)",
          "一括登録・更新機能の新規開発・既存拡張,既存機能拡張,パフォーマンス改善",
          "CSVインポート機能の新規開発・既存機能改善",
          "外部APIの新規開発・既存APIの改善",
          "法律改正に伴う新規開発",
        ]
      },
      {
        name: "ECサイト運用・保守・拡張 | 株式会社WYRD (2023/10 - 現在)",
        items: [
          "ECサイト(Shopify)の運用・保守",
          "Slack連携, Remixカスタムアプリの開発(開発のみ)",
        ]
      },
      {
        name: "教育プラットフォーム刷新 | 株式会社WYRD (2023/06 - 2023/10)",
        items: [
          "教育サイトのCakePHPからReact・Railsへリプレイス",
          "メール・問い合わせの基幹システムとの連携APIの実装",
          "CMSの設計・実装",
        ]
      },
      {
        name: "Ruby on Rails学習・ポートフォリオ開発 | RUNTEQ (2022/08 - 2023/05)",
        items: [
          "Ruby on Railsを使用したアプリケーション開発",
          "ポートフォリオWebアプリ開発(使用技術：GoogleMaps API, Scraping, etc)",
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
          "名城大学 理工学部 環境創造学科 （2011/04 - 2015/03）",
        ]
      },
      {
        name: "資格・認定",
        items: [
          "Ruby技術者認定試験 Gold - Ruby Association (2023/09)",
          "基本情報技術者試験 (FE) - IPA 情報処理推進機構 (2024/01)",
          "応用情報技術者試験 (AP) - IPA 情報処理推進機構 (2024/07)",
          "TOIEC Listening & Reading 760点 (2024/07)",
        ]
      }
    ]
  },
  publications: {
    title: "技術活動・個人開発",
    categories: [
      {
        name: "Hisakeyのブログ",
        url: "https://hisakit.hatenablog.com/",
        items: [
          {
            title: "「はじめてのAST」〜parserとRubocopで構文木を学ぶ〜",
            url: "https://hisakit.hatenablog.com/entry/2025/07/07/182625"
          },
          {
            title: "wrap_parameters というRails機能を知らずに、フロントエンドと異なるインターフェイスでも動いてしまった話",
            url: "https://hisakit.hatenablog.com/entry/2025/06/08/150641"
          }
        ]
      },
      {
        name: "コミュニティ活動(kashiwarb)",
        url: "https://kashiwarb.connpass.com/",
        items: [
          {
            title: "月1回の勉強会の開催(振り返り記事)",
            url: "https://hisakit.hatenablog.com/entry/2025/07/26/142523"
          }
        ]
      },
      {
        name: "個人開発",
        items: [
          {
            title: "IoT温湿度管理システム(開発中) - Raspberry Piとセンサーを使った温湿度管理システム（Python, Golang, React）",
            url: "https://github.com/tomitahisaki/device-platform"
          },
          {
            title: "Slack blog Reminder Bot - Slackでのブログ更新をリマインドするボット",
            url: "https://github.com/tomitahisaki/blog_slack_reminder_template"
          }
        ]
      }
    ]
  }
};
