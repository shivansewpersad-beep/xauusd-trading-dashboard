import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardScreen from './screens/DashboardScreen';

const Tab = createBottomTabNavigator();

const COLORS = {
  background: '#0F172A',
  card: '#1E293B',
  accent: '#FCD34D',
  text: '#E2E8F0',
  textMuted: '#94A3B8',
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: COLORS.card,
            borderTopColor: COLORS.card,
            borderTopWidth: 1,
          },
          tabBarActiveTintColor: COLORS.accent,
          tabBarInactiveTintColor: COLORS.textMuted,
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
          },
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({ color, size }) => <Icon name="chart-line" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="Scanner"
          component={DashboardScreen}
          options={{
            tabBarLabel: 'Scanner',
            tabBarIcon: ({ color, size }) => <Icon name="crosshair" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={DashboardScreen}
          options={{
            tabBarLabel: 'Calendar',
            tabBarIcon: ({ color, size }) => <Icon name="calendar" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={DashboardScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => <Icon name="cog" color={color} size={size} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
