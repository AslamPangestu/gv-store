import Image from 'next/image';

interface Props {
  name: string;
  value: string;
  itemValue: string;
  itemType?: string;
  subItem: string;
  onChange: any;
  checked: boolean;
}

const SelectItemTopUpFormComponent = ({
  name, value, itemValue, itemType, subItem, onChange, checked,
}:Partial<Props>) => (
  <>
    <input
      className="d-none"
      type="radio"
      id={value}
      name={name}
      value={value}
      onChange={onChange}
      checked={checked}
    />
    <div className="detail-card">
      <div className="d-flex justify-content-between">
        <p className="text-3xl color-palette-1 m-0">
          <span className="fw-medium">{itemValue}</span>
          {itemType && (
          <>
            {' '}
            {itemType}
          </>
          )}
        </p>
        <div id="icon-check">
          <Image src="/icon/check.svg" width={20} height={20} />
        </div>
      </div>
      <p className="text-lg color-palette-1 m-0">{subItem}</p>
    </div>
  </>
);

export default SelectItemTopUpFormComponent;
