import { View, Text } from "react-native-web"
import { hotUpdate } from "../../../utils/equities"
import { StyleSheet } from "react-native"
import { CustomText } from "../atoms/CustomText"
import { EquitiesContext } from '../../../context/equities/EquitiesContext'
import { useContext } from "react"

const StocksOverview = () => {
  const {equities} = useContext(EquitiesContext)
  const hotEquity = hotUpdate(equities)
  const { name, symbol, price, daily_change } = hotEquity
  return (
    <View style={styles.mainContainer} >
      <View style={styles.hotStockContainer} >
        <CustomText type="default" >Daily Hot Stock</CustomText>
        <View style={styles.spacing} >

          <View style={styles.stockContainerHeader} >
            <CustomText type="default">{symbol}</CustomText>
            <CustomText type="increaseSymbol">+</CustomText>
            <CustomText type="title">{daily_change}</CustomText>
          </View>
        </View>
        <View style={styles.spacing} >
          <View style={styles.stockContainerHeader}>
            <CustomText type="subtitle">{name}</CustomText>
            <CustomText type="subtitle">{price}</CustomText>
          </View>

        </View>
      </View>
    </View>
  )
}

export default StocksOverview


const styles = StyleSheet.create({
  mainContainer:{
    boxSize: "border-box",
    paddingHorizontal: 50,
    paddingVertical: 20,
    marginVertical: 20,
    flex: 1,
    
  },
  hotStockContainer:{
    backgroundColor: 'rgb(47, 47, 47)',
    width: '100%',
    padding: 10,
    borderRadius: 10,
  },
  stockContainerHeader:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  spacing:{
    flex: 1,
    paddingVertical: 8,
    
  },
  
})