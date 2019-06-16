import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Provider, connect } from 'react-redux' // 5.0.6
import { createStore, combineReducers } from 'redux' // 3.7.2
import { createStackNavigator, createAppContainer } from 'react-navigation' // 1.0.0-beta.21
import { sampleReducer } from './reducers/sampleReducer'
import HomeForm from './view/Home'
import NextForm from './view/Next'

/******* Navigator *******/

var HomeNavigator = createStackNavigator(
  {
    Home: { screen: HomeForm },
    NextScreen: { screen: NextForm }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: () => ({
      header: null
    })
  }
)

const AppContainer = createAppContainer(HomeNavigator)

/******* Set up store *******/

const store = createStore(
  combineReducers({
    sample: sampleReducer
  })
)

/**************/

export default class App extends Component {
  async componentWillMount() {}

  render() {
    return (
      <Provider store={store}>
        <AppContainer
          ref={nav => {
            this.navigator = nav
          }}
        />
      </Provider>
    )
  }
}
