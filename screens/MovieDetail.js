import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import {findById} from '../util/OmdbApiClient';

export default class MovieDetail extends React.Component {
    static navigationOptions = {
        headerTitle: "Detail",
      };
    state = {
        movie: {
            uri: ''
        }
    }
    constructor(props){
        super(props)
        const id = this.props.navigation.state.params.imdbID;
        findById(id).then(m => this.setState({movie: m}))       
    }
    
     
    

    render() {
      return (   
                <View style={styles.itemList}>
                <Text style={styles.title}>{this.state.movie.Title}</Text>
                    <Image source={{ uri: this.state.movie.Poster}} 
                        style={styles.imageList}
                        />
                    <Text style={styles.plot}>{this.state.movie.Plot}</Text>
                </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    itemList: {
      flex: 1,
      margin: 5,
      alignItems: "center"
    },
    imageList: {
      width: 250, 
      height: 250
    },
    title: {
      justifyContent: "center",
      alignItems: "center",
      fontWeight: 'bold',
      fontSize: 25,
    },
    plot: {
        justifyContent: "center",
        alignItems: "flex-start",
        fontSize: 20,
        textAlign: "left"
      },
  });
  