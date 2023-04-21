import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
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
  LoginForgotPasswordScreen,
  LoginForgotPasswordEmailScreen,
} from "screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
  SplashScreen: undefined;
  SignUpScreen: { email: string };
  SignUpEmailVerificationScreen: { email: string };
  SignUpPasswordScreen: { email: string };
  LoginScreen: { email: string };
  LoginPasswordScreen: { email: string };
  LoginForgotPasswordScreen: { email: string };
  LoginForgotPasswordEmailScreen: { email: string };
  HomeScreen: undefined;
  HomeTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const defaultStyle: any = ({ navigation }: NativeStackHeaderProps) => ({
  contentStyle: {
    backgroundColor: Colors.gray0,
  },
  headerShown: true,
  header: () => <Header onBackButtonPress={() => navigation.goBack()} />,
});

const noHeaderStyle: any = ({ navigation }: NativeStackHeaderProps) => ({
  headerShown: true,
  header: () => <Header hidden />,
});

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={noHeaderStyle}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
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
          <Stack.Screen
            name="LoginForgotPasswordScreen"
            component={LoginForgotPasswordScreen}
          />
          <Stack.Screen
            name="LoginForgotPasswordEmailScreen"
            component={LoginForgotPasswordEmailScreen}
          />
        </Stack.Group>
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
