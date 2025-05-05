import React from "react";
import {
    Box,
    Image,
    Text,
    Heading,
    HStack,
    Button,
    Link,
    useColorModeValue,
} from "@chakra-ui/react";

const ProjectCard = ({ title, description, tech, img, demoLink, codeLink }) => {
    const cardBg = useColorModeValue("white", "gray.800");
    const overlayBg = useColorModeValue("rgba(0,0,0,0.4)", "rgba(0,0,0,0.6)");

    return (
        <Box
            bg={cardBg}
            borderRadius="md"
            boxShadow="md"
            overflow="hidden"
            transition="transform 0.3s"
            _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
        >
            {/* Image with overlay */}
            <Box position="relative">
                <Image
                    src={img}
                    alt={title}
                    h="200px"
                    w="100%"
                    objectFit="cover"
                />
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    h="100%"
                    w="100%"
                    bg={overlayBg}
                    opacity="0"
                    transition="opacity 0.3s"
                    _hover={{ opacity: 1 }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <HStack spacing={4}>
                        <Link href={demoLink} isExternal>
                            <Button size="sm" colorScheme="teal">
                                Live
                            </Button>
                        </Link>
                        <Link href={codeLink} isExternal>
                            <Button
                                size="sm"
                                variant="outline"
                                colorScheme="teal"
                            >
                                Code
                            </Button>
                        </Link>
                    </HStack>
                </Box>
            </Box>

            {/* Content */}
            <Box p={4}>
                <Heading as="h3" fontSize="xl" mb={2}>
                    {title}
                </Heading>
                <Text fontSize="sm" mb={3}>
                    {description}
                </Text>
                <HStack spacing={2} wrap="wrap">
                    {tech?.map((tag, idx) => (
                        <Box
                            key={idx}
                            bg="teal.100"
                            color="teal.800"
                            fontSize="xs"
                            px={2}
                            py={1}
                            borderRadius="sm"
                            fontWeight="medium"
                        >
                            {tag}
                        </Box>
                    ))}
                </HStack>
            </Box>
        </Box>
    );
};

export default ProjectCard;
