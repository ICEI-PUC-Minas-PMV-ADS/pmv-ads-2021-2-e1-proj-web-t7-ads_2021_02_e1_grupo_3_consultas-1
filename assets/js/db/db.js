const db = {
    get: (key, isJson = false) => {
        let item = localStorage.getItem(key);
        if (item && isJson) {
            item = JSON.parse(item);
        }
        return item;
    },
    set: (key, value, isJson = false) => {
        localStorage.setItem(key, isJson ? JSON.stringify(value) : value);
        return db.get(key, isJson);
    },
    remove: (key) => {
        return localStorage.removeItem(key);
    }
}

export default db;
