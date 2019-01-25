import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
    const { buttonStyle } =styles;
    const { textStyle } =styles;

return (
<TouchableOpacity style={buttonStyle}>
 <Text style={textStyle}>Button time</Text>
</TouchableOpacity>
);
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#4C4C4D',
        fontSize: 20
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor:'#FDE9ED',
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#FDE9ED',
        marginLeft: 10,
        marginRight: 10,
    }
};



export default Button;