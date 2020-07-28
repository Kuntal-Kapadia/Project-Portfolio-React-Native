import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, ImageBackground } from 'react-native';
// import { Card } from 'react-native-elements';

const { width } = Dimensions.get('window');

const height = width * 0.8;

class Carousel extends Component {
  render() {
    if (this.props.images && this.props.images.length) {
      return (
        <View
          style={styles.scrollContainer}
        >
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
              {this.props.images.map(image => (
                  <ImageBackground key={image.key} style={styles.image} source={{uri:image.src}}>
                    <Text style={styles.textStyle} >
                        {image.caption}
                    </Text>
                    <Text style={styles.textStyleBottom} >
                        {image.header}
                    </Text>
                  </ImageBackground>          
              ))}
          </ScrollView>
        </View>
      );
    }
    return null;    
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    height,
  },
  image: {
    justifyContent:'center',
    alignItems:'center', 
    width,
    height,
  },
textStyle:{
  textAlign:'center',
  fontSize: 20,
  fontWeight: "bold",
  color: 'white',
  backgroundColor:'transparent',
  textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10
},
textStyleBottom:{
  paddingTop: 200,
  textAlign:'center',
  fontSize: 15,
  fontWeight: "bold",
  color: 'white',
  backgroundColor:'transparent',
  textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10
}

});

export default Carousel;