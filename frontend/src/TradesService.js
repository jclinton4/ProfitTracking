import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class TradesService{

    constructor(){}

    getTrades(){
        const url = '${API_URL}/api/trades/';
        return axios.get(url).then(response => response.data);
    }
    getTradesByURL(link){
        const url = '${API_URL}${link}';
        return axios.get(url).then(response => response.data);
    }
    getTrade(pk){
        const url = '${API_URL}/api/trades/${pk}';
        return axios.get(url).then(response => response.data);
    }
    deleteTrade(trade){
        const url = '${API_URL}/api/trades/${trade.pk}';
        return axios.delete(url);
    }
    createTrade(trade){
        const url = '${API_URL}/api/trades/';
        return axios.post(url, trade);
    }
    updateTrade(trade){
        const url = '${API_URL}/api/trades/${trade.pk}';
        return axios.put(url, trade);
    }
}