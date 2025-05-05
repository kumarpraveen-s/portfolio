import React from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    VStack,
    useColorModeValue,
} from "@chakra-ui/react";

const Form = () => {
    const inputBg = useColorModeValue("gray.50", "gray.700");
    const inputBorder = useColorModeValue("gray.300", "gray.600");
    const labelColor = useColorModeValue("gray.800", "gray.100");

    return (
        <form>
            <VStack spacing={4}>
                <FormControl isRequired>
                    <FormLabel color={labelColor}>Name</FormLabel>
                    <Input
                        placeholder="Enter your name"
                        bg={inputBg}
                        borderColor={inputBorder}
                        _hover={{ borderColor: "teal.400" }}
                        _focus={{ borderColor: "teal.500", boxShadow: "sm" }}
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel color={labelColor}>Mobile</FormLabel>
                    <Input
                        type="tel"
                        placeholder="Enter your mobile number"
                        bg={inputBg}
                        borderColor={inputBorder}
                        _hover={{ borderColor: "teal.400" }}
                        _focus={{ borderColor: "teal.500", boxShadow: "sm" }}
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel color={labelColor}>Email</FormLabel>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        bg={inputBg}
                        borderColor={inputBorder}
                        _hover={{ borderColor: "teal.400" }}
                        _focus={{ borderColor: "teal.500", boxShadow: "sm" }}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel color={labelColor}>Message</FormLabel>
                    <Textarea
                        placeholder="Your message"
                        minHeight="100px"
                        bg={inputBg}
                        borderColor={inputBorder}
                        _hover={{ borderColor: "teal.400" }}
                        _focus={{ borderColor: "teal.500", boxShadow: "sm" }}
                    />
                </FormControl>

                <Button type="submit" colorScheme="teal" width="full">
                    Submit
                </Button>
            </VStack>
        </form>
    );
};

export default Form;
