const StockPricedisplay = (props) => {
    const {stock} = props;
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
                        <button className="btn-history">Previous 5 Days</button>
                        <div className="history"></div>
                    </div>
                    </React.Fragment>
            ):(
                <React.Fragment>
                    <p>No Data</p>
                    {stockData.error && <p>{stockData.error}</p>}
                </React.Fragment>
            )
        }
        </div>
        );
};

export {StockPricedisplay};