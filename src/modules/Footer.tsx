import { HStack, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <HStack align="center">
      <Text fontSize={'12px'}>
        Having Issues?{' '}
        <Text
          as="a"
          color="blue.500"
          href="https://github.com/develper21/GitLeet/issues/new/choose"
          target="_blank"
          fontWeight={'semibold'}
        >
          Report Bug
        </Text>{' '}
        | Made with <span style={{ color: '#e25555' }}>&#9829;</span> by{' '}
        <Text
          as="a"
          color="blue.500"
          href="https://github.com/develper21"
          target="_blank"
          fontWeight={'semibold'}
          display="inline-block"
        >
          develper21
        </Text>
      </Text>
    </HStack>
  );
};
