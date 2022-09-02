import React, {Component} from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

import Picturelist from "./app/components/PictureList";
import CameraDialog from "./app/components/CameraDialog";

export default class App extends Component {

  state = {
    picturelist: [
      {id: '1', url: 'https://static.fandomspot.com/images/11/10388/002-shrek-meme.jpg'},
      {id: '2', url: 'https://static.fandomspot.com/images/11/10388/002-shrek-meme.jpg'},
      {id: '3', url: 'https://static.fandomspot.com/images/11/10388/002-shrek-meme.jpg'}
    ],
    isModalOpen: false
  }

  onPictureSelect = (item) => {
    
  }

  render() {

    const {state} = this;

    return(

    <View style={styles.container}>
      <Picturelist list={state.picturelist} onClick={this.onPictureSelect}/>
      <View style={styles.footer}>
        <Button 
          onPress={this.openModal} 
          title="Nova Foto" 
          color="#0062ac"/>
      </View>
      <CameraDialog isOpen={state.isModalOpen}/>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: "#999",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  footer: {
    padding: 15,
    backgroundColor: "#999",
    width: '100%',
    textAlign: 'center',
  },
});
