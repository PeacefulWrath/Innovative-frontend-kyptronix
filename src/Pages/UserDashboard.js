import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function UserDashboard() {
    // const location = useLocation();
    // const product = location.state;

    useEffect(() => {
          
    }, [])

    return (
        <div class="container">
           <h1 className='text-center'>All Buyed Products</h1>
            <div class="row mt-5">
                <div class="col-md-3 border border-secondary">Column 1</div>
                <div class="col-md-3 border border-secondary">Column 2</div>
                <div class="col-md-3 border border-secondary">Column 3</div>
                <div class="col-md-3 border border-secondary">Column 4</div>
            </div>
        </div>
    )
}

export default UserDashboard