import PropTypes from "prop-types";

import { tv } from "tailwind-variants";

const buttonVariants = tv({
  base: "rounded-sm py-2 px-28.5 cursor-pointer",
  variants: {
    variant: {
      primary: "bg-custom-green text-custom-text-button-color hover:bg-green-600",
    },
    size: {
      default: "w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export function Button({ children, variant, size, ...props }) {
  return (
    <button className={buttonVariants({ variant, size })} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary"]),
  size: PropTypes.oneOf(["default", "full"]),
};
