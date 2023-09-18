import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { mapStyles } from '../styles/MapStyles';
import DetailsScreen from './DetailsScreen';

function NavigateCard({ locations, setSelectedLocation }) {
  
  const [ detailsShow, setDetailsShow ] = useState(false);
  const [ detailsInfo, setDetailsInfo ] = useState(null)

  const handleCardPress = (item) => {
    setDetailsShow(true)
    setDetailsInfo(item)
  };

  return (
    <View style={{ backgroundColor: "white", height: "100%", width: "100%", position: "absolute", top: "60%", paddingVertical: 10 }}>
      <Text style={mapStyles.title}>
        { !detailsShow ? "Выберите станцию" : `${detailsInfo.name}` }
      </Text>
      { !detailsShow ? (
        <ScrollView style={mapStyles.card} contentContainerStyle={mapStyles.cardContent}>
          {locations?.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={mapStyles.cardBlock}
              onPress={() => handleCardPress(item)} 
            >
              <Image source={require("../../assets/charging.png")} style={mapStyles.logo} />
              <View>
                <Text style={mapStyles.cardName}>{item?.name}</Text>
                <Text style={mapStyles.cardAddress}>{item?.variant}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <DetailsScreen setSelectedLocation={setSelectedLocation} location={detailsInfo} setDetailsShow={setDetailsShow} />
      ) }
    </View>
  )
}

export default NavigateCard;
