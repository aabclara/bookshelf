import React from 'react'
import { Text } from 'react-native'
import { styles } from './styes'
export interface ITitle {
    titleI: string
}
export function TitleSlider({ titleI }: ITitle) {
    return (
        <Text style={styles.title}>{titleI}</Text>
    )
}