import Image from 'next/image';
import Link from 'next/link';

import { capitlizeFirstWord } from 'utils/text';

interface Props {
  id: Number;
  image: string;
  title: string;
  category: string;
  item: string;
  price: string;
  status: string;
}

const TableRowTransactionsContentComponent = ({
  id,
  image,
  title,
  category,
  status,
  item,
  price,
}: Props) => (
  <tr data-category={status} className="align-middle">
    <th scope="row">
      <div className="float-start me-3 mb-lg-0 mb-3">
        <Image src={image} height={60} width={80} />
      </div>
      <div className="game-title-header">
        <p className="game-title fw-medium text-start color-palette-1 m-0">
          {title}
        </p>
        <p className="text-xs fw-normal text-start color-palette-2 m-0">
          {category}
        </p>
      </div>
    </th>
    <td>
      <p className="fw-medium color-palette-1 m-0">{item}</p>
    </td>
    <td>
      <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
    </td>
    <td>
      <div>
        <span className={`float-start icon-status ${status}`} />
        <p className="fw-medium text-start color-palette-1 m-0 position-relative">
          {capitlizeFirstWord(status)}
        </p>
      </div>
    </td>
    <td>
      <Link href={`/member/transactions/${id}`} passHref>
        <div className="btn btn-status rounded-pill text-sm">
          Detail
        </div>
      </Link>
    </td>
  </tr>
);

export default TableRowTransactionsContentComponent;
