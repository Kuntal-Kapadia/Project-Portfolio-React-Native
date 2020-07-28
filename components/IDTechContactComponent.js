import React, { Component } from 'react';
import { Text, ScrollView, View, Dimensions, StyleSheet, ImageBackground, Image, Linking} from 'react-native';
import { Card, Button, Icon, SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as MailComposer from 'expo-mail-composer';
import { learningpageLoading } from '../redux/ActionCreators';

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
                <ImageBackground key={this.props.registerpage.registerpage.id} style={styles.image} source={{uri:this.props.registerpage.registerpage.headerimg}}>
                        <Text style={styles.textStyle} >
                            {this.props.registerpage.registerpage.headertxth}
                        </Text>
                        <Text style={styles.textStyleBottom} >
                            {this.props.registerpage.registerpage.headertxtp}
                        </Text>
                </ImageBackground>          

                <Card
                    style={{alignItems:'center'}}
                >
                    <View style={styles.socialContainer}>
                        <View style={{flex: 1}}>
                            <Image source={require('./images/idtech.png')} style={{marginRight:5,height:120, width:100}}/> 
                        </View>
                        <View style={{flex: 2}}>
                            <Text>iDTech Corporate Headquarters</Text>
                            <Text>10721 Walker Street Cypress,</Text>
                            <Text> CA 90630-4720, USA</Text>
                            <View style={styles.socialContainer}>
                                <Icon
                                    name='phone'
                                    type='font-awesome'
                                    size={20}
                                    iconStyle={styles.stackIcon}
                                />
                                <Text>Phone: +1 408-871-3700</Text>
                            </View>
                            <View style={styles.socialContainer}>
                                <Icon
                                    name='envelope-o'
                                    type='font-awesome'
                                    iconStyle={styles.stackIcon}
                                    onPress={() => this.sendMail()}
                                />
                                <Text>Email: hello@iDTech.com</Text>
                            </View>
                        </View>
                    </View>
                   
                <View style={styles.socialContainer}>
                        <SocialIcon
                            type='twitter'
                            style={styles.socialImage}
                            onPress={() =>Linking.openURL('https://twitter.com/idtechcamps')}
                        />
                        <SocialIcon
                            type='facebook'
                            style={styles.socialImage}
                            onPress={() =>Linking.openURL('https://www.facebook.com/computercamps')}
                        />
                        <SocialIcon
                            type='instagram'
                            style={styles.socialImage}
                            onPress={() =>Linking.openURL('https://www.instagram.com/idtech/')}
                        />
                        <SocialIcon
                            type='youtube'
                            style={styles.socialImage}
                            onPress={() =>Linking.openURL('https://www.youtube.com/channel/UCxfgxJx4I7krS0mykkN-A9Q')}
                        />
                    </View>
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
    }, 
    socialContainer: {
        // backgroundColor: 'green',
        // height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    socialImage: {
        marginTop: 30,
        marginRight: 20,
        marginLeft: 20,
        height: 40,
        width: 40
    },
    stackIcon: {
        marginRight: 10,
        fontSize: 24,
        color:"black"
    }
  });

export default connect(mapStateToProps)(Contact);