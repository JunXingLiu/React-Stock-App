const SymbolHistoryList = (props) => {
    const [stocks] = React.useState([]);

    if(props.stockHistory != ''){
        if((stocks.includes(props.stockHistory))){
            const index = stocks.indexOf(props.stockHistory);
            stocks.splice(index, 1)
        }
        stocks.unshift(props.stockHistory)
        console.log(props.stockHistory)
    }
    return (
        <React.Fragment>
            <ul>
                {
                    stocks.slice(0,5).map((stock) => <li key={stock} onClick={ e => e.target.textContent}>{stock}</li>)
                }
            </ul>
        </React.Fragment>
    )
}

export { SymbolHistoryList }