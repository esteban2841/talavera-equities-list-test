import React from "react"
import { MoneyModel3d } from "../components/home/atoms/MoneyModel3d"
import ModelRenderer from "../components/home/molecules/ModelRenderer"
import { View } from "react-native"

const Home = () => {
  return (
    <View>
        <ModelRenderer>
        <MoneyModel3d />
        </ModelRenderer>
    </View>
  )
}

export default Home
