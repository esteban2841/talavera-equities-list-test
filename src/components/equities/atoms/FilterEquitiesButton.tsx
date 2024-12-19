import { StyleSheet, TouchableOpacity } from 'react-native';
import { CustomText } from './CustomText';
import React, { useContext } from 'react';
import { EquitiesContext } from '../../../context/equities/EquitiesContext';
export interface FilterEquitiesButtonProps {
  type: 'primary' | 'secondary';
  content: string;
  bgColor?: string;
  stateModifierCb: (state: any) => void;
};

export function FilterEquitiesButton({
  type = 'primary',
  content,
  ...rest
}: FilterEquitiesButtonProps) {

  const {sortEquitiesAsc, equities} = useContext(EquitiesContext)
  const bgColor = rest.bgColor || 'rgb(220,12,6)';

  return (
    <TouchableOpacity
      style={[
        {backgroundColor: bgColor},
        ...(type === 'primary' ? [styles.primary] : []),
      ]}
      {...rest}
      onPress={()=>sortEquitiesAsc(equities)}
    >
      <CustomText type='default'>{content}</CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primary: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
 
});
