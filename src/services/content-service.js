const path = 'data/content_1.json';

export const getPage = url => {
    return getPages()
        .then(data => {
            let pages = [];
            if (data && data.length) {
                pages = getPagesArray(data);
            }

            let page = pages ?
                pages.find(p => p.url === `/content/${url}`)
                : null;

            return {
                status: page ? 200 : 404,
                data: page
            };
        })
}

export const getAll = () => {
    return getPages()
        .then(data => {
            let payload = [];
            if (data && data.length) {
                payload = getPagesArray(data);
            }

            return {
                status: 200,
                data: payload
            };
        })
}

export const getPages = () => {
    return fetch(`${window.location.origin}/${path}`)
        .then(response => response.json())
        .then(data => data.page ? data.page : null);
}

const getPagesArray = data => {
    return data.map(page => Object.values(page)[0]);
}
