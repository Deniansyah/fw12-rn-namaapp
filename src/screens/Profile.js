import {
  HStack,
  ScrollView,
  VStack,
  Text,
  Box,
  Image,
  Button,
  Input,
  Pressable,
  Icon,
} from 'native-base';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Feather from 'react-native-vector-icons/Feather';

import profile from '../assets/profile-img/profile.png';

const Profile = () => {
  const [show, setShow] = React.useState(false);

  return (
    <ScrollView>
      <VStack>
        <Navbar />
        <VStack bg="gray.200">
          <HStack
            justifyContent="space-between"
            pt="5"
            px="10"
            bg="white"
            mb="10">
            <Text
              fontSize="lg"
              borderBottomWidth="1"
              borderBottomColor="#f15302"
              pb="5">
              Details Account
            </Text>
            <Text fontSize="lg" color="gray.400">
              Order History
            </Text>
          </HStack>
          <Box bg="white" borderRadius="lg" py="6" mb="10" mx="5">
            <Box>
              <Text fontSize="lg" px="8">
                INFO
              </Text>
              <Box
                justifyContent="center"
                alignItems="center"
                mb="5"
                borderBottomWidth="1"
                borderBottomColor="gray.400"
                pb="5">
                <Image source={profile} alt="profile" />
                <Text fontSize="2xl" bold>
                  Jonas El Rodriguez
                </Text>
                <Text fontSize="md" color="gray.400">
                  Moviegoers
                </Text>
              </Box>
            </Box>
            <Box px="4" justifyContent="center" alignItems="center">
              <Button bg="#f15302" width="200">
                Logout
              </Button>
            </Box>
          </Box>
          <VStack px="5" pb="10">
            <Text fontSize="xl" mb="3">
              Account Settings
            </Text>
            <Box bg="white" borderRadius="lg" px="4" py="6" mb="5">
              <Box borderBottomWidth="1" borderBottomColor="gray.400" pb="3">
                <Text fontSize="lg">Details Information</Text>
              </Box>
              <VStack space="4" mt="3">
                <Box>
                  <Text color="gray.500" mb="2">
                    Full Name
                  </Text>
                  <Input value="Jonas El Rodriguez" />
                </Box>
                <Box>
                  <Text color="gray.500" mb="2">
                    E-mail
                  </Text>
                  <Input value="jonasrodrigu123@gmail.com" />
                </Box>
                <Box>
                  <Text color="gray.500" mb="2">
                    Phone Number
                  </Text>
                  <Input value="81445687121" />
                </Box>
              </VStack>
            </Box>
            <Button bg="#f15302" mb="10">
              Update changes
            </Button>
            <Box bg="white" borderRadius="lg" px="4" py="6" mb="5">
              <Box borderBottomWidth="1" borderBottomColor="gray.400" pb="3">
                <Text fontSize="lg">Account and Privacy</Text>
              </Box>
              <VStack space="4" mt="3">
                <Box>
                  <Text color="gray.500" mb="3">
                    New Password
                  </Text>
                  <Input
                    type={show ? 'text' : 'password'}
                    InputRightElement={
                      <Pressable onPress={() => setShow(!show)}>
                        <Icon
                          as={<Feather name={show ? 'eye-off' : 'eye'} />}
                          size={5}
                          mr="3"
                          color="muted.400"
                        />
                      </Pressable>
                    }
                    placeholder="********"
                    fontSize="md"
                  />
                </Box>
                <Box>
                  <Text color="gray.500" mb="3">
                    Confirm
                  </Text>
                  <Input
                    type={show ? 'text' : 'password'}
                    InputRightElement={
                      <Pressable onPress={() => setShow(!show)}>
                        <Icon
                          as={<Feather name={show ? 'eye-off' : 'eye'} />}
                          size={5}
                          mr="3"
                          color="muted.400"
                        />
                      </Pressable>
                    }
                    placeholder="********"
                    fontSize="md"
                  />
                </Box>
              </VStack>
            </Box>
            <Button bg="#f15302">Update changes</Button>
          </VStack>
        </VStack>
        <Footer />
      </VStack>
    </ScrollView>
  );
};

export default Profile;
