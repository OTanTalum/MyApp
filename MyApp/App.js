import React from 'react';
import {Image,FlatList, ActivityIndicator, Text, View, StyleSheet} from 'react-native';

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
        return fetch('https://prod.mascotbe.com/groups/discover',
            {
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
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }
        if(this.state.dataSource) {
            return(
                <View style={styles.content}>
                    {
                        <FlatList style={styles.listOfItems}
                            data={this.state.dataSource}
                            renderItem={({item}) =>
                                <View style={styles.viewItemList}>
                                    <Text style={styles.textItemListHead}>{item.name}</Text>
                                    <Image style={styles.imageItemList} source={{uri: item.images[0].url}}/>
                                    <Text style={styles.baseText}>{item.description}</Text>
                                </View>
                            }
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
    content:{
        flex: 1,
        backgroundColor: '#252d25',
        paddingTop:35,
    },
    baseText:{
        flex: 2,
        paddingTop:10,
        paddingLeft:15,
        fontSize:16,
    },
    listOfItems:{
        backgroundColor:'lightgoldenrodyellow',
        flexDirection: 'column',
        paddingTop: 40,
    },
    viewItemList:{
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor:'lightyellow',
        borderColor: '#000',
        elevation:4,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    imageItemList:{
        marginVertical: 8,
        alignSelf:'center',
        resizeMode:'center',
        width: 300,
        height: 400,
    },
    textItemListHead:{
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 20,
    }
});
