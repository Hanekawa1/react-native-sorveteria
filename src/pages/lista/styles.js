import { StyleSheet, Dimensions } from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;

const Styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'column-reverse',
    paddingBottom: 30,
    paddingRight: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3368FF',
    height: 80,
    width: DEVICE_WIDTH - 330,
    borderRadius: 100,
    zIndex: 100,
  },
  containerCarrinho: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'column-reverse',
  },
});

export default Styles;
