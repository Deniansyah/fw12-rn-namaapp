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
  FormControl,
  Pressable,
  Icon,
  WarningOutlineIcon,
} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import logo from '../assets/auth-img/text-logo.png';

import {useDispatch} from 'react-redux';
// import {loginAction} from '../redux/action/auth';
import {loginAction} from '../redux/reducers/auth';

const validationSchema = Yup.object({
  // firstName: Yup.string()
  //   .max(15, 'Must be 15 characters or less')
  //   .required('Required'),
  // lastName: Yup.string()
  //   .max(20, 'Must be 20 characters or less')
  //   .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

const Login = () => {
  const [show, setShow] = React.useState(false);
  // const [errMessage, setErrMessage] = React.useState('');
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const loginProcess = form => {
    dispatch(loginAction(form));
  };

  // const loginProcess = form => {
  //   const cb = () => {
  //     navigation.navigate('Landing');
  //   };

  //   try {
  //     const results = dispatch(
  //       loginAction({
  //         form,
  //         cb,
  //       }),
  //     );
  //     setErrMessage(results.payload);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
      {/* {errMessage ? (
        <Stack space={3} w="100%" maxW="400">
          <Alert w="100%">
            <VStack space={2} flexShrink={1} w="100%">
              <HStack flexShrink={1} space={2} justifyContent="space-between">
                <HStack space={2} flexShrink={1}>
                  <Alert.Icon mt="1" />
                  <Text fontSize="md" color="coolGray.800">
                    'Please try again later!'
                  </Text>
                </HStack>
                <IconButton
                  variant="unstyled"
                  _focus={{
                    borderWidth: 0,
                  }}
                  icon={<CloseIcon size="3" />}
                  _icon={{
                    color: 'coolGray.600',
                  }}
                />
              </HStack>
            </VStack>
          </Alert>
        </Stack>
      ) : null} */}
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={loginProcess}>
        {({handleChange, handleBlur, handleSubmit, errors, values}) => (
          <VStack space="5">
            <Stack>
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
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
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
            <Button rounded="md" background="#F15302" onPress={handleSubmit}>
              Login
            </Button>
            <Stack alignItems="center" space="2">
              <Text>
                Forgot your password?{' '}
                <Pressable
                  onPress={() => navigation.navigate('ForgotPassword')}>
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
        )}
      </Formik>
    </VStack>
  );
};

export default Login;
