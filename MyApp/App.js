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
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
            "eyJpZCI6IjE5MTY5MzY2MjQxIiwiaWF0IjoxNTc0NzQ1MzkzfQ." +
            "KNjy849Hj6eJLSV_holfJzNGBU9UUoJADGb3Y4hBMj0";
        return fetch('https://prod.mascotbe.com/groups/discover',{

                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
            }
        )
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.groups,
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
        if(this.state.dataSource) {
            return(

                <View style={styles.loading}>
                    {

                        <FlatList
                            data={this.state.dataSource}
                            renderItem={({item}) => <Text>{item.name}</Text>}
                            keyExtractor={({id}, index) => id}
                        />

                    }
                </View>

            );
        }
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
