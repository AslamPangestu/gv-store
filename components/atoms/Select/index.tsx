interface Option {
  label: string;
  value: string;
}

interface Props {
  label: string;
  name: string;
  placeholder: string;
  options: Array<Option>;
}

const SelectComponent = ({
  label,
  name,
  placeholder,
  options,
  ...nativeProps
}: Props) => (
  <>
    <label
      htmlFor={name}
      className="form-label text-lg fw-medium color-palette-1 mb-10"
    >
      {label}
    </label>
    <select
      id={name}
      name={name}
      className="form-select d-block w-100 rounded-pill text-lg"
      aria-label={label}
    >
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options.map((item) => (
        <option key={item.value} value={item.value}>{item.label}</option>
      ))}
    </select>
  </>
);

export default SelectComponent;
