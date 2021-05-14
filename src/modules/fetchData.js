const RC_MARVEL_PUBLIC_KEY = '9f829b5e3be89dfe129ba4aa8fce641f';
const EP_MARVEL_BASE = 'https://gateway.marvel.com/';
const EP_ALL_CHARACTERS = '/v1/public/characters';

const fetchAllCharacters = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            return xhr.responseText;
        }
    }
    const method = 'GET';
    const url = EP_MARVEL_BASE + EP_ALL_CHARACTERS + '?apikey=' + RC_MARVEL_PUBLIC_KEY;
    const async = true;
    xhr.open(method, url, async);
    xhr.send();
}

const fetchData = () => {
    return fetchAllCharacters();
}

export { fetchData };