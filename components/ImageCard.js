import React from 'react';
import { View, Image } from 'react-native';

const ImageCard = () => {
    return (
        <View style={styles.containerStyle}>
        <Image
        style={{width: 300, height: 300}}
        source={require('../assets/Verseuse_porcelaine_de_Limoges.jpg')}
        />
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#4C4C4D',
        shadowColor: '#4C4C4D',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    }
};

export default ImageCard;