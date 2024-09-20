import { View, TouchableHighlight, StyleSheet, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import { unknownTrackImageUrl } from '@/app/constants/images'
import { colors, fontSize } from '@/app/constants/tokens'
import { defaultStyle } from '@/styles'

export type TrackItemProps = {
	track?: {
		title: string
		image?: string
		artist?: string
	}
}
const TrackListItem = ({ track }: TrackItemProps) => {
	const isActiveTack = false
	return (
		<TouchableHighlight>
			<View style={styles.trackItemContainer}>
				<View>
					<FastImage
						source={{
							uri: track?.image ?? unknownTrackImageUrl,
							priority: FastImage.priority.normal,
						}}
						style={{
							...styles.trackArtworkImage,
							opacity: isActiveTack ? 0.6 : 1,
						}}
					/>
				</View>
				{/* tack artist and title */}
				<View style={{ width: '100%' }}>
					<Text
						numberOfLines={1}
						style={{
							...styles.trackTitleText,
							color: isActiveTack ? colors.primary : colors.text,
						}}
					>
						{track?.title}
					</Text>
					{track?.artist && (
						<Text numberOfLines={1} style={styles.trackArtistTrack}>
							{track.artist}
						</Text>
					)}
				</View>
			</View>
		</TouchableHighlight>
	)
}

export default TrackListItem

const styles = StyleSheet.create({
	trackItemContainer: {
		flexDirection: 'row',
		columnGap: 14,
		alignItems: 'center',
		paddingRight: 20,
	},
	trackArtworkImage: {
		borderRadius: 8,
		width: 50,
		height: 50,
	},
	trackTitleText: {
		...defaultStyle.text,
		fontSize: fontSize.sm,
		fontWeight: '600',
		maxWidth: '90%',
	},
	trackArtistTrack: {
		...defaultStyle.text,
		color: colors.textMuted,
		fontSize: 14,
		marginTop: 4,
	},
})
