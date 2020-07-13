import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class IDTechLearning extends Component {

    static navigationOptions = {
        title: 'IDTechLearning'
    }

    render() {
        return (
            <ScrollView>
                <Card
                    wrapperStyle={{margin: 20}}
                    title="IDTech Learning Page">
                        <Text>Register Screen for IDTech</Text>
                        <Text>This will have the Register page Info</Text>
                        <Text style={{marginBottom: 10}}>USA</Text>
                        <Text>I am just getting started...</Text>
                        <Text>Genius I am ..</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default IDTechLearning;