import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const resData = await fetch(
        "https://http-react-452f5-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartData),
        }
      );

      if (!resData.ok) {
        throw new Error("Sending car data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "sent cart data!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "sent cart data failed!",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        "https://http-react-452f5-default-rtdb.firebaseio.com/cart.json"
      );

      if (!res.ok) {
        throw new Error("failed to fetch data");
      }

      const data = await res.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "fetching cart data failed!",
        })
      );
    }
  };
};
