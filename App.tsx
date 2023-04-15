import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "assets";
import { Header } from "components";
import { HomeScreen, SplashScreen } from "screens";
import SignUpScreen from "screens/authScreens/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const defaultStyle: any = ({ navigation }: { navigation: any }) => ({
    contentStyle: {
      backgroundColor: Colors.gray0,
    },
    headerShown: true,
    header: () => <Header onBackButtonPress={() => navigation.goBack()} />,
  });

  const noHeaderStyle: any = ({ navigation }: { navigation: any }) => ({
    headerShown: true,
    header: () => <Header hidden />,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultStyle}>
        <Stack.Group screenOptions={noHeaderStyle}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Group>

        <Stack.Group screenOptions={noHeaderStyle}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
