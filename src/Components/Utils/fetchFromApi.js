

import axios from 'axios'


export async function fetchingMovieArray(url) {
    try {
        const response = await axios.get(url);
        return response.data.results
    } catch (e) {
        return e.message
    }
}

export async function fetchVideoKey(urlforKey) {
    try {
        const response = await axios.get(urlforKey);
        return response.data.results[1].key
    } catch (e) {
        return e.message
    }

}

