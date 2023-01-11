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

const SetPassword = () => {
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
            Set Password
          </Text>
          <Text color="gray.400">set your new password</Text>
        </Stack>
        <FormControl>
          <VStack space="5">
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
            <Stack>
              <Text color="gray.500" pb="2">
                Confirm Password
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
                placeholder="Write your confirm password"
              />
            </Stack>
            <Button rounded="md" background="#F15302">
              Submit
            </Button>
          </VStack>
        </FormControl>
      </VStack>
    </ScrollView>
  );
};

export default SetPassword;
