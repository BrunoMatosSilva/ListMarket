import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Home } from '@/screen/home';
import { useFonts } from 'expo-font';
import {
  Urbanist_700Bold,
  Urbanist_400Regular,
  Urbanist_800ExtraBold,
} from "@expo-google-fonts/urbanist"
import { Loading } from '@/components/loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Urbanist_700Bold,
    Urbanist_400Regular,
    Urbanist_800ExtraBold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <GestureHandlerRootView style={{ flex: 1}}>
    <Home />
    <StatusBar style='light' backgroundColor='transparent' translucent />
    </GestureHandlerRootView>
  );
}