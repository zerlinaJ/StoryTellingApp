import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from 'firebase'

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      story_id: this.props.story.key,
      story_data: this.props.story.value
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);

    this.setState({ fontsLoaded: true });
    console.log(this.state.fontsLoaded)
  }

  componentDidMount() {
    // console.log(this.props.story.title)
    // console.log(this.props.story.author)
    // console.log(this.props.story.description)
    this._loadFontsAsync();
    this.fetchUser();
  }


  fetchUser = () => {
    let theme;
    firebase
      .database()
      .ref("/users/" + firebase.auth().currentUser.uid)
      .on("value", snapshot => {
        theme = snapshot.val().current_theme;
        this.setState({ light_theme: theme === "light" });
      });
  };

  render() {
    let story = this.state.story_data;//what has got passed from Feed.js
    if (!this.state.fontsLoaded) {
      return (<Text>Loading..</Text>);
    } else {
      let images = { //so that a different image corresponding to each image gets displayed
        image_1: require("../assets/story_image_1.png"),
        image_2: require("../assets/story_image_2.png"),
        image_3: require("../assets/story_image_3.png"),
        image_4: require("../assets/story_image_4.png"),
        image_5: require("../assets/story_image_5.png")
      };
      return (
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("StoryScreen", {
              story: story
            })
          }
        >
          <View style={styles.cardContainer}>
            <Image
              source={images[story.preview_image]}
              style={styles.storyImage}
            ></Image>

            <View style={styles.titleContainer}>
              <Text style={styles.storyTitleText}>
                {story.title}
              </Text>
              <Text style={styles.storyAuthorText}>
                {story.author}
              </Text>
              <Text style={styles.descriptionText}>
                {story.description}
              </Text>
            </View>
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                <Text style={styles.likeText}>12k</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        // </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  storyImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250),
    marginTop: RFValue(25)
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  storyTitleText: {
    fontSize: RFValue(25),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  storyAuthorText: {
    fontSize: RFValue(18),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  descriptionText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  }
});
