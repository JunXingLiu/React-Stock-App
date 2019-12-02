import { StockSearchForm } from './stock-search-form.js';
import { StockPricedisplay } from './stock-price-display.js';
import { Stock } from '../stock.js';
import { SymbolHistoryList } from './symbol-history-list.js';
import React from 'react';



const App = () => {
    const [symbol, setSymbol] = React.useState('');
    
    return(
        <React.Fragment>
            <h1>Stock Finder</h1>
            <StockSearchForm submitCallback={setSymbol}/>
            <StockPricedisplay stock={new Stock({symbol: symbol})} callBack={setSymbol}/>
        </React.Fragment>
    )
};

export { App };