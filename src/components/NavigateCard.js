import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CustomSwitch } from './SwitchBTN';
import { styles } from '../styles/AuthorizationStyles';
import { useAuth } from '../contexts/AuthContext';

function NavigateCard({ locations, setSelectedLocation }) {
  const { getProfile, oneUser, changeStatus, changeClientCount, changeClientCountDec } = useAuth();
  const [counter, setCounter] = useState(0);
  const [checked, setChecked] = useState(false);
  const [ user, setUser ] = useState(null);

  const handleCounter = () => {
    if (counter < 6) {
      setCounter(counter + 1);
      changeClientCount(oneUser?._id, counter)
    } else {
      setCounter(counter);
    }
  };

  const handleDeCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      changeClientCountDec(oneUser?._id, counter)
    } else if (counter < 0) {
      setCounter(counter);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if(oneUser) {
      setUser(oneUser);
      setCounter(oneUser.clients_count);
      setChecked(oneUser.status); 
    }
  }, [oneUser]);  


  const handleSwitchToggle = () => {
    if (user?._id) {
      console.log("Отправляем запрос на сервер...");
      changeStatus(user?._id, { status: !checked }) 
        .then((response) => {
          console.log(oneUser)
          setChecked(!checked)
        })
        .catch((error) => {
          console.error("Ошибка при отправке запроса:", error);
        });
    } else {
      console.warn("ID пользователя не определен.", user?._id);
    }
  };  

  console.log(oneUser)

  return (
    <View style={{ backgroundColor: "#145BA6", height: "100%", width: "100%", position: "absolute", top: "60%", paddingVertical: 10 }}>
      <View style={styles.control}>
        <View style={styles.buttons_count}>
          <TouchableOpacity onPress={handleCounter} style={styles.count}><Text style={styles.count_text}>+</Text></TouchableOpacity>
          <Text style={styles.result_count}>{counter}</Text>
          <TouchableOpacity onPress={handleDeCounter} style={styles.count}><Text style={styles.count_text}>-</Text></TouchableOpacity>
        </View>
        <Text style={styles.text}>Количество свободных мест</Text>
        <View style={{ width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
          { oneUser !== null ? (
            <CustomSwitch
              isOn={oneUser?.status}
              handleToggle={handleSwitchToggle}
              colorOne="#145BA6"
              colorTwo="#00964F"
            />
          ) : (null) }
        </View>
      </View>
    </View>
  );
}

export default NavigateCard;
