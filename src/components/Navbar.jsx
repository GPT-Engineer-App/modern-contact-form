import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="blue.500" p={4}>
    <Flex justify="space-around">
      <Link as={NavLink} to="/" color="white" _hover={{ textDecoration: "none" }} _activeLink={{ fontWeight: "bold" }}>
        Home
      </Link>
      <Link as={NavLink} to="/about" color="white" _hover={{ textDecoration: "none" }} _activeLink={{ fontWeight: "bold" }}>
        About
      </Link>
      <Link as={NavLink} to="/services" color="white" _hover={{ textDecoration: "none" }} _activeLink={{ fontWeight: "bold" }}>
        Services
      </Link>
      <Link as={NavLink} to="/contact" color="white" _hover={{ textDecoration: "none" }} _activeLink={{ fontWeight: "bold" }}>
        Contact
      </Link>
    </Flex>
  </Box>
);

export default Navbar;