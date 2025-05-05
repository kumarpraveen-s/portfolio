import React, { forwardRef, useState } from "react";
import {
    SimpleGrid,
    Box,
    Heading,
    useColorModeValue,
    Flex,
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const Projects = forwardRef((props, ref) => {
    const [projects] = useState([
        {
            title: "Expense Tracker",
            description: "Track your expenses with a full-stack app.",
            img: "https://res.cloudinary.com/do67r5kfe/image/upload/v1746471636/expense-tracker_vrcuxt.png",
            tech: ["React", "Node.js", "GraphQL", "MongoDB"],
            demoLink: "https://expense-tracker-k8hw.onrender.com",
            codeLink: "https://github.com/kumarpraveen-s/expense-tracker",
        },
        {
            title: "Netflix Clone",
            description: "A streaming UI built with TMDB API.",
            img: "https://res.cloudinary.com/do67r5kfe/image/upload/fl_preserve_transparency/v1746471637/netflix_cumtm7.jpg",
            tech: ["React", "JWT", "TMDB API"],
            demoLink: "https://video-cineflex.netlify.app",
            codeLink: "https://github.com/kumarpraveen-s/netflix-clone",
        },
        {
            title: "Product Store",
            description:
                "An e-commerce product provides a simple and efficient way to manage products. It allows users to perform CRUD (Create, Read, Update, Delete) operations on product data through a user-friendly interface.",
            img: "https://res.cloudinary.com/do67r5kfe/image/upload/v1746471636/product-store_grjrts.png",
            tech: ["React", "Chakra UI", "Express", "MongoDB"],
            demoLink: "https://productstore-wxfa.onrender.com",
            codeLink: "https://github.com/kumarpraveen-s/productstore",
        },
        {
            title: "Chat App",
            description:
                "Real-time chat app with socket.io and Node.js backend.",
            img: "https://res.cloudinary.com/do67r5kfe/image/upload/v1746471635/chat-app_hvqb4r.png",
            tech: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
            demoLink: "https://chat-app-z0gl.onrender.com",
            codeLink: "https://github.com/kumarpraveen-s/chat_app",
        },
        {
            title: "Food Recipe App",
            description: "Search and explore recipes with dynamic UI.",
            img: "https://res.cloudinary.com/do67r5kfe/image/upload/v1746471636/food-recipe-app_ck4ukc.png",
            tech: ["React", "Context API", "Firebase"],
            demoLink: "https://food-recipe-app-952ba7.netlify.app/",
            codeLink: "https://github.com/kumarpraveen-s/food-recipe-app",
        },
    ]);

    return (
        <Box
            pt="80px"
            mt="-80px"
            id="projects"
            minHeight="100vh"
            pb="100px"
            ref={ref}
        >
            <Flex justify="center" mb={10}>
                <Heading
                    as="h2"
                    size="xl"
                    textTransform="uppercase"
                    position="relative"
                    display="inline-block"
                    color={useColorModeValue("teal.600", "teal.300")}
                    _after={{
                        content: "''",
                        position: "absolute",
                        width: "60%",
                        height: "3px",
                        bottom: "-8px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        bg: useColorModeValue("teal.400", "teal.500"),
                        borderRadius: "full",
                    }}
                >
                    My Projects
                </Heading>
            </Flex>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                {projects.map((proj, i) => (
                    <ProjectCard key={i} {...proj} />
                ))}
            </SimpleGrid>
        </Box>
    );
});

export default Projects;
