import { StatusBar } from 'expo-status-bar';
import {StyleSheet, SafeAreaView, Switch} from 'react-native';
import { ThemeContext } from "./src/context/ThemeContext";
import { useState } from "react";
import {myColors} from "./src/styles/Colors";
import MyKeyBoard from "./src/components/MyKeyBoard";


const App = () => {

  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
        <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: '#000'}]}>
          <StatusBar style="auto" />
          <Switch
              value={theme === 'light'}
              onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
          <MyKeyBoard />
        </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;
