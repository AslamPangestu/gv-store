import { useState } from 'react';

import InputText from 'components/atoms/InputText';
import SelectItem from './SelectItem';

const TopUpFormComponent = () => {
  const [topUpAmount, setTopUpAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const AMOUNTS = [
    {
      itemValue: '125',
      itemType: 'Gold',
      subItem: 'Rp 3.250.000',
      value: '125gold',
    },
    {
      itemValue: '225',
      itemType: 'Gold',
      subItem: 'Rp 3.250.000',
      value: '225gold',
    },
    {
      itemValue: '350',
      itemType: 'Gold',
      subItem: 'Rp 3.250.000',
      value: '350gold',
    },
    {
      itemValue: '550',
      itemType: 'Gold',
      subItem: 'Rp 3.250.000',
      value: '550gold',
    },
    {
      itemValue: '750',
      itemType: 'Gold',
      subItem: 'Rp 3.250.000',
      value: '750gold',
    },
  ];

  const PAYMENT_METHODS = [
    {
      itemValue: 'Transfer',
      subItem: 'Worldwide Available',
      value: 'transfer',
    },
    {
      itemValue: 'VISA',
      subItem: 'Credit Card',
      value: 'visa',
    },
  ];

  const onSetTopUp = (event: any) => {
    setTopUpAmount(event.target.value);
  };

  const onSetPaymentMethod = (event: any) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <InputText
            type="text"
            label="Verify ID"
            name="id"
            placeholder="Enter your ID"
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          {AMOUNTS.map((item) => (
            <label
              key={item.value}
              className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
              htmlFor={item.value}
            >
              <SelectItem
                name="topup"
                value={item.value}
                itemValue={item.itemValue}
                itemType={item.itemType}
                subItem={item.subItem}
                onChange={onSetTopUp}
                checked={item.value === topUpAmount}
              />
            </label>
          ))}
          <div className="col-lg-4 col-sm-6" />
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {PAYMENT_METHODS.map((item) => (
              <label
                key={item.value}
                className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                htmlFor={item.value}
              >
                <SelectItem
                  name="paymentMethod"
                  value={item.value}
                  itemValue={item.itemValue}
                  subItem={item.subItem}
                  onChange={onSetPaymentMethod}
                  checked={item.value === paymentMethod}
                />
              </label>
            ))}
            <div className="col-lg-4 col-sm-6" />
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <InputText
          type="text"
          label="Bank Account Name"
          name="bankAccount"
          placeholder="Enter your Bank Account Name"
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <a
          href="./checkout.html"
          type="submit"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
        >
          Continue
        </a>
      </div>
    </form>
  );
};

export default TopUpFormComponent;
