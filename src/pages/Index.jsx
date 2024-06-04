import { useState } from "react";
import { ChakraProvider, Box, Flex, VStack, HStack, IconButton, Container, Text, useColorMode, useColorModeValue, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button } from "@chakra-ui/react";
import { FaSun, FaMoon, FaBars, FaHome, FaUser, FaCog } from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => (
  <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>Menu</DrawerHeader>
      <DrawerBody>
        <VStack align="start" spacing={4}>
          <Button leftIcon={<FaHome />} variant="ghost" width="100%">
            Home
          </Button>
          <Button leftIcon={<FaUser />} variant="ghost" width="100%">
            Profile
          </Button>
          <Button leftIcon={<FaCog />} variant="ghost" width="100%">
            Settings
          </Button>
        </VStack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

const Topbar = ({ onOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<FaMoon />, <FaSun />);

  return (
    <Flex as="header" width="100%" padding={4} justifyContent="space-between" alignItems="center" bg={useColorModeValue("gray.100", "gray.900")} boxShadow="md">
      <IconButton aria-label="Open Menu" icon={<FaBars />} onClick={onOpen} />
      <Text fontSize="xl">Dashboard</Text>
      <IconButton aria-label="Toggle Dark Mode" icon={icon} onClick={toggleColorMode} />
    </Flex>
  );
};

const Footer = () => (
  <Box as="footer" width="100%" padding={4} textAlign="center" bg={useColorModeValue("gray.100", "gray.900")} boxShadow="md">
    <Text>© 2023 Your Company</Text>
  </Box>
);

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <Flex direction="column" height="100vh">
      <Topbar onOpen={openSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <Container flex="1" maxW="container.md" centerContent>
        <VStack spacing={4} mt={8}>
          <Text fontSize="2xl">Welcome to your Dashboard</Text>
          <Text>Use the sidebar to navigate through different sections.</Text>
        </VStack>
      </Container>
      <Footer />
    </Flex>
  );
};

const Index = () => (
  <ChakraProvider>
    <Dashboard />
  </ChakraProvider>
);

export default Index;
