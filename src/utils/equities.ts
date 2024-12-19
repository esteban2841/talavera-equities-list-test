import { Equities, Equity } from "../types/equities"
import _ from 'lodash'

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
	console.log("TCL: equities", equities)
    const ordered = _.sortBy(equities, [prop]);
    console.log("TCL: ordered", ordered)
    return ordered
}

export {
    totalStockAsset,
    hotUpdate,
    sorting
}