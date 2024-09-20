import { View, Text } from 'react-native'
import { defaultStyle } from '@/styles'
import { Stack } from 'expo-router'
import { StackScreenWithSearchBar } from '@/app/constants/layout'

const ArtistsScreeenLayout = () => {
	return (
		<View style={defaultStyle.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ ...StackScreenWithSearchBar, headerTitle: 'Artists' }}
				/>
			</Stack>
		</View>
	)
}

export default ArtistsScreeenLayout
