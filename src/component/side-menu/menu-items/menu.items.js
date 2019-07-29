import React from 'react';
import Dashboard from "@material-ui/icons/DashboardTwoTone";
import CalendarToday from "@material-ui/icons/CalendarTodayTwoTone";
import Settings from "@material-ui/icons/SettingsTwoTone";
import MessageRounded from "@material-ui/icons/MessageRounded"
export const menuItems = [ 
    {
        id: 1,
        name: 'Dashboard',
        icon: ( <Dashboard htmlColor="white"/>),
        componentUrl: '/ams-app/'
    },
    {
        id: 2,
        name: 'Appointments',
        icon: ( <CalendarToday htmlColor="white"/>),
        componentUrl: '/ams-app/appointments'
        
    }, 
    {
        id: 3,
        name: 'Message',
        icon: ( <MessageRounded htmlColor="white"/>),
        componentUrl: '/ams-app/messages'
        
    }, 
    {
        id: 4,
        name: 'Settings',
        icon: ( <Settings htmlColor="white"/>),
        componentUrl: '/ams-app/settings'
    }
];