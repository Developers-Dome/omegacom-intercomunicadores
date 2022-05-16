import React from "react";
import { Container } from "./styles";

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  mandatory?: boolean;
}

export function LabelInput({
  label,
  placeholder,
  type,
  name,
  mandatory,
}: InputProps) {
  return (
    <Container>
      <label htmlFor={name}>
        {mandatory && <span>*</span>}
        {label}
      </label>
      {type === "textarea" ? (
        <textarea name={name} placeholder={placeholder} rows={5} />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          minLength={5}
          maxLength={100}
        />
      )}
    </Container>
  );
}
