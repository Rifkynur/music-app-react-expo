import { View, Text, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { defaultStyle } from '@/styles'
import TrackList from '@/components/TrackList'
const SongsScreen = () => {
	return (
		<View style={{ ...defaultStyle.container }}>
			<StatusBar translucent={false} backgroundColor="black" />
			<ScrollView style={{ marginTop: 50 }}>
				<TrackList scrollEnabled={false} />
			</ScrollView>
		</View>
	)
}

export default SongsScreen
