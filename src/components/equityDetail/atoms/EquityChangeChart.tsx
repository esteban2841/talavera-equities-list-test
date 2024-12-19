import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { EquitiesContext } from '../../../context/equities/EquitiesContext';
import { LineChart } from 'react-native-chart-kit';


export const EquityChangeChart = () => {
  const {equityChanges} = useContext(EquitiesContext)
  const labelsNames = ['Yesterday', 'Today'];
  const dataEquity = equityChanges?.map((item, index)=>{return item.price}) || []
  

  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: labelsNames,
          datasets: [...dataEquity]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});
