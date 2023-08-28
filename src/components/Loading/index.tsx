import LottieView from "lottie-react-native"
import loading from '../../lottie/loading.json'
import React from "react"

export function Loading() {
    return <LottieView source={loading} autoPlay loop />
}