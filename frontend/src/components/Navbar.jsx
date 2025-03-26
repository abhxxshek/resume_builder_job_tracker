// import React, { useState, useEffect } from 'react';
// import { 
//   AppBar, 
//   Toolbar, 
//   Typography, 
//   Box, 
//   IconButton, 
//   Menu, 
//   MenuItem, 
//   Container, 
//   Button, 
//   Avatar, 
//   Tooltip,
//   Divider,
//   Badge
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import LogoutIcon from '@mui/icons-material/Logout';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { Link, useNavigate, NavLink } from 'react-router-dom'; 

// const Navbar = ({ userInfo, setUserInfo, handleLogout }) => {
//   const navigate = useNavigate();
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [anchorElUser, setAnchorElUser] = useState(null);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [notifications, setNotifications] = useState(3); // Dummy notification count
  
//   useEffect(() => {
//     setCurrentUser(userInfo);
//     if (!userInfo) {
//       const storedUserInfo = sessionStorage.getItem('userInfo');
//       if (storedUserInfo) {
//         try {
//           setCurrentUser(storedUserInfo);
//         } catch (error) {
//           console.error('Error parsing user info in Navbar:', error);
//         }
//       }
//     }
//   }, [userInfo]);
  
//   const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
//   const handleCloseNavMenu = () => setAnchorElNav(null);
  
//   const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
//   const handleCloseUserMenu = () => setAnchorElUser(null);

//   const onLogout = () => {
//     if (handleLogout) {
//       handleLogout();
//     } else {
//       sessionStorage.removeItem('userInfo');
//       setCurrentUser(null);
//       if (setUserInfo) setUserInfo(null);
//       navigate('/login');
//     }
//     handleCloseUserMenu();
//   };

//   const getNavigationItems = () => {
//     if (currentUser) {
//       return [
//         { label: 'Dashboard', path: '/dashboard' },
//         { label: 'Templates', path: '/templates' },
        
//         { label: 'Admin dashboard', path: '/admin-dashboard' },
//         { label: 'Payment', path: '/payment' },
//         { label: 'Job search', path: '/job-search' },
//         { label: 'Admin payment', path: '/admin-payment' },
//       ];
//     } else {
//       return [];
//     }
//   };

//   const navigationItems = getNavigationItems();

//   return (
//     <>
//       <AppBar position="fixed" sx={{ backgroundColor: '#2c3e50', zIndex: 1100 }}>
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <Typography
//               variant="h6"
//               noWrap
//               sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, fontWeight: 'bold', color: 'white', textDecoration: 'none' }}
//             >
//               Resume Builder
//             </Typography>

//             <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//               <IconButton size="large" color="inherit" onClick={handleOpenNavMenu}>
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 anchorEl={anchorElNav}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{ display: { xs: 'block', md: 'none' } }}
//               >
//                 {navigationItems.map((item) => (
//                   <MenuItem key={item.label} component={Link} to={item.path} onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">{item.label}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>

//             <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
//               {navigationItems.map((item) => (
//                 <Button key={item.label} component={Link} to={item.path} sx={{ color: 'white', mx: 1 }}>
//                   {item.label}
//                 </Button>
//               ))}
//             </Box>

//             {currentUser ? (
//               <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
//                 <IconButton color="inherit" sx={{ mr: 2 }}>
//                   <Badge badgeContent={notifications} color="error">
//                     <NotificationsIcon />
//                   </Badge>
//                 </IconButton>
//                 <Tooltip title="Open settings">
//                   <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                     <Avatar sx={{ bgcolor: '#1976d2', color: 'white' }}>
//                       {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
//                     </Avatar>
//                   </IconButton>
//                 </Tooltip>
//                 <Menu
//                   sx={{ mt: '45px' }}
//                   anchorEl={anchorElUser}
//                   open={Boolean(anchorElUser)}
//                   onClose={handleCloseUserMenu}
//                 >
//                   <Box sx={{ px: 2, py: 1 }}>
//                     <Typography variant="subtitle1" fontWeight="bold">
//                       {currentUser.name}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {currentUser.email}
//                     </Typography>
//                   </Box>
//                   <Divider />
//                   <MenuItem onClick={onLogout}>
//                     <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
//                     <Typography textAlign="center">Logout</Typography>
//                   </MenuItem>
//                 </Menu>
//               </Box>
//             ) : (
//               <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//                 <Button component={NavLink} to="/login" color="inherit" sx={{ mr: 1 }}>
//                   Login
//                 </Button>
//                 <Button component={NavLink} to="/register" variant="contained" sx={{ backgroundColor: 'white', color: '#2c3e50' }}>
//                   Register
//                 </Button>
//               </Box>
//             )}
//           </Toolbar>
//         </Container>
//       </AppBar>
//       <Box sx={{ marginTop: '64px' }} />
//     </>
//   );
// };

