const RC_MARVEL_PUBLIC_KEY = '';
const EP_MARVEL_BASE = '';
const EP_ALL_CHARACTERS = '';

const fetchAllCharacters = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            return xhr.response;
        }
    }
    const method = 'GET';
    const url = EP_MARVEL_BASE + EP_ALL_CHARACTERS + '?apikey=' + RC_MARVEL_PUBLIC_KEY;
    const async = true;
    xhr.open(method, url, async);
    xhr.send();
}

const fetchData = () => {
    // return fetchAllCharacters();
    return { msg: 'hello there'};
}

export { fetchData };