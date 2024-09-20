import { FlatList, FlatListProps } from 'react-native'
import { View } from 'react-native'
import library from '@/assets/data/library.json'
import TrackListItem from './TrackListItem'
import { utilsStyles } from '@/styles'

export type TrackListProps = Partial<FlatListProps<unknown>>

const ItemDivinder = () => {
	return <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}></View>
}
const TracList = ({ ...flatlistProps }: TrackListProps) => {
	return (
		<FlatList
			data={library}
			ItemSeparatorComponent={ItemDivinder}
			renderItem={({ item: track }) => <TrackListItem track={{ ...track, image: track.artwork }} />}
			{...flatlistProps}
		/>
	)
}

export default TracList
