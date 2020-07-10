import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class IDTechCourses extends Component {

    static navigationOptions = {
        title: 'IDTechCourses'
    }

    render() {
        return (
            <ScrollView>
                <Card
                    wrapperStyle={{margin: 20}}
                    title="IDTech Courses Page">
                        <Text>Courses Screen for IDTech</Text>
                        <Text>This will have the Courses page Info</Text>
                        <Text style={{marginBottom: 10}}>USA</Text>
                        <Text>I am just getting started...</Text>
                        <Text>Genius I am ..</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default IDTechCourses;