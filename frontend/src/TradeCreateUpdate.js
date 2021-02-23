import React, { Component } from 'react';
import TradesService from './TradesService';

const tradesService = new TradesService();

class TradeCreateUpdate extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const { match: {params}} = this.props;
        if(params && params.pk){
            tradesService.getTrade(params.pk).then((c)=>{
                this.refs.symbol.value = c.symbol;
                this.refs.asset.value = c.asset;
                this.refs.quantity.value = c.quantity;
                this.refs.buyprice.value = c.buyprice;
                this.refs.sellprice.value = c.sellprice;
            })
        }
    }

    handleCreate(){
        tradesService.createTrade(
            {
                "symbol": this.refs.symbol.value,
                "asset": this.refs.asset.value,
                "quantity": this.refs.quantity.value, 
                "buyprice": this.refs.buyprice.value,
                "sellprice": this.refs.sellprice.value
            }).then((result)=>{
                alert("Trade Created!");
            }).catch(()=>{
                alert('There was an error! Please recheck your form.');
            });
    }

    handleUpdate(pk){
        tradesService.updateTrade(
            {
                "pk": pk,
                "symbol": this.refs.symbol.value,
                "asset": this.refs.asset.value,
                "quantity": this.refs.quantity.value, 
                "buyprice": this.refs.buyprice.value,
                "sellprice": this.refs.sellprice.value
            }).then((result)=>{
                alert("Trade Updated!");
            }).catch(()=>{
                alert('There was an error! Please recheck your form.');
            });
    }

    handleSubmit(event) {
        const { match: {params}} = this.props;
        if(params && params.pk){
            this.handleUpdate(params.pk);
        }
        else
        {
            this.handleCreate();
        }
        event.preventDefault();
    }

    render() {
        return (
            <form onsubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>
                        Symbol:</label>
                        <input className="form-control" type="text" ref='symbol' />

                    <label>
                        Asset:</label>
                        <input className="form-control" type="text" ref='asset' />

                    <label>
                        Quantity:</label>
                        <input className="form-control" type="text" ref='quantity' />

                    <label>
                        Buy Price:</label>
                        <input className="form-control" type="text" ref='buyprice' />

                    <label>
                        Sell Price:</label>
                        <input className="form-control" type="text" ref='sellprice' />

                    <input className="btn btn-primary" type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}
export default TradeCreateUpdate;