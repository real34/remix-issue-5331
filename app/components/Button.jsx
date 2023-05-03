import "./Button.css"; // works if Button.jsx

const Button = (props) => {
  return <button className="primary">{props.children}</button>;
};

export default Button;
