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
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate, NavLink } from 'react-router-dom'; 

const Navbar = ({ userInfo, setUserInfo, handleLogout }) => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    // Update current user when userInfo changes
    setCurrentUser(userInfo);
    
    // Fallback: Check sessionStorage if userInfo prop is null
    if (!userInfo) {
      const storedUserInfo = sessionStorage.getItem('userInfo');
      if (storedUserInfo) {
        try {
          setCurrentUser(storedUserInfo);
        } catch (error) {
          console.error('Error parsing user info in Navbar:', error);
        }
      }
    }
  }, [userInfo]);
  
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const onLogout = () => {
    if (handleLogout) {
      handleLogout();
    } else {
      // Fallback logout if handleLogout prop is not provided
      sessionStorage.removeItem('userInfo');
      setCurrentUser(null);
      if (setUserInfo) setUserInfo(null);
      navigate('/login');
    }
    handleCloseUserMenu();
  };

  // Navigation items based on authentication status
  const getNavigationItems = () => {
    if (currentUser) {
      return [
        { label: 'Dashboard', path: '/' },
        { label: 'Templates', path: '/templates' },
        
        { label: 'Admin dashboard', path: '/admin-dashboard' },
        { label: 'payment', path: '/payment' },
        { label: 'Job search', path: '/job-search' },
        { label: 'admin payment', path: '/admin-payment' },
        
      ];
    } else {
      return [];
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#2c3e50', zIndex: 1100 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to={currentUser ? "/Home" : "/login"}
              sx={{ 
                flexGrow: 1, 
                display: { xs: 'flex', md: 'flex' },
                fontWeight: 'bold',
                color: 'white',
                textDecoration: 'none'
              }}
            >
              Resume Builder
            </Typography>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {navigationItems.map((item) => (
                  <MenuItem 
                    key={item.label} 
                    onClick={handleCloseNavMenu} 
                    component={Link} 
                    to={item.path}
                  >
                    <Typography textAlign="center">{item.label}</Typography>
                  </MenuItem>
                ))}
                
                {!currentUser && (
                  <>
                    <MenuItem 
                      component={NavLink} 
                      to="/login" 
                      sx={{ 
                        '&.active': {
                          backgroundColor: (theme) => theme.palette.action.selected,
                          fontWeight: 'bold'
                        }
                      }}
                    >
                      <Typography textAlign="center">Login</Typography>
                    </MenuItem>
                    <MenuItem 
                      component={NavLink} 
                      to="/register" 
                      sx={{ 
                        '&.active': {
                          backgroundColor: (theme) => theme.palette.action.selected,
                          fontWeight: 'bold'
                        }
                      }}
                    >
                      <Typography textAlign="center">Register</Typography>
                    </MenuItem>
                  </>
                )}
              </Menu>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{ 
                    color: 'white', 
                    mx: 1,
                    '&:hover': { 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)' 
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Login/Register or User Menu */}
            {currentUser ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar 
                      sx={{ 
                        bgcolor: '#1976d2',
                        color: 'white'
                      }}
                    >
                      {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
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
                <Button 
                  component={NavLink} 
                  to="/login" 
                  color="inherit"
                  sx={{ 
                    mr: 1,
                    '&.active': {
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      fontWeight: 'bold'
                    }
                  }}
                >
                  Login
                </Button>
                <Button 
                  component={NavLink} 
                  to="/register" 
                  variant="contained" 
                  sx={{ 
                    backgroundColor: 'white', 
                    color: '#2c3e50',
                    '&:hover': { 
                      backgroundColor: '#e0e0e0' 
                    },
                    '&.active': {
                      backgroundColor: '#e0e0e0',
                      fontWeight: 'bold'
                    }
                  }}
                >
                  Register
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ marginTop: '64px' }} /> {/* Prevents content from being covered by fixed navbar */}
    </>
  );
};

export default Navbar;


