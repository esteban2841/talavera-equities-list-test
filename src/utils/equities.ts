import { Equities, Equity } from "../types/equities"

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

export {
    totalStockAsset,
    hotUpdate
}