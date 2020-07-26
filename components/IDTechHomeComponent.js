import React, { Component } from 'react';
import { FlatList, View,Text, ScrollView, Image} from 'react-native';
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
            <View>
                <Carousel images = {this.props.homepagecarousel.homepagecarousel} />
                <FlatList
                    data={this.props.homepagecards.homepagecards}
                    renderItem={renderDirectoryItem}
                    keyExtractor={item => item.id.toString()}
                /> 
            </View>
        );
        }
    }   
   
    

export default connect(mapStateToProps)(IDTechHome);
