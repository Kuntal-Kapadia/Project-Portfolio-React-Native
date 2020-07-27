import React, { Component } from 'react';
import IDTechHome from './IDTechHomeComponent';
import IDTechWhyID from './IDTechWhyIDComponent';
import IDTechOnline from './IDTechOnlineComponent';
import IDTechCourses from './IDTechCoursesComponent';
import Contact from './IDTechContactComponent';
import Login from './IDTechLoginComponent';
import IDTechVirtual from './IDTechVirtualComponent';
import IDTechLearning from './IDTechLearningComponent';
import { View, Platform, StyleSheet, Text, ScrollView,Image } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { connect } from 'react-redux';
import { fetchHomepagecards, fetchHomepagecarousel, fetchWhyidpage, fetchOnlinepage,  fetchOnlinepagecards, fetchLearningpage,fetchVirtualpage,fetchRegisterpage, fetchCoursespage, fetchCoursespagesidebar, fetchCoursespagesearchresults } from '../redux/ActionCreators';

const mapDispatchToProps = {
    fetchHomepagecards,
    fetchHomepagecarousel, 
    fetchWhyidpage,
    fetchOnlinepage,
    fetchOnlinepagecards, 
    fetchLearningpage,
    fetchVirtualpage,
    fetchRegisterpage, 
    fetchCoursespage,
    fetchCoursespagesidebar,
    fetchCoursespagesearchresults
};


const HomeNavigator = createStackNavigator(
    {
        Home: { screen:  IDTechHome }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#7eb444'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);
const  WhyIDNavigator = createStackNavigator(
    {
        WhyID: { screen: IDTechWhyID }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#7eb444'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='heart'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const OnlineNavigator = createStackNavigator(
    {
        Online: { 
            screen: IDTechOnline,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        Virtual: { screen: IDTechVirtual },
        Learning: { screen: IDTechLearning },

    },
    {
        initialRouteName: 'Online',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#7eb444'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const CoursesNavigator = createStackNavigator(
    {
        Courses: { screen: IDTechCourses }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#7eb444'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='info-circle'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);
const ContactNavigator = createStackNavigator(
    {
        Login: { screen: IDTechContact }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#7eb444'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='address-card'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);
const LoginNavigator = createStackNavigator(
    {
        Login: { screen: IDTechLogin }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#7eb444'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='sign-in'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView 
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('./images/id-logo.png')} style={styles.drawerImage} />
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {          
        Login: {
            screen: LoginNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='sign-in'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        WhyID: {
            screen: WhyIDNavigator,
            navigationOptions: {
                drawerLabel: 'Why ID Tech',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='heart'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Online: {
            screen: OnlineNavigator,
            navigationOptions: {
                drawerLabel: 'Online',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Courses: {
            screen: CoursesNavigator,
            navigationOptions: {
                drawerLabel: 'Courses',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Contact: {
            screen: ContactNavigator,
            navigationOptions: {
                drawerLabel: 'Contact Us',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='address-card'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        }
    },
    {
        initialRouteName: 'Home',
        drawerBackgroundColor: '#7eb444',            
        contentComponent: CustomDrawerContentComponent,
        contentOptions: {
            activeTintColor: 'white',
            itemsContainerStyle: {
              marginVertical: 0,
            },
            iconContainerStyle: {
              opacity: 1
            },
            labelStyle :{
                fontSize : 17
            }
          }
    }
);

class Main extends Component {
    componentDidMount() {
        this.props.fetchHomepagecards();
        this.props.fetchHomepagecarousel();
        this.props.fetchWhyidpage();
        this.props.fetchOnlinepage();
        this.props.fetchOnlinepagecards();
        this.props.fetchLearningpage();
        this.props.fetchVirtualpage();  
        this.props.fetchCoursespage();
        this.props.fetchCoursespagesidebar();
        this.props.fetchCoursespagesearchresults();
        this.props.fetchRegisterpage()    
    }
    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <MainNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: 'blue',
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 20,
        height: 70,
        width: 200
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});
export default connect(null, mapDispatchToProps)(Main);