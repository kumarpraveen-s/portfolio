import React, { forwardRef } from "react";
import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    useColorModeValue,
    Container,
} from "@chakra-ui/react";

const experienceData = [
    {
        role: "Junior Software Engineer",
        company: "CloudEQ",
        duration: "Aug 2022 - Nov 2023",
        description:
            "Led the development of scalable e-commerce features using MERN stack. Automated CI/CD workflows with AWS & Azure, improving deployment speed by 30%.",
    },
    {
        role: "Intern - Full Stack MERN Developer",
        company: "Prepbytes",
        duration: "May 2021 - Jul 2022",
        description:
            "Developed responsive UIs with React, integrated REST APIs, and contributed to backend logic with Node.js and MongoDB.",
    },
];

const educationData = [
    {
        degree: "B.E. in Electronics and Communication Engineering",
        institution: "Government College of Technology, Coimbatore",
        year: "2017 - 2021",
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "SRV Boys Higher Secondary School, Rasipuram",
        year: "2016 - 2017",
    },
    {
        degree: "Secondary School Leaving Certificate (SSLC)",
        institution: "Government Higher Secondary School",
        year: "2014 - 2015",
    },
];

const Experience = forwardRef((props, ref) => {
    const cardBg = useColorModeValue("gray.100", "gray.700");
    const textColor = useColorModeValue("gray.700", "gray.200");
    const dateColor = useColorModeValue("gray.500", "gray.400");
    const headingColor = useColorModeValue("teal.600", "teal.300");

    return (
        <Container
            pt="80px"
            mt="-80px"
            maxW="6xl"
            id="experience"
            minHeight="100vh"
            pb="100px"
            ref={ref}
        >
            {/* Experience Section */}
            <Heading
                textAlign="center"
                mb={10}
                color={headingColor}
                fontSize="3xl"
                letterSpacing="wide"
                textDecoration="underline"
                textDecorationThickness="3px"
                textDecorationColor="teal.400"
            >
                Experience
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={16}>
                {experienceData.map((exp, index) => (
                    <Box
                        key={index}
                        p={6}
                        bg={cardBg}
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.3s"
                        _hover={{
                            transform: "translateY(-5px)",
                            boxShadow: "lg",
                        }}
                    >
                        <Text
                            fontSize="xl"
                            fontWeight="bold"
                            color="teal.500"
                            mb={1}
                        >
                            {exp.role}
                        </Text>
                        <Text fontSize="md" fontWeight="medium" mb={1}>
                            {exp.company}
                        </Text>
                        <Text fontSize="sm" color={dateColor} mb={3}>
                            {exp.duration}
                        </Text>
                        <Text fontSize="sm" color={textColor} lineHeight="1.6">
                            {exp.description}
                        </Text>
                    </Box>
                ))}
            </SimpleGrid>

            {/* Education Section */}
            <Heading
                textAlign="center"
                mb={10}
                color="orange.400"
                fontSize="3xl"
                letterSpacing="wide"
                textDecoration="underline"
                textDecorationThickness="3px"
                textDecorationColor="orange.300"
            >
                Education
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                {educationData.map((edu, index) => (
                    <Box
                        key={index}
                        p={6}
                        bg={cardBg}
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.3s"
                        _hover={{
                            transform: "translateY(-5px)",
                            boxShadow: "lg",
                        }}
                    >
                        <Text
                            fontSize="lg"
                            fontWeight="semibold"
                            color="orange.500"
                            mb={1}
                        >
                            {edu.degree}
                        </Text>
                        <Text fontSize="md" mb={1}>
                            {edu.institution}
                        </Text>
                        <Text fontSize="sm" color={dateColor}>
                            {edu.year}
                        </Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
});

export default Experience;
