import React, { Component } from 'react';
import { Text, ScrollView, View, Dimensions, StyleSheet, ImageBackground} from 'react-native';
import { Card, Tile, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const { width } = Dimensions.get('window');

const height = width * 0.8;

const mapStateToProps = state => {
    return {
        virtualpage: state.virtualpage
    }

};

class IDTechVirtual extends Component {

    static navigationOptions = {
        title: 'Virtual Camps'
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
     
            <ScrollView>
                <ImageBackground key={this.props.virtualpage.virtualpage.id} style={styles.image} source={{uri:baseUrl +this.props.virtualpage.virtualpage.headerimg}}>
                        <Text style={styles.textStyle} >
                            {this.props.virtualpage.virtualpage.headertxth}
                        </Text>
                        <Text style={styles.textStyleBottom} >
                            {this.props.virtualpage.virtualpage.headertxtp}
                        </Text>
                </ImageBackground> 
                <View style={styles.textContainer}>
                    <Text style={styles.textHeaderStyle}>Online Private Lesson</Text> 
                    <Text style={styles.textParaStyle}>Learn to code. Discover AI. Mod Minecraft. Create with Roblox. Develop a video game with Unreal.</Text> 
                    <Text style={styles.textParaStyle}>Your child can choose from one of our themes, or customize their own! With 1-on-1 attention from our iD Certified Instructors, they’ll build in-demand skills and create a completely personalized project—all from the comfort of home.</Text>
                    {/* <Text style={styles.textParaStyle} >For all skill levels, ages 7-19.</Text> */}
                </View>
                <Tile
                    title="Details... lorem ipsum"
                    caption="And more... and more.. and more.."
                    featured
                    // onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
                    imageSrc={{uri: baseUrl + this.props.virtualpage.virtualpage.virtualcampimg}}
                />    
                 <View style={styles.textContainer}>
                    <Text style={styles.textHeaderStyle}>Virtual Camps for your child</Text> 
                    <Text style={styles.textParaStyle}>Learn to code. Discover AI. Mod Minecraft. Create with Roblox. Develop a video game with Unreal.</Text> 
                    <Text style={styles.textParaStyle}>Your child can choose from one of our themes, or customize their own! With 1-on-1 attention from our iD Certified Instructors, they’ll build in-demand skills and create a completely personalized project—all from the comfort of home.</Text>
                    {/* <Text style={styles.textParaStyle} >For all skill levels, ages 7-19.</Text> */}
                </View>     
                <Button
                    title="Click for information on Private Lessons"
                    icon={
                        <Icon
                            name='list'
                            type='font-awesome'
                            color='black'
                            size={30}
                            iconStyle={{marginRight: 25}}
                        />
                    }
                    titleStyle={{color:'black', fontSize:17, fontWeight:'bold'}}
                    
                    onPress={() => navigate('Sample')}
                    buttonStyle={{backgroundColor: '#7eb444', justifyContent: 'flex-start', alignItems:'flex-start'}}
                    />
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
    textContainer: {
        margin:10,
        padding :10,
        alignItems: 'center'
    },
    textHeaderStyle:{
        textAlign:'center',
        fontSize: 20,
        fontWeight: "bold",
        color: 'black',
        margin : 10,
        padding: 10,
        backgroundColor:'transparent',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    textParaStyle:{
        // textAlign:'center',
        fontSize: 15,
        fontWeight: "bold",
        color: 'black',
        marginBottom : 10,
    },
  });

export default connect(mapStateToProps)(IDTechVirtual);