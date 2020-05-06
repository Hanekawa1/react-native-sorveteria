import React from 'react';
import { View, Text } from 'react-native';

function Item(produto) {
  return (
    <View>
      <Text>{produto.omeProduto}</Text>
    </View>
  );
}

export default Item;
