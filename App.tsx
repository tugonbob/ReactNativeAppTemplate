import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "assets";
import { Header } from "components";
import {
  HomeScreen,
  SplashScreen,
  SignUpPasswordScreen,
  SignUpScreen,
  SignUpVerificationScreen,
  LoginScreen,
  LoginPasswordScreen,
} from "screens";

export type RootStackParamList = {
  SplashScreen: undefined;
  SignUpScreen: { email: string };
  SignUpEmailVerificationScreen: { email: string };
  SignUpPasswordScreen: { email: string };
  LoginScreen: { email: string };
  LoginPasswordScreen: { email: string };
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
      <Stack.Navigator
        screenOptions={defaultStyle}
        initialRouteName="SplashScreen"
      >
        <Stack.Group screenOptions={noHeaderStyle}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen
            name="SignUpPasswordScreen"
            component={SignUpPasswordScreen}
          />
          <Stack.Screen
            name="SignUpEmailVerificationScreen"
            component={SignUpVerificationScreen}
          />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen
            name="LoginPasswordScreen"
            component={LoginPasswordScreen}
          />
        </Stack.Group>

        <Stack.Group screenOptions={noHeaderStyle}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
