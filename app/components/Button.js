import "./Button.css"; // works if Button.jsx - fixed by https://github.com/remix-run/remix/pull/6309

const Button = (props) => {
  return <button className="primary">{props.children}</button>;
};

export default Button;
