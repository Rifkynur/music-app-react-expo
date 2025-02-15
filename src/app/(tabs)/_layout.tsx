import { StyleSheet } from 'react-native'
import { colors, fontSize } from '../constants/tokens'
import { Tabs } from 'expo-router'
import { BlurView } from 'expo-blur'
import { FontAwesome, MaterialCommunityIcons, Ionicons, FontAwesome6 } from '@expo/vector-icons'

const TabsNavigation = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: colors.primary,
				tabBarLabelStyle: {
					fontSize: fontSize.xs,
					fontWeight: '500',
				},
				headerShown: false,
				tabBarStyle: {
					// position: 'absolute',
					paddingTop: 8,
					borderTopWidth: 0,
					// borderTopLeftRadius: 20,
					// borderTopRightRadius: 20,
					backgroundColor: '#1f1f1f',
				},
				// tabBarBackground() {
				// 	return (
				// 		<BlurView
				// 			intensity={100}
				// 			style={{
				// 				...StyleSheet.absoluteFillObject,
				// 				overflow: 'hidden',
				// 				backgroundColor: 'black',
				// 			}}
				// 		/>
				// 	)
				// },
			}}
		>
			<Tabs.Screen
				name="favorites"
				options={{
					title: 'Favorites',
					tabBarIcon: ({ color }) => <FontAwesome name="heart" size={20} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="playlists"
				options={{
					title: 'Playlist',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="playlist-play" size={28} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="(songs)"
				options={{
					title: 'Songs',
					tabBarIcon: ({ color }) => <Ionicons name="musical-note-sharp" size={24} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="artists"
				options={{
					title: 'Artists',
					tabBarIcon: ({ color }) => <FontAwesome6 name="users-line" size={20} color={color} />,
				}}
			/>
		</Tabs>
	)
}

export default TabsNavigation
