import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useAuth } from "../contexts/AuthContext";


const ProfileScreen = () => {
  const { getProfile, oneUser } = useAuth()

  useEffect(() => {
    getProfile()
  }, [])

  if (!oneUser) {
    return <Text>Loading...</Text>;
  }
  
  console.log(oneUser)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <Image source={"https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"} style={styles.userImg} />
        <Text style={styles.userName}>{ oneUser?.username }</Text>
        {/* <Text>{route.params ? route.params.userId : user.uid}</Text> */}
        <Text style={styles.aboutUser}>{ oneUser?.phone }</Text>
  
        <View style={styles.userInfoWrapper}>
          <View style={styles.userInfoItem}>

            <Text style={styles.userInfoTitle}>{ oneUser?.wallet.transactions.length === 0 ? 0 : oneUser?.wallet.transactions.length}</Text>

            <Text style={styles.userInfoSubTitle}>Транзакции</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>{ oneUser?.wallet.walletBalance } сом</Text>
            <Text style={styles.userInfoSubTitle}>Кошелек</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>100</Text>
            <Text style={styles.userInfoSubTitle}>Following</Text>
          </View>
        </View>



      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
  },
  userBtn: {
    borderColor: "#2e64e5",
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: "#2e64e5",
  },
  userInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: "center",
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },

});

