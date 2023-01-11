/* eslint-disable prettier/prettier */
import React from 'react';
import { NativeBaseProvider } from 'native-base';
// import Login from './src/screens/Login';
// import Register from './src/screens/Register';
// import ForgotPassword from './src/screens/ForgotPassword';
// import SetPassword from './src/screens/SetPassword';
// import Landing from './src/screens/Landing';
// import ListMovie from './src/screens/ListMovie';
// import MovieDetail from './src/screens/MovieDetail';
// import Order from './src/screens/Order';
// import Payment from './src/screens/Payment';
// import Profile from './src/screens/Profile';
// import History from './src/screens/History';
import Ticket from './src/screens/Ticket';

const App = () => {
  return (
    <NativeBaseProvider>
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <ForgotPassword /> */}
      {/* <SetPassword /> */}
      {/* <Landing /> */}
      {/* <ListMovie /> */}
      {/* <MovieDetail /> */}
      {/* <Order /> */}
      {/* <Payment /> */}
      {/* <Profile /> */}
      {/* <History /> */}
      <Ticket />
    </NativeBaseProvider>
  );
};

export default App;
