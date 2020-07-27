import React, { Component } from 'react';
import { Text, ScrollView, View, Dimensions, StyleSheet, ImageBackground, Image, FlatList} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import SafeAreaView from 'react-native-safe-area-view';
import Loading from './LoadingComponent';

const { width } = Dimensions.get('window');

const height = width * 0.8;

const mapStateToProps = state => {
    return {
        coursespage: state.coursespage,
        coursespagesearchresults: state.coursespagesearchresults

    };
};

class IDTechCourses extends Component {

    static navigationOptions = {
        title: 'Courses'
    }

    render() {
        const { navigate } = this.props.navigation;

        const renderDirectoryItem = ({item}) => {
            return (
                <SafeAreaView 
                    forceInset={{top: 'always', horizontal: 'never'}}
                    >
                    <View style={styles.detailHeader}>
                        <View style={{flex: 1}}>
                            <Image source={{uri:item.image}} style={styles.detailImage} />
                        </View>
                        <View style={{flex: 2}}>
                            <View style={styles.headerDirection}>
                                <Text style={styles.coursevirtualbadge}> {item.location} </Text> 
                                <Text style={styles.detailText}> {item.title}</Text> 
                            </View>
                            <View style={styles.detailDirection}>
                                <Text style={styles.detailText}>{item.filter}</Text>                                    
                                <Text style={styles.detailText}>{item.ages}</Text>                                   
                                <Text style={styles.detailText}>{item.gender}</Text>
                                <Text style={styles.detailText}>{item.duration}</Text>   
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
               
            );   
            }
        
            if (this.props.coursespagesearchresults.isLoading) {
            return <Loading />;
        }
        if (this.props.coursespagesearchresults.errMess) {
            return (
                <View>
                    <Text>{this.props.coursespagesearchresults.errMess}</Text>
                </View>
            );
        }


        return (
            <ScrollView>
                <ImageBackground key={this.props.coursespage.coursespage.id} style={styles.image} source={{uri:this.props.coursespage.coursespage.headerimg}}>
                        <Text style={styles.textStyle} >
                            {this.props.coursespage.coursespage.headertxth}
                        </Text>
                        <Text style={styles.textStyleBottom} >
                            {this.props.coursespage.coursespage.headertxtp}
                        </Text>
                </ImageBackground> 

                <FlatList
                    data={this.props.coursespagesearchresults.coursespagesearchresults}
                    renderItem={renderDirectoryItem}
                    keyExtractor={item => item.id.toString()}
                />
          
            </ScrollView>
  
        );
    }
}
const styles = StyleSheet.create({
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
        paddingTop: 100,
        textAlign:'center',
        fontSize: 15,
        fontWeight: "bold",
        color: 'white',
        backgroundColor:'transparent',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    detailHeader: {
        height: 120,
        // flex:1,
        flexDirection: 'row',
    },
    detailDirection: {
        flexDirection: 'column',
    },
    headerDirection: {
        flexDirection: 'row',
    },
    detailText: {
        color: '#fff',
        fontSize: 15,
        color:'black',
        fontWeight: 'bold'
     
    },
    detailImage: {
        marginLeft: 10,
        height: 120,
        width: 120
    },
    coursevirtualbadge:{
        backgroundColor: '#4331b9',
        fontSize: 15,
        color: '#fff',
        borderRadius: 10,
      }
  });

export default connect(mapStateToProps)(IDTechCourses);