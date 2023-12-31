import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      rowGap: 10
    },
    input: {
      height: 55,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
      color: '#145BA6'
    },
    textReg: {
      color: '#145BA6'
    },
    tinyLogo: {
      marginBottom: 20
    },
    appButtonContainer: {
      backgroundColor: "#145BA6",
      borderRadius: 10,
      paddingHorizontal: 12,
      width: '100%',
      height: 55,
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10
    },
    appButtonText: {
      color: "#fff",
      paddingHorizontal: 10,
      fontSize: 18,
      textAlign: 'center'
    },  
    appButtonContainer2: {
      borderRadius: 10,
      paddingHorizontal: 12,
      width: '100%',
      height: 55,
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10
    },
    appButtonText2: {
      color: "#fff",
      paddingHorizontal: 10,
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold'
    },  
    errorTitle: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center'
    },
    disabledButton: {
      backgroundColor: "#145BA6",
      opacity: 0.7
    },
    text: {
      color: 'white', 
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 5
    },
    buttons_count: {
      width: '100%',
      height: 'auto'
    },
    count: {
      width: 60,
      height: 60,
      borderColor: 'white',
      borderWidth: 3,
      borderRadius: 100,
      fontSize: 17,
      justifyContent: 'center',
      alignItems: 'center'
    },
    count_text: {
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    result_count: {
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold'
    },
    buttons_count: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '45%',
      height: 'auto',
      marginTop: 30,
      justifyContent: 'space-between'
    },
    control: {
      width: '100%',
      height: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 15
    },
    menu: {
      width: 54,
      height: 54,
      borderRadius: 100,
      backgroundColor: '#145BA6',
      position: 'absolute',
      top: 10,
      left: 10, 
      right: 0,
      zIndex: 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    geo_btn: {
      width: 54,
      height: 54,
      borderRadius: 100,
      backgroundColor: '#145BA6',
      position: 'absolute',
      top: 10,
      left: '83%', 
      right: 0,
      zIndex: 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    countAllClients: {
      width: 65,
      height: 75,
      borderRadius: 6,
      backgroundColor: '#145BA6',
      position: 'absolute',
      top: '47%',
      left: 310, 
      right: 0,
      zIndex: 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    count_cli: {
      fontSize: 24,
      color: 'white',
      fontWeight: 'bold'
    },
    small_text: {
      color: 'white',
      fontSize: 8
    }
});