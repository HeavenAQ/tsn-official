import { Month, Year, YearPastEvents } from './types'

const img0 =
    '/images/鳥取/LINE_ALBUM_2023日本鳥取県-台湾学校作品合同展_231210_1.webp'
const img1 =
    '/images/鳥取/LINE_ALBUM_2023日本鳥取県-台湾学校作品合同展_231210_2.webp'
const img2 =
    '/images/鳥取/LINE_ALBUM_2023日本鳥取県-台湾学校作品合同展_231210_3.webp'
const img3 =
    '/images/鳥取/LINE_ALBUM_2023日本鳥取県-台湾学校作品合同展_231210_4.webp'
const img4 =
    '/images/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_1.webp'
const img5 =
    '/images/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_2.webp'
const img6 =
    '/images/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_3.webp'
const img7 =
    '/images/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_4.webp'
const img8 =
    '/images/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_5.webp'
const img9 =
    '/images/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_6.webp'
const img10 =
    '/images/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_7.webp'
const img11 =
    '/images/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_8.webp'
const img12 = '/images/和歌山/LINE_ALBUM_829和歌山_231003_1.webp'
const img13 = '/images/和歌山/LINE_ALBUM_829和歌山_231003_2.webp'
const img14 =
    '/images/和泉市/LINE_ALBUM_2023 和泉市　台湾茶体験講座_231209_1.webp'
const img15 =
    '/images/和泉市/LINE_ALBUM_2023 和泉市　台湾茶体験講座_231209_2.webp'
const img16 =
    '/images/和泉市/LINE_ALBUM_2023 和泉市　台湾茶体験講座_231209_3.webp'
const img17 =
    '/images/和泉市/LINE_ALBUM_2023 和泉市　台湾茶体験講座_231209_4.webp'
const img18 =
    '/images/和泉市/LINE_ALBUM_2023 和泉市　台湾茶体験講座_231209_5.webp'

const simg0 =
    '/images/鳥取/LINE_ALBUM_2023日本鳥取県-台湾学校作品合同展_231210_1_small.webp'
const simg1 =
    '/images/鳥取/LINE_ALBUM_2023日本鳥取県-台湾学校作品合同展_231210_2_small.webp'
const simg2 =
    '/images/鳥取/LINE_ALBUM_2023日本鳥取県-台湾学校作品合同展_231210_3_small.webp'
const simg3 =
    '/images/鳥取/LINE_ALBUM_2023日本鳥取県-台湾学校作品合同展_231210_4_small.webp'
const simg4 =
    '/images/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_1_small.webp'
const simg5 =
    '/images/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_2_small.webp'
const simg6 =
    '/images/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_3_small.webp'
const simg7 =
    '/images/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_4_small.webp'
const simg8 =
    '/images/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_5_small.webp'
const simg9 =
    '/images/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_6_small.webp'
const simg10 =
    '/images/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_7_small.webp'
const simg11 =
    '/images/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_8_small.webp'
const simg12 = '/images/和歌山/LINE_ALBUM_829和歌山_231003_1_small.webp'
const simg13 = '/images/和歌山/LINE_ALBUM_829和歌山_231003_2_small.webp'
const simg14 =
    '/images/和泉市/LINE_ALBUM_2023 和泉市　台湾茶体験講座_231209_1_small.webp'
const simg15 =
    '/images/和泉市/LINE_ALBUM_2023 和泉市　台湾茶体験講座_231209_2_small.webp'
const simg16 =
    '/images/和泉市/LINE_ALBUM_2023 和泉市　台湾茶体験講座_231209_3_small.webp'
const simg17 =
    '/images/和泉市/LINE_ALBUM_2023 和泉市　台湾茶体験講座_231209_4_small.webp'
const simg18 =
    '/images/和泉市/LINE_ALBUM_2023 和泉市　台湾茶体験講座_231209_5_small.webp'

export const navContent = [
    {
        chn: '最近活動',
        jp: '最近の活動',
        link: '#recent_events'
    },
    {
        chn: '公司概要',
        jp: '企業情報',
        link: '#company_info'
    },
    {
        chn: '服務',
        jp: '事業案内',
        link: '#services'
    },
    {
        chn: '活動回顧',
        jp: 'イベントの回顧',
        link: '#event_gallery'
    },
    {
        chn: '聯絡我們',
        jp: 'お問い合わせ',
        link: '#contact_us'
    },
    {
        chn: 'tsn 記事',
        jp: '実績',
        link: 'past_events'
    }
]

export const services = [
    {
        chn: '活動規劃',
        jp: 'イベント企画'
    },
    {
        chn: '藝術家經紀',
        jp: '音楽家、アーティストのマネジメント'
    },
    {
        chn: '不動產相關諮詢',
        jp: '不動産取引コンサルティング'
    },
    {
        chn: '日文/中文 翻譯',
        jp: '日本語と台湾華語の通訳、翻訳'
    }
]

export const carouselImages = [
    {
        title: '2023和歌山市第二回日本台灣學校美術作品合同展',
        src: img12,
        srcSm: simg12,
        alt: 'img1'
    },
    {
        title: '2023和歌山市第二回日本台灣學校美術作品合同展',
        src: img13,
        srcSm: simg13,
        alt: 'img2'
    },
    {
        title: '2023鳥取市第二回日本台灣學校美術作品合同展',
        src: img1,
        srcSm: simg1,
        alt: 'img3'
    },
    {
        title: '2023鳥取市第二回日本台灣學校美術作品合同展',
        src: img2,
        srcSm: simg2,
        alt: 'img4'
    },
    {
        title: '2023鳥取市第二回日本台灣學校美術作品合同展',
        src: img3,
        srcSm: simg3,
        alt: 'img5'
    }
]

