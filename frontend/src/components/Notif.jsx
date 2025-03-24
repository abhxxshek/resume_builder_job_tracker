import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, Divider } from '@mui/material';
import io from 'socket.io-client';
import moment from 'moment'; 

const socket = io('http://localhost:3000'); 

const NotificationComponent = () => {
    const [notifications, setNotifications] = useState([]); 

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
        socket.on('notification', (newNotification) => {
            setNotifications((prev) => [newNotification, ...prev]); 
        });

        return () => {
            socket.off('notification'); 
        };
    }, []); 

    return (
        <Box
          sx={{
            width: '300px',
            backgroundColor: '#fff',
            boxShadow: 3,
            borderRadius: 2,
            padding: 2,
            position: 'absolute',
            top: 20,
            right: 20,
            maxHeight: '400px',
            overflowY: 'auto',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              marginBottom: 2,
              color: '#333',
            }}
          >
            Notifications
          </Typography>
          <List sx={{ padding: 0 }}>
            {notifications.map((notification) => (
              <React.Fragment key={notification._id}>
                <ListItem
                  sx={{
                    padding: '10px 15px',
                    backgroundColor: '#f7f7f7',
                    marginBottom: 1,
                    borderRadius: 1,
                    transition: 'background-color 0.3s',
                    '&:hover': {
                      backgroundColor: '#e3e3e3',
                    },
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ color: '#555' }}>
                      {notification.message}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#888',
                        display: 'block',
                        marginTop: 1,
                      }}
                    >
                      {moment(notification.createdAt).fromNow()}
                    </Typography>
                  </Box>
                </ListItem>
                <Divider sx={{ marginBottom: 1 }} />
              </React.Fragment>
            ))}
          </List>
        </Box>
      );
    
};

export default NotificationComponent;