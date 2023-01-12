import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {
  Stack,
  Text,
  VStack,
  Image,
  Input,
  Button,
  Pressable,
  Icon,
  ScrollView,
  FormControl,
  WarningOutlineIcon,
} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import logo from '../assets/auth-img/text-logo.png';

const validationSchema = Yup.object({
  // firstName: Yup.string()
  //   .max(15, 'Must be 15 characters or less')
  //   .required('Required'),
  // lastName: Yup.string()
  //   .max(20, 'Must be 20 characters or less')
  //   .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

const Register = () => {
  const [show, setShow] = React.useState(false);
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
            Sign Up
          </Text>
          <Text color="gray.400">Fill your additional details</Text>
        </Stack>
        <Formik
          validationSchema={validationSchema}
          initialValues={{email: ''}}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, errors, values}) => (
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
                {/* <Text color="gray.500" pb="2">
                  Email
                </Text>
                <Input type="email" placeholder="Write your email" /> */}
                <FormControl isInvalid={errors.email}>
                  <FormControl.Label>Email</FormControl.Label>
                  <Input
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="Write your email"
                  />
                  {errors.email && (
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}>
                      {errors.email}
                    </FormControl.ErrorMessage>
                  )}
                </FormControl>
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
                onPress={
                  handleSubmit
                    ? () => navigation.navigate('Landing')
                    : handleSubmit
                }
                rounded="md"
                background="#F15302">
                Register
              </Button>
              <Stack alignItems="center">
                <Text>
                  Already have account ?{' '}
                  <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text color="#F15302" underline>
                      Sign In
                    </Text>
                  </Pressable>
                </Text>
              </Stack>
            </VStack>
          )}
        </Formik>
      </VStack>
    </ScrollView>
  );
};

export default Register;
