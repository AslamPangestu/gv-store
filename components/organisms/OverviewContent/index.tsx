import Category from './Category';
import TableRow from './TableRow';

const OverviewContentComponent = () => {
  const CATEGORIES = [
    {
      icon: '/icon/pc-category.svg',
      category: (
        <>
          Game
          <br />
          PC
        </>
      ),
      totalSpent: 'Rp 18.000.500',
    },
    {
      icon: '/icon/mobile-category.svg',
      category: (
        <>
          Game
          <br />
          Mobile
        </>
      ),
      totalSpent: 'Rp 18.000.500',
    },
    {
      icon: '/icon/other-category.svg',
      category: (
        <>
          Other
          <br />
          Categories
        </>
      ),
      totalSpent: 'Rp 18.000.500',
    },
  ];
  const ITEMS = [
    {
      category: 'PC',
      image: '/img/overview-1.png',
      item: '200 Gold',
      price: 'Rp 290.000',
      status: 'Pending',
      title: 'Mobile Legends: The New Battle 2021',
    },
    {
      category: 'PC',
      image: '/img/overview-2.png',
      item: '550 Gold',
      price: 'Rp 740.000',
      status: 'Success',
      title: 'Call of Duty:Modern',
    },
    {
      category: 'Mobile',
      image: '/img/overview-3.png',
      item: '100 Gold',
      price: 'Rp 120.000',
      status: 'Failed',
      title: 'Clash of Clans',
    },
    {
      category: 'Mobile',
      image: '/img/overview-4.png',
      item: '225 Gold',
      price: 'Rp 200.000',
      status: 'Pending',
      title: 'The Royal Game',
    },
  ];
  return (
    <div className="ps-lg-0">
      <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>

      <div className="top-up-categories mb-30">
        <p className="text-lg fw-medium color-palette-1 mb-14">
          Top Up Categories
        </p>
        <div className="main-content">
          <div className="row">
            {CATEGORIES.map((item) => (
              <div
                key={item.icon}
                className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4"
              >
                <Category
                  icon={item.icon}
                  category={item.category}
                  totalSpent={item.totalSpent}
                />
              </div>
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
                <th className="text-start" scope="col">
                  Game
                </th>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {ITEMS.map((item) => (

                <TableRow
                  key={item.title}
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

export default OverviewContentComponent;
