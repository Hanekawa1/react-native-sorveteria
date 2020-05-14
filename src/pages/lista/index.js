import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Wallpaper from '../../components/wallpaper';
import bgGuest from '../../assets/images/wallpaperGuest.png';
import { View, Text, ScrollView } from 'react-native';
import { obterTodosProdutos } from '../../services/produtoService';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { search } from 'react-native-vector-icons/MaterialIcons';
import Styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

function Main({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [selecionados, setSelecionados] = useState([]);

  const dispatch = useDispatch();

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

  function adicionarAoCarrinho(item) {
    setSelecionados(selecionados.concat(item));
  }

  function confirmarCarrinho() {
    dispatch({ type: 'CARRINHO', selecionados });
    navigation.navigate('Carrinho');
  }

  return (
    <Wallpaper
      image={bgGuest}
      children={
        <>
          <View>
            <SectionedMultiSelect
              items={produtos}
              uniqueKey="IdProduto"
              displayKey="NomeProduto"
              selectText="Pesquisar..."
              searchPlaceholderText="Pesquisar sorvetes"
              showDropDowns={true}
              selectChildren={true}
              selectToggleIconComponent={search}
              showChips={true}
              animateDropDowns={true}
              readOnlyHeadings={true}
            />
            <ScrollView>
              {produtos.map((produto) => {
                return (
                  <View key={produto.idProduto} style={Styles.item}>
                    <Text>Nome: {produto.NomeProduto}</Text>
                    <Text>{produto.DescricaoProduto}</Text>
                    <Text>Sabores: {produto.Sabores}</Text>
                    <Text>Adicionais: {produto.Adicionais}</Text>
                    <TouchableOpacity
                      style={Styles.containerCarrinho}
                      onPress={() => adicionarAoCarrinho(produto)}>
                      <Icon name="shopping-cart" size={20} />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View style={Styles.container}>
            <TouchableOpacity
              style={Styles.button}
              onPress={() => confirmarCarrinho()}>
              <Icon name="chevron-right" size={20} />
            </TouchableOpacity>
          </View>
        </>
      }
    />
  );
}

export default Main;
