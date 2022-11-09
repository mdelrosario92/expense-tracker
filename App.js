import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import ManageExpense from './views/ManageExpense';
import Conversor from './views/Conversor';
import RecentExpenses from './views/RecentExpenses';
import AllExpenses from './views/AllExpenses';
import { GlobalStyles } from './constants/styles';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator screenOptions={{
      headerStyle: { backgroundColor: GlobalStyles.colors.header },
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: GlobalStyles.colors.header },
      tabBarActiveTintColor: GlobalStyles.colors.text,
    }}>

      <BottomTabs.Screen
        name="Recent"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" size={size} color={color} />
          ),
        }}

      />

      <BottomTabs.Screen
        name="Convert"
        component={Conversor}
        options={{
          title: 'Convert',
          tabBarLabel: 'Convert',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-usd" size={size} color={color} />
          ),
        }}

      />

      <BottomTabs.Screen
        name="Todos"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}