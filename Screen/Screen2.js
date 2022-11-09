import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/EvilIcons';


export default class TrangChu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginLeft:10}}>
                        <Icon name="align-justify" size={30} />
                    </View>
                    <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'center',marginLeft:80}}>
                        <Icon2 name="location-pin" size={30} />
                        <Text>Sukarabad, Dhaka</Text>
                    </View>
                    <View style={{marginLeft:50}}>
                        <Icon3 name="archive" size={30} />
                    </View>
                    <View style={{marginLeft:10}}>
                        <Icon3 name="bell" size={30} />
                    </View>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center',marginTop:20}}>
                <Image
                        style={{ width: 350, height: 150 }}
                        source={require('../image/headerStartBuck.jpg')}
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:20
    }
});