interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <button style={{ backgroundColor: 'red' }}>{text}</button>;
};

export default Button;