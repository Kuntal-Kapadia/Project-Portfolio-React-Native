import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        registerpage: state.registerpage
    };
};

class IDTechRegister extends Component {

    static navigationOptions = {
        title: 'IDTechRegister'
    }

    render() {
        return (
            <ScrollView>
                <Card
                    wrapperStyle={{margin: 20}}
                    title="IDTech Register Page">
                        <Text>Register Screen for IDTech</Text>
                        <Text>This will have the Register page Info</Text>
                        <Text style={{marginBottom: 10}}>USA</Text>
                        <Text>I am just getting started...</Text>
                        <Text>Genius I am ..</Text>
                </Card>
            </ScrollView>
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