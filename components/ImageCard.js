import React from 'react';
import { View } from 'react-native';

const Card = () => {
    return (
        <View style={styles.containerStyle}>
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#4C4C4D',
        shadowColor: '#4C4C4D',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    }
};

export default ImageCard;