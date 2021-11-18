import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

const App = () => {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, resetBalance } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div>
      <h1>Account Balance: {account}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
      <br />
      <button onClick={resetBalance}>Reset Balance</button>
    </div>
  );
};

export default App;
