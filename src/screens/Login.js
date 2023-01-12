import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Stack,
  Text,
  VStack,
  Image,
  Input,
  Button,
  FormControl,
  Pressable,
  Icon,
} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import logo from '../assets/auth-img/text-logo.png';

const Login = () => {
  const [show, setShow] = React.useState(false);
  const navigation = useNavigation();
  return (
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
          Sign In
        </Text>
        <Text color="gray.400">
          Sign in with your data that you entered during your registration
        </Text>
      </Stack>
      <FormControl>
        <VStack space="5">
          <Stack>
            <Text color="gray.500" pb="2">
              Email
            </Text>
            <Input placeholder="Write your email" />
          </Stack>
          <Stack>
            <Text color="gray.500" pb="2">
              Password
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
              placeholder="Write your password"
            />
          </Stack>
          <Button
            rounded="md"
            background="#F15302"
            onPress={() => navigation.navigate('Landing')}>
            Login
          </Button>
          <Stack alignItems="center" space="2">
            <Text>
              Forgot your password?{' '}
              <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
                <Text color="#F15302" underline>
                  Reset now
                </Text>
              </Pressable>
            </Text>
            <Text>
              Don’t have an account?{' '}
              <Pressable onPress={() => navigation.navigate('Register')}>
                <Text color="#F15302" underline>
                  Sign Up
                </Text>
              </Pressable>
            </Text>
          </Stack>
        </VStack>
      </FormControl>
    </VStack>
  );
};

export default Login;
