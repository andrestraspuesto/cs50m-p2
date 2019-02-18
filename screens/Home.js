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
      movieList: [],
      page: 1,
      query: ''
    }
  
    render() {
      return (
        <View style={styles.container}>
          <MovieSeekier search={this.search} />
          <MovieList list={this.state.movieList} 
            navigation={this.props.navigation}
            nextPage={this.nextPage} 
            />
        </View>
      );
    }
  
    search = (query) => {
      if(query && query.length > 2){
        findByTitle(query, 1).then(data => this.setState({movieList: data}))
        this.setState({page: 2, query: query})
      }
    }

    nextPage = () => {
      if(this.state.query && this.state.query.length > 2){
        findByTitle(this.state.query, this.state.page).then(data => this.setState({movieList: [... this.state.movieList, ...data]}))
        this.setState({page: this.state.page + 1})
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
  