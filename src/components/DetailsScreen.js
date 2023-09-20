import React, { useState } from 'react';
import { View } from 'react-native';
import { mapStyles } from '../styles/MapStyles';
import ButtonStation from './ButtonStation';

const DetailsScreen = ({ location, setDetailsShow, setSelectedLocation }) => {
  const [ disabledButton, setDisabledButton ] = useState(false);
  const handleBackPress = () => {
    setDetailsShow(false);
    setSelectedLocation(null);
    setDisabledButton(false);
  };

  const handleClicked = (item) => {
    setDisabledButton(true);
    setSelectedLocation(item);
  }

  return (
    <View style={mapStyles.variantChargeStation}>
      <View style={mapStyles.detailsBlock}>
        {location && location.variant && location.variant.map((item, index) => (
            !disabledButton && (
              <ButtonStation
              key={index}
              onPress={() => handleClicked(location)}
              title={`Доступная станция ${item} 40кВт`}
              background={"#028572"}
            />
            )
        ))}
        { disabledButton && (
          <ButtonStation
            onPress={() => console.log("yEAH")}
            title={`Нажмите когда будете у станции`}
            background={"#028572"}
          />
        ) } 
        <ButtonStation onPress={handleBackPress} title={"Назад"} background={"black"} />
      </View>
    </View>
  );
};

export default DetailsScreen;
