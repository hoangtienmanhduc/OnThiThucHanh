import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        const{navigation} = this.props
        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Image
                        style={{ width: 300, height: 400 }}
                        source={require('../image/header.jpg')}
                    />
                </View>
                <View style={{marginTop:20}}>
                    <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', marginLeft: 15 }}>
                        Discover
                    </Text><Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', marginLeft: 15 }}>
                        premium coffee
                    </Text>
                    <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', marginLeft: 15 }}>
                        around you
                    </Text>
                </View >
                <View style={{marginTop:20}}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 7, borderWidth: 1, borderColor: '#feebc8', width: 300, marginLeft: 50 }} onPress={()=>{navigation.navigate('TrangChu')}}>
                        <Image style={{ width: 50, height: 50 }}
                            source={require('../image/fb.png')} />
                        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>SIGN IN WITH FACEBOOK</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:20}}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 7, borderWidth: 1, borderColor: '#feebc8', width: 300, marginLeft: 50 }} onPress={()=>{navigation.navigate('TrangChu')}}>
                        <Image style={{ width: 50, height: 50 }}
                            source={require('../image/gg.png')} />
                        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>SIGN IN WITH GOOGLE</Text>
                    </TouchableOpacity>
                </View> 
                <View style={{ alignItems: 'center', justifyContent: 'center',marginTop:10 }}>
                    <Text style={{color:'#feebc8'}}>Don't have an account?</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center',marginTop:10 }}>
                    <Text style={{color:'#feebc8',fontSize:15,fontWeight:'bold',textDecorationLine: "underline"}}>REGISTER</Text>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
});