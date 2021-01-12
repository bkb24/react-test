import React from 'react';
import { Helmet } from 'react-helmet-async';

const Content = props => {
    let { page } = props;
    let { meta } = page;

    return (
        <div>
            <Helmet>
                <title>{page.title}</title>
                <meta name="description" content={meta.meta_description} />
                <meta property="og:title" content={meta.meta_title} />
                <meta property="og:description" content={meta.meta_description} />
                <meta property="og:url" content={page.url} />
            </Helmet>

            <h1>{page.title}</h1>

            <div dangerouslySetInnerHTML={{
                __html: page.content
            }}></div>
        </div>
    )

}

export default Content
