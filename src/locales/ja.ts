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
        name: "プログラミング言語",
        items: ["Ruby", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"]
      },
      {
        name: "フレームワーク・ライブラリ",
        items: ["Ruby on Rails", "React", "Vue.js", "Next.js", "Remix"]
      },
      {
        name: "データベース",
        items: ["MySQL", "PostgreSQL", "Redis"]
      },
      {
        name: "インフラ・ツール",
        items: ["AWS", "Docker", "Git", "GitHub", "Heroku"]
      },
      {
        name: "その他",
        items: ["Shopify", "Backlog", "Notion", "Slack", "Gather"]
      }
    ]
  },
  experience: {
    title: "職務経歴",
    list: [
      {
        position: "フルスタックデベロッパー",
        company: "株式会社WYRD",
        period: "2023年6月 - 現在",
        location: "東京都",
        responsibilities: [
          "SaaS（物流DX）アプリケーションのバックエンド開発（Ruby on Rails）",
          "フロントエンド開発（Vue.js）を担当し、ユーザーインターフェースを構築",
          "教育サイトのCakePHPからReact・Railsへの大規模リファクタリング",
          "基幹システムとのAPI連携設計・実装",
          "ECサイトの運用・保守及び拡張アプリケーション開発"
        ]
      },
      {
        position: "プログラミング学習生",
        company: "RUNTEQ",
        period: "2022年8月 - 2023年5月",
        location: "オンライン",
        responsibilities: [
          "Ruby on Railsを使用したWebアプリケーション開発の学習",
          "チーム開発でのGitワークフローの習得",
          "AWSを使用したインフラ構築・デプロイの実践",
          "ポートフォリオアプリケーションの企画・開発・運用"
        ]
      }
    ]
  },
  projects: {
    title: "プロジェクト",
    list: [
      {
        name: "物流DXプラットフォーム",
        period: "2024年1月 - 現在",
        technologies: ["Ruby on Rails", "Vue.js", "MySQL", "AWS"],
        description: "物流業界向けのデジタルトランスフォーメーションを支援するSaaSプラットフォームの開発。配送管理、在庫管理、分析機能を提供。",
        achievements: [
          "バックエンドAPIの設計・実装により、処理速度を30%向上",
          "Vue.jsによるレスポンシブなフロントエンド構築",
          "リアルタイム配送追跡機能の実装"
        ]
      },
      {
        name: "教育プラットフォーム改修",
        period: "2023年6月 - 2023年10月",
        technologies: ["React", "Ruby on Rails", "PostgreSQL"],
        description: "既存のCakePHPベースの教育サイトをモダンな技術スタックに移行。ユーザビリティとパフォーマンスの大幅改善を実現。",
        achievements: [
          "フロントエンド完全リニューアルによりUX向上",
          "API設計によりフロントエンド・バックエンドの疎結合化",
          "基幹システムとの安定したAPI連携を実現"
        ]
      },
      {
        name: "ポートフォリオWebアプリ",
        period: "2022年8月 - 2023年5月",
        technologies: ["Ruby on Rails", "MySQL", "AWS S3", "Heroku"],
        description: "個人開発として制作したWebアプリケーション。RUNTEQ在学中に学習した技術を総動員して開発。",
        achievements: [
          "ユーザー認証・認可機能の実装",
          "画像アップロード機能（AWS S3連携）",
          "レスポンシブデザインの実装"
        ]
      }
    ]
  },
  education: {
    title: "学歴・資格",
    degrees: [
      {
        degree: "理工学部 情報工学科",
        institution: "名城大学",
        period: "2010年4月 - 2014年3月",
        location: "愛知県"
      }
    ],
    certifications: [
      {
        name: "Ruby技術者認定試験 Gold",
        issuer: "Ruby Association",
        date: "2023年"
      },
      {
        name: "基本情報技術者試験 (FE)",
        issuer: "IPA 情報処理推進機構",
        date: "2022年"
      },
      {
        name: "応用情報技術者試験 (AP)",
        issuer: "IPA 情報処理推進機構",
        date: "2023年"
      }
    ]
  },
  publications: {
    title: "技術記事・発表",
    list: [
      {
        title: "Ruby on RailsでのAPI設計ベストプラクティス",
        type: "技術ブログ",
        date: "2024年3月",
        url: "https://example.com/article1",
        description: "RESTful APIの設計原則から、Rails APIモードでの実装方法、バージョニング戦略まで、実践的なAPI設計について解説。"
      },
      {
        title: "Vue.js 3 Composition APIを使った状態管理",
        type: "技術記事",
        date: "2024年1月",
        url: "https://example.com/article2",
        description: "Vue.js 3のComposition APIを活用した効率的な状態管理手法について、実際のプロジェクトでの経験を元に紹介。"
      },
      {
        title: "モダンフロントエンド開発におけるパフォーマンス最適化",
        type: "社内勉強会",
        date: "2023年12月",
        description: "React・Vue.jsアプリケーションのパフォーマンス改善手法について、バンドルサイズ最適化からレンダリング最適化まで幅広く発表。"
      }
    ]
  }
};
