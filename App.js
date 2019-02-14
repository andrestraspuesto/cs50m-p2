import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {findById, findByTitle} from './util/OmdbApiClient';

export default class App extends React.Component {
  state = {
    pelicula: {},
    lista: []
  }
  componentDidMount(){
    findById("tt0066999").then(p => this.setState({pelicula: p}))
    findByTitle("Pet").then(p => this.setState({lista: p}))
  }



  render() {
    return (
      <View style={styles.container}>
      <Text>Peliculas</Text>
      <FlatList 
        data={this.state.lista}
        keyExtractor={p => p.imdbID}
        renderItem={({item}) => {
          console.log(item)
          return (
          <View style={styles.itemList}>
            <Text>{item.Title}</Text>
            </View>
          )
        }
        }
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
  itemList: {
    backgroundColor: "#abc"
  }
});
