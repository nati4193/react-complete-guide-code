import style from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={style.button}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={style.badge}>
        5
      </span>
    </button>
  );
};

export default HeaderCartButton;
