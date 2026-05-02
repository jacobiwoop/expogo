import { registerRootComponent } from 'expo';
import TrackPlayer from 'react-native-track-player';
import { PlaybackService } from './service';
import { View, Text } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
      <Text style={{ color: '#fff', fontSize: 18 }}>ExpoWoop Dev Client</Text>
    </View>
  );
}

TrackPlayer.registerPlaybackService(() => PlaybackService);
registerRootComponent(App);
