import React, { useEffect, useState } from 'react';
import Wallpaper from '../../components/wallpaper';
import bgGuest from '../../assets/images/wallpaperGuest.png';
import { View, Text, ScrollView } from 'react-native';
import { obterTodosProdutos } from '../../services/produtoService';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Styles from './styles';

function Main({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [selecionados, setSelecionados] = useState([]);
  console.log(selecionados);

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

  function confirmarCarrinho(items) {
    console.log('teste');
  }

  function troca(item) {
    console.log(selecionados);
  }

  return (
    <Wallpaper
      image={bgGuest}
      children={
        <View>
          <SectionedMultiSelect
            items={produtos}
            uniqueKey="IdProduto"
            displayKey="NomeProduto"
            selectText="Selecione os produtos..."
            showDropDowns={true}
            selectChildren={true}
            showChips={true}
            animateDropDowns={true}
            readOnlyHeadings={true}
            onSelectedItemsChange={(item) => troca(item)}
            selectedItems={selecionados}
            onConfirm={confirmarCarrinho()}
          />
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
        </View>
      }
    />
  );
}

export default Main;
