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
import io from 'socket.io-client';
import moment from 'moment'; 
import { jwtDecode } from 'jwt-decode';

const socket = io('http://localhost:3000');

const Navbar = ({ userInfo, setUserInfo, handleLogout }) => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNotifications, setAnchorElNotifications] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setCurrentUser(userInfo);
    if (!userInfo) {
      const storedUserInfo = sessionStorage.getItem('userInfo');
      if (storedUserInfo) {
        try {
          setCurrentUser((storedUserInfo));
        } catch (error) {
          console.error('Error parsing user info:', error);
        }
      }
    }
  }, [userInfo]);

  // Fetch notifications from API
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('http://localhost:3000/user/notifications'); 
        const data = await response.json(); 
        setNotifications(data); 
      } catch (error) {
        console.error('Error fetching notifications:', error); 
      }
    };

    fetchNotifications();

    // Listen for real-time notifications
    socket.on('notification', (newNotification) => {
      setNotifications((prev) => [newNotification, ...prev]);
    });

    return () => {
      socket.off('notification');
    };
  }, []);

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

 var userDetails={};

  const getNavigationItems = () => {
    if (currentUser) {
      
      const decoded = jwtDecode(currentUser);
      userDetails=decoded;
      return decoded.role === "admin"
        ? [
            { label: "Dashboard", path: "/admin-dashboard" },
            { label: "Templates", path: "/admin-template" },
            { label: "Transaction Details", path: "/admin-payment" },
            { label: "Edit Template", path: "/edit-template" }
          ]
        : [
            { label: "Dashboard", path: "/dashboard" },
            { label: "Templates", path: "/templates" },
            { label: "Job Search", path: "/job-search" },
            { label: "Purchase History", path: "/user-payments" }
          ];
      
    }
    return [];
  };

  const navigationItems = getNavigationItems();

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
                {navigationItems.map((item,index) => (
                  <MenuItem key={index} component={Link} to={item.path} onClick={handleCloseNavMenu}>
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
                <IconButton color="inherit" sx={{ mr: 2 }} onClick={handleOpenNotificationsMenu}>
                  <Badge badgeContent={notifications.length} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>

<Menu
  anchorEl={anchorElNotifications}
  open={Boolean(anchorElNotifications)}
  onClose={handleCloseNotificationsMenu}
  sx={{ mt: 1 }}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
>
  <List sx={{ width: 300, maxHeight: 400, overflowY: 'auto' }}>
    {notifications.length === 0 ? (
      <ListItem>
        <ListItemText primary="No new notifications" />
      </ListItem>
    ) : (
      notifications.map((notification) => (
        <React.Fragment key={notification._id}>
          <ListItem>
            <ListItemText 
              primary={notification.message} 
              secondary={moment(notification.createdAt).fromNow()} 
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))
    )}
  </List>
</Menu>


                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar sx={{ bgcolor: '#1976d2', color: 'white' }}>
                      {userDetails.name ? userDetails.name.charAt(0).toUpperCase() : 'U'}
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
                      {userDetails.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {userDetails.email}
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
              <Button component={NavLink} to="/register" color="inherit"  >
                Register
              </Button>
              <Button component={NavLink} to="/contact" color="inherit"  sx={{ mr: 1 }}>
                Contact Us
              </Button>
              <Button component={NavLink} to="/aboutus" color="inherit"  sx={{ mr: 1 }}>
                About Us
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
// sx={{  color: '#2c3e50' }}

export default Navbar;
