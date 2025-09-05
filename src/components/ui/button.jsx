import React from "react";

export function Button({ asChild, children, ...props }) {
  // If `asChild` is true, we expect exactly 1 valid React element
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `inline-block py-2 px-4 rounded ${props.className || ""}`,
      ...props,
    });
  }

  // Fallback: render a normal button
  return (
    <button className={`py-2 px-4 rounded ${props.className || ""}`} {...props}>
      {children}
    </button>
  );
}
