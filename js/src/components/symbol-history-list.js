const SymbolHistoryList = (symbolHistory) => {
    const [stocks] = React.useState([]);

    return (
        <React.Fragment>
            <ul>
                {stocks.push(symbolHistory)}
                {stocks.map(stock => {stock})}
            </ul>
        </React.Fragment>
    )
}

export { SymbolHistoryList }