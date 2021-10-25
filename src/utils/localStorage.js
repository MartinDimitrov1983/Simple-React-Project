export const localStorageManagement = () => {
    const getItem = (name) => {
        return JSON.parse(localStorage.getItem(name))
    }

    const setItem = (name, body) => {
        return localStorage.setItem(name, JSON.stringify(body))
    }

    return {
        getItem,
        setItem,
    }
}
