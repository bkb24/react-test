import React from 'react';

const NotFound = props => {

    return (
        <>
            <div style={{
                margin: '2rem',
                padding: '3rem'
            }}>
                { props.message ? props.message : 'Page not found' }
            </div>
        </>
    )

}

export default NotFound
