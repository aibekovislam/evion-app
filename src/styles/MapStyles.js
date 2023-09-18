import { StyleSheet, Dimensions } from 'react-native';

export const mapStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: "absolute",
        bottom: 0
      },
      title: {
        fontSize: 23,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 15
      },
      card: {
        width: '100%',
        maxHeight: 230,
      },
      cardContent: {
        flexGrow: 1,
      },    
      cardBlock: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
      },
      logo: {
        marginHorizontal: 10,
        width: 64,
        height: 64
      },
      cardName: {
        fontSize: 17,
        fontWeight: 'bold'
      },
      variantChargeStation: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      detailsBlock: {
        width: '95%',
        
      }
})