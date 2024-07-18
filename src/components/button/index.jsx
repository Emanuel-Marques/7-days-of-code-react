import PropTypes from "prop-types";

import { tv } from "tailwind-variants";

const buttonVariants = tv({
  base: "rounded-sm py-2 cursor-pointer text-custom-text-button-color",
  variants: {
    color: {
      primary: "bg-custom-green hover:bg-green-600",
      red: "bg-red-500 rounded-md hover:bg-red-600 max-sm:py-0",
      blue: "bg-custom-blue rounded-md hover:bg-blue-600",
    },
    size: {
      default: "w-full",
    },
    padding: {
      default: "py-2",
      sm: "px-2",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export function Button({ children, color, size, padding, ...props }) {
  return (
    <button className={buttonVariants({ color, size, padding })} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["primary","red","blue"]),
  size: PropTypes.oneOf(["default", "full"]),
  padding: PropTypes.oneOf(["default", "sm"]),
};
