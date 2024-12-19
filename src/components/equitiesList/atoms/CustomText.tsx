import { Text, type TextProps, StyleSheet } from 'react-native';
import React from 'react';

export type CustomTextProps = TextProps & {
  type: 'default' | 'title' | 'subtitle' | 'link' | 'increaseSymbol';
  children?: React.ReactNode;
};

export function CustomText({
  style,
  children,
  type = 'default',
  ...rest
}: CustomTextProps) {

  return (
    <Text
      style={[
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'increaseSymbol' ? styles.increaseSymbol : undefined,
        style,
      ]}
      {...rest}
    >{children}</Text>
  );
}

const styles = StyleSheet.create({
  default: {
      color: "white",
      fontSize: 16,
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '400',
      fontStyle: 'normal',
      marginRight: 4,
    },
    title: {
      color: 'rgb(255, 255, 255)',
      fontSize: 18,
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '400',
      fontStyle: 'normal',
      marginRight: 4,
    },
    increaseSymbol: {
      color: 'rgb(0, 153, 117)',
      fontSize: 18,
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '400',
      fontStyle: 'normal',
      marginRight: 4,
    },
    subtitle: {
      color: 'rgb(255, 255, 255)',
      opacity: 0.9,
      fontSize: 14,
      marginRight: 10,
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '400',
      fontStyle: 'normal',
    },
    link: {
      lineHeight: 30,
      fontSize: 16,
      color: '#0a7ea4',
    },
});
