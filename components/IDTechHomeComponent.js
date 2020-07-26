import React, { Component } from 'react';
import { FlatList, View,Text, ScrollView, StyleSheet,Image} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';
import Carousel from './Carousel';




const mapStateToProps = state => {
    return {
        homepagecards: state.homepagecards,
        homepagecarousel : state.homepagecarousel,
    };

};

class IDTechHome extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {     
        const { navigate } = this.props.navigation;
        
        const renderDirectoryItem = ({item}) => {
            return (
                <Card
                    title={item.name}
                    image={{uri: item.image}}>
                    <Text
                        style={{margin: 10}}>
                        {item.description}
                    </Text>    
                </Card>
            );   
            }
        
            if (this.props.homepagecards.isLoading) {
            return <Loading />;
        }
        if (this.props.homepagecards.errMess) {
            return (
                <View>
                    <Text>{this.props.homepagecards.errMess}</Text>
                </View>
            );
        }
     
        return (
            <ScrollView>
                <Carousel images = {this.props.homepagecarousel.homepagecarousel} />
                <View style={styles.textContainer}>
                    <Text style={styles.textHeaderStyle}>You get more. A LOT more</Text> 
                    <Text style={styles.textParaStyle}>iD Tech is the very best experience built around you—your interests, your skill level, your goals for the future.</Text>
                    <Text style={styles.textParaStyle} > Each program includes an exclusive package designed for your maximum inspiration and long-term success.
                    Your spring and summer tuition includes :
                    </Text>
                </View>
                <FlatList
                    data={this.props.homepagecards.homepagecards}
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
    

export default connect(mapStateToProps)(IDTechHome);
