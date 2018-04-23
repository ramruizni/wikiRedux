import React from 'react'
import {View, Text, Button} from 'react-native'
import {connect} from 'react-redux'
import { buttonPressed, fetchAsyncData } from '../actions'

class MainView extends React.Component {

  render() {
    return(
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{this.props.text}</Text>
        <Button title="Button 1" onPress={() => this.props.buttonPressed('BTN 1 PRESSED!')} />
        <Button title="Button 2" onPress={() => this.props.buttonPressed('BTN 2 PRESSED!')} />
        <Button title="Fetch Async Data" onPress={() => this.props.fetchAsyncData()}/>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 30
  }
}

const mapStateToProps = state => {
  return {
    text: state.MainViewReducer.text
  }
}

export default connect(mapStateToProps, { buttonPressed, fetchAsyncData })(MainView)