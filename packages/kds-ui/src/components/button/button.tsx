interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return <button style={{ backgroundColor: 'red' }}>{text}</button>;
};