// event gallery
export interface Event {
    title: string
    description: string
    imgs: string[]
    smImgs: string[]
}

export const events: Event[] = [
    {
        title: '2023 和歌山市第二回日本台灣學校美術作品合同展',
        description: '2023 和歌山市第二回日本台灣學校美術作品合同展',
        imgs: [img4, img5, img6, img7, img8, img9, img10, img11],
        smImgs: [simg4, simg5, simg6, simg7, simg8, simg9, simg10, simg11]
    },
    {
        title: '2023 和泉市台灣茶體驗講座',
        description: '2023 和泉市台灣茶體驗講座',
        imgs: [img14, img15, img16, img17, img18],
        smImgs: [simg14, simg15, simg16, simg17, simg18]
    },
    {
        title: '2023 鳥取市第二回日本台灣學校美術作品合同展',
        description: '2023 鳥取市第二回日本台灣學校美術作品合同展',
        imgs: [img0, img1, img2, img3],
        smImgs: [simg0, simg1, simg2, simg3]
    }
]

// Company past events

export const pastEvents: Map<Year, YearPastEvents[]> = new Map()
pastEvents.set(Year.Year2023, [
    {
        year: Year.Year2023,
        month: Month.January,
        events: [
            {
                year: Year.Year2023,
                month: Month.January,
                chnTitle: '2023 日本台灣陶藝聯展 IN 台灣台中',
                jpTitle: '2023 日本台湾陶芸合同展 IN 台湾台中',
                chnLocation: ['台灣台中'],
                jpLocation: ['台湾台中']
            }
        ]
    },
    {
        year: Year.Year2023,
        month: Month.March,
        events: [
            {
                year: Year.Year2023,
                month: Month.March,
                chnTitle: '台灣嘉義西園雅集茶道教室',
                jpTitle: '台湾嘉義西園雅集茶道教室',
                chnLocation: ['台灣嘉義', '千葉縣館山市'],
                jpLocation: ['台湾嘉義', '千葉県館山市']
            },
            {
                year: Year.Year2023,
                month: Month.March,
                chnTitle: '千葉縣館山市台灣茶茶會',
                jpTitle: '千葉県館山市台湾茶 茶会',
                chnLocation: ['千葉縣館山市'],
                jpLocation: ['千葉県館山市']
            }
        ]
    },
    {
        year: Year.Year2023,
        month: Month.April,
        events: [
            {
                year: Year.Year2023,
                month: Month.April,
                chnTitle: '2023 廣島縣尾道市日本台灣小學作品聯合展演',
                jpTitle: '2023 広島県尾道市日本台湾小学校合同作品展',
                chnLocation: ['廣島縣尾道市'],
                jpLocation: ['広島県尾道市']
            },
            {
                year: Year.Year2023,
                month: Month.April,
                chnTitle: '嘉義市國際教育地方培力團訪問日本小學',
                jpTitle: '嘉義市国際教育地方培力団が日本の小学校を訪問見学',
                chnLocation: ['嘉義市'],
                jpLocation: ['嘉義市']
            }
        ]
    },
    {
        year: Year.Year2023,
        month: Month.May,
        events: [
            {
                year: Year.Year2023,
                month: Month.May,
                chnTitle:
                    '2023 日本台灣文化藝術交流會第一回定期音樂公演「美麗新營」IN 台灣台南新營',
                jpTitle:
                    '2023 日本台湾文化芸術交流会第１回定期音楽公演「美しい新営」IN 台湾台南新営',
                chnLocation: ['台灣台南新營'],
                jpLocation: ['台湾台南新営']
            }
        ]
    },
    {
        year: Year.Year2023,
        month: Month.July,
        events: [
            {
                year: Year.Year2023,
                month: Month.July,
                chnTitle: '2023 日本鳥取-台灣學校聯合作品展演',
                jpTitle: '2023 日本鳥取-台湾学校作品合同展',
                chnLocation: ['日本鳥取'],
                jpLocation: ['日本鳥取県']
            }
        ]
    },
    {
        year: Year.Year2023,
        month: Month.August,
        events: [
            {
                year: Year.Year2023,
                month: Month.August,
                chnTitle:
                    '大阪府和泉市舉辦和泉市世界的文化講座 台灣茶體驗—香氣和味道的世界',
                jpTitle:
                    '大阪府和泉市にて和泉市世界の文化講座　世界に名立たる台湾茶体験ー香りと味わいの世界',
                chnLocation: ['大阪府和泉市'],
                jpLocation: ['大阪府和泉市']
            },
            {
                year: Year.Year2023,
                month: Month.August,
                chnTitle: '和歌山市舉辦世界著名的台灣茶體驗—香氣和味道的世界',
                jpTitle:
                    '和歌山市にて世界に名立てる台湾茶体験ー香りと味わいの世界',
                chnLocation: ['和歌山市'],
                jpLocation: ['和歌山市']
            },
            {
                year: Year.Year2023,
                month: Month.August,
                chnTitle: '2023和歌山市第二回台日學校美術作品合同展',
                jpTitle: '2023和歌山市第二回台日学校美術作品合同展',
                chnLocation: ['和歌山市'],
                jpLocation: ['和歌山市']
            }
        ]
    }
])
