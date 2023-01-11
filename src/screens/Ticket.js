import {Box, HStack, Image, ScrollView, VStack, Text} from 'native-base';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import ticket from '../assets/ticket-img/qrcode.png';

const Ticket = () => {
  return (
    <ScrollView>
      <VStack>
        <Navbar />
        <VStack bg="gray.200" py="10" px="10">
          <Box bg="white" borderRadius="xl">
            <Box justifyContent="center" alignItems="center" py="10">
              <Image source={ticket} alt="Ticket" />
            </Box>
            <HStack space="3" px="8" py="10" justifyContent="space-between">
              <VStack space="4">
                <Box>
                  <Text color="gray.500" mb="1">
                    Movie
                  </Text>
                  <Text fontSize="lg">Spider-Man: ..</Text>
                </Box>
                <Box>
                  <Text color="gray.500" mb="1">
                    Date
                  </Text>
                  <Text fontSize="lg">07 Jul</Text>
                </Box>
                <Box>
                  <Text color="gray.500" mb="1">
                    Count
                  </Text>
                  <Text fontSize="lg">3 pcs</Text>
                </Box>
              </VStack>
              <VStack space="4">
                <Box>
                  <Text color="gray.500" mb="1">
                    Category
                  </Text>
                  <Text fontSize="lg">Action</Text>
                </Box>
                <Box>
                  <Text color="gray.500" mb="1">
                    Time
                  </Text>
                  <Text fontSize="lg">2:00pm</Text>
                </Box>
                <Box>
                  <Text color="gray.500" mb="1">
                    Seats
                  </Text>
                  <Text fontSize="lg">C4, C5, C6</Text>
                </Box>
              </VStack>
            </HStack>
            <HStack
              justifyContent="space-between"
              mx="8"
              mb="10"
              p="5"
              borderWidth="1"
              borderColor="gray.300"
              borderRadius="lg">
              <Text fontSize="lg">Total</Text>
              <Text fontSize="lg">$30.00</Text>
            </HStack>
          </Box>
        </VStack>
        <Footer />
      </VStack>
    </ScrollView>
  );
};

export default Ticket;
