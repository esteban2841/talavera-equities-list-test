import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {EquityChangeChart} from '../atoms/EquityChangeChart';
import { EquitiesContext } from '../../../context/equities/EquitiesContext';
import IconRendering from '../atoms/IconRendering';
import { CustomText } from '../../equities/atoms/CustomText';

const EquityDetailOverview = () => {

  const {equityChanges} = useContext(EquitiesContext)
	console.log("TCL: EquityDetailOverview -> equityChanges", equityChanges)
  const equitySelected = equityChanges && equityChanges[0]

  return (
    <View style={styles.container}>
      {/* <EquityChangeChart equityChanges={equityChanges} /> */}
      <IconRendering style={styles.icon} equitySelected={equitySelected} />
      <View style={styles.infoContainer}>
        <View style={styles.propContainer}>
          <View style={styles.prop}>
            <CustomText type='subtitle'>Symbol: </CustomText>
            <CustomText type='default' >{equitySelected?.symbol}</CustomText>
          </View>
          <View style={styles.prop}>
            <CustomText type='subtitle'>Name: </CustomText>
            <CustomText type='default' >{equitySelected?.name}</CustomText>
          </View>
          <View style={styles.prop}>
            <CustomText type='subtitle'>Daily change: </CustomText>
            <CustomText type='default' >{equitySelected?.daily_change}</CustomText>
          </View>
          <View style={styles.prop}>
            <CustomText type='subtitle'>Price: </CustomText>
            <CustomText type='default' >{equitySelected?.price}</CustomText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EquityDetailOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161616',
    color: '#fff',
    gap: 20
  },
  infoContainer: {
    flex: 2,
    gap: 0,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#161616',
    color: '#fff'
  },
  icon: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#161616',
    color: '#fff'
  },
  propContainer: {
    height: 120,
    backgroundColor: '#161616',
    color: '#fff'
  },
  prop: {
    flex: 1,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#161616',
    color: '#fff'
  },
})