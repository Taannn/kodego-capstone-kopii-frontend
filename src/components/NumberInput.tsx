type NumberInputProps = {
  handleChange: (action: any) => void;
  value: string;
  max: number;
  pholder: string;
  id: string;
  label: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
  handleChange,
  value,
  max,
  pholder,
  id,
  label
}) => {
  return (
    <div className="form-outline mb-2">
      <label className="form-label fw-bold" htmlFor={id}>{label}</label>
      <input
        type="text"
        pattern="[0-9]*"
        inputMode="numeric"
        maxLength={max}
        id={id}
        value={value}
        onChange={handleChange}
        className="form-control form-control-lg border border-2 border-info"
        placeholder={pholder}
        required
      />
    </div>
  );
};

export default NumberInput;