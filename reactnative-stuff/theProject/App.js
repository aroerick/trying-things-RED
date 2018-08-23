/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
  Dimensions,
  FlatList
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});
const nameSort = data => {data.sort(function(a, b) {
  return a.first_name > b.first_name;
})}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], isLoading: true };
  }
  componentDidMount() {
    let endpoint = "https://robot-data.firebaseio.com/robots.json";
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        sortData = data.sort((a, b) => {
          if( a.first_name > b.first_name ) return 1
          if( a.first_name < b.first_name ) return -1
          return 0
        })
        this.setState({ data: sortData });
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }
  componentDidUpdate() {
    if (this.state.data && this.state.isLoading) {
      this.setState({ isLoading: false });
    }
  }
  render() {
    // console.log(this.state.data[0])
    if (this.state.isLoading) {
      return <ActivityIndicator animating={true} size="large" color="coral" />;
    } else {
      return (
        <FlatList
          style={styles.allOfIt}
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Image style={styles.image} source={{ uri: item.avatar }} />
              <Text>
                {item.first_name} {item.last_name}
              </Text>
            </View>
          )}
          keyExtractor={item => "" + item.id}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  allOfIt: {
    paddingTop: 20,
  },
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "darkgrey",
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 5,
    alignItems: "center"
  },
  image: {
    height: 25,
    width: 25,
    marginLeft: 10,
    marginRight: 15
  }
});

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "",
//       done: false,
//       animating: false
//     };
//   }
//   render() {

//     return (
//       <View style={styles.container}>
//         <View style={[styles.box, styles.box1]} />
//         <View style={[styles.box, styles.box2]} />
//         <View style={[styles.box, styles.box3]} />
//         <View style={[styles.box, styles.box4]} />
//       </View>
//       // <View style={styles.container}>
//       //   <Image
//       //     style={styles.image}
//       //     source={{ uri: "https://i.imgur.com/5hhxES1.png" }}
//       //   />
//       //   <Text style={styles.welcome}>YOU'RE THE DOCTOR</Text>
//       //   <Text style={styles.instructions}>Doct the fuck out of someone.</Text>
//       //   <Text style={styles.instructions}>
//       //     {this.state.done && this.state.text}
//       //   </Text>
//       //   <TextInput
//       //     style={{
//       //       backgroundColor: "#dddacd",
//       //       borderRadius: 3,
//       //       marginTop: 5,
//       //       width: 200,
//       //       height: 28,
//       //       padding: 5
//       //     }}
//       //     placeholder="Tippity tappity type."
//       //     value={this.state.text}
//       //     onChangeText={text =>
//       //       this.setState({ text, done: false, animating: false })
//       //     }
//       //   />
//       //   <TouchableHighlight
//       //     style={{
//       //       backgroundColor: "#91abc6",
//       //       borderRadius: 3,
//       //       margin: 15,
//       //       height: 25,
//       //       padding: 5
//       //     }}
//       //     onPress={() => {
//       //       this.setState({ done: true, animating: true });
//       //     }}
//       //     // activeOpacity={0.35}
//       //     underlayColor={"#AA523A"}
//       //   >
//       //     <Text>Words, words, words</Text>
//       //   </TouchableHighlight>

//       //   <ActivityIndicator
//       //     size="small"
//       //     color="coral"
//       //     animating={this.state.animating}
//       //     hidesWhenStopped={true}
//       //   />

//       //   {/* <TouchableOpacity
//       //             style={{
//       //               backgroundColor: "#91abc6",
//       //               borderRadius: 3,
//       //               marginTop: 5,
//       //               height: 25,
//       //               padding: 5
//       //             }}
//       //     onPress={() => {
//       //       this.setState({ done: true });
//       //     }}
//       //     activeOpacity={.35}
//       //   >
//       //     <Text>Words, words, words</Text>
//       //   </TouchableOpacity> */}
//       //   {/* <Button
//       //     onPress={() => {
//       //       this.setState({ done: true });
//       //     }}
//       //     title="SUBMIT YOUR WORDS"
//       //     color="#ccc"
//       //   /> */}
//       // </View>
//     );
//   }
// }
// const { height, width } = Dimensions.get("window");

// const styles = StyleSheet.create({
// container: {
//   flexDirection: "column",
//   flex: 1,
//   justifyContent: "center",
//   alignItems: "center",
//   backgroundColor: "#F5FCFF"
// },
// welcome: {
//   fontSize: 20,
//   textAlign: "center",
//   margin: 10
// },
// instructions: {
//   textAlign: "center",
//   color: "#333333",
//   marginBottom: 5
// },
// image: {
//   height: 125,
//   width: 125
// }
// container: {
//   flex: 1,
//   flexDirection: "row",
//   flexWrap: "wrap",
//   backgroundColor: "#F5FCFF"
// },
// box: {
//   width: width / 2,
//   height: height / 2
// },
// box1: {
//   backgroundColor: "grey"
// },
// box2: {
//   backgroundColor: "lightgrey"
// },
// box3: {
//   backgroundColor: "darkgrey"
// },
// box4: {
//   backgroundColor: "coral"
// }
// });
