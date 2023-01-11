import {
  Box,
  Image,
  ScrollView,
  VStack,
  Text,
  HStack,
  Input,
  Button,
} from 'native-base';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import film1big from '../assets/home-img/1big.png';
import ebv from '../assets/home-img/ebv.png';

const MovieDetail = () => {
  return (
    <ScrollView>
      <VStack>
        <Navbar />
        <VStack px="5" my="10">
          <Box justifyContent="center" alignItems="center" mb="10">
            <Box
              borderWidth="2"
              borderColor="gray.400"
              p="10"
              borderRadius="lg">
              <Image source={film1big} alt="film1big" />
            </Box>
          </Box>
          <Box justifyContent="center" alignItems="center" mb="10">
            <Text fontSize="2xl" bold>
              Spider-Man: Homecoming
            </Text>
            <Text fontSize="lg" color="gray.400">
              Adventure, Action, Sci-Fi
            </Text>
          </Box>
          <HStack
            justifyContent="space-between"
            borderBottomWidth="1"
            borderBottomColor="gray.400"
            pb="10">
            <VStack space="3">
              <Box>
                <Text color="gray.400">Release date</Text>
                <Text fontSize="md">June 28, 2017</Text>
              </Box>
              <Box>
                <Text color="gray.400">Duration</Text>
                <Text fontSize="md">2 hrs 13 min</Text>
              </Box>
            </VStack>
            <VStack space="3">
              <Box>
                <Text color="gray.400">Directed by</Text>
                <Text fontSize="md">Jon Watss</Text>
              </Box>
              <Box>
                <Text color="gray.400">Casts</Text>
                <Text width="140" fontSize="md">
                  Tom Holland, Robert Downey Jr., etc.
                </Text>
              </Box>
            </VStack>
          </HStack>
          <Text fontSize="lg" mb="2" mt="10">
            Synopsis
          </Text>
          <Text color="gray.500">
            Thrilled by his experience with the Avengers, Peter returns home,
            where he lives with his Aunt May, under the watchful eye of his new
            mentor Tony Stark, Peter tries to fall back into his normal daily
            routine - distracted by thoughts of proving himself to be more than
            just your friendly neighborhood Spider-Man - but when the Vulture
            emerges as a new villain, everything that Peter holds most important
            will be threatened.{' '}
          </Text>
        </VStack>
        {/* ticket */}
        <VStack px="5" pb="10" bg="gray.200">
          <Box px="5" py="10" justifyContent="center" alignItems="center">
            <Text fontSize="2xl" bold mb="5">
              Showtimes and Tickets
            </Text>
            <VStack space="3">
              <Input placeholder="Set a date" width="300" bg="gray.300" />
              <Input placeholder="Set a city" width="300" bg="gray.300" />
            </VStack>
          </Box>
          <VStack space="5">
            <Box p="6" borderRadius="lg" bg="white">
              <Box
                justifyContent="center"
                alignItems="center"
                borderBottomWidth="1"
                borderBottomColor="gray.400"
                pb="5">
                <Image source={ebv} alt="ebv" />
                <Text width="200" textAlign="center" pt="3" color="gray.400">
                  Whatever street No.12, South Purwokerto
                </Text>
              </Box>
              <VStack justifyContent="center" alignItems="center" py="5">
                <HStack space="7">
                  <Text color="gray.500">08:30am</Text>
                  <Text color="gray.500">08:30am</Text>
                  <Text color="gray.500">08:30am</Text>
                  <Text color="gray.500">08:30am</Text>
                </HStack>
                <HStack space="7">
                  <Text color="gray.500">08:30am</Text>
                  <Text color="gray.500">08:30am</Text>
                  <Text color="gray.500">08:30am</Text>
                  <Text color="gray.500">08:30am</Text>
                </HStack>
              </VStack>
              <HStack justifyContent="space-between" mb="5">
                <Text color="gray.400" fontSize="md">
                  Price
                </Text>
                <Text fontSize="lg" bold>
                  $10.00/seat
                </Text>
              </HStack>
              <Button bg="#f15302">Book now</Button>
            </Box>
            <Box p="6" borderRadius="lg" bg="white">
              <Box
                justifyContent="center"
                alignItems="center"
                borderBottomWidth="1"
                borderBottomColor="gray.400"
                pb="5">
                <Image source={ebv} alt="ebv" />
                <Text width="200" textAlign="center" pt="3" color="gray.400">
                  Whatever street No.12, South Purwokerto
                </Text>
              </Box>
              <VStack justifyContent="center" alignItems="center" py="5">
                <HStack space="7">
                  <Text color="gray.500">08:30am</Text>
                  <Text color="gray.500">08:30am</Text>
                  <Text color="gray.500">08:30am</Text>
                  <Text color="gray.500">08:30am</Text>
                </HStack>
                <HStack space="7">
                  <Text color="gray.500">08:30am</Text>
                  <Text color="gray.500">08:30am</Text>
                  <Text color="gray.500">08:30am</Text>
                  <Text color="gray.500">08:30am</Text>
                </HStack>
              </VStack>
              <HStack justifyContent="space-between" mb="5">
                <Text color="gray.400" fontSize="md">
                  Price
                </Text>
                <Text fontSize="lg" bold>
                  $10.00/seat
                </Text>
              </HStack>
              <Button bg="#f15302">Book now</Button>
            </Box>
            <Box p="6" borderRadius="lg" bg="white">
              <Box
                justifyContent="center"
                alignItems="center"
                borderBottomWidth="1"
                borderBottomColor="gray.400"
                pb="5">
                <Image source={ebv} alt="ebv" />
                <Text width="200" textAlign="center" pt="3" color="gray.400">
                  Whatever street No.12, South Purwokerto
                </Text>
              </Box>
              <VStack justifyContent="center" alignItems="center" py="5">
                <HStack space="7">
                  <Text color="gray.500">08:30am</Text>
                  <Text color="gray.500">08:30am</Text>
                  <Text color="gray.500">08:30am</Text>
                  <Text color="gray.500">08:30am</Text>
                </HStack>
                <HStack space="7">
                  <Text color="gray.500">08:30am</Text>
                  <Text color="gray.500">08:30am</Text>
                  <Text color="gray.500">08:30am</Text>
                  <Text color="gray.500">08:30am</Text>
                </HStack>
              </VStack>
              <HStack justifyContent="space-between" mb="5">
                <Text color="gray.400" fontSize="md">
                  Price
                </Text>
                <Text fontSize="lg" bold>
                  $10.00/seat
                </Text>
              </HStack>
              <Button bg="#f15302">Book now</Button>
            </Box>
          </VStack>
          <Box justifyContent="center" alignItems="center" mt="5">
            <Text color="#f15302">view more</Text>
          </Box>
        </VStack>
        <Footer />
      </VStack>
    </ScrollView>
  );
};

export default MovieDetail;
