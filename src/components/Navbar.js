import React from 'react';
import {Image, HStack, Box, Pressable, Menu, HamburgerIcon} from 'native-base';
// import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import {useDispatch} from 'react-redux';
import {logoutAction} from '../redux/reducers/auth';

import logo from '../assets/auth-img/text-logo.png';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlerLogout = () => {
    dispatch(logoutAction());
    navigation.navigate('login');
  };

  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      py="3"
      px="5"
      bg="white">
      <Box>
        <Image
          source={logo}
          alt="logo"
          width="120"
          height="60"
          resizeMode="center"
        />
      </Box>
      <Box>
        {/* <Icon
          size={30}
          as={
            <Pressable>
              <Feather name="menu" size={30} />
            </Pressable>
          }
        /> */}
        <Menu
          w="190"
          trigger={triggerProps => {
            return (
              <Pressable
                accessibilityLabel="More options menu"
                {...triggerProps}>
                <HamburgerIcon />
              </Pressable>
            );
          }}>
          <Menu.Item onPress={() => navigation.navigate('Landing')}>
            Home
          </Menu.Item>
          <Menu.Item onPress={() => navigation.navigate('ListMovie')}>
            List Movie
          </Menu.Item>
          <Menu.Item onPress={() => navigation.navigate('Profile')}>
            Profile
          </Menu.Item>
          <Menu.Item onPress={handlerLogout}>Logout</Menu.Item>
        </Menu>
      </Box>
    </HStack>
  );
};

export default Navbar;
