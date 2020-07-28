import React, { Component } from 'react';
import { Text, ScrollView, View, Dimensions, StyleSheet, ImageBackground, WebView} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';

const { width } = Dimensions.get('window');

const height = width * 0.8;

const mapStateToProps = state => {
    return {
        whyidpage: state.whyidpage
    }

};
class IDTechWhyID extends Component {

    static navigationOptions = {
        title: 'Why ID Tech'
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <ScrollView
                style={styles.scrollContainer}
             >
                <ImageBackground key={this.props.whyidpage.whyidpage.id} style={styles.image} source={{uri:this.props.whyidpage.whyidpage.headerimg}}>
                        <Text style={styles.textStyle} >
                            {this.props.whyidpage.whyidpage.headertxth}
                        </Text>
                        <Text style={styles.textStyleBottom} >
                            {this.props.whyidpage.whyidpage.headertxtp}
                        </Text>
                </ImageBackground>   
                <Card
                    title="iDTech is the Best"
                    image={{uri: this.props.whyidpage.whyidpage.img1}}>
                    <Text
                        style={{margin: 10}}>
                        "More Text with idTech Proposition"
                    </Text>    
                </Card>    
                <Card
                    title="iDTech is the Best"
                    image={{uri: this.props.whyidpage.whyidpage.img2}}>
                    <Text
                        style={{margin: 10}}>
                        "More Text with idTech Proposition"
                    </Text>    
                </Card>    
                <Card
                    title="iDTech is the Best"
                    image={{uri: this.props.whyidpage.whyidpage.img3}}>
                    <Text
                        style={{margin: 10}}>
                        "More Text with idTech Proposition"
                    </Text>    
                </Card>    
                <Card
                    title="iDTech is the Best"
                    image={{uri: this.props.whyidpage.whyidpage.img4}}>
                    <Text
                        style={{margin: 10}}>
                        "More Text with idTech Proposition"
                    </Text>    
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

export default connect(mapStateToProps)(IDTechWhyID);