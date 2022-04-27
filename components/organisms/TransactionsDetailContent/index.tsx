import Image from 'next/image';
import Item from './Item';

const TransactionsDetailContentComponent = () => {
  const PURCHASE_DETAIL = [
    { label: 'Your Game ID', value: 'masayoshizero' },
    { label: 'Order ID', value: '#GG001' },
    { label: 'Item', value: '250 Diamonds' },
    { label: 'Price', value: 'Rp 42.280.500' },
    { label: 'Tax (10%)', value: 'Rp 4.228.000' },
    { label: 'Total', value: 'Rp 55.000.600', className: 'color-palette-4' },
  ];
  const PAYMENT_DETAIL = [
    { label: 'Your Account Name', value: 'Masayoshi Angga Zero' },
    { label: 'Type', value: 'Worldwide Transfer' },
    { label: 'Bank Name', value: 'Mandiri' },
    { label: 'Bank Account Name', value: 'PT Store GG Indonesia' },
    { label: 'Bank Number', value: '1800 - 9090 - 2021' },
  ];
  return (
    <div className="ps-lg-0">
      <h2 className="text-4xl fw-bold color-palette-1 mb-30">Details #GG001</h2>
      <div className="details">
        <div className="main-content main-content-card overflow-auto">
          <section className="checkout mx-auto">
            <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
              <div className="game-checkout d-flex flex-row align-items-center">
                <div className="pe-4">
                  <div className="cropped">
                    <div className="img-fluid">
                      <Image
                        src="/img/Thumbnail-3.png"
                        width={200}
                        height={130}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="fw-bold text-xl color-palette-1 mb-10">
                    Mobile Legends:
                    <br />
                    The New Battle 2021
                  </p>
                  <p className="color-palette-2 m-0">Category: Mobile</p>
                </div>
              </div>
              <div>
                <p className="fw-medium text-center label pending m-0 rounded-pill">
                  Pending
                </p>
              </div>
            </div>
            <hr />
            <div className="purchase pt-30">
              <h2 className="fw-bold text-xl color-palette-1 mb-20">
                Purchase Details
              </h2>
              {PURCHASE_DETAIL.map((item) => (
                <Item
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  className={item.className}
                />
              ))}
            </div>
            <div className="payment pt-10 pb-10">
              <h2 className="fw-bold text-xl color-palette-1 mb-20">
                Payment Informations
              </h2>
              {PAYMENT_DETAIL.map((item) => (
                <Item key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
            <div className="d-md-block d-flex flex-column w-100">
              <a
                className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                href="#"
                role="button"
              >
                WhatsApp ke Admin
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TransactionsDetailContentComponent;
