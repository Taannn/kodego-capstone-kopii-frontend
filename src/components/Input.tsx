type InputProps = {
  handleChange: (action: any) => void;
  value: string;
  label: string;
  pholder: string;
  id: string;
}
const Input: React.FC<InputProps> = ({
  handleChange,
  value,
  label,
  pholder,
  id
}) => {
  return (
    <div className="form-outline mb-2">
      <label className="form-label fw-bold" htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={handleChange}
        className="form-control form-control-lg border border-2 border-info"
        placeholder={pholder}
      />
    </div>
  );
};

export default Input;