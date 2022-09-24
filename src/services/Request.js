import axios from 'axios';
import store from "@/store/index.js";

export default class Request
{
    static get(url) {
        return axios.create({
            baseURL: store.state.domain,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ localStorage.getItem('token'),
                // localization: store.state.localization
            },
            // params: {
            //     limit : 10
            // },
        })
        .get('/' + url)
    }

    static getBYID(url, ID){
        return axios.create({
            baseURL: store.state.domain,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ localStorage.getItem('token'),
                // localization: store.state.localization
            },
        })
        .get('/'+url+'/'+ID)
    }

    static post(url, formData) {
        return axios.post(store.state.domain + '/' + url, formData, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
    }

    static put(url, formData) {
        return axios.post(store.state.domain + '/' + url + '/'+localStorage.getItem('movieEditID'), formData, {
            headers: { 
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'content-type': 'multipart/form-data' 
            }
        })
    }

    static delete(url, ID){
        return axios.delete( store.state.domain + '/' + url + '/' + ID, { 
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
    }

    static statusIsSuccess(response) {
        return (response.status === 200 || response.status === 201) 
    }

    static responseIsSuccess(response) {
        return response.data.status === 'success';
    }

    static isFailed(response) {
        return response.data.status === 'failed';
    }
}