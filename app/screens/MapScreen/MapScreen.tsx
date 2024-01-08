import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Map } from '../../modules/Map'
import Layout from '../Layout'

export class MapScreen extends Component {
	render() {
		return (
			<Layout>
				<Map />
			</Layout>
		)
	}
}

export default MapScreen
