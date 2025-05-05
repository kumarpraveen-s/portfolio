import React, { forwardRef } from "react";
import {
    Box,
    Flex,
    Image,
    Text,
    Heading,
    VStack,
    Wrap,
    WrapItem,
    useColorModeValue,
} from "@chakra-ui/react";
import Education from "../Experience/Experience";
import Projects from "../Projects/Projects";
import profileImg from "../assets/Praveen.jpg";

const techIcons = [
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        alt: "HTML",
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        alt: "CSS",
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        alt: "JavaScript",
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        alt: "React",
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        alt: "Node.js",
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        alt: "MongoDB",
    },
];

const About = forwardRef((props, ref) => {
    // Themed colors
    const sectionBg = useColorModeValue("#effffd", "gray.900");
    const cardBg = useColorModeValue("gray.100", "gray.800");
    const textColor = useColorModeValue("gray.700", "gray.200");
    const headingColor = useColorModeValue("teal.600", "teal.300");

    return (
        <>
            <Box
                bg={sectionBg}
                id="about"
                pt="80px"
                mt="-80px"
                minHeight="100vh"
                pb="100px"
                ref={ref}
            >
                <Flex
                    direction={{ base: "column", md: "row" }}
                    align="center"
                    justify="center"
                    gap={10}
                    bg={cardBg}
                    color={textColor}
                    borderRadius="md"
                    p={8}
                    maxW="6xl"
                    mx="auto"
                    flexWrap="wrap"
                >
                    {/* Profile Image */}
                    <Box
                        w={{ base: "200px", md: "300px" }}
                        h={{ base: "200px", md: "300px" }}
                        borderRadius="full"
                        bgImage={`url(${profileImg})`}
                        bgSize="cover"
                        bgPosition="center"
                        border="2px solid sandybrown"
                        flexShrink={0}
                    />

                    {/* About Content */}
                    <VStack
                        spacing={5}
                        align="center"
                        textAlign="justify"
                        maxW="lg"
                    >
                        <Heading
                            fontSize="2xl"
                            color={headingColor}
                            textDecoration="underline"
                            textDecorationColor="darkgoldenrod"
                            textDecorationThickness="4px"
                        >
                            About Me
                        </Heading>

                        <Text fontSize="md">
                            I'm a dedicated MERN Stack developer who thrives on
                            building clean and scalable web applications. With a
                            keen eye for detail and a problem-solving mindset, I
                            transform complex requirements into elegant digital
                            experiences.
                        </Text>

                        <Text fontSize="md">
                            Beyond coding, I enjoy experimenting with new
                            recipes, nurturing my plants, and staying active
                            outdoors — all of which fuel my creativity and
                            focus.
                        </Text>

                        {/* Skills */}
                        <Heading
                            fontSize="2xl"
                            pt={4}
                            color={headingColor}
                            textDecoration="underline"
                            textDecorationColor="darkgoldenrod"
                            textDecorationThickness="4px"
                        >
                            Skills
                        </Heading>
                        <Wrap justify="center">
                            {techIcons.map((tech, idx) => (
                                <WrapItem key={idx}>
                                    <Image
                                        src={tech.src}
                                        alt={tech.alt}
                                        boxSize="50px"
                                        objectFit="contain"
                                    />
                                </WrapItem>
                            ))}
                        </Wrap>
                        <Heading
                            fontSize="2xl"
                            pt={6}
                            color={headingColor}
                            textDecoration="underline"
                            textDecorationColor="darkgoldenrod"
                            textDecorationThickness="4px"
                        >
                            Certifications
                        </Heading>

                        <VStack spacing={2} align="center">
                            <Text>
                                <a
                                    href="https://www.hackerrank.com/certificates/34664c9957df"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    🔤 JavaScript (Basic) – HackerRank
                                </a>
                            </Text>
                            <Text>
                                <a
                                    href="https://www.hackerrank.com/certificates/e7dc96362ad8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ⚛️ React (Basic) – HackerRank
                                </a>
                            </Text>
                            <Text>
                                <a
                                    href="https://www.hackerrank.com/certificates/0673aae76016"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    🧠 JavaScript (Intermediate) – HackerRank
                                </a>
                            </Text>
                        </VStack>
                    </VStack>
                </Flex>
            </Box>
        </>
    );
});

export default About;
