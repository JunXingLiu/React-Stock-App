const StockPricedisplay = (props) => {
    const {stock} = props;
    const [stockData, setStockData] = React.useState(null);

    React.useEffect(() => {
        stock.getStockPrice()
                .then(data => {
                    setStockData({...data});
                });
    }, [props.stock]);

    const currency = ( value) => (+value).toLocaleString('en-US', {style: 'currency', currency: 'USD'})

    return(
        <div>
        {stockData
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
                <p>No Data</p>
            )
        }
        </div>
        );
};

export {StockPricedisplay};