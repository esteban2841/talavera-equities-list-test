const totalStockAsset = (equities) => {
    return equities.reduce((acc, equity) => {
        return acc + equity.totalAsset
    }, 0)
}

const hotUpdate = (equities) => {
    const ordered = equities.sort((a, b) => {
        return b.daily_change - a.daily_change
    })
    return ordered[0]
}

export {
    totalStockAsset,
    hotUpdate
}