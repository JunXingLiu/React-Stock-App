import { StockSearchForm } from './components/stock-search-form.js';
import { StockPricedisplay } from './components/stock-price-display.js';
import { Stock } from './stock.js';

ReactDOM.render(<StockPricedisplay stock={new Stock({symbol: 'msft'})}/>, document.querySelector('.stock-display'));