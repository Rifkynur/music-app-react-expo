import { View, Text } from 'react-native'
import { defaultStyle } from '@/styles'
import { Stack } from 'expo-router'
import { colors } from '@/app/constants/tokens'
import { StackScreenWithSearchBar } from '@/app/constants/layout'

const SongsScreeenLayout = () => {
	return (
		<View style={defaultStyle.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						...StackScreenWithSearchBar,
						headerTitle: 'Songs',
					}}
				/>
			</Stack>
		</View>
	)
}

export default SongsScreeenLayout
