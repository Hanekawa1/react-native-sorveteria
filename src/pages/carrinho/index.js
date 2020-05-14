import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Wallpaper from '../../components/wallpaper';
import bgGuest from '../../assets/images/wallpaperGuest.png';
import { ScrollView, View, Text } from 'react-native';

import Styles from './styles';

function Carrinho({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const carrinho = useSelector((state) => state.produto);

  useEffect(() => {
    setProdutos(carrinho.produtos.selecionados);
  }, [carrinho.produtos.selecionados]);

  return (
    <Wallpaper
      image={bgGuest}
      children={
        <>
          {produtos.length === 0 ? (
            <Text style={Styles.title}>Seu carrinho está vazio! :(</Text>
          ) : (
            <Text style={Styles.title}>Esse é o seu carrinho :D</Text>
          )}

          <ScrollView>
            {produtos.map((produto) => {
              return (
                <View key={produto.idProduto} style={Styles.item}>
                  <Text>Nome: {produto.NomeProduto}</Text>
                  <Text>{produto.DescricaoProduto}</Text>
                  <Text>Sabores: {produto.Sabores}</Text>
                  <Text>Adicionais: {produto.Adicionais}</Text>
                </View>
              );
            })}
          </ScrollView>
        </>
      }
    />
  );
}

export default Carrinho;
