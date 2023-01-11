import {Box, HStack, Icon, Image, Text, VStack} from 'native-base';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import logo from '../assets/auth-img/text-logo.png';
import ebv from '../assets/home-img/ebv.png';
import hiflix from '../assets/home-img/hiflix.png';
import cineone21 from '../assets/home-img/cineone21.png';

const Footer = () => {
  return (
    <VStack pt="5" px="5">
      <Image
        alt="logo"
        source={logo}
        width="150"
        height="60"
        resizeMode="center"
        mb="3"
      />
      <Text color="gray.500" width="3/4" mb="10">
        Stop waiting in line. Buy tickets conveniently, watch movies quietly.
      </Text>
      <Box mb="10">
        <Text fontSize="md" bold mb="4">
          Explore
        </Text>
        <HStack space="3">
          <Text color="gray.500">Home</Text>
          <Text color="gray.500">List Movie</Text>
        </HStack>
      </Box>
      <Box mb="10">
        <Text fontSize="md" bold mb="4">
          Our Sponsor
        </Text>
        <HStack alignItems="center" space="10">
          <Image source={ebv} alt="ebv" />
          <Image source={cineone21} alt="cineone21" />
          <Image source={hiflix} alt="hiflix" />
        </HStack>
      </Box>
      <Box mb="10">
        <Text fontSize="md" bold mb="4">
          Follow us
        </Text>
        <HStack space="10">
          <Icon size={6} as={<Feather name="facebook" />} />
          <Icon size={6} as={<Feather name="instagram" />} />
          <Icon size={6} as={<Feather name="twitter" />} />
          <Icon size={6} as={<Feather name="youtube" />} />
        </HStack>
      </Box>
      <Text mb="10">© 2020 Tickitz. All Rights Reserved.</Text>
    </VStack>
  );
};

export default Footer;
