// // // import React, { useState } from 'react';
// // // import {
// // //   Box,
// // //   Button,
// // //   Container,
// // //   TextField,
// // //   Typography,
// // //   InputAdornment
// // // } from '@mui/material';
// // // import { Email as EmailIcon, Lock as LockIcon } from '@mui/icons-material';
// // // import { styled } from '@mui/system';
// // // import NotificationPage from './NotificationPage'; // Import NotificationPage
// // // import NewsletterSubscription from './NewsletterSubscription'; // Import NewsletterSubscription
// // // import './Profile.css';

// // // const useStyles = styled((theme) => ({
// // //   form: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     '& .MuiTextField-root': {
// // //       marginBottom: theme.spacing(2),
// // //     },
// // //   },
// // // }));

// // // function Profile() {
// // //   const classes = useStyles();
// // //   const [name, setName] = useState('');
// // //   const [dateOfBirth, setDateOfBirth] = useState('');
// // //   const [location, setLocation] = useState('');
// // //   const [showNotifications, setShowNotifications] = useState(false); // State for managing visibility of NotificationPage
// // //   const [showNewsletter, setShowNewsletter] = useState(false); // State for managing visibility of NewsletterSubscription
// // //   const [sidebarName, setSidebarName] = useState('Saumya Pande');
// // //   const [sidebarLocation, setSidebarLocation] = useState('Chennai');
// // //   const [sidebarDateOfBirth, setSidebarDateOfBirth] = useState('1990-01-18');

// // //   const handleNameChange = (e) => {
// // //     setName(e.target.value);
// // //   };

// // //   const handleDateOfBirthChange = (e) => {
// // //     setDateOfBirth(e.target.value);
// // //   };

// // //   const handleLocationChange = (e) => {
// // //     setLocation(e.target.value);
// // //   };

// // //   const handleSavePersonalInfo = () => {
// // //     setSidebarName(name);
// // //     setSidebarLocation(location);
// // //     setSidebarDateOfBirth(dateOfBirth);
// // //     alert('Personal information saved!');
// // //   };

// // //   const goToProfilePage = () => {
// // //     setShowNotifications(false); // Show profile info
// // //     setShowNewsletter(false); // Hide newsletter
// // //   };

// // //   const goToNewsletterPage = () => {
// // //     setShowNotifications(false); // Hide notifications
// // //     setShowNewsletter(true); // Show newsletter
// // //   };

// // //   const goToNotificationPage = () => {
// // //     setShowNotifications(true); // Show notification info
// // //     setShowNewsletter(false); // Hide newsletter
// // //   };

// // //   return (
// // //     <div className='Profile'>
// // //       <Container>
// // //         <Box display="flex" style={{ marginTop: 48 }}>
// // //           {/* Side Navbar */}
// // //           <Box
// // //             flex={2}
// // //             display="flex"
// // //             flexDirection="column"
// // //             alignItems="center"
// // //             className="profile-section"
// // //             width={300} // Adjust width as needed
// // //           >
// // //             <Typography variant="h4">My Profile</Typography>
// // //             {/* Profile Image */}
// // //             <img
// // //               loading="lazy"
// // //               src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
// // //               className="img-1"
// // //               alt="Profile Icon"
// // //             />
// // //             {/* Name */}
// // //             <Typography variant="h6" gutterBottom>
// // //               {sidebarName}
// // //             </Typography>
// // //             {/* Location and Date of Birth */}
// // //             <div className="profile-details">
// // //               <div className="s-13">
// // //                 <img
// // //                   loading="lazy"
// // //                   src="https://www.freeiconspng.com/thumbs/address-icon/address-location-marker-pin-place-point-pointer-icon--icon--0.png"
// // //                   className="img-2"
// // //                   alt="Location Icon"
// // //                 />
// // //                 <div className="s-14">{sidebarLocation}</div>
// // //               </div>
// // //               <div className="s-16">
// // //                 <img
// // //                   loading="lazy"
// // //                   src="https://image.pngaaa.com/652/2487652-middle.png"
// // //                   className="img-3"
// // //                   alt="Date of Birth Icon"
// // //                 />
// // //                 <div className="s-17">{sidebarDateOfBirth}</div>
// // //               </div>
// // //             </div>
// // //             {/* Buttons */}
// // //             <div className="s-19" style={{ marginTop: '20px' }}>
// // //               <Button
// // //                 variant="contained"
// // //                 style={{ backgroundColor: '#5e9e91', color: '#fff', width: '100%' }}
// // //                 className="s-18 clickable action-button"
// // //                 onClick={goToProfilePage}
// // //               >
// // //                 Profile Information
// // //               </Button>
// // //               <Button
// // //                 variant="contained"
// // //                 style={{ backgroundColor: '#5e9e91', color: '#fff', marginTop: 8, width: '100%' }}
// // //                 className="s-18 clickable action-button"
// // //                 onClick={goToNewsletterPage}
// // //               >
// // //                 Newsletter Subscription
// // //               </Button>
// // //               <Button
// // //                 variant="contained"
// // //                 style={{ backgroundColor: '#5e9e91', color: '#fff', marginTop: 8, width: '100%' }}
// // //                 className="s-18 clickable action-button"
// // //                 onClick={goToNotificationPage}
// // //               >
// // //                 Manage Notifications
// // //               </Button>
// // //             </div>
// // //           </Box>

