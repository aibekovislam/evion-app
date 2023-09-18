import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from '../styles/AuthorizationStyles'

function ButtonStation({ onPress, title, disabled, background }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.appButtonContainer2,
        disabled ? styles.disabledButton : null,
        { backgroundColor: background }
      ]}
      disabled={disabled}
    >
      <Text style={styles.appButtonText2}>{disabled ? "Загрузка" : title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonStation
