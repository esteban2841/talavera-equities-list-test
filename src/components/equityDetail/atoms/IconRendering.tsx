import React from "react"
import { View } from "react-native"
import { Equity } from "../../../types/equities"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';

interface IconRenderingProps {
  equitySelected?: Equity
  style: any
}

const icons: { [key in 'FB' | 'AAPL' | 'MSFT' | 'GOOGL' | 'AMZN' | 'TSLA']: JSX.Element } = {
    FB: <FontAwesome6 name="meta" size={68} color="'rgb(220,12,6)'" />,
    AAPL: <AntDesign name="apple1" size={68} color="'rgb(220,12,6)'" />,
    MSFT: <FontAwesome5 name="microsoft" size={68} color="'rgb(220,12,6)'" />,
    GOOGL: <AntDesign name="google" size={68} color="'rgb(220,12,6)'" />,
    AMZN: <AntDesign name="amazon" size={68} color="'rgb(220,12,6)'" />,
    TSLA: <Fontisto name="tesla" size={68} color="'rgb(220,12,6)'" />
}

const IconRendering = ({equitySelected, style} : IconRenderingProps) => {

  return (
    <View style={style}>
      {
        equitySelected?.symbol && icons[equitySelected.symbol as 'FB' | 'AAPL' | 'MSFT' | 'GOOGL' | 'AMZN' | 'TSLA'] ? icons[equitySelected.symbol as 'FB' | 'AAPL' | 'MSFT' | 'GOOGL' | 'AMZN' | 'TSLA'] : <></>
      }
    </View>
  )

}

export default IconRendering
