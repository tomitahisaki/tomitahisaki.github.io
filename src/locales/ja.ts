import type { ResumeData } from '../types/resume';

export const jaData: ResumeData = {
  header: {
    name: "冨田 久樹",
    title: "ウェブデベロッパー",
    email: "alltimelow2011@gmail.com",
    linkedin: "https://www.linkedin.com/in/hisaki-tomita-200750287/",
    github: "https://github.com/tomitahisaki"
  },
  summary: {
    title: "概要",
    content: "Webアプリケーション開発を中心に、バックエンド開発・DB設計・API設計に従事。Ruby on Rails を用いた業務システム開発経験が多く、学習塾向け会員サイトのリプレイスや基幹システム連携API開発、物流業界向け業務システム開発、ECサイト運用・保守など、複数のプロダクト開発に携わる。React / TypeScript を利用したフロントエンド開発経験もあり、フルスタックに対応可能。「できない理由より、やれる方法を考える」を大切にし、ユーザーや運用担当者がより良い体験を得られるよう、改善活動を継続している。不明瞭な仕様については積極的に相談・整理を行い、開発手戻りを減らしながら開発を進めることを意識している。また、タスク分割や設計にも主体的に関わり、レビューしやすい適切な粒度でのプルリクエスト作成を心がけている。現在は設計・CSについて学習・開発を進めており、業務外では技術ブログ執筆や Raspberry Pi を利用した個人開発など、継続的な学習にも取り組んでいる。",
  },
  skills: {
    title: "スキル",
    categories: [
      {
        name: "強み",
        items: [
          {
            title: "バックエンド開発",
            details: [
              "Ruby on Rails を用いた業務システム開発",
              "API 設計・外部システム連携",
              "バッチ処理開発・運用保守"
            ]
          },
          {
            title: "DB設計・改善",
            details: [
              "MySQL を用いたDB設計",
              "クエリ最適化",
              "N+1問題などのパフォーマンス改善"
            ]
          },
          {
            title: "保守・改善",
            details: [
              "リファクタリング",
              "責務分離による保守性改善",
              "仕様整理・レビュー効率化"
            ]
          },
          {
            title: "フロントエンド",
            details: [
              "React / Vue.js / TypeScript",
              "フルスタックでの開発対応"
            ]
          }
        ]
      },
      {
        name: "技術スタック",
        items: [
          "バックエンド：Ruby on Rails, Python, Golang",
          "フロントエンド：React, Vue.js, TypeScript",
          "データベース：MySQL",
          "インフラ・ツール：Docker, GitHub, GitHub Actions, Slack, Figma",
          "開発手法：GitHub Flow, アジャイル開発, スクラム"
        ]
      }
    ]
  },
  projects: {
    title: "職務経歴",
    labels: {
      technologies: "使用技術",
      responsibilities: "担当業務",
      achievements: "実績"
    },
    experiences: [
      {
        company: "株式会社WYRD",
        position: "Webエンジニア",
        period: "2023/06 - 2026/05",
        overview: "物流DX SaaS、教育プラットフォーム、ECサイト運用など、複数プロダクトの開発・保守に従事。",
        technologies: [
          "Ruby on Rails",
          "React",
          "Vue.js",
          "Shopify",
          "Remix",
          "MySQL",
          "Docker"
        ],
        responsibilities: [
          "業務システムの機能開発・保守",
          "外部API連携",
          "パフォーマンス改善",
          "Shopify運用・機能拡張",
          "QA",
        ],
        achievements: [
          "CSV一括登録・更新機能の設計・開発",
          "法改正対応機能の設計・開発",
          "編集履歴機能の設計・開発",
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