// // //           {/* Main Content Section */}
// // //           <Box
// // //             flex={showNotifications || showNewsletter ? 10 : 8} // Adjust width based on showNotifications or showNewsletter state
// // //             ml={3}
// // //             className="main-section"
// // //           >
// // //             {showNotifications ? (
// // //               <Box className="notification-section">
// // //                 <Typography variant="h4"></Typography>
// // //                 <NotificationPage />
// // //               </Box>
// // //             ) : showNewsletter ? (
// // //               <NewsletterSubscription />
// // //             ) : (
// // //               <>
// // //                 <Box mb={4}>
// // //                   <Typography variant="h5">Personal Information</Typography>
// // //                   <form className={classes.form}>
// // //                     <TextField
// // //                       label="Name"
// // //                       variant="outlined"
// // //                       placeholder="Enter Name"
// // //                       fullWidth
// // //                       style={{ marginTop: '6px' }}
// // //                       value={name}
// // //                       onChange={handleNameChange}
// // //                     />
// // //                     <TextField
// // //                       label="Date of Birth"
// // //                       type="date"
// // //                       variant="outlined"
// // //                       InputLabelProps={{ shrink: true }}
// // //                       fullWidth
// // //                       style={{ marginTop: '15px' }}
// // //                       value={dateOfBirth}
// // //                       onChange={handleDateOfBirthChange}
// // //                     />
// // //                     <TextField
// // //                       label="Location"
// // //                       variant="outlined"
// // //                       placeholder="Enter Location"
// // //                       fullWidth
// // //                       style={{ marginTop: '15px' }}
// // //                       value={location}
// // //                       onChange={handleLocationChange}
// // //                     />
// // //                     <Button
// // //                       variant="contained"
// // //                       style={{ backgroundColor: '#5e9e91', color: '#fff', marginTop: '15px' }}
// // //                       className="save-button"
// // //                       onClick={handleSavePersonalInfo}
// // //                     >
// // //                       Save Personal Info
// // //                     </Button>
// // //                   </form>
// // //                 </Box>

