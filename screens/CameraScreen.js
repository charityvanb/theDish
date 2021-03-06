import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { Camera, Permissions } from 'expo';
import { token, id } from '../config';


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
  
findDish = async(photo) => {
    let obj = {
        "task_id": id,
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
          var result = response.records[0].best_label.name
          var dishName = result.slice(0, 10)

          if (dishName === 'orangeDish') {
            dishName =  'Authentic orange Galvanize dish'

          } else {
            dishName =  'Authentic white Galvanize dish'
          }

          console.log(dishName)
          Alert.alert(
            'Results:',
             dishName,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );

            // this.mapPlates(response.records[0].best_label.name)
        });
      }


      snap = async () => {
        if (this.camera) {
            await this.camera.takePictureAsync({ quality: .1, base64: true })
                .then(photo => {
                    this.findDish(photo.base64);
                })
        }
    }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;

    } else if (hasCameraPermission === false) {

      return <Text>No access to camera</Text>;

    } else {

      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }}
          type={this.state.type}
          ref={ref => { this.camera = ref; }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>

                <View style={styles.bottom}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={this.snap.bind(this)} >
                  <Text style={styles.textStyle}
                  >Check</Text>
                </TouchableOpacity>
                </View>


            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = {

  textStyle: {
      alignSelf: 'center',
      color: '#4C4C4D',
      fontSize: 24
  },
  buttonStyle: {
      flex: 1,
      alignSelf: 'center',
      backgroundColor:'#FDE9ED',
      borderRadius: 5,
      borderWidth: 5,
      borderColor: '#FDE9ED',
      marginLeft: 18,
      marginRight: 18,
      justifyContent: 'center',
      alignItems: 'center'
  },
    
    bottom: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 36,
      height: 44,
      margin: 12
      }
  }