// export default Navbar;



























import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  IconButton, 
  Menu, 
  MenuItem, 
  Container, 
  Button, 
  Avatar, 
  Tooltip,
  Divider,
  Badge,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link, useNavigate, NavLink } from 'react-router-dom'; 

const Navbar = ({ userInfo, setUserInfo, handleLogout }) => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElNotifications, setAnchorElNotifications] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [notificationLimit, setNotificationLimit] = useState(5);

  // Dummy notifications
  const fakeNotifications = [
    "You have a new job offer!",
    "Your payment has been processed.",
    "New message from John.",
    "New comment on your resume.",
    "Reminder: Your subscription is expiring soon.",
    "New feedback on your resume.",
    "Your profile has been viewed.",
    "You have a new connection request.",
    "New template added to your account.",
    "New job matching your profile."
  ];

  useEffect(() => {
    setCurrentUser(userInfo);
    if (!userInfo) {
      const storedUserInfo = sessionStorage.getItem('userInfo');
      if (storedUserInfo) {
        try {
          setCurrentUser(JSON.parse(storedUserInfo));
        } catch (error) {
          console.error('Error parsing user info:', error);
        }
      }
    }

    setNotifications(fakeNotifications.slice(0, notificationLimit));
  }, [userInfo, notificationLimit]);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleOpenNotificationsMenu = (event) => setAnchorElNotifications(event.currentTarget);
  const handleCloseNotificationsMenu = () => setAnchorElNotifications(null);

  const onLogout = () => {
    if (handleLogout) {
      handleLogout();
    } else {
      sessionStorage.removeItem('userInfo');
      setCurrentUser(null);
      if (setUserInfo) setUserInfo(null);
      navigate('/login');
    }
    handleCloseUserMenu();
  };

  const getNavigationItems = () => {
    if (currentUser) {
      return [
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'Templates', path: '/templates' },
        { label: 'Admin Dashboard', path: '/admin-dashboard' },
        { label: 'Payment', path: '/payment' },
        { label: 'Job Search', path: '/job-search' },
        { label: 'Admin Payment', path: '/admin-payment' },
      ];
    }
    return [];
  };

  const navigationItems = getNavigationItems();

  const loadMoreNotifications = () => {
    if (notifications.length < fakeNotifications.length) {
      const newLimit = notificationLimit + 5;
      setNotificationLimit(newLimit);
      setNotifications(fakeNotifications.slice(0, newLimit));
    }
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#2c3e50', zIndex: 1100 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              sx={{ flexGrow: 1, fontWeight: 'bold', color: 'white', textDecoration: 'none' }}
            >
              Resume Builder
            </Typography>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" color="inherit" onClick={handleOpenNavMenu}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {navigationItems.map((item) => (
                  <MenuItem key={item.label} component={Link} to={item.path} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{item.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
              {navigationItems.map((item) => (
                <Button key={item.label} component={Link} to={item.path} sx={{ color: 'white', mx: 1 }}>
                  {item.label}
                </Button>
              ))}
            </Box>

            {currentUser ? (
              <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                <IconButton 
                  color="inherit" 
                  sx={{ mr: 2 }}
                  onClick={handleOpenNotificationsMenu} 
                >
                  <Badge badgeContent={notifications.length} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                
                {/* Fixed Notification Menu Positioning */}
                <Menu
                  sx={{ mt: '45px', maxHeight: 400, overflow: 'auto', width: 320 }}
                  anchorEl={anchorElNotifications}
                  open={Boolean(anchorElNotifications)}
                  onClose={handleCloseNotificationsMenu}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <List>
                    {notifications.map((notification, index) => (
                      <ListItem key={index} sx={{ px: 2 }}>
                        <ListItemText primary={notification} />
                      </ListItem>
                    ))}
                    {notifications.length < fakeNotifications.length && (
                      <Box sx={{ textAlign: 'center', mt: 2 }}>
                        <Button onClick={loadMoreNotifications} color="primary">Load More</Button>
                      </Box>
                    )}
                  </List>
                </Menu>

                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar sx={{ bgcolor: '#1976d2', color: 'white' }}>
                      {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  anchorEl={anchorElUser}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <Box sx={{ px: 2, py: 1 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {currentUser.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {currentUser.email}
                    </Typography>
                  </Box>
                  <Divider />
                  <MenuItem onClick={onLogout}>
                    <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button component={NavLink} to="/login" color="inherit" sx={{ mr: 1 }}>
                  Login
                </Button>
                <Button component={NavLink} to="/register" variant="contained" sx={{ backgroundColor: 'white', color: '#2c3e50' }}>
                  Register
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ marginTop: '64px' }} />
    </>
  );
};

export default Navbar;

