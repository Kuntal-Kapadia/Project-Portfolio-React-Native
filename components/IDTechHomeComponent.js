import React, { Component } from 'react';
import { FlatList, View,Text, ScrollView, Image, Dimensions,} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';


const mapStateToProps = state => {
    return {
        homepagecards: state.homepagecards,
        homepagecarousel : state.homepagecarousel,
    };

};


class IDTechHome extends Component {

    static navigationOptions = {
        title: 'IDTechHome'
    }

    render() {     
        const { navigate } = this.props.navigation;

        const renderCarouselDirectoryItem = ({item}) => {
            return (
                <Card
                    title={item.caption}
                    image={{uri: item.src}}>
                    <Text
                        style={{margin: 10}}>
                        {item.header}
                    </Text>           
                </Card>
            );   
        }

        if (this.props.homepagecarousel.isLoading) {
            return <Loading />;
            }
        if (this.props.homepagecarousel.errMess) {
            return (
                <View>
                    <Text>{this.props.homepagecarousel.errMess}</Text>
                </View>
            );
            }
        
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
                <FlatList
                    data={this.props.homepagecarousel.homepagecarousel}
                    renderItem={renderCarouselDirectoryItem}
                    keyExtractor={item => item.key.toString()}
                />
                <FlatList
                    data={this.props.homepagecards.homepagecards}
                    renderItem={renderDirectoryItem}
                    keyExtractor={item => item.id.toString()}
                />
            </ScrollView>
        );
    }
    
}
export default connect(mapStateToProps)(IDTechHome);
