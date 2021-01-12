import React, { useState, useEffect } from 'react';
import { getPage } from '../services/content-service';
import NotFound from '../components/NotFound';
import ContentComponent from '../components/Content';
import { useParams } from "react-router";

const Content = () => {
    let { contentPath } = useParams();

    const [page, setPage] = useState(null);
    const [statusCode, setStatusCode] = useState(null);

    useEffect(() => {
        getPage(contentPath)
            .then(response => {
                setStatusCode(response.status);
                if (response.data) setPage(response.data);
            });

        return () => {
            setPage(null);
        }
    }, [contentPath]);

    if (statusCode === 404) {
        return <NotFound message={`Content "${contentPath}" not found`} />
    }

    return (
        <>
            {
                page ? <ContentComponent page={page} /> : '...'
            }
        </>
    )

}

export default Content
