import hotkeys from 'hotkeys-js';

const observerMap = {}

export function addkeyObserver(key, callback) {
    if(!observerMap[key]) {
        observerMap[key] = [];
        hotkeys(key, ()=> executeCallbacks(key));
    }
    observerMap[key].push(callback);
}

export function removekeyObserver(key, callback) {
    observerMap[key] = observerMap[key].filter(item => item !== callback);
}

function executeCallbacks(key) {
    for(const ob of observerMap[key]) {
        ob();
    }
}

// hotkeys(key, ()=>{})