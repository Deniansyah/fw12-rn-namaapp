import React from 'react';
import {Image, HStack, Icon, Box, Pressable} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import logo from '../assets/auth-img/text-logo.png';

const Navbar = () => {
  return (
    <HStack alignItems="center" justifyContent="space-between" py="3" px="5">
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
        <Icon
          size={30}
          as={
            <Pressable>
              <Feather name="menu" size={30} />
            </Pressable>
          }
        />
      </Box>
    </HStack>
  );
};

export default Navbar;
