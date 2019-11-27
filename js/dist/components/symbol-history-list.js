function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SymbolHistoryList = function SymbolHistoryList(props) {
  var stockHistory = props.stockHistory,
      callBack = props.callBack;

  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      stocks = _React$useState2[0],
      addStocks = _React$useState2[1];

  var _React$useState3 = React.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      symbol = _React$useState4[0],
      setSymbol = _React$useState4[1];

  React.useEffect(function () {
    setSymbol(stockHistory);

    if (stocks.slice(0, 5).indexOf(symbol) > -1) {
      stocks.splice(stocks.indexOf(symbol), 1);
    }

    if (!symbol == '') {
      addStocks([symbol].concat(_toConsumableArray(stocks)));
    }
  }, [stockHistory]);
  return React.createElement(React.Fragment, null, React.createElement("ul", null, stocks.map(function (stock, index) {
    return React.createElement("li", {
      key: index,
      onClick: function onClick(e) {
        return callBack(e.target.textContent);
      }
    }, stock);
  })));
};

export { SymbolHistoryList };