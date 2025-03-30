// // // // import React, { useState } from "react";
// // // // import { AppBar, Toolbar, Tabs, Tab, Drawer, IconButton, Box, Typography } from "@mui/material";
// // // // import { NavLink, useLocation } from "react-router-dom";
// // // // import MenuIcon from '@mui/icons-material/Menu';
// // // // import CloseIcon from '@mui/icons-material/Close';
// // // // import { styled } from "@mui/system";

// // // // const pages = [
// // // //   { name: "Home", value: "home", path: "/" },
// // // //   { name: "Popular Destination", value: "popDestination", path: "/popDestination" },
// // // //   { name: "Hotels", value: "hotel", path: "/hotel" },
// // // //   { name: "Profile", value: "profile", path: "/profile" },
// // // //   { name: "About Us", value: "about", path: "/about" },
// // // //   { name: "Cart-🛍️", value: "cart", path: "/cart" },
// // // //   { name: "Sign Up", value: "signup", path: "/signup" },
  
// // // // ];

// // // // const StyledNavLink = styled(NavLink)(({ theme }) => ({
// // // //   textDecoration: "none",
// // // //   fontFamily: "'Mulish', sans-serif",
// // // //   fontWeight: 600,
// // // //   transition: "background-color 0.3s ease",
// // // //   "&.active": {
// // // //     backgroundColor: "#ffda32",
// // // //     color: "#000",
// // // //   },
// // // //   "&:hover": {
// // // //     backgroundColor: "#555",
// // // //   },
// // // // }));

// // // // const Navbar = () => {
// // // //   const location = useLocation();
// // // //   const currentPath = location.pathname;
// // // //   const [drawerOpen, setDrawerOpen] = useState(false);

// // // //   const toggleDrawer = (open) => () => {
// // // //     setDrawerOpen(open);
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <AppBar
// // // //         position="fixed"
// // // //         sx={{
// // // //           background: "rgba(0, 0, 0, 0.4)",
// // // //           boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
// // // //           backdropFilter: "blur(30px)",
// // // //           height: "45px",
// // // //           marginTop:"50px"
// // // //         }}
// // // //       >
// // // //         <Toolbar sx={{ minHeight: "40px", padding: "0px 16px" }}>
// // // //           <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
// // // //             <MenuIcon />
// // // //           </IconButton>
         
// // // //           <Tabs
// // // //             value={currentPath}
// // // //             textColor="inherit"
// // // //             TabIndicatorProps={{ style: { display: "none" } }}
// // // //             sx={{ display: { xs: "none", md: "flex" } }}
// // // //           >
// // // //             {pages.map((page) => (
// // // //               <Tab
// // // //                 key={page.value}
// // // //                 label={page.name}
// // // //                 value={page.path}
// // // //                 component={StyledNavLink}
// // // //                 to={page.path}
// // // //               />
// // // //             ))}
// // // //           </Tabs>
// // // //         </Toolbar>
// // // //       </AppBar>

// // // //       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
// // // //         <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
// // // //           <IconButton onClick={toggleDrawer(false)}>
// // // //             <CloseIcon />
// // // //           </IconButton>
// // // //           {pages.map((page) => (
// // // //             <StyledNavLink key={page.value} to={page.path}>
// // // //               {page.name}
// // // //             </StyledNavLink>
// // // //           ))}
// // // //         </Box>
// // // //       </Drawer>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Navbar;

// // // import React, { useState } from "react";
// // // import { AppBar, Toolbar, Tabs, Tab, Drawer, IconButton, Box, List, ListItemButton, ListItemText } from "@mui/material";
// // // import { NavLink, useLocation } from "react-router-dom";
// // // import MenuIcon from "@mui/icons-material/Menu";
// // // import CloseIcon from "@mui/icons-material/Close";
// // // import { styled } from "@mui/system";

// // // const pages = [
// // //   { name: "Home", path: "/" },
// // //   { name: "Popular Destination", path: "/popDestination" },
// // //   { name: "Hotels", path: "/hotel" },
// // //   { name: "Profile", path: "/profile" },
// // //   { name: "About Us", path: "/about" },
// // //   { name: "Cart 🛍️", path: "/cart" },
// // //   { name: "Sign Up", path: "/signup" },
// // // ];

// // // const StyledNavLink = styled(NavLink)({
// // //   textDecoration: "none",
// // //   fontWeight: 600,
// // //   color: "#fff",
// // //   padding: "18px 16px",
// // //   display: "block",
// // //   "&.active": {
// // //     backgroundColor: "#ffda32",
// // //     color: "#000",
// // //   },
// // //   "&:hover": {
// // //     backgroundColor: "#555",
// // //   },
// // // });

// // // const Navbar = () => {
// // //   const location = useLocation();
// // //   const [drawerOpen, setDrawerOpen] = useState(false);

// // //   return (
// // //     <>
// // //       <AppBar
// // //         position="fixed"
// // //         sx={{
// // //           background: "rgba(0, 0, 0, 0.4)",
// // //           backdropFilter: "blur(30px)",
// // //           height: "55px",
// // //           marginTop:"50px"
          
