import React, { forwardRef } from "react";
import {
    Box,
    Text,
    Flex,
    Link,
    Icon,
    Heading,
    VStack,
    HStack,
    useColorModeValue,
    Divider,
    useBreakpointValue,
} from "@chakra-ui/react";
import { MdEmail, MdWifiCalling3, MdPlace, MdCopyright } from "react-icons/md";
import Form from "../form/Form";

const Contact = forwardRef((props, ref) => {
    const year = new Date().getFullYear();

    const bg = useColorModeValue("gray.50", "gray.900");
    const textColor = useColorModeValue("gray.800", "gray.200");
    const footerBg = useColorModeValue("teal.300", "teal.800");
    const headingColor = useColorModeValue("brown", "orange.300");

    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box
            id="contact"
            pt="80px"
            mt="-80px"
            bg={bg}
            minHeight="100vh"
            pb="120px"
            ref={ref}
        >
            {/* Heading */}
            <Heading
                as="h1"
                textAlign="center"
                textDecoration="underline"
                textDecorationThickness="5px"
                textDecorationColor={headingColor}
                fontSize={{ base: "2xl", md: "3xl" }}
                pt={6}
                mb={10}
                color={textColor}
                letterSpacing="wide"
            >
                Get in Touch
            </Heading>

            {/* Main Content */}
            <Flex
                direction={{ base: "column", md: "row" }}
                justify="center"
                align="flex-start"
                wrap="wrap"
                gap={12}
                px={6}
                maxW="6xl"
                mx="auto"
            >
                {/* Contact Info */}
                <VStack spacing={6} align="start" maxW="400px" w="100%">
                    <Heading as="h2" size="md" color={textColor}>
                        Contact Info
                    </Heading>

                    <HStack spacing={3}>
                        <Icon as={MdEmail} boxSize={5} color="teal.500" />
                        <Link
                            href="mailto:srvpraveen002@gmail.com"
                            color={textColor}
                            fontSize="md"
                            _hover={{
                                textDecoration: "underline",
                                color: "teal.600",
                            }}
                        >
                            srvpraveen002@gmail.com
                        </Link>
                    </HStack>

                    <HStack spacing={3}>
                        <Icon
                            as={MdWifiCalling3}
                            boxSize={5}
                            color="teal.500"
                        />
                        <Link
                            href="tel:+91 9790321691"
                            color={textColor}
                            fontSize="md"
                            _hover={{
                                textDecoration: "underline",
                                color: "teal.600",
                            }}
                        >
                            +91 9790321691
                        </Link>
                    </HStack>

                    <HStack align="start" spacing={3}>
                        <Icon
                            as={MdPlace}
                            boxSize={5}
                            color="teal.500"
                            mt={0.5}
                        />
                        <Text fontSize="md" color={textColor}>
                            Tamil Nadu, India
                        </Text>
                    </HStack>
                </VStack>

                {/* Divider for mobile */}
                {isMobile && <Divider borderColor="gray.300" />}

                {/* Form */}
                <Box maxW="500px" w="100%">
                    <Heading as="h2" size="md" mb={4} color={textColor}>
                        Send a Message
                    </Heading>
                    <Form />
                </Box>
            </Flex>

            {/* Footer */}
            <Flex
                position="fixed"
                bottom="0"
                left="0"
                right="0"
                bg={footerBg}
                py={3}
                justify="center"
                align="center"
                fontSize="sm"
                color="white"
                boxShadow="md"
            >
                <Icon as={MdCopyright} mr={2} />
                <Text>{year} Praveenkumar. All rights reserved.</Text>
            </Flex>
        </Box>
    );
});

export default Contact;
