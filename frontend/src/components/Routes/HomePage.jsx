// import React from "react";
// import {
//   Container,
//   Box,
//   Text,
//   Tabs,
//   TabList,
//   Tab,
//   TabPanels,
//   TabPanel,
// } from "@chakra-ui/react";
// import Login from "../components/Authentication/Login";
// import Signup from "../components/Authentication/Signup";

// const HomePage = () => {
//   return (
//     <Container maxW="x1">
//       <Box
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//         p="1"
//         bg={"#222"}
//         w="100%"
//         m="40px 0 15px 0"
//         borderRadius="15px"
//         borderWidth="2px"
//         borderColor="#444"
//         boxShadow="lg"
//         fontSize="2em"
//       >
//         <Text fontSize="4x1" fontFamily="Work Sans">
//           Chat-astrophe
//         </Text>
//       </Box>
//       <Box
//         bg={"#222"}
//         w="100%"
//         p="4"
//         borderRadius="15px"
//         borderWidth="2px"
//         borderColor="#444"
//       >
//         <Tabs variant="soft-rounded">
//           <TabList mb="1em">
//             <Tab width="50%">Log In</Tab>
//             <Tab width="50%">Sign Up</Tab>
//           </TabList>
//           <TabPanels>
//             <TabPanel>
//               <Login />
//             </TabPanel>
//             <TabPanel>
//               <Signup />
//             </TabPanel>
//           </TabPanels>
//         </Tabs>
//       </Box>
//     </Container>
//   );
// };

// export default HomePage;
import Login from "../Authentication/Login/Login";

const HomePage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default HomePage;
