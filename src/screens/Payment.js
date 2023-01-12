import {
  Box,
  HStack,
  ScrollView,
  Text,
  VStack,
  Image,
  Input,
  Icon,
  Button,
} from 'native-base';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Feather from 'react-native-vector-icons/Feather';

import dana from '../assets/payment-img/dana.png';
import gopay from '../assets/payment-img/gopay.png';
import gpay from '../assets/payment-img/gpay.png';
import ovo from '../assets/payment-img/ovo.png';
import paypal from '../assets/payment-img/paypal.png';
import visa from '../assets/payment-img/visa.png';

const Payment = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <VStack>
        <Navbar />
        <VStack bg="gray.200">
          <HStack
            justifyContent="space-between"
            bg="white"
            p="5"
            mb="10"
            borderBottomRightRadius="2xl"
            borderBottomLeftRadius="2xl">
            <Text fontSize="lg" color="gray.400">
              Total Payment
            </Text>
            <Text fontSize="lg">$30.00</Text>
          </HStack>
          <VStack px="5" mb="10">
            <Text fontSize="xl" mb="3">
              Payment Method
            </Text>
            <Box bg="white" borderRadius="lg" px="4" py="6" mb="10">
              <HStack justifyContent="space-between" mb="4">
                <Box
                  borderWidth="1"
                  width="30%"
                  height="10"
                  borderRadius="lg"
                  justifyContent="center"
                  alignItems="center">
                  <Image
                    source={gpay}
                    alt="Gpay"
                    width="20"
                    height="7"
                    resizeMode="contain"
                  />
                </Box>
                <Box
                  borderWidth="1"
                  width="30%"
                  height="10"
                  borderRadius="lg"
                  justifyContent="center"
                  alignItems="center">
                  <Image
                    source={visa}
                    alt="visa"
                    width="20"
                    height="7"
                    resizeMode="contain"
                  />
                </Box>
                <Box
                  borderWidth="1"
                  width="30%"
                  height="10"
                  borderRadius="lg"
                  justifyContent="center"
                  alignItems="center">
                  <Image
                    source={gopay}
                    alt="Gopay"
                    width="20"
                    height="7"
                    resizeMode="contain"
                  />
                </Box>
              </HStack>
              <HStack justifyContent="space-between">
                <Box
                  borderWidth="1"
                  width="30%"
                  height="10"
                  borderRadius="lg"
                  justifyContent="center"
                  alignItems="center">
                  <Image
                    source={paypal}
                    alt="paypal"
                    width="20"
                    height="7"
                    resizeMode="contain"
                  />
                </Box>
                <Box
                  borderWidth="1"
                  width="30%"
                  height="10"
                  borderRadius="lg"
                  justifyContent="center"
                  alignItems="center">
                  <Image
                    source={ovo}
                    alt="ovo"
                    width="20"
                    height="7"
                    resizeMode="contain"
                  />
                </Box>
                <Box
                  borderWidth="1"
                  width="30%"
                  height="10"
                  borderRadius="lg"
                  justifyContent="center"
                  alignItems="center">
                  <Image
                    source={dana}
                    alt="dana"
                    width="20"
                    height="7"
                    resizeMode="contain"
                  />
                </Box>
              </HStack>
              <VStack
                space="2"
                justifyContent="center"
                alignItems="center"
                mt="4">
                <Text color="gray.400">or</Text>
                <Text>
                  Pay via cash. <Text color="#f15302">See how it work</Text>
                </Text>
              </VStack>
            </Box>
            <Text fontSize="xl" mb="3">
              Personal Info
            </Text>
            <VStack
              space="5"
              bg="white"
              borderRadius="lg"
              px="4"
              py="6"
              mb="10">
              <Box>
                <Text mb="2" color="gray.500">
                  Full Name
                </Text>
                <Input value="Jonas El Rodriguez" />
              </Box>
              <Box>
                <Text mb="2" color="gray.500">
                  Email
                </Text>
                <Input value="jonasrodri123@gmail.com" />
              </Box>
              <Box>
                <Text mb="2" color="gray.500">
                  Phone Number
                </Text>
                <Input value="81445687121" />
              </Box>
              <HStack
                p="5"
                bg="#F4B7404D:alpha.30"
                borderRadius="2xl"
                alignItems="center"
                space="2">
                <Icon
                  as={<Feather name="alert-triangle" />}
                  color="#F4B740"
                  size={6}
                />
                <Text>Fill your data correctly.</Text>
              </HStack>
            </VStack>
            <Button onPress={() => navigation.navigate('History')} bg="#f15302">
              Pay your order
            </Button>
          </VStack>
        </VStack>
        <Footer />
      </VStack>
    </ScrollView>
  );
};

export default Payment;
