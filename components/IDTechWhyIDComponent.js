import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class IDTechWhyID extends Component {

    static navigationOptions = {
        title: 'IDTechWhyID'
    }

    render() {
        return (
            <ScrollView>
                <Card
                    wrapperStyle={{margin: 20}}
                    title="IDTech WhyID Page">
                        <Text>WhyID for IDTech</Text>
                        <Text>This will have the WhyID page Info</Text>
                        <Text style={{marginBottom: 10}}>USA</Text>
                        <Text>I am just getting started...</Text>
                        <Text>Genius I am ..</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default IDTechWhyID;