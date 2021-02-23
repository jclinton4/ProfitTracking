import React, { Component } from 'react';
import TradesService from './TradesService';

const tradesService = new TradesService();

class TradesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trades: [],
            nextPageURL: ''
        };
        this.nextPage = this.nextPage.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        var self = this;
        tradesService.getTrades().then(function (result) {
            self.setState({trades: result.data, nextPageURL: result.nextlink})
        });
    }

    handleDelete(e,pk){
        var self = this;
        tradesService.deleteTrade({pk : pk}).then(()=>{
            var newArr = self.state.trades.filter(funtion(obj) {
                return obj.pk !== pk;
            });
            self.setState({trades: newArr})
        });
    }

    nextPage(){
        var self = this;
        tradesService.getTradesByURL(this.state.nextPageURL).then((result) => {
            self.setState({trades: result.data, nextPageURL: result.nextlink})
        });
    }

    render() {
        return (
            <div className="trades--list">
                <table className="table">
                    <thead key="thead">
                        <tr>
                            <th>#</th>
                            <th>Symbol</th>
                            <th>Date</th>
                            <th>Asset</th>
                            <th>Quantity</th>
                            <th>Buy Price</th>
                            <th>Sell Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.trades.map(c =>
                            <tr key={c.pk}>
                                <td>{c.pk} </td>
                                <td>{c.symbol}</td>
                                <td>{c.buy_date}</td>
                                <td>{c.asset}</td>
                                <td>{c.quantity}</td>
                                <td>{c.buy_price}</td>
                                <td>{c.sell_price}</td>
                                <td>
                                    <button onClick={(e)=> this.handleDelete(e,c.pk)}> Delete</button>
                                    <a href={"/trade/" + c.pk}> Update</a>
                                </td>
                            </tr>)}
                    </tbody>
                </table>
                <button className="btn btn-primary" onClick= { this.nextPage }>Next</button>
            </div>
        );
    }
}
export default TradesList;