// react-redux provides two APIs
const { Provider, connect } = ReactRedux;

// You can define stateless components
const App = ({ statusCodes, currentIndex, prevStatus, nextStatus }) => {
  const currentStatus   = statusCodes[currentIndex];
  const backgroundImage = `url("http://http.cat/${currentStatus}")`;

  return (
    <div>
      <div className="loader"></div>

      <div className="status-image" style={{ backgroundImage }}>
        <div className="prev" onClick={ prevStatus }></div>
        <div className="next" onClick={ nextStatus }></div>
      </div>
    </div>
  );
};

// Put parts of state to props
const mapStateToProps = (state) => ({
  statusCodes: state.statusCodes,
  currentIndex: state.currentIndex
});

// Assign dispatching actions to props
const mapDispatchToProps = (dispatch) => ({
  prevStatus: () => dispatch({ type: 'PREV_STATUS' }),
  nextStatus: () => dispatch({ type: 'NEXT_STATUS' })
});

// Make "smart" component
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

// Voila
ReactDOM.render(
  <Provider store={ store }>
    <ConnectedApp />
  </Provider>,
  document.getElementById('app')
);
