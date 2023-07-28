import React from "react";
import {Image, TouchableOpacity} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {icons, COLORS, FONTS, SIZES} from "./constants/"
import { ProductList } from "./components/ProductList";
import { SmallList } from "./components/SmallList";
import Login from "./components/Login";
const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border: "transparent",
  }
}


const Stack = createStackNavigator();

const App = ()=>{
  return(
    <NavigationContainer theme={theme}>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{title:'Login'}}/>
          <Stack.Screen name="ProductList" component={ProductList} options={{title:'welcome'}}/>
          <Stack.Screen name="SmallList" component={SmallList} options={{title:'smalllist'}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;