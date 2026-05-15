import { AboutData } from '../types/about';

export const jaAboutData: AboutData = {
  hero: {
    name: '冨田 久樹',
    description: [
      '旅行やローカル文化、',
      '自然や静かな場所が好きです。',
      '',
      'いろいろな土地や仕事を経験しながら、',
      '今はシンプルなものづくりに興味を持っています。',
    ],
  },
  about: {
    title: 'About',
    content: [
      '旅行やローカル文化、自然や静かな場所が好きです。',
      'いろいろな土地や仕事を経験しながら、今はシンプルなものづくりに興味を持っています。',
    ],
  },
  journey: {
    title: 'Journey',
    timeline: [
      {
        period: '2015 - 2019',
        title: '生産技術',
        description: [
          '工場で働いていました。',
          '生産性向上やコストダウン、不良改善、機械新設・リプレイスなどを担当。',
          '現場のヒアリングから改善提案まで、ものづくりの基礎を学びました。',
        ],
      },
      {
        period: '2019 - 2020',
        title: 'キャリアブレイク（ワーキングホリデー）',
        description: [
          'オーストラリアで過ごしました。',
          'ブリスベン、タスマニア、メルボルン、シドニーなどさまざまな都市を巡りました。',
          'ファームジョブ、ミートファクトリー、配送業、清掃員などの仕事をしながら、キャンプ生活をして旅をしていました。',
          'さまざまな国の人たちと出会い、異なる文化に触れる日々でした。',
        ],
      },
      {
        period: '2021 - 2022',
        title: '米農家',
        description: [
          '60haの水稲栽培を少ない従業員で管理し、スマート農業の導入やJGAP認証の取得に携わりました。',
          '冬場は、きこりとして働いていました。',
          '自然の中で働く時間が増え、地方やローカルな暮らしにより興味を持つようになりました。',
        ],
      },
      {
        period: '2023 -',
        title: 'エンジニア',
        description: [
          'プログラミングを学び始め、現在は個人開発やものづくりを楽しんでいます。',
        ],
      },
    ],
  },
  travel: {
    title: 'Travel',
    content: [
      'これまでに海外20カ国ほどを訪れました。',
      '観光地を巡るだけではなく、その土地のスーパーや市場、カフェやローカルな街並みを見るのが好きです。',
      '日本国内も地方を中心に旅をしていて、ほぼ一周しました。',
      '特に自然の多い地域や、ゆっくり時間が流れる場所に惹かれます。',
    ],
  },
  interests: {
    title: 'Interests',
    items: [
      {
        title: '旅行',
        description: 'これまでに20カ国以上を訪れました。ローカル文化や市場を見るのが好きです。',
      },
      {
        title: 'カフェ',
        description: '静かなカフェで過ごす時間が好きです。朝のコーヒーは欠かせません。',
      },
      {
        title: '音楽',
        description: 'ギターを弾いたり、洋楽を聴くのが好きです。',
      },
      {
        title: '読書',
        description: '雨の日の読書が特に好きです。',
      },
      {
        title: '自然',
        description: '山の景色やローカル線、古い街並みに惹かれます。朝の散歩が日課です。',
      },
      {
        title: '写真',
        description: '旅先や日常の風景を撮っています。',
      },
      {
        title: 'ものづくり',
        description: 'Raspberry PiやシンプルなUIデザインに興味があります。',
      },
    ],
  },
  currently: {
    title: 'Currently',
    items: [
      {
        title: 'Go の勉強',
        description: 'バックエンド開発に興味があり、Goを学んでいます。',
      },
      {
        title: '小さなアプリ作り',
        description: 'シンプルで使いやすいツールやアプリを作っています。',
      },
      {
        title: '文章を書くこと',
        description: '考えや経験を言葉にして残すことを楽しんでいます。',
      },
      {
        title: '地方を巡ること',
        description: 'ローカルな暮らしや文化に触れる旅を続けています。',
      },
    ],
  },
  links: {
    title: 'Links',
    items: [
      {
        label: 'GitHub',
        url: 'https://github.com/tomitahisaki',
      },
      {
        label: 'Resume',
        url: '/resume',
      },
      {
        label: 'Blog',
        url: 'https://qiita.com/tomitahisaki',
      },
      {
        label: 'Contact',
        url: 'mailto:your-email@example.com',
      },
    ],
  },
};
