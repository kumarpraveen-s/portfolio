import React, { forwardRef } from "react";
import {
    Box,
    Text,
    Button,
    VStack,
    HStack,
    Link,
    useBreakpointValue,
} from "@chakra-ui/react";
import resume from "./../assets/resume.pdf";
import HeroImg from "../assets/hero.jpg";

const LandingPage = forwardRef((props, ref) => {
    const handleClick = () => {
        const contactSection = document.getElementById("contact");
        contactSection?.scrollIntoView({ behavior: "smooth" });
    };

    const titleFontSize = useBreakpointValue({
        base: "2xl",
        sm: "3xl",
        md: "4xl",
    });

    return (
        <Box
            id="home"
            position="relative"
            height="100vh"
            width="100%"
            ref={ref}
        >
            {/* Background Image with Overlay */}
            <Box
                bgImage={`url(${HeroImg})`}
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                _after={{
                    content: '""',
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    bg: "rgba(0, 0, 0, 0.5)",
                    zIndex: 0,
                }}
            />

            {/* Overlayed Content */}
            <VStack
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                justify="center"
                align="center"
                textAlign="center"
                spacing={6}
                color="white"
                zIndex={1}
                px={4}
                textTransform="uppercase"
            >
                <Text fontSize={titleFontSize} fontWeight="bold">
                    I am Praveenkumar
                </Text>
                <Text fontSize="lg" textDecoration="underline">
                    I'm a creative web developer
                </Text>
                <Text fontSize="sm">
                    I stand on a sweet spot where design & code intersects.
                </Text>

                <HStack spacing={6} flexWrap="wrap" justify="center">
                    <Button
                        width="300px"
                        height="40px"
                        fontSize="lg"
                        borderRadius="10px"
                        bg="#09bcab"
                        onClick={handleClick}
                    >
                        Hire me
                    </Button>

                    <Link
                        href={resume}
                        download
                        style={{ textDecoration: "none" }}
                    >
                        <Button
                            width="300px"
                            height="40px"
                            fontSize="lg"
                            borderRadius="10px"
                            bg="#ffd7ab"
                        >
                            Get Resume
                        </Button>
                    </Link>
                </HStack>
            </VStack>
        </Box>
    );
});

export default LandingPage;
