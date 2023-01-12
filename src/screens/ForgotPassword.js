import React from 'react';
import {
  Stack,
  Text,
  VStack,
  Image,
  Input,
  Button,
  FormControl,
  ScrollView,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import logo from '../assets/auth-img/text-logo.png';

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <VStack height="full" p="5">
        <Stack>
          <Image
            source={logo}
            alt="logo"
            width="120"
            height="60"
            resizeMode="center"
          />
        </Stack>
        <Stack mb="5">
          <Text fontSize="4xl" fontWeight="bold">
            Forgot Password
          </Text>
          <Text color="gray.400">we'll send a link to your email shortly</Text>
        </Stack>
        <FormControl>
          <VStack space="5">
            <Stack>
              <Text color="gray.500" pb="2">
                Email
              </Text>
              <Input type="email" placeholder="Write your email" />
            </Stack>
            <Button
              onPress={() => navigation.navigate('SetPassword')}
              rounded="md"
              background="#F15302">
              Send
            </Button>
          </VStack>
        </FormControl>
      </VStack>
    </ScrollView>
  );
};

export default ForgotPassword;
