import React from 'react';
import { View, Image } from 'react-native';

const Logo = () => {

return(
<Image
        style={styles.LogoStyle}
        source={require('../assets/theDishGrey.png')}
        />
);

};
 const styles = {
         LogoStyle: {
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: 20,
                marginBottom: 20,
                width: 200,
                height: 200
         }
 };

export default Logo;