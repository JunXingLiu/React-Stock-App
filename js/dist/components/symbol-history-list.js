function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SymbolHistoryList = function SymbolHistoryList(props) {
  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 1),
      stocks = _React$useState2[0];

  if (props.stockHistory != '') {
    if (stocks.includes(props.stockHistory)) {
      var index = stocks.indexOf(props.stockHistory);
      stocks.splice(index, 1);
    }

    stocks.unshift(props.stockHistory);
    console.log(props.stockHistory);
  }

  return React.createElement(React.Fragment, null, React.createElement("ul", null, stocks.slice(0, 5).map(function (stock) {
    return React.createElement("li", {
      key: stock,
      onClick: function onClick(e) {
        return e.target.textContent;
      }
    }, stock);
  })));
};

export { SymbolHistoryList };