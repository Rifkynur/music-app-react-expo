import { StyleSheet } from 'react-native'
import { colors, fontSize } from '@/app/constants/tokens'
export const defaultStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	text: {
		fontSize: fontSize.base,
		color: colors.text,
	},
})

export const utilsStyles = StyleSheet.create({})
