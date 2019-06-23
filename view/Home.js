import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'
import { Provider, connect } from 'react-redux' // 5.0.6
import { createStore } from 'redux' // 3.7.2
import { StackNavigator } from 'react-navigation' // 1.0.0-beta.21
import { Header } from 'react-native-elements'
import { Camera, Permissions, Icon, ImagePicker } from 'expo'

class Home extends Component {
  state = {
    image: null,
    comment: null
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={this._pickImage} style={styles.button}>
          <Text>熊の写真を選択</Text>
        </TouchableOpacity>
        {this.state.image && (
          <View>
            <Image
              source={{ uri: this.state.image }}
              style={{
                width: 250,
                height: 250,
                marginTop: 30,
                marginBottom: 30
              }}
            />
            <Text>コメント</Text>
            <TextInput
              style={{
                height: 50,
                width: 250,
                marginBottom: 20
              }}
              underlineColorAndroid="gray"
              value={this.state.comment}
            />
            <TouchableOpacity onPress={this._upload} style={styles.button}>
              <Text>写真をアップロード</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }

  _upload = async () => {
    alert("写真をアップロードしました。個体識別が完了しました。")
    return

    // API未実装のため、以下のコードは実行されないようにする
    // let apiUrl = 'https://xxxxxxxxx/upload'

    // let uriParts = this.state.image.split('.')
    // let fileType = uriParts[uriParts.length - 1]

    // console.log(fileType)

    // let formData = new FormData()
    // formData.append('photo', {
    //   uri,
    //   name: `photo.${fileType}`,
    //   type: `image/${fileType}`
    // })
    // let options = {
    //   method: 'POST',
    //   body: formData,
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'multipart/form-data'
    //   }
    // }

    // return fetch(apiUrl, options)

    // await fetch('http://xxxxxxx' + '/api/upload', {
    //   method: 'POST',
    //   body: JSON.stringify(this.state),
    //   headers: new Headers({ 'Content-type': 'application/json' })
    // })
    //   .then(function(response) {
    //     return response.json()
    //   })
    //   .then(function(json) {}.bind(this))
    //   .catch(error => console.error(error))
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    })

    console.log(result)

    if (!result.cancelled) {
      this.setState({ image: result.uri })
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333'
  },
  button: {
    width: 250,
    height: 50,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
})

const mapState = state => ({
  number: state.sample.number
})

export default connect(
  mapState,
  null
)(Home)
