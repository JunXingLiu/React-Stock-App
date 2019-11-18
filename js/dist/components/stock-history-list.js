var StockHistoryList = function StockHistoryList(props) {
  var currency = function currency(value) {
    return (+value).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  };

  return React.createElement(React.Fragment, null, props.history.map(function (day) {
    return React.createElement("div", {
      className: "day-details",
      key: day.date
    }, React.createElement("div", {
      className: "date"
    }, "Date: ", day.date), React.createElement("div", {
      className: "details"
    }, "Open: ", currency(day.open), "High: ", currency(day.high), "Low: ", currency(day.low), "Close: ", currency(day.close)));
  }));
};

export { StockHistoryList };