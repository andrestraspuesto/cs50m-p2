import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default class MovieSeeker extends React.Component {
    state = {
        query: ''
    }
    queryTextChange = (text) => {
        this.setState({query: text})
    }   

    render() {
      return (   
        <View style={styles.container}>
            <TextInput style={styles.inputText}
                value={this.state.query} 
                onChangeText={this.queryTextChange}
            />
            <Button 
            style={styles.button}
            title="Search"
            onPress={() => this.props.search(this.state.query)}/>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: '#fff',
      justifyContent: "space-around",
      alignItems: "center",
      padding: 5
    },
    inputText: {
      borderColor: "#555",
      borderWidth: 1,
      alignItems: "center",
      width: 200,
      margin: 5,
      textAlign: "center"
    },
    button: {
    }
  });
  