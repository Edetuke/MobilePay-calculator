import logo from "../../src/Mobilepay.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="mobile-pay__logo" />
      <h2>Transactions fee calculator</h2>
    </div>
  );
};

export default Header;
