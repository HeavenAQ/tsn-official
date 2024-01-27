export enum Lang {
    JP = 'jp',
    CN = 'chn'
}

export enum Month {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

export namespace Month {
    export function toString(month: Month): string {
        switch (month) {
            case Month.January:
                return '1 月'
            case Month.February:
                return '2 月'
            case Month.March:
                return '3 月'
            case Month.April:
                return '4 月'
            case Month.May:
                return '5 月'
            case Month.June:
                return '6 月'
            case Month.July:
                return '7 月'
            case Month.August:
                return '8 月'
            case Month.September:
                return '9 月'
            case Month.October:
                return '10 月'
            case Month.November:
                return '11 月'
            case Month.December:
                return '12 月'
        }
    }
}

export enum Year {
    Year2023
}

export namespace Year {
    export function toString(year: Year): string {
        switch (year) {
            case Year.Year2023:
                return '2023'
        }
    }
}

export interface CompanyPastEvent {
    year: Year
    month: Month
    chnTitle: string
    jpTitle: string
    chnLocation: string[]
    jpLocation: string[]
}

export interface YearPastEvents {
    year: Year
    month: Month
    events: CompanyPastEvent[]
}
