import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function DetailScreen({navigation, route}) {
  const {user}= route.params;
  const {name, bio, avatar_url} = user;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image style = {styles.fundo}
        source ={{ uri: avatar_url }}
        ></Image>
        <Text style = {styles.texto}>{name}</Text>
        <Text>{bio}</Text>
      </View>
    );

  }
  const styles = StyleSheet.create({
    fundo:{
      width: 200,
      height: 200,
      borderRadius: 50,
      marginBottom: 20,
      borderWidth: 4,
      borderColor: 'black',
    },

    texto:{
      fontSize: 20,
    }
    
  });

  
  export default DetailScreen;
