import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  VStack,
  Text,
  Image,
  ScrollView,
  Box,
  HStack,
  Button,
  Input,
  Pressable,
} from 'native-base';
// import Feather from 'react-native-vector-icons/Feather';
// import logo from '../assets/auth-img/text-logo.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import headerImg from '../assets/home-img/header.png';

import film1 from '../assets/home-img/1.png';
import film2 from '../assets/home-img/2.png';
import film3 from '../assets/home-img/3.png';
import film4 from '../assets/home-img/4.png';

// import http from '../helpers/http';

const Landing = () => {
  const navigation = useNavigation();
  const [focus, setFocus] = React.useState(null);
  const toggleFocus = id => {
    if (focus === id) {
      setFocus(null);
    } else {
      setFocus(id);
    }
  };

  const movie = [
    {
      id: 1,
      title: 'Title Movie',
      genre: 'Genre Movie',
      image: film1,
    },
    {
      id: 2,
      title: 'Title Movie',
      genre: 'Genre Movie',
      image: film2,
    },
    {
      id: 3,
      title: 'Title Movie',
      genre: 'Genre Movie',
      image: film3,
    },
    {
      id: 4,
      title: 'Title Movie',
      genre: 'Genre Movie',
      image: film4,
    },
  ];

  // const [message, setMessage] = React.useState('');

  // const getData = async () => {
  //   const {data} = await http().get('/');
  //   setMessage(data.message);
  // };

  // React.useEffect(() => {
  //   getData();
  // }, []);

  return (
    <ScrollView>
      <VStack>
        <Navbar />
        {/* Header */}
        <VStack mt="5" mb="20" px="5">
          <Box mb="10">
            <Text color="gray.400">Nearest Cinema, Newest Movie,</Text>
            {/* {message && <Text>{message}</Text>} */}
            <Text fontSize="4xl" fontWeight="bold" color="#F15302">
              Find out now!
            </Text>
          </Box>
          <Box>
            <Image source={headerImg} alt="header image" />
          </Box>
        </VStack>
        {/* Now showing */}
        <VStack mb="20" bg="gray.400" pt="7" pb="10" px="5">
          <HStack justifyContent="space-between" mb="5">
            <Text fontSize="lg" bold color="#f15302">
              Now Showing
            </Text>
            <Pressable onPress={() => navigation.navigate('ListMovie')}>
              <Text color="#f15302">view all</Text>
            </Pressable>
          </HStack>
          <ScrollView horizontal>
            <HStack space="4">
              {movie.map(o => (
                <Pressable key={o.id} onPress={() => toggleFocus(o.id)}>
                  <Box
                    borderColor="white"
                    bg={focus === o.id ? 'white' : 'transparent'}
                    borderWidth="2"
                    p="5"
                    borderRadius="md">
                    <Image
                      source={o.image}
                      alt={o.title}
                      width="150"
                      height="230"
                      resizeMode="cover"
                    />
                    {focus === o.id && (
                      <Box mt="3" justifyContent="center" alignItems="center">
                        <Text fontSize="xl">{o.title}</Text>
                        <Text color="gray.500">{o.genre}</Text>
                        <Button width="150" mt="3" bg="#f15302">
                          Details
                        </Button>
                      </Box>
                    )}
                  </Box>
                </Pressable>
              ))}
            </HStack>
          </ScrollView>
        </VStack>
        {/* upcoming */}
        <VStack mb="20" px="5">
          <HStack justifyContent="space-between">
            <Text fontSize="lg" bold mb="5">
              Upcoming Movies
            </Text>
            <Pressable onPress={() => navigation.navigate('ListMovie')}>
              <Text color="#F15302">view all</Text>
            </Pressable>
          </HStack>
          <ScrollView horizontal mb="5">
            <HStack space="3">
              <Button bg="#F15302">
                <Text color="white" bold>
                  September
                </Text>
              </Button>
              <Button
                bg="white:alpha.100"
                borderWidth="2"
                borderColor="#F15302">
                <Text color="#F15302" bold>
                  October
                </Text>
              </Button>
              <Button
                bg="white:alpha.100"
                borderWidth="2"
                borderColor="#F15302">
                <Text color="#F15302" bold>
                  November
                </Text>
              </Button>
              <Button
                bg="white:alpha.100"
                borderWidth="2"
                borderColor="#F15302">
                <Text color="#F15302" bold>
                  Desember
                </Text>
              </Button>
            </HStack>
          </ScrollView>
          <ScrollView horizontal>
            <HStack space="5">
              <Box
                borderWidth="2"
                borderColor="gray.400"
                justifyContent="center"
                alignItems="center"
                p="5"
                borderRadius="md">
                <Image
                  source={film3}
                  alt="film3"
                  width="150"
                  height="230"
                  resizeMode="cover"
                  borderRadius="md"
                  mb="2"
                />
                <Text fontSize="xl" bold>
                  Black Widow
                </Text>
                <Text color="gray.400" mt="2" mb="5">
                  Action, Adventure, Sci-Fi
                </Text>
                <Button
                  onPress={() => navigation.navigate('MovieDetail')}
                  width="150"
                  bg="#f15302">
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
                <Image
                  source={film3}
                  alt="film3"
                  width="150"
                  height="230"
                  resizeMode="cover"
                  borderRadius="md"
                  mb="2"
                />
                <Text fontSize="xl" bold>
                  Black Widow
                </Text>
                <Text color="gray.400" mt="2" mb="5">
                  Action, Adventure, Sci-Fi
                </Text>
                <Button
                  onPress={() => navigation.navigate('MovieDetail')}
                  width="150"
                  bg="#f15302">
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
                <Image
                  source={film3}
                  alt="film3"
                  width="150"
                  height="230"
                  resizeMode="cover"
                  borderRadius="md"
                  mb="2"
                />
                <Text fontSize="xl" bold>
                  Black Widow
                </Text>
                <Text color="gray.400" mt="2" mb="5">
                  Action, Adventure, Sci-Fi
                </Text>
                <Button
                  onPress={() => navigation.navigate('MovieDetail')}
                  width="150"
                  bg="#f15302">
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
                <Image
                  source={film3}
                  alt="film3"
                  width="150"
                  height="230"
                  resizeMode="cover"
                  borderRadius="md"
                  mb="2"
                />
                <Text fontSize="xl" bold>
                  Black Widow
                </Text>
                <Text color="gray.400" mt="2" mb="5">
                  Action, Adventure, Sci-Fi
                </Text>
                <Button
                  onPress={() => navigation.navigate('MovieDetail')}
                  width="150"
                  bg="#f15302">
                  Details
                </Button>
              </Box>
            </HStack>
          </ScrollView>
        </VStack>
        {/* Subscriber */}
        <VStack
          p="10"
          mx="5"
          borderColor="gray.400"
          borderWidth="1"
          borderRadius="lg"
          space="5"
          alignItems="center"
          mb="20">
          <Box alignItems="center">
            <Text fontSize="md" color="gray.500">
              Be the vanguard of the
            </Text>
            <Text fontSize="4xl" color="#F15302">
              Moviegoers
            </Text>
          </Box>
          <Input placeholder="Type your email" />
          <Button width="full" bg="#F15302">
            Join now
          </Button>
          <Text textAlign="center" width="230" color="gray.400">
            By joining you as a Tickitz member, we will always send you the
            latest updates via email.
          </Text>
        </VStack>
        <Footer />
      </VStack>
    </ScrollView>
  );
};

export default Landing;
