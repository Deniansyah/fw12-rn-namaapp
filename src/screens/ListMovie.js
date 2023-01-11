import {
  Box,
  HStack,
  Input,
  ScrollView,
  Text,
  VStack,
  Image,
  Button,
  Select,
} from 'native-base';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// import Feather from 'react-native-vector-icons/Feather';

import film3 from '../assets/home-img/3.png';
// import film1 from '../assets/home-img/1.png';
// import film2 from '../assets/home-img/2.png';
// import film4 from '../assets/home-img/4.png';

const ListMovie = () => {
  return (
    <ScrollView>
      <VStack>
        <Navbar />
        <VStack py="10" px="5" bg="gray.200">
          <Text fontSize="xl" bold>
            List Movie
          </Text>
          <HStack my="3" justifyContent="space-between">
            <Select
              px="5"
              fontSize="md"
              minWidth="140"
              placeholder="Sort"
              bg="white"
              borderRadius="full">
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
            <Input
              width="200"
              pl="5"
              bg="white"
              borderRadius="full"
              type="text"
              fontSize="md"
              placeholder="Search Movie Name ..."
            />
          </HStack>
          <ScrollView horizontal mb="5">
            <HStack space="3">
              <Button bg="#F15302">
                <Text color="white" bold>
                  September
                </Text>
              </Button>
              <Button bg="gray.200" borderWidth="2" borderColor="#F15302">
                <Text color="#F15302" bold>
                  October
                </Text>
              </Button>
              <Button bg="gray.200" borderWidth="2" borderColor="#F15302">
                <Text color="#F15302" bold>
                  November
                </Text>
              </Button>
              <Button bg="gray.200" borderWidth="2" borderColor="#F15302">
                <Text color="#F15302" bold>
                  Desember
                </Text>
              </Button>
            </HStack>
          </ScrollView>
          <HStack justifyContent="space-between" mb="5">
            <Box
              borderWidth="2"
              borderColor="gray.400"
              justifyContent="center"
              alignItems="center"
              p="5"
              borderRadius="md">
              <Image source={film3} alt="film3" borderRadius="md" mb="2" />
              <Box justifyContent="center" alignItems="center" width="120">
                <Text fontSize="xl" bold>
                  Black Widow
                </Text>
                <Text color="gray.400" mt="2" mb="5" textAlign="center">
                  Action, Adventure, Sci-Fi
                </Text>
              </Box>
              <Button width="120" bg="#f15302">
                Details
              </Button>
            </Box>
            <Box
              borderWidth="2"
              borderColor="gray.400"
              justifyContent="center"
              alignItems="center"
              p="5"
              borderRadius="md">
              <Image source={film3} alt="film3" borderRadius="md" mb="2" />
              <Box justifyContent="center" alignItems="center" width="120">
                <Text fontSize="xl" bold>
                  Black Widow
                </Text>
                <Text color="gray.400" mt="2" mb="5" textAlign="center">
                  Action, Adventure, Sci-Fi
                </Text>
              </Box>
              <Button width="120" bg="#f15302">
                Details
              </Button>
            </Box>
          </HStack>
          <HStack justifyContent="space-between">
            <Box
              borderWidth="2"
              borderColor="gray.400"
              justifyContent="center"
              alignItems="center"
              p="5"
              borderRadius="md">
              <Image source={film3} alt="film3" borderRadius="md" mb="2" />
              <Box justifyContent="center" alignItems="center" width="120">
                <Text fontSize="xl" bold>
                  Black Widow
                </Text>
                <Text color="gray.400" mt="2" mb="5" textAlign="center">
                  Action, Adventure, Sci-Fi
                </Text>
              </Box>
              <Button width="120" bg="#f15302">
                Details
              </Button>
            </Box>
            <Box
              borderWidth="2"
              borderColor="gray.400"
              justifyContent="center"
              alignItems="center"
              p="5"
              borderRadius="md">
              <Image source={film3} alt="film3" borderRadius="md" mb="2" />
              <Box justifyContent="center" alignItems="center" width="120">
                <Text fontSize="xl" bold>
                  Black Widow
                </Text>
                <Text color="gray.400" mt="2" mb="5" textAlign="center">
                  Action, Adventure, Sci-Fi
                </Text>
              </Box>
              <Button width="120" bg="#f15302">
                Details
              </Button>
            </Box>
          </HStack>
          <HStack mt="5" justifyContent="center" space="3">
            <Box
              width="10"
              height="10"
              justifyContent="center"
              alignItems="center"
              bg="#f15302"
              borderRadius="lg">
              <Text color="white" fontSize="md">
                1
              </Text>
            </Box>
            <Box
              width="10"
              height="10"
              justifyContent="center"
              alignItems="center"
              bg="white"
              borderRadius="lg">
              <Text fontSize="md">2</Text>
            </Box>
            <Box
              width="10"
              height="10"
              justifyContent="center"
              alignItems="center"
              bg="white"
              borderRadius="lg">
              <Text fontSize="md">3</Text>
            </Box>
            <Box
              width="10"
              height="10"
              justifyContent="center"
              alignItems="center"
              bg="white"
              borderRadius="lg">
              <Text fontSize="md">4</Text>
            </Box>
          </HStack>
        </VStack>
        <Footer />
      </VStack>
    </ScrollView>
  );
};

export default ListMovie;
