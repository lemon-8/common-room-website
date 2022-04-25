import { Box, Button, Center, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const Home = () => {
  return (
    <Center minH="80vh" flexDirection="column" gap={4}>
      <Image src="/images/logo.svg" alt="logo" boxSize={["16", "20"]} mb="4" />
      <Heading>
        Introducing{" "}
        <Box as="span" color="blue.600">
          Common
        </Box>
        Room
      </Heading>
      <Text color="secondary.300">
        The common place for all events happening at IIIT Delhi, say good bye to
        spammy inboxes 👋
      </Text>
      <Text color="secondary.300" mt="8">
        Join the android beta today
      </Text>
      <Link
        href="https://expo.dev/accounts/lemon8in/projects/common-room/builds/a50655d6-2289-4eab-87a9-e9eec249c7b8"
        passHref
      >
        <Button colorScheme="blue" width={["80%", "40%"]}>
          Download the app
        </Button>
      </Link>
      <Image src="/images/screenshots.png" alt="illustration" />
    </Center>
  );
};

export default Home;