// // //                 <Box>
// // //                   <Typography variant="h5">Security</Typography>
// // //                   <form className={classes.form}>
// // //                     <TextField
// // //                       label="Email Address"
// // //                       type="email"
// // //                       variant="outlined"
// // //                       placeholder="Enter Email"
// // //                       fullWidth
// // //                       style={{ marginTop: '6px' }}
// // //                       InputProps={{
// // //                         startAdornment: (
// // //                           <InputAdornment position="start">
// // //                             <EmailIcon />
// // //                           </InputAdornment>
// // //                         ),
// // //                       }}
// // //                     />
// // //                     <TextField
// // //                       label="Password"
// // //                       type="password"
// // //                       variant="outlined"
// // //                       placeholder="Enter Password"
// // //                       fullWidth
// // //                       style={{ marginTop: '15px' }}
// // //                       InputProps={{
// // //                         startAdornment: (
// // //                           <InputAdornment position="start">
// // //                             <LockIcon />
// // //                           </InputAdornment>
// // //                         ),
// // //                       }}
// // //                     />
// // //                     <TextField
// // //                       label="Confirm Password"
// // //                       type="password"
// // //                       variant="outlined"
// // //                       placeholder="Confirm Password"
// // //                       fullWidth
// // //                       style={{ marginTop: '15px' }}
// // //                       InputProps={{
// // //                         startAdornment: (
// // //                           <InputAdornment position="start">
// // //                             <LockIcon />
// // //                           </InputAdornment>
// // //                         ),
// // //                       }}
// // //                     />
// // //                     <Button
// // //                       variant="contained"
// // //                       style={{ backgroundColor: '#5e9e91', color: '#fff', marginTop: '15px' }}
// // //                       className="save-button"
// // //                     >
// // //                       Save Security Info
// // //                     </Button>
// // //                   </form>
// // //                 </Box>
// // //               </>
// // //             )}
// // //           </Box>
// // //         </Box>
// // //       </Container>
// // //     </div>
// // //   );
// // // }

// // // export default Profile;

// // import React, { useState } from 'react';
// // import {
// //   Box,
// //   Button,
// //   Container,
// //   TextField,
// //   Typography,
// //   InputAdornment
// // } from '@mui/material';
// // import { Email as EmailIcon, Lock as LockIcon } from '@mui/icons-material';
// // import NotificationPage from './NotificationPage';
// // import NewsletterSubscription from './NewsletterSubscription';
// // import './Profile.css';

// // function Profile() {
// //   const [name, setName] = useState('');
// //   const [dateOfBirth, setDateOfBirth] = useState('');
// //   const [location, setLocation] = useState('');
// //   const [showNotifications, setShowNotifications] = useState(false);
// //   const [showNewsletter, setShowNewsletter] = useState(false);
// //   const [sidebarName, setSidebarName] = useState('Saumya Pande');
// //   const [sidebarLocation, setSidebarLocation] = useState('Chennai');
// //   const [sidebarDateOfBirth, setSidebarDateOfBirth] = useState('1990-01-18');

// //   const handleSavePersonalInfo = () => {
// //     setSidebarName(name);
// //     setSidebarLocation(location);
// //     setSidebarDateOfBirth(dateOfBirth);
// //     alert('Personal information saved!');
// //   };

// //   return (
// //     <div className="Profile">
// //       <Container>
// //         <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} mt={6}>
          
// //           {/* Sidebar Section */}
// //           <Box
// //             flex={1}
// //             display="flex"
// //             flexDirection="column"
// //             alignItems="center"
// //             className="profile-section"
// //             sx={{
// //               minWidth: 250,
// //               maxWidth: 300,
// //               textAlign: 'center',
// //               padding: 2,
// //             }}
// //           >
// //             <Typography variant="h5" mb={2}>My Profile</Typography>
// //             <img
// //               src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg"
// //               className="img-1"
// //               alt="Profile Icon"
// //               style={{ width: 100, borderRadius: '50%', marginBottom: 10 }}
// //             />
// //             <Typography variant="h6">{sidebarName}</Typography>
// //             <Typography variant="body2">{sidebarLocation}</Typography>
// //             <Typography variant="body2" mb={2}>{sidebarDateOfBirth}</Typography>
            
// //             {/* Sidebar Buttons */}
// //             <Box width="100%">
// //               <Button
// //                 fullWidth
// //                 variant="contained"
// //                 style={{ backgroundColor: '#5e9e91', color: '#fff' }}
// //                 onClick={() => setShowNotifications(false) & setShowNewsletter(false)}
// //               >
// //                 Profile Information
// //               </Button>
// //               <Button
// //                 fullWidth
// //                 variant="contained"
// //                 style={{ backgroundColor: '#5e9e91', color: '#fff', marginTop: 8 }}
// //                 onClick={() => setShowNotifications(false) & setShowNewsletter(true)}
// //               >
// //                 Newsletter Subscription
// //               </Button>
// //               <Button
// //                 fullWidth
// //                 variant="contained"
// //                 style={{ backgroundColor: '#5e9e91', color: '#fff', marginTop: 8 }}
// //                 onClick={() => setShowNotifications(true) & setShowNewsletter(false)}
// //               >
// //                 Manage Notifications
// //               </Button>
// //             </Box>
// //           </Box>

