import md5 from 'md5';

import Keys from './keys.json';

const BASE_API = 'https://gateway.marvel.com';

const Api = {
    getCharacters: async (limit, offset) => {
        const apikey = Keys.public_key;
        const ts = Date.now();
        const hash = md5(`${ts}${Keys.private_key}${apikey}`);

        const req = await fetch(`${BASE_API}/v1/public/characters?apikey=${apikey}&ts=${ts}&hash=${hash}&limit=${limit}&offset=${offset}`);
        const json = await req.json();
        console.log(json.data.results);
        return json.data.results;
    },

}

export default Api;