import styled from "@/UI/UI.module.css";
import Image from "next/image";
import React from "react";

interface UIProps {
  transform?: string;
  top?: string;
  bottom?: string;
  children?: React.ReactNode | React.JSX.Element;
  margin?: string;
  padding?: string;
  onClick?: React.MouseEventHandler;
  arrow?: string;
  fill?: boolean;
  minHeight?: string;
  onChange?: React.ChangeEventHandler;
  placeholder?: string;
  borderColor?: boolean | null;
  link?: string;
  color?: string;
  size?: number;
  align?: "left" | "center" | "right" | "justify";
  lineHeight?: string;
  opacity?: string;
  isParagraph?: boolean;
}

export const Arrow: React.FC<UIProps> = ({ transform, top, bottom }) => {
  return (
    <div
      className={styled.arrows}
      style={{ transform: transform, top: top, bottom: bottom }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export const Button: React.FC<UIProps> = ({
  children,
  margin = "0",
  padding = "0",
  onClick,
  arrow,
}) => {
  return (
    <button
      className={styled.button}
      style={{ margin: margin, padding: padding }}
      onClick={onClick}
    >
      {children}
      {arrow && <Image src={arrow} alt={""} />}
    </button>
  );
};

export const Card: React.FC<UIProps> = ({
  fill = false,
  minHeight,
  margin,
  children,
}) => (
  <div
    className={styled.card}
    style={{
      margin: margin,
      minHeight: minHeight,
      backgroundColor: fill ? "rgba(255, 255, 255, 4%)" : "",
    }}
  >
    {children}
  </div>
);

const Input: React.FC<UIProps> = React.memo(
  ({ margin, onChange, placeholder, borderColor = null }) => (
    <input
      type="text"
      onChange={onChange}
      className={styled.input}
      placeholder={placeholder}
      style={{
        margin: margin,
        border:
          borderColor == true || borderColor == null
            ? "1px solid rgb(129, 129, 129)"
            : "1px solid red",
      }}
    />
  )
);
Input.displayName = "Input";
export default Input;

export const LinkButton: React.FC<UIProps> = ({ children, link }) => (
  <a className={styled.linkButton} href={link}>
    {children}
  </a>
);

export const LinkDownload: React.FC<UIProps> = ({ children }) => (
  <a download href={"./media/NovikovI.D..pdf"} className={styled.linkDownload}>
    {children}
  </a>
);

export const Stack: React.FC<UIProps> = ({ margin, children }) => (
  <div className={styled.stack} style={{ margin: margin }}>
    {children}
  </div>
);

export const Text: React.FC<UIProps> = ({
  color,
  size,
  align,
  margin,
  lineHeight,
  opacity,
  isParagraph = false,
  children,
}) => (
  <span
    className={styled.textRegular}
    style={{
      margin: margin,
      color: color,
      fontSize: `${size}px`,
      lineHeight: lineHeight,
      textAlign: align,
      opacity: opacity,
    }}
  >
    {isParagraph ? (
      <>
        {"<"}
        {<text className={styled.p}>p</text>}
        {">  "}
        {children}
        {"  <"}
        {<text className={styled.p}>/p</text>}
        {">"}
      </>
    ) : (
      <>{children}</>
    )}
  </span>
);

export const TextName: React.FC<UIProps> = ({
  color,
  size = 24,
  margin,
  children,
}) => (
  <span
    className={styled.textName}
    style={{
      margin: margin,
      color: color,
      fontSize: `${size}px`,
    }}
  >
    {children}
  </span>
);
