import React from 'react';
import { StyleSheet, Text, View,Image, FlatList, TouchableHighlight } from 'react-native';


export default class MovieList extends React.Component {

    renderMovie = (movie) => (
        <TouchableHighlight style={styles.itemList} 
            onPress={() => this.props.navigation.navigate('Detail', movie)}>
                <View>
                    <Image source={{ uri: movie.Poster}} 
                        style={styles.imageList}
                        />
                
                    <Text style={styles.textList}>{movie.Title}</Text>
                </View>
        </TouchableHighlight>
        )

  render() {
    return (   
      <FlatList 
        style={styles.container}
        data={this.props.list}
        keyExtractor={p => p.imdbID}
        renderItem={({item}) => this.renderMovie(item)}
        onEndReached={this.props.nextPage}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25
  },
  itemList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: 5,
    alignItems: "center"
  },
  imageList: {
    width: 250, 
    height: 250
  },
  textList: {
    justifyContent: "center",
    alignItems: "center"
  }
});
