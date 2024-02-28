import buttonStyles from "./button.module.css";
const Button = ({
  children,
  secondaryBtn = false,
  resizeBtn = false,
  ...props
}) => {
  return (
    <button
      className={`${buttonStyles.button} ${
        secondaryBtn ? buttonStyles.secondaryButton : null
      }
      ${resizeBtn ? buttonStyles.resizeButton : null}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