// // //         }}
// // //       >
// // //         <Toolbar sx={{ minHeight: "40px", padding: "0px 16px", display: "flex", justifyContent: "space-between" }}>
// // //           {/* Mobile Menu Icon */}
// // //           <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)} sx={{ display: { md: "none" } }}>
// // //             <MenuIcon />
// // //           </IconButton>

// // //           {/* Desktop Navigation Tabs */}
// // //           <Tabs
// // //             value={location.pathname}
// // //             textColor="inherit"
// // //             TabIndicatorProps={{ style: { display: "none" } }}
// // //             sx={{ display: { xs: "none", md: "flex" } }}
// // //           >
// // //             {pages.map((page) => (
// // //               <Tab
// // //                 key={page.path}
// // //                 label={page.name}
// // //                 value={page.path}
// // //                 component={NavLink}
// // //                 to={page.path}
// // //                 sx={{
// // //                   textTransform: "none",
// // //                   fontWeight: 600,
// // //                   color: "inherit",
// // //                   "&.active": { backgroundColor: "#ffda32", color: "#000" },
// // //                   "&:hover": { backgroundColor: "#555" },
// // //                 }}
// // //               />
// // //             ))}
// // //           </Tabs>
// // //         </Toolbar>
// // //       </AppBar>

// // //       {/* Mobile Drawer */}
// // //       <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
// // //         <Box sx={{ width: 250 }}>
// // //           <IconButton onClick={() => setDrawerOpen(false)} sx={{ marginLeft: "auto", display: "block" }}>
// // //             <CloseIcon />
// // //           </IconButton>
// // //           <List>
// // //             {pages.map((page) => (
// // //               <ListItemButton key={page.path} component={NavLink} to={page.path} onClick={() => setDrawerOpen(false)}>
// // //                 <ListItemText primary={page.name} />
// // //               </ListItemButton>
// // //             ))}
// // //           </List>
// // //         </Box>
// // //       </Drawer>
// // //     </>
// // //   );
// // // };

// // // export default Navbar;
// // import React, { useState } from "react";
// // import { AppBar, Toolbar, Tabs, Tab, Drawer, IconButton, Box, List, ListItemButton, ListItemText } from "@mui/material";
// // import { NavLink, useLocation } from "react-router-dom";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import CloseIcon from "@mui/icons-material/Close";
// // import { styled } from "@mui/system";

// // const pages = [
// //   { name: "Home", path: "/" },
// //   { name: "Popular Destination", path: "/popDestination" },
// //   { name: "Hotels", path: "/hotel" },
// //   { name: "Profile", path: "/profile" },
// //   { name: "About Us", path: "/about" },
// //   { name: "Cart 🛍️", path: "/cart" },
// //   { name: "Sign Up", path: "/signup" },
// // ];

// // const Navbar = () => {
// //   const location = useLocation();
// //   const [drawerOpen, setDrawerOpen] = useState(false);

// //   return (
// //     <>
// //       <AppBar
// //         position="fixed"
// //         sx={{
// //           background: "rgba(0, 0, 0, 0.4)",
// //           backdropFilter: "blur(30px)",
// //           height: "40px",  // Reduced height
// //           marginTop:"50px"
// //         }}
// //       >
// //         <Toolbar sx={{ minHeight: "35px", padding: "3px 8px", display: "flex", justifyContent: "space-between" }}>
// //           {/* Mobile Menu Icon */}
// //           <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)} sx={{ display: { md: "none" } }}>
// //             <MenuIcon fontSize="small" />
// //           </IconButton>

// //           {/* Desktop Navigation Tabs */}
// //           <Tabs
// //             value={location.pathname}
// //             textColor="inherit"
// //             TabIndicatorProps={{ style: { display: "none" } }}
// //             sx={{ display: { xs: "none", md: "flex" }, height: "100%" }}
// //           >
// //             {pages.map((page) => (
// //               <Tab
// //                 key={page.path}
// //                 label={page.name}
// //                 value={page.path}
// //                 component={NavLink}
// //                 to={page.path}
// //                 sx={{
// //                   textTransform: "none",
// //                   fontWeight: 600,
// //                   fontSize: "14px",
// //                   color: "inherit",
// //                   padding: "0px 10px",
// //                   "&.active": { backgroundColor: "#ffda32", color: "#000" },
// //                   "&:hover": { backgroundColor: "#555" },
// //                 }}
// //               />
// //             ))}
// //           </Tabs>
// //         </Toolbar>
// //       </AppBar>

// //       {/* Mobile Drawer */}
// //       <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
// //         <Box sx={{ width: 220 }}>
// //           <IconButton onClick={() => setDrawerOpen(false)} sx={{ marginLeft: "auto", display: "block" }}>
// //             <CloseIcon fontSize="small" />
// //           </IconButton>
// //           <List>
// //             {pages.map((page) => (
// //               <ListItemButton key={page.path} component={NavLink} to={page.path} onClick={() => setDrawerOpen(false)}>
// //                 <ListItemText primary={page.name} />
// //               </ListItemButton>
// //             ))}
// //           </List>
// //         </Box>
// //       </Drawer>
// //     </>
// //   );
// // };

