import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import { token } from '../config';

export default class CameraScreen extends React.Component {

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    dishes: '',
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  
  async findDish(photo) {
    let obj = {
        "task_id": config.id,
        "records": [{ "_base64": photo }]
    }

    fetch('https://api.ximilar.com/recognition/v2/classify', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'authorization': `Token ${ token }`
        }
    })
        .then(response => {
            return response.json();
        })
        .then(response => {
            this.mapPlates(response.records[0].best_label.name)
        });
      }

      snap = async () => {
        if (this.camera) {
          let photo = await this.camera.takePictureAsync();
        }
      }
    //   async snap() {
    //     if (this.camera) {
    //         await this.camera.takePictureAsync({ quality: .1, base64: true })
    //             .then(photo => {
    //                 this.identifyWildflower(photo.base64);
    //             })
    //     }
    // }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;

    } else if (hasCameraPermission === false) {

      return <Text>No access to camera</Text>;

    } else {

      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <TouchableOpacity
                  onPress={this.takePicture.bind(this)} >
                  <Text>Take photo</Text>
                </TouchableOpacity>
                
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}