import React, { Component } from 'react';
import { Text, ScrollView, View, Dimensions, StyleSheet, ImageBackground} from 'react-native';
import { Tile, Button, Icon} from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const { width } = Dimensions.get('window');

const height = width * 0.8;

const mapStateToProps = state => {
    return {
        learningpage: state.learningpage
    }

};

class IDTechLearning extends Component {

    static navigationOptions = {
        title: 'Group Lessons'
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
        
            <ScrollView>
                <ImageBackground key={this.props.learningpage.learningpage.id} style={styles.image} source={{uri:
                    this.props.learningpage.learningpage.headerimg}}>
                        <Text style={styles.textStyle} >
                            {this.props.learningpage.learningpage.headertxth}
                        </Text>
                        <Text style={styles.textStyleBottom} >
                            {this.props.learningpage.learningpage.headertxtp}
                        </Text>
                </ImageBackground>      
                <View style={styles.textContainer}>
                    <Text style={styles.textHeaderStyle}>You get more. A LOT more</Text> 
                    <Text style={styles.textParaStyle}>iD Tech is the very best experience built around you—your interests, your skill level, your goals for the future.</Text>
                    <Text style={styles.textParaStyle} > Each program includes an exclusive package designed for your maximum inspiration and long-term success.
                    Your spring and summer tuition includes :
                    </Text>
                </View>    
                <Tile
                    title=""
                    caption="CLICK here for information on Private Lessons"
                    featured
                    onPress={() => navigate('Online')}
                    titleStyle={{fontSize:30,fontWeight:'bold',color:'white'}}
                    captionStyle={{fontSize:30,fontWeight:'bold',color:'white',textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowOffset: {width: -1, height: 1},
                    textShadowRadius: 10}}
                    imageSrc={{uri: baseUrl + this.props.learningpage.learningpage.virtualcampimg}}
                />
                 <View style={styles.textContainer}>
                    <Text style={styles.textHeaderStyle}>You get more. A LOT more</Text> 
                    <Text style={styles.textParaStyle}>iD Tech is the very best experience built around you—your interests, your skill level, your goals for the future.</Text>
                    <Text style={styles.textParaStyle} > Each program includes an exclusive package designed for your maximum inspiration and long-term success.
                    Your spring and summer tuition includes :
                    </Text>
                </View>
                    <Tile
                    title=""
                    caption="CLICK here for information on Virtual Camps"
                    featured
                    onPress={() => navigate('Virtual')}
                    titleStyle={{fontSize:30,fontWeight:'bold',color:'white'}}
                    captionStyle={{fontSize:30,fontWeight:'bold',color:'white',textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowOffset: {width: -1, height: 1},
                    textShadowRadius: 10}}
                    imageSrc={{uri: baseUrl + this.props.learningpage.learningpage.privatelessonimg}}
                />
                 <View style={styles.textContainer}>
                    <Text style={styles.textHeaderStyle}>You get more. A LOT more</Text> 
                    <Text style={styles.textParaStyle}>iD Tech is the very best experience built around you—your interests, your skill level, your goals for the future.</Text>
                    <Text style={styles.textParaStyle} > Each program includes an exclusive package designed for your maximum inspiration and long-term success.
                    Your spring and summer tuition includes :
                    </Text>
                </View>
                    <Tile
                        title=""
                        caption="CLICK here for information on Private Lessons"
                        featured
                        onPress={() => navigate('Online')}
                        titleStyle={{fontSize:30,fontWeight:'bold',color:'white'}}
                    captionStyle={{fontSize:30,fontWeight:'bold',color:'white', textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowOffset: {width: -1, height: 1},
                    textShadowRadius: 10}}
                        imageSrc={{uri: baseUrl + this.props.learningpage.learningpage.teacherimg}}
                />
                 <View style={styles.textContainer}>
                    <Text style={styles.textHeaderStyle}>You get more. A LOT more</Text> 
                    <Text style={styles.textParaStyle}>iD Tech is the very best experience built around you—your interests, your skill level, your goals for the future.</Text>
                    <Text style={styles.textParaStyle} > Each program includes an exclusive package designed for your maximum inspiration and long-term success.
                    Your spring and summer tuition includes :
                    </Text>
                </View>
                <Button
                    title="Click to know about Virtual Camps"
                    icon={
                        <Icon
                            name='laptop'
                            type='font-awesome'
                            color='black'
                            size={30}
                            iconStyle={{marginRight: 25}}
                        />
                    }
                    titleStyle={{color:'black', fontSize:17, fontWeight:'bold'}}
                    
                    onPress={() => navigate('Virtual')}
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

export default connect(mapStateToProps)(IDTechLearning);