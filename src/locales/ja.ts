import type { ResumeData } from '../types/resume';

export const jaData: ResumeData = {
  title: "職務経歴書",
  profile: {
    title: "プロフィール",
    basicInfo: {
      title: "基本情報",
      name: "氏名: 冨田 久樹",
      age: "年齢: 32歳(1992/02/02)",
      location: "住所: 千葉県 柏市",
      email: "e-mail: tomita@wyrd.co.jp",
      education: "最終学歴: 名城大学 理工学部",
      certifications: "資格: RubyGold, FE, AP"
    },
    selfIntroduction: {
      title: "自己PR",
      content: "Ruby on Railsを中心にWebアプリケーションの開発を行っています。\nフロントエンドも経験があり、Vue.js, React, TypeScriptなどを使った開発も行っています。\n今後は、フロントエンドのスキルをさらに深め、UI/UXにも興味があります。"
    }
  },
  workExperience: {
    title: "職務経歴",
    skills: {
      title: "スキル",
      programmingLanguages: {
        title: "プログラミング言語",
        content: "Ruby, JavaScript, TypeScript\nReact, Vue.js"
      },
      frameworks: {
        title: "フレームワーク/技術",
        content: "Ruby on Rails(Ruby), Next.js(React), Remix(React)\nMySQL, PostgreSQL"
      },
      others: {
        title: "その他",
        content: "Git, GitHub, Docker, AWS, Backlog, Notion, Slack, Gather, Shopify"
      }
    },
    projects: {
      title: "案件",
      list: [
        {
          title: "SaaS(物流DX)アプリの開発",
          period: "期間: 2024/01 ~ 現在",
          industry: "業種: 物流",
          responsibilities: "業務内容:",
          details: "Ruby on Railsを用いたバックエンド開発\nVue.jsを用いたフロントエンド開発"
        },
        {
          title: "自社サイトの運用・保守",
          period: "期間: 2023/10 ~ 2023/12",
          industry: "業種: EC",
          responsibilities: "業務内容:",
          details: "ECサイト運用・保守\n拡張アプリ開発"
        },
        {
          title: "教育サイトの改修・開発",
          period: "期間: 2023/06/ ~ 2023/10",
          industry: "業種: 教育",
          responsibilities: "業務内容:",
          details: "CakePHPからフロントサイド(React)、サーバーサイド(Rails)へ改修\n基幹システムへのAPI連携"
        },
        {
          title: "プログラミング学習(RUNTEQ)",
          period: "期間: 2022/08 ~ 2023/05",
          industry: "アプリ制作",
          responsibilities: "",
          details: "使用技術: Ruby on Rails, MySQL, AWS S3, Heroku"
        }
      ]
    }
  }
};
