import React, { Component } from 'react';
import { Text, ScrollView, View, Dimensions, StyleSheet, ImageBackground, FlatList} from 'react-native';
import { Card, Tile} from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';

const { width } = Dimensions.get('window');

const height = width * 0.8;

const mapStateToProps = state => {
    return {
        onlinepage: state.onlinepage,
        onlinepagecards: state.onlinepagecards
    };
};

class IDTechOnline extends Component {

    static navigationOptions = {
        title: 'Online'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <Card
                    title={item.name}
                    image={{uri: baseUrl+item.image}}>
                    <Text
                        style={{margin: 10}}>
                        {item.description}
                    </Text>    
                </Card>
            );   
            }
        
            if (this.props.onlinepagecards.isLoading) {
            return <Loading />;
        }
        if (this.props.onlinepagecards.errMess) {
            return (
                <View>
                    <Text>{this.props.onlinepagecards.errMess}</Text>
                </View>
            );
        }
     
        return (
            <ScrollView>
                <ImageBackground key={this.props.onlinepage.onlinepage.id} style={styles.image} source={{uri:baseUrl +this.props.onlinepage.onlinepage.headerimg}}>
                        <Text style={styles.textStyle} >
                            {this.props.onlinepage.onlinepage.headertxth}
                        </Text>
                        <Text style={styles.textStyleBottom} >
                            {this.props.onlinepage.onlinepage.headertxtp}
                        </Text>
                </ImageBackground>
                <View style={styles.textContainer}>
                    <Text style={styles.textHeaderStyle}>Online Private Lesson</Text> 
                    <Text style={styles.textParaStyle}>Learn to code. Discover AI. Mod Minecraft. Create with Roblox. Develop a video game with Unreal.</Text> 
                    <Text style={styles.textParaStyle}>Your child can choose from one of our themes, or customize their own! With 1-on-1 attention from our iD Certified Instructors, they’ll build in-demand skills and create a completely personalized project—all from the comfort of home.</Text>
                    <Text style={styles.textParaStyle} >For all skill levels, ages 7-19.</Text>
                </View>
                {/* <Tile
                    title={this.props.onlinepage.onlinepage.headertxth}
                    caption={this.props.onlinepage.onlinepage.headertxtp}
                    featured
                    // onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
                    imageSrc={{uri: baseUrl + this.props.onlinepage.onlinepage.headerimg}}
                /> */}
                <FlatList
                    data={this.props.onlinepagecards.onlinepagecards}
                    renderItem={renderDirectoryItem}
                    keyExtractor={item => item.id.toString()}
                />
        </ScrollView>    
        );
    }
}
const styles = StyleSheet.create({
    textContainer: {
        margin:10,
        padding :10,
        alignItems: 'center'
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

export default connect(mapStateToProps)(IDTechOnline);