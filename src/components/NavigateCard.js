import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CustomSwitch } from './SwitchBTN';
import { styles } from '../styles/AuthorizationStyles';

function NavigateCard({ locations, setSelectedLocation }) {
  const [counter, setCounter] = useState(0);
  const [checked, setChecked] = useState(false);

  const incrementCounter = () => {
    if(counter < 6) {
      setCounter(counter + 1);
    } else {
      setCounter(counter);
    }
  };

  const decrementCounter = () => {
    if(counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(counter);
    }
  };

  return (
    <View style={{ backgroundColor: "#145BA6", height: "100%", width: "100%", position: "absolute", top: "60%", paddingVertical: 10 }}>
      <View style={styles.control}>
        <View style={styles.buttons_count}>
          <TouchableOpacity onPress={incrementCounter} style={styles.count}><Text style={styles.count_text}>+</Text></TouchableOpacity>
          <Text style={styles.result_count}>{counter}</Text>
          <TouchableOpacity onPress={decrementCounter} style={styles.count}><Text style={styles.count_text}>-</Text></TouchableOpacity>
        </View>
        <Text style={styles.text}>Количество свободных мест</Text>
        <View style={{ width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
            <CustomSwitch
              isOn={checked}
              handleToggle={() => setChecked(!checked)}
              colorOne="#819CB9"
              colorTwo="#00964F"
            />
        </View>
      </View>
    </View>
  );
}

export default NavigateCard;
