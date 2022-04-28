interface Props {
  label: string;
  value: string;
  checked: boolean;
  onChange: any;
}
const CheckboxComponent = ({
  label, value, onChange, checked,
}: Props) => (
  <label className="checkbox-label text-lg color-palette-1">
    {label}
    <input type="checkbox" value={value} onChange={onChange} checked={checked} />
    <span className="checkmark" />
  </label>
);

export default CheckboxComponent;
