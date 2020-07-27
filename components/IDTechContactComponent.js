import React, { Component } from 'react';
import { Text, ScrollView, View, Dimensions, StyleSheet, ImageBackground} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';

const { width } = Dimensions.get('window');

const height = width * 0.8;

const mapStateToProps = state => {
    return {
        registerpage: state.registerpage
    };
};

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }
    sendMail() {
        MailComposer.composeAsync({
            recipients: ['campsites@nucamp.co'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        })
    }
    render() {
        const { navigate } = this.props.navigation;

        return (
            
            <ScrollView>
                {/* <ImageBackground key={this.props.registerpage.registerpage.id} style={styles.image} source={{uri:this.props.registerpage.registerpage.headerimg}}>
                        <Text style={styles.textStyle} >
                            {this.props.registerpage.registerpage.headertxth}
                        </Text>
                        <Text style={styles.textStyleBottom} >
                            {this.props.registerpage.registerpage.headertxtp}
                        </Text>
                </ImageBackground>           */}

                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                <Card
                    wrapperStyle={{margin: 20}}
                    title="Contact Information">
                            <Text>1 Nucamp Way</Text>
                            <Text>Seattle, WA 98001</Text>
                            <Text style={{marginBottom: 10}}>USA</Text>
                            <Text>Phone: 1-206-555-1234</Text>
                            <Text>Email: campsites@nucamp.co</Text>
                            <Button
                            title="Send Email"
                            buttonStyle={{backgroundColor: '#7eb444', margin: 40}}
                            icon={<Icon
                                name='envelope-o'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{marginRight: 10}}
                            />}
                            onPress={() => this.sendMail()}
                        />
                </Card>
                </Animatable.View>

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

export default connect(mapStateToProps)(Contact);