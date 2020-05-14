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
  title: {
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Styles;
