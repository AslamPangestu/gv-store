import { useState } from 'react';
import TableRow from './TableRow';
import ButtonCategory from './ButtonCategory';

const TransactionContentComponent = () => {
  const [filterBy, setFilterBy] = useState('*');
  const STATUSES = [
    { label: 'All Trx', value: '*' },
    { label: 'Success', value: 'success' },
    { label: 'Pending', value: 'pending' },
    { label: 'Failed', value: 'failed' },
  ];
  const ITEMS = [
    {
      id: 1,
      category: 'PC',
      image: '/img/overview-1.png',
      item: '200 Gold',
      price: 'Rp 290.000',
      status: 'pending',
      title: 'Mobile Legends: The New Battle 2021',
    },
    {
      id: 2,
      category: 'PC',
      image: '/img/overview-2.png',
      item: '550 Gold',
      price: 'Rp 740.000',
      status: 'success',
      title: 'Call of Duty:Modern',
    },
    {
      id: 3,
      category: 'Mobile',
      image: '/img/overview-3.png',
      item: '100 Gold',
      price: 'Rp 120.000',
      status: 'failed',
      title: 'Clash of Clans',
    },
    {
      id: 4,
      category: 'Mobile',
      image: '/img/overview-4.png',
      item: '225 Gold',
      price: 'Rp 200.000',
      status: 'pending',
      title: 'The Royal Game',
    },
  ];
  return (
    <div className="ps-lg-0">
      <h2 className="text-4xl fw-bold color-palette-1 mb-30">
        My Transactions
      </h2>
      <div className="mb-30">
        <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
        <h3 className="text-5xl fw-medium color-palette-1">Rp 4.518.000.500</h3>
      </div>
      <div className="row mt-30 mb-20">
        <div className="col-lg-12 col-12 main-content">
          <div id="list_status_title">
            {STATUSES.map((item) => (
              <ButtonCategory
                title={item.label}
                status={item.value}
                isActive={filterBy === item.value}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="latest-transaction">
        <p className="text-lg fw-medium color-palette-1 mb-14">
          Latest Transactions
        </p>
        <div className="main-content main-content-table overflow-auto">
          <table className="table table-borderless">
            <thead>
              <tr className="color-palette-1">
                <th className="" scope="col">
                  Game
                </th>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody id="list_status_item">
              {ITEMS.map((item) => (
                <TableRow
                  key={item.id}
                  id={item.id}
                  category={item.category}
                  image={item.image}
                  item={item.item}
                  price={item.price}
                  status={item.status}
                  title={item.title}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionContentComponent;
