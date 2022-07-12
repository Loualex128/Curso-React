import React, { Children } from 'react';

const Layout = ({children}) => {
    return (
        <div className=''>
            {children}
        </div>
    )
}

export default Layout;