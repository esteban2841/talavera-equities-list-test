import { Equities, Equity } from "../types/equities"
import _, { eq, random } from 'lodash'

const totalStockAsset = (equities: Equities) : number => {
    return equities.reduce((acc: number, equity: Equity) => {
        return acc + equity.price
    }, 0)
}

const hotUpdate = (equities: Equities): Equity => {
    const ordered = equities.sort((a, b) => {
        return b.daily_change - a.daily_change
    })
    return ordered[0]
}

const sorting = (equities: Equities, prop: string): Equities => {
    const ordered = _.sortBy(equities, [prop]);
    return ordered
}

const calcYesterdayEquityPrice = (equity: Equity): Equities => {
    const increaseValue = (equity?.daily_change / 100) * equity?.price
    const yesterdayEquityPrice = equity?.price - increaseValue 
    const yersterdayEquityValues = {
        ...equity,
        price: yesterdayEquityPrice,
        daily_change: random(-10, 10)
    }
	console.log("TCL: [yersterdayEquityValues, equity]", [yersterdayEquityValues, equity])
    return [yersterdayEquityValues, equity]
}

export {
    totalStockAsset,
    hotUpdate,
    sorting,
    calcYesterdayEquityPrice
}