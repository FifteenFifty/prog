import React, { Component } from 'react';
import { Platform, Linking, StyleSheet, Text, View } from 'react-native';
import { Progress, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import gameData from "./data.json";

export default class App extends Component {
  defaultState = {
    difficulty: "",
    ticks:      0,
    target:     0,
    pc:         0,
    running:    false,
    motivation: "Are you excited? I bet you are"
  }

  constructor() {
    super();
    try {
      this.state = JSON.parse(localStorage.getItem("ProgState"))
    } catch (e) {
      this.state = null;
    }

    if (!this.state) {
      console.log("Hello");
      this.state = Object.assign({}, this.defaultState)
    }

    setInterval( () => { this.tick(); }, 1000);
  }

  tick() {
    if (this.state.running) {
      this.state.ticks++;
      this.setState({
        pc: ((this.state.ticks / this.state.target) * 100).toFixed(5)
      });

      // Save the game
      localStorage.setItem("ProgState", JSON.stringify(this.state));

      // Motivate the player
      if (this.state.ticks % 5 === 0) {
        // Choose a random motivation
        var motivate = gameData.motivation[Math.floor(Math.random() *
                                           gameData.motivation.length)];
        this.setState({
          motivation: motivate
        });
      }
    }
  }

  chooseDifficulty(ev, data) {
    data.parent.setState({
      difficulty: data.difficulty,
      ticks:      0,
      target:     gameData.difficulties[data.difficulty].target,
      pc:         0,
      running:    true,
      motivation: "Let's go!"
    });
  }

  reset(ev, data) {
    data.parent.setState(Object.assign({}, data.parent.defaultState))
    // Unsave the game
    localStorage.removeItem("ProgState");
  }

  goToUrl(url) {
    if (Platform.OS === "web") {
      window.open(url, "_blank");
    } else {
      Linking.openURL(url)
    }
  }

  render() {
    var midSection = <View style={styles.progress}>
      <Progress percent={this.state.pc}
                               label={this.state.pc + "%"}
                               color="teal"/>
      <View style={styles.resetButton}>
        <Button content="Reset"
                onClick={this.reset}
                parent={this} />
      </View>
    </View>;

    if (this.state.target === 0) {
      // User has not picked a mode yet!
      var buttons = [];

      for (const [key, value] of Object.entries(gameData.difficulties)) {
        buttons.push(
          <Button animated="fade"
                  onClick={this.chooseDifficulty}
                  difficulty={key}
                  parent={this}>
            <Button.Content visible>
              { value.title }
            </Button.Content>
            <Button.Content hidden>
              { value.description }
            </Button.Content>
          </Button>
        );
      }

      midSection = <View style={styles.chooseDifficulty}>
        <Text style={styles.titleSubtext}>
          Choose a difficulty (hover for more info)
        </Text>
        <View style={styles.chooseDifficultyButtons}>
          { buttons }
        </View>
      </View>;
    } else if (this.state.ticks >= this.state.target) {
      midSection = <View style={styles.complete}>
        <Text style={{marginBottom: 10}}>
          🎈 Good job, you did it! 🎈
        </Text>
        <Text style={{marginBottom: 20}}>
          Why not try again on a harder difficulty?
        </Text>
        <Button content="I'd love to"
                onClick={this.reset}
                parent={this} />
        </View>;
    }

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Prog
          </Text>
          <Text style={styles.titleSubtext}>
            A game that exists because some guy on Reddit said something like
          </Text>
          <Text>
            "I just want to press Play and not bother with anything else"
          </Text>
        </View>

        { midSection }

        <View style={styles.motivation}>
          <Text>
            { this.state.motivation }
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={{fontSize: 10}}>
            Love this game? Why not{' '}
          </Text>
          <Text style={styles.hyperlink}
                onPress={() => this.goToUrl("https://paypal.me/FifteenFifty")}>
            donate
          </Text>
          <Text style={{fontSize: 10}}>
            {' '}or{' '}
          </Text>
          <Text style={styles.hyperlink}
                onPress={() => this.goToUrl("https://github.com/FifteenFifty/prog/")}>
            contribute
          </Text>
        </View>
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
  },
  titleText: {
    fontSize: 72,
    marginBottom: 20,
  },
  titleSubtext: {
    marginBottom: 10,
  },
  title: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chooseDifficulty: {
    width: "80%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chooseDifficultyButtons: {
    flexDirection: 'column',
  },
  progress: {
    flex: 1,
    width: "80%",
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  resetButton: {
    alignItems: 'center',
  },
  motivation: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  complete: {
    alignItems: 'center'
  },
  footer: {
    flexDirection: "row",
  },
  hyperlink: {
    fontSize: 10,
    color:    "teal"
  }
});
