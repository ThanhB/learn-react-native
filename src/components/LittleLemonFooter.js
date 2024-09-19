import * as React from 'react';
import { View, Text } from 'react-native';
 export default function LittleLemonFooter() {
  return (
    <View
      style={{
        backgroundColor: '#EE9972',
        marginBottom: 20,
      }}>
      <Text
        style={{
          fontSize: 18,
          color: 'black',
          textAlign: 'center',
          fontStyle: 'italic',
        }}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}
