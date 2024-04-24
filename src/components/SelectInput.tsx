type SelectInputProps = {
  handleChange: (action: any) => void;
  label: string;
  id: string;
  optionDefault: string;
  optionOne: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  handleChange,
  label,
  id,
  optionDefault,
  optionOne
}) => {
  return (
    <div className="form-outline mb-2">
      <label className="form-label fw-bold" htmlFor={id}>{label}</label>
      <div className="select-container">
        <select
          id={id}
          onChange={handleChange}
          className="form-control form-control-lg border border-2 border-info"
          >
          <option value="">{optionDefault}</option>
          <option value={optionOne}>{optionOne}</option>
        </select>
        <div className="select-icon">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
};

export default SelectInput;