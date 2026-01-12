import { ReactNode } from 'react';

import { textFieldBorderColor } from './textfield.css';

interface TextFieldProps {
  borderColor: keyof typeof textFieldBorderColor;
  children: ReactNode;
}

const TextField = ({ borderColor, children }: TextFieldProps) => {
  return <span className={textFieldBorderColor[borderColor]}>{children}</span>;
};

export default TextField;
