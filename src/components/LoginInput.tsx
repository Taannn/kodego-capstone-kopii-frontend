type LoginInputProps = {
  value: string;
  onChange: () => void;
}

const LoginInput: React.FC<LoginInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="email" id="loginEmail"
      name="email"
      value={value}
      onChange={onChange}
      className="form-control form-control-lg"
      required
    />
  );
};

export default LoginInput;