// // export default Navbar;


// import React, { useState } from "react";
// import { AppBar, Toolbar, Tabs, Tab, Drawer, IconButton, Box, List, ListItemButton, ListItemText } from "@mui/material";
// import { NavLink, useLocation } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import { styled } from "@mui/system";

// const pages = [
//   { name: "Home", path: "/" },
//   { name: "Popular Destination", path: "/popDestination" },
//   { name: "Hotels", path: "/hotel" },
//   { name: "Profile", path: "/profile" },
//   { name: "About Us", path: "/about" },
//   { name: "Cart 🛍️", path: "/cart" },
//   { name: "Sign Up", path: "/signup" },
// ];

// const StyledTab = styled(Tab)(({ theme }) => ({
//   textTransform: "none",
//   fontWeight: 600,
//   fontSize: "13px",
//   minHeight: "30px",
//   padding: "3px 8px", // Reduced padding for a compact look
//   color: "inherit",
//   "&.active": {
//     backgroundColor: "#ffda32",
//     color: "#000",
//     margin: "0px", // Removes extra margin
//     padding: "3px 8px",
//     borderRadius: "4px", // Small rounded corners
//   },
//   "&:hover": {
//     backgroundColor: "#555",
//   },
// }));

// const Navbar = () => {
//   const location = useLocation();
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         sx={{
//           background: "rgba(0, 0, 0, 0.4)",
//           backdropFilter: "blur(30px)",
//           height: "35px", // Reduced navbar height
//           marginTop:"50px"
//         }}
//       >
//         <Toolbar sx={{ minHeight: "30px", padding: "0px 10px", display: "flex", justifyContent: "space-between" }}>
//           {/* Mobile Menu Icon */}
//           <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)} sx={{ display: { md: "none" } }}>
//             <MenuIcon fontSize="small" />
//           </IconButton>

//           {/* Desktop Navigation Tabs */}
//           <Tabs
//             value={location.pathname}
//             textColor="inherit"
//             TabIndicatorProps={{ style: { display: "none" } }}
//             sx={{ display: { xs: "none", md: "flex" }, height: "100%" }}
//           >
//             {pages.map((page) => (
//               <StyledTab key={page.path} label={page.name} value={page.path} component={NavLink} to={page.path} />
//             ))}
//           </Tabs>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
//         <Box sx={{ width: 220 }}>
//           <IconButton onClick={() => setDrawerOpen(false)} sx={{ marginLeft: "auto", display: "block" }}>
//             <CloseIcon fontSize="small" />
//           </IconButton>
//           <List>
//             {pages.map((page) => (
//               <ListItemButton key={page.path} component={NavLink} to={page.path} onClick={() => setDrawerOpen(false)}>
//                 <ListItemText primary={page.name} />
//               </ListItemButton>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { AppBar, Toolbar, Tabs, Tab, Drawer, IconButton, Box, List, ListItemButton, ListItemText } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";

const pages = [
  { name: "Home", path: "/" },
  { name: "Popular Destination", path: "/popDestination" },
  { name: "Hotels", path: "/hotel" },
  { name: "Profile", path: "/profile" },
  { name: "About Us", path: "/about" },
  { name: "Cart 🛍️", path: "/cart" },
  { name: "Sign Up", path: "/signup" },
];

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontWeight: 600,
  fontSize: "13px",
  minHeight: "40px",
  padding: "2px 8px",
  color: "inherit",
  "&.active": {
    backgroundColor: "#ffda32",
    color: "#000",
    padding: "1px 6px",
    borderRadius: "4px",
  },
  "&:hover": {
    backgroundColor: "#555",
  },
}));

const Navbar = () => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(30px)",
          height: "52px",
          marginTop:"50px"
        }}
      >
        <Toolbar sx={{ minHeight: "30px", padding: "0px 10px", display: "flex" }}>
          {/* Mobile Menu Icon (Left) */}
          <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)} sx={{ display: { md: "none" } }}>
            <MenuIcon fontSize="small" />
          </IconButton>

          {/* Desktop Navigation Tabs (Centered) */}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Tabs
              value={location.pathname}
              textColor="inherit"
              TabIndicatorProps={{ style: { display: "none" } }}
              sx={{ height: "100%" }}
            >
              {pages.map((page) => (
                <StyledTab key={page.path} label={page.name} value={page.path} component={NavLink} to={page.path} />
              ))}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 220 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ marginLeft: "auto", display: "block" }}>
            <CloseIcon fontSize="small" />
          </IconButton>
          <List>
            {pages.map((page) => (
              <ListItemButton key={page.path} component={NavLink} to={page.path} onClick={() => setDrawerOpen(false)}>
                <ListItemText primary={page.name} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
