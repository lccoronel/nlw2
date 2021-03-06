import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import Studytabs from './StudyTabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="landing" component={Landing} />
        <Screen name="giveClasses" component={GiveClasses} />
        <Screen name="Study" component={Studytabs} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;