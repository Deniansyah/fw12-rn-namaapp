import React from 'react';
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
  ScrollView,
} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import logo from '../assets/auth-img/text-logo.png';

const Register = () => {
  const [show, setShow] = React.useState(false);
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
            Sign Up
          </Text>
          <Text color="gray.400">Fill your additional details</Text>
        </Stack>
        <FormControl>
          <VStack space="5">
            <Stack>
              <Text color="gray.500" pb="2">
                First Name
              </Text>
              <Input type="text" placeholder="Write your first name" />
            </Stack>
            <Stack>
              <Text color="gray.500" pb="2">
                Last Name
              </Text>
              <Input type="text" placeholder="Write your last name" />
            </Stack>
            <Stack>
              <Text color="gray.500" pb="2">
                Phone Number
              </Text>
              <Input type="telp" placeholder="Write your phone number" />
            </Stack>
            <Stack>
              <Text color="gray.500" pb="2">
                Email
              </Text>
              <Input type="email" placeholder="Write your email" />
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
            <Button rounded="md" background="#F15302">
              Register
            </Button>
            <Stack alignItems="center">
              <Text>
                Already have account ?{' '}
                <Text color="#F15302" underline>
                  Sign In
                </Text>
              </Text>
            </Stack>
          </VStack>
        </FormControl>
      </VStack>
    </ScrollView>
  );
};

export default Register;
