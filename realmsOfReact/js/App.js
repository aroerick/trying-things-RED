import React, { Component, Fragment } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,
} from 'react-native'
import { addMovie, getMovies, deleteMovie, filter } from './config/model'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      movieTitle: '',
    }
  }
  componentDidMount() {
    this.setState({ movies: getMovies() })
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ backgroundColor: 'lightgrey' }}
          placeholder="enter movie title..."
          onChangeText={movieTitle => this.setState({ movieTitle })}
          value={this.state.movieTitle}
        />
        <TouchableOpacity
          onPress={() => {
            this.setState({ movies: getMovies() })
            nextId = this.state.movies.length
            addMovie(nextId, this.state.movieTitle)
          }}
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text>Add Movie</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => {
            this.setState({ movies: getMovies() })
          }}
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text>Get Movies</Text>
        </TouchableOpacity> */}
        <ScrollView style={styles.scroll}>
          {this.state.movies.length > 0 &&
            this.state.movies.map(movie => (
              <Fragment key={movie.id}>
                <Text style={{ color: 'coral' }}>
                  {movie.title}
                  {movie.year || ''}
                </Text>
                <Button
                  onPress={() => {
                    thisMovie = filter(movie.id)
                    deleteMovie(thisMovie)
                    this.setState({ movies: getMovies() })
                  }}
                  title="Remove"
                />
              </Fragment>
            ))}
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            lastMovie = filter(this.state.movies.length - 1)
            deleteMovie(lastMovie)
            this.setState({ movies: getMovies() })
          }}
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text>Remove Last</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            allMovies = getMovies()
            deleteMovie(allMovies)
          }}
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text>Reset All</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'coral',
    borderRadius: 3,
    margin: 5,
    padding: 3,
    width: 100,
    textAlign: 'center',
  },
  container: {
    paddingVertical: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scroll: {
    height: 100,
    margin: 10,
  },
})
