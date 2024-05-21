import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function UserDashboard() {
    const location = useLocation();
    const product = location.state;
    return (
        <div>UserDashboard</div>
    )
}

export default UserDashboard