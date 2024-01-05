import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { AppConstants } from '@/global/contants/constants'

const Loader = () => {
	return <ActivityIndicator color={AppConstants.primaryColor} size='large' />
}

export default Loader