// //           {/* Main Content */}
// //           <Box flex={3} ml={{ md: 4 }} mt={{ xs: 4, md: 0 }}>
// //             {showNotifications ? (
// //               <NotificationPage />
// //             ) : showNewsletter ? (
// //               <NewsletterSubscription />
// //             ) : (
// //               <>
// //                 <Box mb={4}>
// //                   <Typography variant="h5">Personal Information</Typography>
// //                   <TextField
// //                     label="Name"
// //                     variant="outlined"
// //                     fullWidth
// //                     sx={{ mt: 1 }}
// //                     value={name}
// //                     onChange={(e) => setName(e.target.value)}
// //                   />
// //                   <TextField
// //                     label="Date of Birth"
// //                     type="date"
// //                     variant="outlined"
// //                     fullWidth
// //                     sx={{ mt: 2 }}
// //                     InputLabelProps={{ shrink: true }}
// //                     value={dateOfBirth}
// //                     onChange={(e) => setDateOfBirth(e.target.value)}
// //                   />
// //                   <TextField
// //                     label="Location"
// //                     variant="outlined"
// //                     fullWidth
// //                     sx={{ mt: 2 }}
// //                     value={location}
// //                     onChange={(e) => setLocation(e.target.value)}
// //                   />
// //                   <Button
// //                     fullWidth
// //                     variant="contained"
// //                     style={{ backgroundColor: '#5e9e91', color: '#fff', marginTop: 15 }}
// //                     onClick={handleSavePersonalInfo}
// //                   >
// //                     Save Personal Info
// //                   </Button>
// //                 </Box>

// //                 <Box>
// //                   <Typography variant="h5">Security</Typography>
// //                   <TextField
// //                     label="Email Address"
// //                     type="email"
// //                     variant="outlined"
// //                     fullWidth
// //                     sx={{ mt: 1 }}
// //                     InputProps={{
// //                       startAdornment: (
// //                         <InputAdornment position="start">
// //                           <EmailIcon />
// //                         </InputAdornment>
// //                       ),
// //                     }}
// //                   />
// //                   <TextField
// //                     label="Password"
// //                     type="password"
// //                     variant="outlined"
// //                     fullWidth
// //                     sx={{ mt: 2 }}
// //                     InputProps={{
// //                       startAdornment: (
// //                         <InputAdornment position="start">
// //                           <LockIcon />
// //                         </InputAdornment>
// //                       ),
// //                     }}
// //                   />
// //                   <TextField
// //                     label="Confirm Password"
// //                     type="password"
// //                     variant="outlined"
// //                     fullWidth
// //                     sx={{ mt: 2 }}
// //                     InputProps={{
// //                       startAdornment: (
// //                         <InputAdornment position="start">
// //                           <LockIcon />
// //                         </InputAdornment>
// //                       ),
// //                     }}
// //                   />
// //                   <Button
// //                     fullWidth
// //                     variant="contained"
// //                     style={{ backgroundColor: '#5e9e91', color: '#fff', marginTop: 15 }}
// //                   >
// //                     Save Security Info
// //                   </Button>
// //                 </Box>
// //               </>
// //             )}
// //           </Box>

// //         </Box>
// //       </Container>
// //     </div>
// //   );
// // }

// // export default Profile;


// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   Typography,
//   InputAdornment
// } from '@mui/material';
// import { Email as EmailIcon, Lock as LockIcon } from '@mui/icons-material';
// import NotificationPage from './NotificationPage';
// import NewsletterSubscription from './NewsletterSubscription';
// import './Profile.css';

// function Profile() {
//   const [name, setName] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState('');
//   const [location, setLocation] = useState('');
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [showNewsletter, setShowNewsletter] = useState(false);
//   const [sidebarName, setSidebarName] = useState('Saumya Pande');
//   const [sidebarLocation, setSidebarLocation] = useState('Chennai');
//   const [sidebarDateOfBirth, setSidebarDateOfBirth] = useState('1990-01-18');
//   const [profileImage, setProfileImage] = useState(
//     'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg'
//   );

