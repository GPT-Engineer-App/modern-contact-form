import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Services = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading>Our Services</Heading>
      <Text>
        We offer a wide range of services to meet your needs. From web development to digital marketing, we have you covered.
      </Text>
    </VStack>
  </Box>
);

export default Services;