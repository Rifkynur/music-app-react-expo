import { View, Text, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import { defaultStyle } from '@/styles'
import TrackList from '@/components/TrackList'
import { screenPadding } from '@/app/constants/tokens'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'

const SongsScreen = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in Songs',
		},
	})
	return (
		<SafeAreaView style={{ ...defaultStyle.container }}>
			<StatusBar barStyle={'light-content'} />
			<ScrollView contentInsetAdjustmentBehavior="automatic" style={{ marginTop: 110 }}>
				<TrackList scrollEnabled={false} />
			</ScrollView>
		</SafeAreaView>
	)
}

export default SongsScreen
