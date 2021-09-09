import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'

export default function MovieDetailScreen() {
    return (
        <View>
            <Image style={styles.image} source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie1.jpg'}} />
        </View>
    )
}
