import React from 'react';
import { StyleSheet, View} from 'react-native';
import MovieList from './MovieList';
import MovieSeekier from './MovieSeeker';
import {findByTitle} from '../util/OmdbApiClient';

export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Movie search',
      };

    state = {
      movieList: []
    }
  
    render() {
      return (
        <View style={styles.container}>
          <MovieSeekier search={this.search} />
          <MovieList list={this.state.movieList} navigation={this.props.navigation}/>
        </View>
      );
    }
  
    search = (query) => {
      if(query && query.length > 2){
        findByTitle(query).then(data => this.setState({movieList: data}))
      }
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: 25
    }
  });
  