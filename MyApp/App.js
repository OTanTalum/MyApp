import React from 'react';
import {FlatList, ActivityIndicator, Text, View, StyleSheet  } from 'react-native';

export default class SimpleApp extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isLoading: true,
        }
    }

    componentDidMount(){
        return fetch('https://api.deezer.com/user/2529/playlists',{
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.data,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }


    render(){
        if(this.state.isLoading){
            return(
                <View style={styles.loading}>
                    <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />
                </View>
            )
        }

        return(
            <View style={styles.baseText}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.title}</Text>}
                    keyExtractor={({id}, index) => id}
                />
            </View>
        );
    }
}



const styles=StyleSheet.create({
    loading:{
        flex: 1,
        justifyContent: 'center',
    },
    baseText:{
        flex: 1,
        paddingTop:60,
        paddingLeft:15,
    },
});
