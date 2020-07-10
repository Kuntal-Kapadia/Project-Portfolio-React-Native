import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class IDTechOnline extends Component {

    static navigationOptions = {
        title: 'IDTechOnline'
    }

    render() {
        return (
            <ScrollView>
                <Card
                    wrapperStyle={{margin: 20}}
                    title="IDTech OnlinePage">
                        <Text>Online Screen for IDTech</Text>
                        <Text>This will have the Online page Info</Text>
                        <Text style={{marginBottom: 10}}>USA</Text>
                        <Text>I am just getting started...</Text>
                        <Text>Genius I am ..</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default IDTechOnline;