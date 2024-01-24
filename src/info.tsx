import React from 'react'
import img0 from './images/website/鳥取/LINE_ALBUM_2023日本鳥取県-台湾学校作品合同展_231210_1.webp'
import img1 from './images/website/鳥取/LINE_ALBUM_2023日本鳥取県-台湾学校作品合同展_231210_2.webp'
import img2 from './images/website/鳥取/LINE_ALBUM_2023日本鳥取県-台湾学校作品合同展_231210_3.webp'
import img3 from './images/website/鳥取/LINE_ALBUM_2023日本鳥取県-台湾学校作品合同展_231210_4.webp'
import img4 from './images/website/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_1.webp'
import img5 from './images/website/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_2.webp'
import img6 from './images/website/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_3.webp'
import img7 from './images/website/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_4.webp'
import img8 from './images/website/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_5.webp'
import img9 from './images/website/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_6.webp'
import img10 from './images/website/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_7.webp'
import img11 from './images/website/和歌山/LINE_ALBUM_2023和歌山市 第二回日本台灣學校美術作品合同展_231209_8.webp'
import img12 from './images/website/和歌山/LINE_ALBUM_829和歌山_231003_1.webp'
import img13 from './images/website/和歌山/LINE_ALBUM_829和歌山_231003_2.webp'
import img14 from './images/website/和泉市/LINE_ALBUM_2023 和泉市　台湾茶体験講座_231209_1.webp'
import img16 from './images/website/和泉市/LINE_ALBUM_2023 和泉市　台湾茶体験講座_231209_2.webp'
import img17 from './images/website/和泉市/LINE_ALBUM_2023 和泉市　台湾茶体験講座_231209_3.webp'
import img18 from './images/website/和泉市/LINE_ALBUM_2023 和泉市　台湾茶体験講座_231209_4.webp'
import img19 from './images/website/和泉市/LINE_ALBUM_2023 和泉市　台湾茶体験講座_231209_5.webp'

export const navContent = [
    {
        chn: '最近活動',
        jp: '最近の活動',
        link: 'recent_events'
    },
    {
        chn: '公司概要',
        jp: '企業情報',
        link: 'company_info'
    },
    {
        chn: '服務',
        jp: '事業案内',
        link: 'services'
    },
    {
        chn: '活動回顧',
        jp: 'イベントの回顧',
        link: 'event_gallery'
    },
    {
        chn: '聯絡我們',
        jp: 'お問い合わせ',
        link: 'contact_us'
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

const tmp = '2023 和泉市台湾茶体験講座'

export const carouselImages = [
    {
        title: '2023和歌山市第二回日本台灣學校美術作品合同展',
        src: img12,
        alt: 'img1'
    },
    {
        title: '2023和歌山市第二回日本台灣學校美術作品合同展',
        src: img13,
        alt: 'img2'
    },
    {
        title: '2023鳥取市第二回日本台灣學校美術作品合同展',
        src: img1,
        alt: 'img3'
    },
    {
        title: '2023鳥取市第二回日本台灣學校美術作品合同展',
        src: img2,
        alt: 'img4'
    },
    {
        title: '2023鳥取市第二回日本台灣學校美術作品合同展',
        src: img3,
        alt: 'img5'
    }
]

// event gallery
export interface Event {
    title: string
    description: string
    images: string[]
}

export const events: Event[] = [
    {
        title: '2023 和歌山市第二回日本台灣學校美術作品合同展',
        description: '2023 和歌山市第二回日本台灣學校美術作品合同展',
        images: [img4, img5, img6, img7, img8, img9, img10, img11]
    },
    {
        title: '2023 和泉市台灣茶體驗講座',
        description: '2023 和泉市台灣茶體驗講座',
        images: [img14, img16, img17, img18, img19]
    },
    {
        title: '2023 鳥取市第二回日本台灣學校美術作品合同展',
        description: '2023 鳥取市第二回日本台灣學校美術作品合同展',
        images: [img0, img1, img2, img3]
    }
]
