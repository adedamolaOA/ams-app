import React from 'react';
import Dashboard from "@material-ui/icons/DashboardTwoTone";
import CalendarToday from "@material-ui/icons/CalendarTodayTwoTone";
import GroupWorkRounded from "@material-ui/icons/GroupWorkTwoTone";
import VerifiedUserRounded from "@material-ui/icons/VerifiedUserTwoTone";
import Settings from "@material-ui/icons/SettingsTwoTone";
export const menuItems = [ 
    {
        id: 1,
        name: 'Dashboard',
        icon: ( <Dashboard htmlColor="white"/>),
        componentUrl: '/'
    },
    {
        id: 2,
        name: 'Appointments',
        icon: ( <CalendarToday htmlColor="white"/>),
        componentUrl: '/appointments'
        
    }, 
    {
        id: 3,
        name: 'Departments',
        icon: ( <GroupWorkRounded htmlColor="white"/>),
        componentUrl: '/departments'
    }, 
    {
        id: 4,
        name: 'Employees',
        icon: ( <VerifiedUserRounded htmlColor="white"/>),
        componentUrl: '/employees'
    }, 
    {
        id: 5,
        name: 'Settings',
        icon: ( <Settings htmlColor="white"/>),
        componentUrl: '/settings'
    }
];