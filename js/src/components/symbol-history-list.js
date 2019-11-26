const SymbolHistoryList = (props) => {
    const [stocks, addStocks] = React.useState([]);
    const [symbol, setSymbol] = React.useState('');

    React.useEffect(() => {
        setSymbol(props.stockHistory);
        addStocks([...symbol])
    }, [props.stockHistory])

    return (
        <React.Fragment>
            <ul>
                {
                    stocks.slice(0,5).map((stock, index) => <li key={index} onClick={ e => e.target.textContent}>{stock}</li>)
                }
            </ul>
        </React.Fragment>
    )
}

export { SymbolHistoryList }