import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from "../screens/Dashboard";

const AppStack = createStackNavigator();

export default function AppRoutes() {
    return (
        <AppStack.Navigator screenOptions={{headerShown: false}}>
            <AppStack.Screen name='Dashboard' component={Dashboard}/>
        </AppStack.Navigator>
    )
}