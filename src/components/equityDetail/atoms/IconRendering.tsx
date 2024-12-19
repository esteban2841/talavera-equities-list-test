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

const IconRendering = ({equitySelected, style} : IconRenderingProps) => {
console.log("TCL: IconRendering -> equitySelected", equitySelected)

    if(equitySelected?.symbol === 'FB'){
        return (
          <View style={style}>
            <FontAwesome6 name="meta" size={68} color="'rgb(220,12,6)'" />
          </View>
        )

    }
    if(equitySelected?.symbol === 'AAPL'){
        return (
          <View style={style}>
            <AntDesign name="apple1" size={68} color="'rgb(220,12,6)'" />
          </View>
        )

    }
    if(equitySelected?.symbol === 'MSFT'){
        return (
          <View   style={style}>
            <FontAwesome5 name="microsoft" size={68} color="'rgb(220,12,6)'" />
          </View>
        )

    }
    if(equitySelected?.symbol === 'GOOGL'){
        return (
          <View style={style}>
            <AntDesign name="google" size={68} color="'rgb(220,12,6)'" />
          </View>
        )

    }
    if(equitySelected?.symbol === 'AMZN'){
        return (
          <View   style={style}>
            <AntDesign name="amazon" size={68} color="'rgb(220,12,6)'" />
          </View>
        )

    }
    if(equitySelected?.symbol === 'TSLA'){
        return (
          <View style={style}>
            <Fontisto name="tesla" size={68} color="'rgb(220,12,6)'" />
          </View>
        )

    }

    return (
        <>
        </>
    )
}

export default IconRendering
