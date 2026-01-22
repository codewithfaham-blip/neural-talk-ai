import Constants from 'expo-constants';
import { Platform, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: 'https://neural-talk-ai.vercel.app/' }} 
        style={styles.webview}
        startInLoadingState={true}
        scalesPageToFit={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
});