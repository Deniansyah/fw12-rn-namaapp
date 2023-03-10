import {
  HStack,
  ScrollView,
  VStack,
  Text,
  Box,
  Image,
  Button,
  Pressable,
} from 'native-base';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import cineone21 from '../assets/home-img/cineone21.png';

const History = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <VStack>
        <Navbar />
        <VStack bg="gray.200" pb="10">
          <HStack
            justifyContent="space-between"
            pt="5"
            px="10"
            bg="white"
            mb="10">
            <Pressable onPress={() => navigation.navigate('Profile')}>
              <Text fontSize="lg" color="gray.400">
                Details Account
              </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('History')}>
              <Text
                fontSize="lg"
                borderBottomWidth="1"
                borderBottomColor="#f15302"
                pb="5">
                Order History
              </Text>
            </Pressable>
          </HStack>
          <VStack space="5">
            <Box mx="5" py="5" bg="white" borderRadius="lg">
              <Box
                borderBottomWidth="1"
                borderBottomColor="gray.300"
                pb="5"
                px="5">
                <Image source={cineone21} alt="CineOne21" />
                <Text color="gray.400" my="3">
                  Tuesday, 07 July 2020 - 04:30pm
                </Text>
                <Text fontSize="lg">Spider-Man: Homecoming</Text>
              </Box>
              <Box mt="5" px="5">
                <Button
                  onPress={() => navigation.navigate('Ticket')}
                  bg="#00BA88">
                  Ticket in active
                </Button>
              </Box>
            </Box>
            <Box mx="5" py="5" bg="white" borderRadius="lg">
              <Box
                borderBottomWidth="1"
                borderBottomColor="gray.300"
                pb="5"
                px="5">
                <Image source={cineone21} alt="CineOne21" />
                <Text color="gray.400" my="3">
                  Tuesday, 07 July 2020 - 04:30pm
                </Text>
                <Text fontSize="lg">Spider-Man: Homecoming</Text>
              </Box>
              <Box mt="5" px="5">
                <Button
                  onPress={() => navigation.navigate('Ticket')}
                  bg="#00BA88">
                  Ticket in active
                </Button>
              </Box>
            </Box>
            <Box mx="5" py="5" bg="white" borderRadius="lg">
              <Box
                borderBottomWidth="1"
                borderBottomColor="gray.300"
                pb="5"
                px="5">
                <Image source={cineone21} alt="CineOne21" />
                <Text color="gray.400" my="3">
                  Tuesday, 07 July 2020 - 04:30pm
                </Text>
                <Text fontSize="lg">Spider-Man: Homecoming</Text>
              </Box>
              <Box mt="5" px="5">
                <Button
                  onPress={() => navigation.navigate('Ticket')}
                  bg="#00BA88">
                  Ticket in active
                </Button>
              </Box>
            </Box>
          </VStack>
        </VStack>
        <Footer />
      </VStack>
    </ScrollView>
  );
};

export default History;
