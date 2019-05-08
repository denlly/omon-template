export default function({ $axios, redirect }) {
    $axios.onRequest(config => {
        if (process.browser) {
            const token = localStorage.getItem('user-token');
            $axios.setToken(token, 'bearer');
        }
        console.log('Making request to ' + config.url);
    });
    $axios.onResponse(response => {});
    $axios.onRequestError(error => {});
    $axios.onResponseError(error => {});
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status);
        if (code === 400) {
            redirect('/error');
        }
    });
}
