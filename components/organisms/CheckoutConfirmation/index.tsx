import { useState } from 'react';

import Checkbox from 'components/atoms/Checkbox';

const CheckoutConfirmationComponent = () => {
  const [isConfirm, setIsConfirm] = useState(false);
  const setConfirm = () => {
    setIsConfirm((currentState) => !currentState);
  };
  return (
    <>
      <Checkbox label="I have transferred the money" value="confirm" checked={isConfirm} onChange={setConfirm} />
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <a
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          href="./complete-checkout.html"
          role="button"
        >
          Confirm Payment
        </a>
      </div>
    </>
  );
};

export default CheckoutConfirmationComponent;
