import React, {
  Component,
  Text,
  View,
  Image,
} from 'react-native';
import {styles} from './styles.ios.js';
import {setTheme, MKColor, MKButton} from 'react-native-material-kit';
import { Card, Button } from 'react-native-material-design';

let Dashboard = React.createClass({
  render: function () {
    console.log('rendered welcome with props:', this.props)
    return (
      <View>
        <LeaderboardCard />
        <StatusCard />
      </View>
    )
  }
});

let LeaderboardCard = React.createClass({
  render: function() {
    return(
      <View>
        <Card style={styles.cardMargin}>
          <Card.Media
            image={<Image source={require('./assets/img/leaderboard.jpeg')} />}
            overlay
          />
          <Card.Body>
              <Text>Some text to go in the body.</Text>
          </Card.Body>
          <Card.Actions position="right">
              <Button value="LEADERBOARD" />
          </Card.Actions>
        </Card>
      </View>
    )
  }
})

let StatusCard = React.createClass({
  render: function() {
    return(
      <View>
        <Card>
          <Card.Media
            image={<Image source={require('./assets/img/status.jpeg')} />}
            overlay
          />
          <Card.Body>
              <Text>Well done, Jonathan! This week you've saved</Text>
          </Card.Body>
          <Card.Actions position="right">
              <Button value="THIS WEEK" />
          </Card.Actions>
        </Card>
      </View>
    )
  }
})

export {Dashboard};