//   const handleSavePersonalInfo = () => {
//     setSidebarName(name);
//     setSidebarLocation(location);
//     setSidebarDateOfBirth(dateOfBirth);
//     alert('Personal information saved!');
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProfileImage(imageUrl);
//     }
//   };

//   return (
//     <div className="Profile">
//       <Container>
//         <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} mt={6}>
          
//           {/* Sidebar Section */}
//           <Box
//             flex={1}
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             className="profile-section"
//             sx={{
//               minWidth: 250,
//               maxWidth: 300,
//               textAlign: 'center',
//               padding: 2,
//             }}
//           >
//             <Typography variant="h5" mb={2}>My Profile</Typography>
//             <label htmlFor="upload-photo">
//               <img
//                 src={profileImage}
//                 className="img-1"
//                 alt="Profile Icon"
//                 style={{ width: 100, height: 100, borderRadius: '50%', marginBottom: 10, cursor: 'pointer' }}
//               />
//             </label>
//             <input
//               id="upload-photo"
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               style={{ display: 'none' }}
//             />
//             <Typography variant="h6">{sidebarName}</Typography>
//             <Typography variant="body2">{sidebarLocation}</Typography>
//             <Typography variant="body2" mb={2}>{sidebarDateOfBirth}</Typography>
            
//             {/* Sidebar Buttons */}
//             <Box width="100%">
//               <Button
//                 fullWidth
//                 variant="contained"
//                 style={{ backgroundColor: '#5e9e91', color: '#fff' }}
//                 onClick={() => setShowNotifications(false) & setShowNewsletter(false)}
//               >
//                 Profile Information
//               </Button>
//               <Button
//                 fullWidth
//                 variant="contained"
//                 style={{ backgroundColor: '#5e9e91', color: '#fff', marginTop: 8 }}
//                 onClick={() => setShowNotifications(false) & setShowNewsletter(true)}
//               >
//                 Newsletter Subscription
//               </Button>
//               <Button
//                 fullWidth
//                 variant="contained"
//                 style={{ backgroundColor: '#5e9e91', color: '#fff', marginTop: 8 }}
//                 onClick={() => setShowNotifications(true) & setShowNewsletter(false)}
//               >
//                 Manage Notifications
//               </Button>
//             </Box>
//           </Box>

//           {/* Main Content */}
//           <Box flex={3} ml={{ md: 4 }} mt={{ xs: 4, md: 0 }}>
//             {showNotifications ? (
//               <NotificationPage />
//             ) : showNewsletter ? (
//               <NewsletterSubscription />
//             ) : (
//               <>
//                 <Box mb={4}>
//                   <Typography variant="h5">Personal Information</Typography>
//                   <TextField
//                     label="Name"
//                     variant="outlined"
//                     fullWidth
//                     sx={{ mt: 1 }}
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                   <TextField
//                     label="Date of Birth"
//                     type="date"
//                     variant="outlined"
//                     fullWidth
//                     sx={{ mt: 2 }}
//                     InputLabelProps={{ shrink: true }}
//                     value={dateOfBirth}
//                     onChange={(e) => setDateOfBirth(e.target.value)}
//                   />
//                   <TextField
//                     label="Location"
//                     variant="outlined"
//                     fullWidth
//                     sx={{ mt: 2 }}
//                     value={location}
//                     onChange={(e) => setLocation(e.target.value)}
//                   />
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     style={{ backgroundColor: '#5e9e91', color: '#fff', marginTop: 15 }}
//                     onClick={handleSavePersonalInfo}
//                   >
//                     Save Personal Info
//                   </Button>
//                 </Box>

//                 <Box>
//                   <Typography variant="h5">Security</Typography>
//                   <TextField
//                     label="Email Address"
//                     type="email"
//                     variant="outlined"
//                     fullWidth
//                     sx={{ mt: 1 }}
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <EmailIcon />
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                   <TextField
//                     label="Password"
//                     type="password"
//                     variant="outlined"
//                     fullWidth
//                     sx={{ mt: 2 }}
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <LockIcon />
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                   <TextField
//                     label="Confirm Password"
//                     type="password"
//                     variant="outlined"
//                     fullWidth
//                     sx={{ mt: 2 }}
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <LockIcon />
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     style={{ backgroundColor: '#5e9e91', color: '#fff', marginTop: 15 }}
//                   >
//                     Save Security Info
//                   </Button>
//                 </Box>
//               </>
//             )}
//           </Box>

