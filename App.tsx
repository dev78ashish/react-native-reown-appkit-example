import { AppKit, AppKitProvider } from '@reown/appkit-react-native';
import {
 SafeAreaProvider,
 SafeAreaView,
 useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { appKit } from './src/config/AppKitConfig';
import RootNavigator from './src/navigation/RootNavigator';

function App() {
 return (
   <SafeAreaProvider>
     <AppKitProvider instance={appKit}>
         <RootNavigator />
         <AppKit />
     </AppKitProvider>
   </SafeAreaProvider>
 );
}

export default App;
