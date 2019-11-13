import { StockSearchForm } from './stock-search-form.js';
import { StockPricedisplay } from './stock-price-display.js';
import { Stock } from '../stock.js';

const App = () => {
    const [symbol, setSymbol] = React.useState('');
    return(
        <React.Fragment>
            <h1>Stock Finder</h1>
            <StockSearchForm submitCallback={setSymbol}/>
            <StockPricedisplay stock={new Stock({symbol: symbol})}/>
        </React.Fragment>
    )
};

export { App };