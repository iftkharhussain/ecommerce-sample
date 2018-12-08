function addToCart_LocalStorage(key){

    let local_storage = window.localStorage.getItem('app-json')
    let local_storage_json = JSON.parse(local_storage)

    if (local_storage_json.cart) {
        local_storage_json.cart.push(key);
    }

    localStorage.setItem('app-json', JSON.stringify(local_storage_json))
}
function removeToCart_LocalStorage(key){

    let local_storage = window.localStorage.getItem('app-json')
    let local_storage_json = JSON.parse(local_storage)

    if (local_storage_json.cart) {
        let NewCartArray = local_storage_json.cart.filter((item) => {
            return item !== key
        })
        local_storage_json.cart = NewCartArray;
    }
    localStorage.setItem('app-json', JSON.stringify(local_storage_json))
}

function getJSONCart_localStorage(){

    let local_storage = window.localStorage.getItem('app-json')
    local_storage = JSON.parse(local_storage);

    if (local_storage.cart) {
       return local_storage.cart;
    }
    return false;
}

export{
    addToCart_LocalStorage,
    removeToCart_LocalStorage,
    getJSONCart_localStorage
}