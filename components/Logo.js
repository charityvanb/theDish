import React from 'react';
import { View } from 'react-native';

const Logo = () => {

return(
<Image
        style={{ width: 200, height: 200 }}
        source={require('../assets/theDishGrey.png')}
        />
);

};

export default Logo;