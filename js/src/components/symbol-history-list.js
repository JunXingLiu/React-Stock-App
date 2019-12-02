import React from 'react';
const SymbolHistoryList = (props) => {
    const {stockHistory, callBack} = props;
    const [stocks, addStocks] = React.useState([]);
    const [symbol, setSymbol] = React.useState('');

    React.useEffect(() => {
        setSymbol(stockHistory);
        if(stocks.slice(0,5).indexOf(symbol) > -1){
            stocks.splice(stocks.indexOf(symbol), 1)
        }
        if(!symbol == ''){
            addStocks([ symbol, ...stocks])
        }
    }, [stockHistory])

    return (
        <React.Fragment>
            <ul>
                {
                    stocks.map((stock, index) => <li key={index} onClick={ e => callBack(e.target.textContent)}>{stock}</li>)
                }
            </ul>
        </React.Fragment>
    )
}

export { SymbolHistoryList }