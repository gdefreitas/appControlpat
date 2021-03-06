import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NativeRouter, Route } from "react-router-native";
import Historic from "./src/pages/Historic";
import Refound from "./src/pages/RefoundScreen";
import Withdraw from "./src/pages/WithdrawScreen";
import Home from "./src/pages/Home";
import Registration from "./src/pages/Registration";
import Search from "./src/pages/Search";
import Routes from "./src/routes";
import styles, { theme } from "./src/styles";
import  Dispatch  from "./src/pages/Dispatch";

export default function App() {
  return (

    // <NativeRouter>
      // <PaperProvider theme={theme}>
        <View style={styles.container}>
          <StatusBar hidden={true} />
          {/* <Dispatch/>  */}
           <Routes />
          {/*<Route exact path='/' component={Home} />
          <Route exact path='/registration' component={Registration} />
          <Route exact path='/search' component={Search} />
          <Route exact path="/search/:id" component={Historic} />
          <Route exact path="/search/:id" component={Historic} />
          <Route exact path="/withdraw" component={Withdraw} />
        */}
   
        </View>
      // </PaperProvider>
    // </NativeRouter>

  );
}
