import React from 'react'
import { Helmet } from 'react-helmet-async';

const NotFound = props => {

    return (
        <>
            <Helmet>
                <title>404</title>
                <meta name="description" content="404 page" />
                <meta property="og:title" content="404 page" />
                <meta property="og:description" content="404 page" />
                <meta property="og:url" content={`${window.location.origin}`} />
            </Helmet>

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
