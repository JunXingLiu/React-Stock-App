import React from 'react';

const StockHistoryList = (props) => {

    const currency = ( value) => (+value).toLocaleString('en-US', {style: 'currency', currency: 'USD'})
    return(
        <React.Fragment>
            {props.history.map(day => (
                <div className="day-details" key={day.date}>
                    <div className="date">Date: {day.date}</div>
                    <div className="details">
                        Open: {currency(day.open)}
                        High: {currency(day.high)}
                        Low: {currency(day.low)}
                        Close: {currency(day.close)}
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
};

export {StockHistoryList}