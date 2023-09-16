import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from '../styles/AuthorizationStyles'

function ButtonEvion({ onPress, title, disabled }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.appButtonContainer, disabled ? styles.disabledButton : null]}
      disabled={disabled}
    >
      <Text style={styles.appButtonText}>{ disabled ? "Загрузка" : title }</Text>
    </TouchableOpacity>
  )
}

export default ButtonEvion
