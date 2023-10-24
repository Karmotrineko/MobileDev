import { createStackNavigator } from '@react-navigation/stack';
import SignIn from "../screens/SignIn";
import Register from "../screens/Register";
import ForgotPassword from "../screens/ForgotPassword";

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name='SignIn' component={SignIn}/>
            <AuthStack.Screen name='Register' component={Register}/>
            <AuthStack.Screen name='ForgotPassword' component={ForgotPassword}/>
        </AuthStack.Navigator>
    )
}