//         </Box>
//       </Container>
//     </div>
//   );
// }

// export default Profile;

import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment
} from '@mui/material';
import { Email as EmailIcon, Lock as LockIcon } from '@mui/icons-material';
import NotificationPage from './NotificationPage';
import NewsletterSubscription from './NewsletterSubscription';
import './Profile.css';

function Profile() {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [location, setLocation] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [sidebarName, setSidebarName] = useState('Saumya Pande');
  const [sidebarLocation, setSidebarLocation] = useState('Chennai');
  const [sidebarDateOfBirth, setSidebarDateOfBirth] = useState('1990-01-18');
  const [profileImage, setProfileImage] = useState(
'https://www.w3schools.com/howto/img_avatar.png'
  );

  const handleSavePersonalInfo = () => {
    setSidebarName(name);
    setSidebarLocation(location);
    setSidebarDateOfBirth(dateOfBirth);
    alert('Personal information saved!');
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="Profile">
      <Container>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} mt={6}>
          
          {/* Sidebar Section */}
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            className="profile-section"
            sx={{
              minWidth: 250,
              maxWidth: 300,
              textAlign: 'center',
              padding: 2,
            }}
          >
            <Typography variant="h5" mb={2}>My Profile</Typography>
            
            {/* Profile Image */}
            <img
              src={profileImage}
              className="img-1"
              alt="Profile Icon"
              style={{ width: 100, height: 100, borderRadius: '50%', marginBottom: 10 }}
            />

            {/* Hidden File Input */}
            <input
              id="upload-photo"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />

            {/* Upload Button */}
            <label htmlFor="upload-photo">
              <Button variant="contained" component="span" color="primary">
                Upload Image
              </Button>
            </label>

            <Typography variant="h6" mt={2}>{sidebarName}</Typography>
            <Typography variant="body2">{sidebarLocation}</Typography>
            <Typography variant="body2" mb={2}>{sidebarDateOfBirth}</Typography>
            
            {/* Sidebar Buttons */}
            <Box width="100%">
              <Button
                fullWidth
                variant="contained"
                style={{ backgroundColor: '#5e9e91', color: '#fff' }}
                onClick={() => setShowNotifications(false) & setShowNewsletter(false)}
              >
                Profile Information
              </Button>
              <Button
                fullWidth
                variant="contained"
                style={{ backgroundColor: '#5e9e91', color: '#fff', marginTop: 8 }}
                onClick={() => setShowNotifications(false) & setShowNewsletter(true)}
              >
                Newsletter Subscription
              </Button>
              <Button
                fullWidth
                variant="contained"
                style={{ backgroundColor: '#5e9e91', color: '#fff', marginTop: 8 }}
                onClick={() => setShowNotifications(true) & setShowNewsletter(false)}
              >
                Manage Notifications
              </Button>
            </Box>
          </Box>

          {/* Main Content */}
          <Box flex={3} ml={{ md: 4 }} mt={{ xs: 4, md: 0 }}>
            {showNotifications ? (
              <NotificationPage />
            ) : showNewsletter ? (
              <NewsletterSubscription />
            ) : (
              <>
                <Box mb={4}>
                  <Typography variant="h5">Personal Information</Typography>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 1 }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    label="Date of Birth"
                    type="date"
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2 }}
                    InputLabelProps={{ shrink: true }}
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  />
                  <TextField
                    label="Location"
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2 }}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    style={{ backgroundColor: '#5e9e91', color: '#fff', marginTop: 15 }}
                    onClick={handleSavePersonalInfo}
                  >
                    Save Personal Info
                  </Button>
                </Box>

                <Box>
                  <Typography variant="h5">Security</Typography>
                  <TextField
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 1 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    style={{ backgroundColor: '#5e9e91', color: '#fff', marginTop: 15 }}
                  >
                    Save Security Info
                  </Button>
                </Box>
              </>
            )}
          </Box>

        </Box>
      </Container>
    </div>
  );
}

export default Profile;
