import React, { Component } from 'react';
import { Text, ScrollView, View, Dimensions, StyleSheet, ImageBackground} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';

const { width } = Dimensions.get('window');

const height = width * 0.8;

const mapStateToProps = state => {
    return {
        registerpage: state.registerpage
    };
};

class IDTechRegister extends Component {

    static navigationOptions = {
        title: 'Login'
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View
                style={styles.scrollContainer}
             >
            <ScrollView>
                <ImageBackground key={this.props.registerpage.registerpage.id} style={styles.image} source={{uri:this.props.registerpage.registerpage.headerimg}}>
                        <Text style={styles.textStyle} >
                            {this.props.registerpage.registerpage.headertxth}
                        </Text>
                        <Text style={styles.textStyleBottom} >
                            {this.props.registerpage.registerpage.headertxtp}
                        </Text>
                </ImageBackground>          
                
            </ScrollView>
        </View>    
        );
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

export default connect(mapStateToProps)(IDTechRegister);