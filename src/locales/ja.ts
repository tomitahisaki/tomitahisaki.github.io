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
    content: "「できない理由よりやれる方法を考えよう」を座右の銘にして、ポジティブに行動することを心がけています。問題意識から解決するための手段を考えることが得意で、ユーザー（顧客・従業員）がより良い体験を得られるように改善活動を続けてきました。\n学習塾向けの会員サイトリプレイスや基幹システム連携APIの開発、物流業界向けの業務システムの機能開発、ECサイトの運用・保守など、複数のプロダクトに携わってきました。開発の手戻りが少なくなるように、不明瞭な仕様については都度マネージャー等に相談し、仕様を定めた上で開発することでロスを減らしています。\nタスク作成や設計に携わりたい旨を相談し、適切な粒度になるようにタスク作成や設計などに携わる機会を作りました。プルリクエストを適切な粒度にすることでレビュワーに負担がかからず、すぐにレビューできるように心がけています。\n基礎技術の底上げをするために、技術ブログの執筆や資格取得などを業務外で行っています。また、LAMP環境の構築やRaspberry Piを使った工作なども行い、継続的な学習と技術向上に努めています。",
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
        items: "物流業界向けSaaSアプリケーションの開発に携わり、バックエンドはRuby on Rails、フロントエンドはVueおよびReactを用いて実装を行っています。具体的には、一括登録・更新機能やCSVインポート機能の新規開発・既存拡張を担当し、既存機能のパフォーマンス改善にも取り組みました。また、外部APIとの新規連携や既存APIの仕様改善を行い、加えて、法改正対応として新規機能開発も担当しています。"
       },
      {
        name: "ECサイト運用・保守・拡張 | 株式会社WYRD (2023/10 - 現在)",
        items: "Shopifyを用いたECサイトの運用・保守を担当し、日常的な保守作業に加えて機能拡張にも取り組んでいます。具体的には、Slackとの連携やRemixを用いたカスタムアプリケーションの開発を行い、運用性と利便性の向上を目指しました。なお、カスタムアプリケーションについては開発フェーズまで進めたものの、最終的には本番運用には至りませんでした。"
      },
      {
        name: "教育プラットフォーム刷新 | 株式会社WYRD (2023/06 - 2023/10)",
        items: "既存の教育プラットフォームをCakePHPからReact・Rails構成にリプレイスするプロジェクトに参画しました。メール送信や問い合わせ管理などの基幹システムとの連携APIの実装に加え、CMSの設計・開発を担当し、柔軟なコンテンツ管理を可能にしました。"
      },
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
