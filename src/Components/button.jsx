import React from "react";

function Button({
  props,
  variant,
  disabled,
  hover,
  disableShadow,
  size,
  color,
  dataValue,
}) {
  // size
  let sm = size == "sm";
  let md = size == "md";
  let lg = size == "lg";
  let hoverData = "&:hover, &:focus";

  return (
    <div
      style={{
        position: "relative",
        display: "grid",
      }}
    >
      <code
        style={{
          position: "relative",
          top: "0",
          left: "0",
          margin: "10px",
          color: hover ? "#3338" : "#222",
        }}
      >
        {!hover
          ? `<Button ${variant ? variant : ""} ${disabled ? "disabled" : ""} ${
              disableShadow ? "disableShadow" : ""
            }  ${color ? `color="${color}"` : ""}
             ${size ? `size="${size}"` : ""}
             ${
               !variant && !disabled && !disableShadow && !color && !size
                 ? "default"
                 : ""
             }/>`
          : hoverData}
      </code>
      <button
        //   classname
        className={`${
          !variant && !disabled && !color
            ? "default"
            : `${variant ? variant : ""} ${color ? color : ""}`
        } ${hover ? "hover" : ""}`}
        // title
        title={`color:${color ? color : "default"} variant:${
          variant ? variant : "default"
        } size:${size ? size : "md"}`}
        style={{
          boxShadow: disableShadow ? "none" : "",
          backgroundColor: disableShadow ? "#3D5AFE" : "",
          color: disableShadow || color ? "white" : "",
          padding: sm
            ? "6pt 12pt"
            : md
            ? "8pt 16pt"
            : lg
            ? "11pt 22pt"
            : ".5rem 1rem",
        }}
        disabled={disabled}
        dataDisabled={disabled ? "Disabled" : dataValue ? dataValue : "Default"}
      ></button>
    </div>
  );
}

export default Button;
