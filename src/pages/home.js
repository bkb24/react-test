import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAll } from '../services/content-service'
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const [pages, setPages] = useState([])

    useEffect(() => {
        getAll()
            .then(response => {
                if (response.data && response.data.length) {
                    setPages(response.data)
                }
            });
    }, [])

    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Home page" />
                <meta property="og:title" content="Home page" />
                <meta property="og:description" content="Home page" />
                <meta property="og:url" content={`${window.location.origin}`} />
            </Helmet>

            <h1>Home</h1>

            <div style={{ marginTop: '2rem' }}>
                <ul>
                    {pages.length && pages.map(page => {
                        return (
                            <li key={page.page_id}>
                                <Link to={page.url}>{page.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )

}

export default Home
