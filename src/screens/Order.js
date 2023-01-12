import {
  ScrollView,
  VStack,
  Text,
  Box,
  HStack,
  Icon,
  Image,
  Button,
} from 'native-base';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Feather from 'react-native-vector-icons/Feather';

import cineone21 from '../assets/home-img/cineone21.png';

const Order = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <VStack>
        <Navbar />
        <VStack px="5" py="10" bg="gray.200">
          <Text fontSize="xl" mb="3">
            Choose Your Seat
          </Text>
          <VStack bg="white" borderRadius="lg" px="4" py="6" mb="10">
            <VStack mb="5">
              <Box
                bg="#f15302"
                width="full"
                height="1"
                borderRadius="full"
                mb="2"
              />
              <HStack justifyContent="space-between">
                <Box width="150" height="100" bg="#f15302" />
                <Box width="150" height="100" bg="#f15302" />
              </HStack>
            </VStack>
            <Text fontSize="md" mb="3">
              Seating key
            </Text>
            <HStack space="20" mb="3">
              <HStack alignItems="center" space="2">
                <Icon as={<Feather name="arrow-down" />} />
                <Text>A - G</Text>
              </HStack>
              <HStack alignItems="center" space="2">
                <Icon as={<Feather name="arrow-right" />} />
                <Text>A - G</Text>
              </HStack>
            </HStack>
            <HStack space="20">
              <HStack alignItems="center" space="2">
                <Box width="5" height="5" bg="gray.300" borderRadius="md" />
                <Text>Available</Text>
              </HStack>
              <HStack alignItems="center" space="2">
                <Box width="5" height="5" bg="#f15302" borderRadius="md" />
                <Text>Available</Text>
              </HStack>
            </HStack>
            <HStack mt="3" alignItems="center" space="2">
              <Box width="5" height="5" bg="gray.600" borderRadius="md" />
              <Text>Sold</Text>
            </HStack>
          </VStack>
          <Text fontSize="xl" mb="3">
            Order Info
          </Text>
          <VStack bg="white" borderRadius="lg" py="6" mb="10">
            <Box justifyContent="center" alignItems="center" mb="5">
              <Image source={cineone21} alt="CineOne21" />
              <Text fontSize="2xl">CineOne21 Cinema</Text>
              <Text>Spider-Man: Homecoming</Text>
            </Box>
            <Box
              borderBottomWidth="1"
              borderBottomColor="gray.400"
              px="4"
              pb="5">
              <HStack justifyContent="space-between">
                <Text color="gray.500">Tuesday, 07 July 2020</Text>
                <Text>02:00pm</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Text color="gray.500">One ticket price</Text>
                <Text>$10</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Text color="gray.500">Seat choosed</Text>
                <Text>C4, C5, C6</Text>
              </HStack>
            </Box>
            <HStack px="4" mt="5" justifyContent="space-between">
              <Text fontSize="xl">Total Payment</Text>
              <Text fontSize="xl" color="#f15302" bold>
                $30
              </Text>
            </HStack>
          </VStack>
          <Button onPress={() => navigation.navigate('Payment')} bg="#f15302">
            Checkout now
          </Button>
        </VStack>
        <Footer />
      </VStack>
    </ScrollView>
  );
};

export default Order;
