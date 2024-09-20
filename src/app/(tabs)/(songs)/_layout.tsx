import { View, Text } from 'react-native'
import { defaultStyle } from '@/styles'
import { Stack } from 'expo-router'
import { colors } from '@/app/constants/tokens'
import { StackScreenWithSearchBar } from '@/app/constants/layout'
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const SongsScreeenLayout = () => {
	return (
		<View style={defaultStyle.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						...StackScreenWithSearchBar,
						headerTitle: 'Songs',
						headerSearchBarOptions: {
							placeholder: 'bisaa',
						},
					}}
				/>
			</Stack>
		</View>
	)
}

export default SongsScreeenLayout
