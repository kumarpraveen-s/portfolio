import React, { useState } from "react";
import {
    Flex,
    Text,
    IconButton,
    useColorMode,
    Stack,
    Link as ChakraLink,
    useColorModeValue,
    HStack,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { HashLink as Link } from "react-router-hash-link";
import { MdMenu } from "react-icons/md";

const sectionItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

const NavBar = ({ sectionRefs, activeSection }) => {
    const [show, setShow] = useState(false);
    const toggleMenu = () => setShow((prev) => !prev);

    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue("#09bead", "#1a202c");
    const linkColor = useColorModeValue("white", "gray.200");
    const mobileBg = useColorModeValue("white", "gray.700");
    const mobileText = useColorModeValue("#111", "gray.100");

    const navItems = sectionItems.map((obj, index) => ({
        id: obj["id"],
        path: `#${obj["id"]}`,
        label: obj["label"],
        ref: sectionRefs[index],
    }));

    return (
        <>
            {/* Desktop Navbar */}
            <Flex
                as="nav"
                bg={bg}
                color={linkColor}
                height="50px"
                px={6}
                align="center"
                justify="space-between"
                position="sticky"
                top={0}
                zIndex={100}
                display={{ base: "none", md: "flex" }}
            >
                <Text fontSize="2xl" fontWeight="bold">
                    Praveenkumar
                </Text>

                <HStack spacing={6}>
                    {navItems.map((item, index) => (
                        <ChakraLink
                            as={Link}
                            to={item.path}
                            smooth
                            key={item.id}
                            fontWeight="semibold"
                            textTransform="uppercase"
                            color={
                                activeSection === index
                                    ? "yellow.300"
                                    : linkColor
                            }
                            borderBottom={
                                activeSection === index
                                    ? "2px solid yellow"
                                    : "none"
                            }
                            _hover={{ color: "gray.900" }}
                        >
                            {item.label}
                        </ChakraLink>
                    ))}
                    <IconButton
                        size="sm"
                        aria-label="Toggle theme"
                        icon={
                            colorMode === "light" ? <MoonIcon /> : <SunIcon />
                        }
                        onClick={toggleColorMode}
                        variant="ghost"
                        color={linkColor}
                    />
                </HStack>
            </Flex>

            {/* Mobile Navbar */}
            <Flex
                as="nav"
                bg={bg}
                color={linkColor}
                height="50px"
                px={4}
                align="center"
                justify="space-between"
                position="sticky"
                top={0}
                zIndex={100}
                display={{ base: "flex", md: "none" }}
            >
                <Text fontSize="xl" fontWeight="bold">
                    Praveenkumar
                </Text>
                <HStack spacing={2}>
                    <IconButton
                        aria-label="Toggle theme"
                        icon={
                            colorMode === "light" ? <MoonIcon /> : <SunIcon />
                        }
                        onClick={toggleColorMode}
                        variant="ghost"
                        color={linkColor}
                    />
                    <IconButton
                        aria-label="Menu"
                        icon={<MdMenu size="28px" />}
                        variant="ghost"
                        color={linkColor}
                        onClick={toggleMenu}
                        _hover={{ transform: "scale(1.1)" }}
                    />
                </HStack>
            </Flex>

            {/* Mobile Dropdown */}
            {show && (
                <Stack
                    bg={mobileBg}
                    spacing={3}
                    py={2}
                    textAlign="center"
                    fontWeight="semibold"
                    textTransform="uppercase"
                    borderTop="1px solid #ccc"
                    display={{ base: "flex", md: "none" }}
                    position="sticky"
                    top="50px"
                    zIndex={99}
                >
                    {navItems.map((item, index) => (
                        <ChakraLink
                            as={Link}
                            to={item.path}
                            smooth
                            key={item.id}
                            onClick={toggleMenu}
                            fontWeight="semibold"
                            textTransform="uppercase"
                            color={
                                activeSection === index
                                    ? "yellow.300"
                                    : mobileText
                            }
                            borderBottom={
                                activeSection === index
                                    ? "2px solid yellow"
                                    : "none"
                            }
                            _hover={{ color: "#09bead" }}
                        >
                            {item.label}
                        </ChakraLink>
                    ))}
                </Stack>
            )}
        </>
    );
};

export default NavBar;
