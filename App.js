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
import { StyleSheet } from 'react-native';
import AddButton from './components/ExpensesOutput/UI/AddButton';
import ExpensesContextProvider from './store/expenses-context';
import Graphs from './views/Graphs';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator screenOptions={({ navigation }) => ({
      headerStyle: { backgroundColor: GlobalStyles.colors.header },
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: GlobalStyles.colors.header },
      tabBarActiveTintColor: GlobalStyles.colors.text,
      headerRight: ({ tintColor }) => (
        <AddButton icon="add" size={24} color={tintColor} onPress={() => {
          navigation.navigate('ManageExpense');
        }} />
      ),
    })}>

      <BottomTabs.Screen
        name="Recent"
        component={RecentExpenses}
        options={{
          title: 'Gastos Recientes',
          tabBarLabel: 'Gastos Recientes',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" size={size} color={color} />
          ),
        }}

      />

      <BottomTabs.Screen
        name="Convert"
        component={Conversor}
        options={{
          title: 'Convertir',
          tabBarLabel: 'Convertir',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-usd" size={size} color={color} />
          ),
        }}

      />

      <BottomTabs.Screen
        name="Todos"
        component={AllExpenses}
        options={{
          title: 'Gastos Totales',
          tabBarLabel: 'Gastos Totales',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />

      <BottomTabs.Screen
        name="Graphs"
        component={Graphs}
        options={{
          title: 'Estadística',
          tabBarLabel: 'Estadística',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pie-chart" size={size} color={color} />
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
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.header },
          }}>
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="ManageExpense" component={ManageExpense}
              options={{
                presentation: 'modal'
              }
              } />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});