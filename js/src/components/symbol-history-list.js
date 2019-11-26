const SymbolHistoryList = (props) => {
    const [stocks, addStocks] = React.useState([]);
    const [symbol, setSymbol] = React.useState('');

    React.useEffect(() => {
        setSymbol(props.stockHistory);
        if(stocks.slice(0,5).indexOf(symbol) > -1){
            stocks.splice(stocks.indexOf(symbol), 1)
        }
        if(!symbol == ''){
            addStocks([ symbol, ...stocks])
        }
    }, [props.stockHistory])

    return (
        <React.Fragment>
            <ul>
                {
                    stocks.map((stock, index) => <li key={index} onClick={ e => e.target.textContent}>{stock}</li>)
                }
            </ul>
        </React.Fragment>
    )
}

export { SymbolHistoryList }