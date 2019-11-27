import {StockHistoryList} from './stock-history-list.js';
import { SymbolHistoryList } from './symbol-history-list.js';

const StockPricedisplay = (props) => {
    const {stock, callBack} = props;
    const [stockData, setStockData] = React.useState({});

    React.useEffect(() => {
        if(stock.symbol){
            stock.
            getStockPrice()
            .then(data => {
                if(data instanceof Object){
                    setStockData({...data});
                
                } else{
                    setStockData({
                        error: data
                    })
                }
            }
            )};
        }, [props.stock]);
        
    const currency = ( value) => (+value).toLocaleString('en-US', {style: 'currency', currency: 'USD'})

    const handleClick = evt => {
        if(!stockData.history){
            stock.getStockFiveDayHistory()
            .then(data => {
                setStockData({...stock.stockData})
            });
        };
    };

    return(
        <div>
        {stockData.symbol
            ? (      <React.Fragment>
                        <div className="details">
                            <div>Symbol: {stockData.symbol}</div>
                            <div>Date: {stockData.date}</div>
                            <div>Price: {currency(stockData.price)}</div>
                        </div>
                    <div>
                        <button className="btn-history" onClick={handleClick}>Previous 5 Days</button>
                        {stockData.history && 
                        <div className="history">
                            <StockHistoryList history={stockData.history}/>
                        </div>
                        }
                    </div>
                   
                    </React.Fragment> 
            ):(
                <React.Fragment>
                    <p>No Data</p>
                    {stockData.error && <p>{stockData.error}</p>}
                </React.Fragment>
            )
        }
        {
            stockData.symbol ? (<SymbolHistoryList stockHistory={stockData.symbol} callBack={callBack}/>)
            : <SymbolHistoryList stockHistory={''}/>
        }

        </div>
        );
};

export {StockPricedisplay};