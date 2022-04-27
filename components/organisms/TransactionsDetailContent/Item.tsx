interface Props {
  label: string;
  value: string;
  className?: string;
}
const ItemTransactionDetailContentComponent = ({ label, value, className }: Partial<Props>) => (
  <p className="text-lg color-palette-1 mb-20">
    {label}
    <span className={`purchase-details ${className}`}>{value}</span>
  </p>
);

export default ItemTransactionDetailContentComponent;
