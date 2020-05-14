import React, { useState, useEffect } from 'react';
import Wallpaper from '../../components/wallpaper';
import { View, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import bgAdmin from '../../assets/images/wallpaperAdmin.png';
import { obterTodosProdutos } from '../../services/produtoService';

import Styles from './styles';

function Main({ navigation }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      obterProdutos();
    }

    fetchData();
  }, []);

  async function obterProdutos() {
    var produtosObtidos = await obterTodosProdutos();
    setProdutos(produtosObtidos);
  }

  return (
    <Wallpaper
      image={bgAdmin}
      children={
        <>
          <View>
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
          </View>

          <View style={Styles.container}>
            <TouchableOpacity
              style={Styles.button}
              onPress={() => navigation.navigate('Cadastro')}>
              <Text style={Styles.text}>+</Text>
            </TouchableOpacity>
          </View>
        </>
      }
    />
  );
}

export default Main;
