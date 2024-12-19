import { StyleSheet, TouchableOpacity } from 'react-native';
import { CustomText } from './CustomText';
import React from 'react';
import { sorting } from '../../../utils/equities';

export interface FilterEquitiesButtonProps {
  type: 'primary' | 'secondary';
  content: string;
  bgColor?: string;
  stateModifierCb: (state: any) => void;
};

export function FilterEquitiesButton({
  type = 'primary',
  content,
  stateModifierCb,
  ...rest
}: FilterEquitiesButtonProps) {
	console.log("TCL: stateModifierCb", stateModifierCb)
  const bgColor = rest.bgColor || 'rgb(220,12,6)';

  const actions = (action: string)=>{
		console.log("TCL: actions -> action", action)
    if(action === 'Sort'){
      stateModifierCb((state: any) => {
        return sorting(state)
      })
    }
    else if(action === 'Filter by'){
    }

  }

  return (
    <TouchableOpacity
      style={[
        {backgroundColor: bgColor},
        ...(type === 'primary' ? [styles.primary] : []),
      ]}
      {...rest}
      onPress={()=>actions(content)}
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
