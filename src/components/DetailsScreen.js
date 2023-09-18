import React from 'react';
import { View } from 'react-native';
import { mapStyles } from '../styles/MapStyles';
import ButtonStation from './ButtonStation';

const DetailsScreen = ({ location, setDetailsShow, setSelectedLocation }) => {
  const handleBackPress = () => {
    setDetailsShow(false);
  };

  return (
    <View style={mapStyles.variantChargeStation}>
      <View style={mapStyles.detailsBlock}>
        {location && location.variant && location.variant.map((item, index) => (
          <ButtonStation
            key={index}
            onPress={() => setSelectedLocation(location)}
            title={`Доступная станция ${item} 40кВт`}
            background={"#028572"}
          />
        ))}
        <ButtonStation onPress={handleBackPress} title={"Назад"} background={"black"} />
      </View>
    </View>
  );
};

export default DetailsScreen;
