import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      rowGap: 10
    },
    title: {
      fontSize: 20,
      marginBottom: 20,
    },
    input: {
      height: 40,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    textReg: {
      color: 'darkblue'
    },
    button: {
      backgroundColor: 'green', 
      color: 'white', 
      paddingVertical: 10, 
      paddingHorizontal: 20,
      borderRadius: 5,
    },
});