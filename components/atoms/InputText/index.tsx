interface Props {
  label: string;
  name: string;
  placeholder: string;
  type:'text' | 'email' | 'tel' | 'password'
}

const InputTextComponent = ({
  label, name, placeholder, type, ...nativeProps
}: Props) => (
  <>
    <label
      htmlFor={name}
      className="form-label text-lg fw-medium color-palette-1 mb-10"
    >
      {label}
    </label>
    <input
      type={type}
      className="form-control rounded-pill text-lg"
      id={name}
      name={name}
      aria-describedby={name}
      placeholder={placeholder}
      {...nativeProps}
    />
  </>
);

export default InputTextComponent;
