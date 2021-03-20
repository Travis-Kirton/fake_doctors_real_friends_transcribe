const axios = require ('axios')
const dotenv = require('dotenv');

dotenv.config();

const fetchExternalUrlList = () => {
    let tokenHeaders = {
        cookie: `${process.env.TOKEN_COOKIE}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36'
    }
    return axios.get('https://open.spotify.com/get_access_token', {headers: tokenHeaders})
        .then(res => {
            return axios({
                method: 'GET',
                url: 'https://api.spotify.com/v1/episodes',
                params: {ids : '5u75Q17WGYR2ZDPWtSzMB0'},
                headers: {
                    authorization: 'Bearer ' + res.data.accessToken,
                }
            }).then(res => {
                return res.data.episodes.map(episode => {
                    return episode.external_playback_url;
                });
            })
        })
}

fetchExternalUrlList().then(urlList => {
    console.log(urlList);
});