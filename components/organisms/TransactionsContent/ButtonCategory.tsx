import cx from 'classnames';

interface Props {
  title: string;
  status: string;
  isActive: boolean;
}

const ButtonCategoryTransactionContentComponent = ({ isActive, title, status }:Props) => {
  const className = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': isActive,
  });
  return (
    <button
      data-filter={status}
      type="button"
      className={className}
    >
      {title}
    </button>
  );
};

export default ButtonCategoryTransactionContentComponent;
