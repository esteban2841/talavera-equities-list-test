import { View, Text } from "react-native-web"
import { hotUpdate } from "../../../utils/equities"
import { StyleSheet } from "react-native"

const StocksOverview = ({equities}) => {

  const hotEquity = hotUpdate(equities)
  const { name, symbol, price, daily_change } = hotEquity
  return (
    <View style={styles.mainContainer} >
      <View style={styles.hotStockContainer} >
        <Text style={styles.stockTitle} >Hot Stock of the day</Text>
        <View style={styles.spacing} >

          <View style={styles.stockContainerHeader} >
            <Text style={styles.stockContainerHeaderItem}>{symbol}</Text>
            <Text style={styles.stockContainerHeaderItem}>{daily_change}</Text>
          </View>
        </View>
        <View style={styles.spacing} >
          <View style={styles.stockContainerHeader}>
            <Text style={styles.stockContainerFooterItem}>Text{name}</Text>
            <Text style={styles.stockContainerFooterItem}>{price}</Text>
          </View>

        </View>
      </View>
    </View>
  )
}

export default StocksOverview


const styles = StyleSheet.create({
  mainContainer:{
    flex: 2,
    boxSize: "border-box",
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  hotStockContainer:{
    height: 160,
    backgroundColor: 'rgb(47, 47, 47)',
    width: '100%',
    padding: 10,
    borderRadius: 10,
  },
  stockTitle:{
    color: "white",
    fontSize: 16,
  },
  stockContainerHeader:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  stockContainerHeaderItem:{
    color: 'rgb(255, 255, 255)',
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  stockContainerFooterItem:{
    color: 'rgb(255, 255, 255)',
    opacity: 0.9,
    fontSize: 14,
    marginRight: 10,
    paddingTop: 20,
  },
  spacing:{
    flex: 1,
    paddingVertical: 8,
    
  },
  
})