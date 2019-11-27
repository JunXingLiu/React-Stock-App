const StockSearchForm = (props) => {
    const [symbol, setSymbol] = React.useState('');

    const {submitCallback} = props;

    const handleSubmit = evt => {
        evt.preventDefault();
        submitCallback(symbol);
    }
    
    return (
        <React.Fragment>
            <div>
                <form className="frm symbol" onSubmit={handleSubmit}>
                    <label htmlFor="symbol">Stock Symbol</label>
                    <input type="text" 
                        id="symbol" 
                        name="symbol" 
                        value={symbol}
                        onChange={(evt) => 
                        {setSymbol(evt.target.value)}}/>
                    <button type="submit">View</button>
                </form>
            </div>

        </React.Fragment>
        );
}

export { StockSearchForm };