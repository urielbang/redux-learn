import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const quantityCart = useSelector((state) => state.cart.totalQuantity);

  const hanldeToggle = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={hanldeToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantityCart}</span>
    </button>
  );
};

export default CartButton;
