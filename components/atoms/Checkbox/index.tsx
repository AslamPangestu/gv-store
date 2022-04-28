interface Props {
  label: string;
  value: number | string;
  onChange: any;
}
const CheckboxComponent = ({ label, value, onChange }: Props) => (
  <label className="checkbox-label text-lg color-palette-1">
    {label}
    <input type="checkbox" value={value} onChange={onChange} />
    <span className="checkmark" />
  </label>
);

export default CheckboxComponent;
