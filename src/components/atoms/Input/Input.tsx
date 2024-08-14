import classes from './Input.module.css';

interface InputProps extends React.ComponentProps<'input'> {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
}
export default function Input({ value, onChange, onKeyDown, placeholder }: InputProps) {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={classes.input}
    />
  );
}
