import { Lang } from '../types'

export type Bilingual = { ja: string; zh: string }

export const content = {
  nav: {
    company: { ja: '会社概要', zh: '公司簡介' },
    services: { ja: 'サービス', zh: '服務內容' },
    why: { ja: '選ばれる理由', zh: '我們的優勢' },
    contact: { ja: 'お問い合わせ', zh: '聯絡我們' },
  },
  hero: {
    title: {
      ja: '日本と台湾をつなぐビジネスパートナー',
      zh: '連結日本與台灣的商務合作夥伴',
    },
    subtitle: {
      ja: '機械部品・食品・イベント・通訳まで、越境ビジネスをトータルでサポートします。',
      zh: '從機械零件、食品貿易到活動企劃與口筆譯，提供一站式跨境商務解決方案。',
    },
    cta: { ja: 'お問い合わせはこちら', zh: '洽談合作' },
  },
  services: {
    title: { ja: '事業内容', zh: '主要服務' },
    items: [
      {
        key: 'trade',
        label: { ja: '貿易・輸出入サポート', zh: '貿易與進出口支援' },
        desc: {
          ja: '機械および機械部品、食品関連商品の輸出入および代行調達を行います。',
          zh: '協助機械及其零件、食品相關商品之進出口與代採購。',
        },
      },
      {
        key: 'brand',
        label: { ja: '台湾食品ブランド総代理', zh: '台灣食品品牌日本總代理' },
        desc: {
          ja: '台湾食品ブランド「烏金旺」の日本総代理店として販売・プロモーションを展開。',
          zh: '作為台灣食品品牌「烏金旺」日本總代理，負責品牌推廣與銷售。',
        },
      },
      {
        key: 'event',
        label: { ja: 'イベント企画・運営', zh: '活動企劃與執行' },
        desc: {
          ja: 'プロモーションイベント、展示会、企業向け交流イベントを企画・運営します。',
          zh: '規劃並執行推廣活動、展覽會與企業交流活動。',
        },
      },
      {
        key: 'interpret',
        label: { ja: '通訳・翻訳（日中・日台）', zh: '口筆譯（日中・日台）' },
        desc: {
          ja: 'ビジネス交渉や契約書、商品資料などの通訳・翻訳に対応します。',
          zh: '支援商務洽談、合約與商品資料等之專業口筆譯服務。',
        },
      },
    ],
  },
  company: {
    title: { ja: '会社概要', zh: '公司資訊' },
    rows: [
      { label: { ja: '会社名', zh: '公司名稱' }, value: { ja: '株式会社tsn', zh: '株式会社tsn' } },
      {
        label: { ja: '所在地', zh: '地址' },
        value: {
          ja: '593-8316 大阪府堺市西区山田4-2056-1',
          zh: '593-8316 大阪府堺市西區山田4-2056-1',
        },
      },
      { label: { ja: 'TEL', zh: '電話' }, value: { ja: '072-284-9617', zh: '072-284-9617' } },
      { label: { ja: 'FAX', zh: '傳真' }, value: { ja: '072-284-9618', zh: '072-284-9618' } },
      { label: { ja: '代表者', zh: '代表人' }, value: { ja: '蔡 欣珊', zh: '蔡 欣珊' } },
      { label: { ja: '資本金', zh: '資本額' }, value: { ja: '500万円', zh: '500萬日圓' } },
      { label: { ja: '設立日', zh: '成立日期' }, value: { ja: '2023年3月23日', zh: '2023年3月23日' } },
      {
        label: { ja: 'WEBページ', zh: '官方網站' },
        value: { ja: 'https://www.twtsn.co.jp', zh: 'https://www.twtsn.co.jp' },
      },
    ],
  },
  why: {
    title: { ja: '株式会社tsnが選ばれる理由', zh: '為何選擇tsn' },
    bullets: [
      {
        ja: '日本・台湾双方のビジネス文化と商習慣を理解したきめ細かな対応。',
        zh: '深刻理解日本與台灣商業文化與交易習慣，提供細緻服務。',
      },
      {
        ja: '貿易・イベント・通訳を一元化し、スムーズなプロジェクト進行を実現。',
        zh: '整合貿易、活動與口筆譯，一站式支援專案推進。',
      },
      {
        ja: '中小企業から大企業まで、規模に合わせた柔軟なソリューションを提供。',
        zh: '從中小企業到大型企業，依據需求提供彈性解決方案。',
      },
    ],
  },
  contact: {
    title: { ja: 'お問い合わせ', zh: '聯絡我們' },
    text: {
      ja: '具体的なご相談やお見積りのご依頼は、下記メールまたはお電話にてお問い合わせください。',
      zh: '如需進一步洽談或索取報價，歡迎透過以下方式與我們聯繫。',
    },
    emailLabel: { ja: 'メール', zh: '電子郵件' },
    phoneLabel: { ja: '電話', zh: '電話' },
    email: 'info@twtsn.co.jp',
    phone: '072-284-9617',
  },
} as const

export function t(obj: Bilingual, lang: Lang) {
  return lang === Lang.JP ? obj.ja : obj.zh
}

