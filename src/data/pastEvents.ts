import { Month, Year, YearPastEvents } from '../types'

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
