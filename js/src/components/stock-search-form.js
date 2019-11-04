const StockSearchForm = () => {
    const [symbol, setSymbol] = React.useState('');
    const handleSubmit = evt => {
        console.log(symbol)
        evt.preventDefault();
    }
    return (
            <div>
                <form className="frm symbol" onSubmit={handleSubmit}>
                    <label htmlFor="symbol">Stock Symbol</label>
                    <input type="text" 
                        id="symbol" 
                        name="symbol" 
                        value={symbol}
                        onChange={(evt) => {setSymbol(evt.target.value)}}/>
                    <button type="submit">View</button>
                </form>
            </div>
        );
}

export {StockSearchForm};