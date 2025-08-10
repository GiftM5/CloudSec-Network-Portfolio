import { Box, Heading, Text, Button, HStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box textAlign="center" py={20} px={6} bg="gray.900" minH="100vh" color="white">
      <Heading mb={4} color="brand.500">Gift Mofokeng</Heading>
      <Text fontSize="xl" mb={8}>Cloud Security Portfolio – 10 Week Bootcamp Journey</Text>
      <HStack spacing={4} justify="center">
        <Button colorScheme="teal" size="lg">View Progress</Button>
        <Button variant="outline" colorScheme="teal" size="lg">About Me</Button>
      </HStack>
    </Box>
  );
}
