import { getToken } from "../projects/auth/authHelper";
let apiURL = import.meta.env.VITE_APP_APIURL;
let endpoint = "api/users/"

const list = async ()=>{
    try {
        let response = await fetch(apiURL + endpoint, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            }
        })
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

const create = async (aboutUs)=>{
    try {
        let response = await fetch(apiURL + endpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify(aboutUs)
        })
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

const remove = async (id)=>{
    try {
        let response = await fetch(apiURL + endpoint + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            }
        })
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

const update = async (aboutUs, id)=>{
    try {
        let response = await fetch(apiURL + endpoint + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify(aboutUs)
        })
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

const readOne = async (id)=>{
    try {
        let response = await fetch(apiURL + endpoint + id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            }
        })
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export {list, create, remove, update, readOne}