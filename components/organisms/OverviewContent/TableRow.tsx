import Image from 'next/image';

interface Props {
  image: string;
  title: string;
  category: string;
  item: string;
  price: string;
  status: string;
}

const TableRowOverviewContentComponent = ({
  image,
  title,
  category,
  status,
  item,
  price,
}: Props) => (
  <tr className="align-middle">
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
        <span className={`float-start icon-status ${status.toLowerCase()}`} />
        <p className="fw-medium text-start color-palette-1 m-0 position-relative">
          {status}
        </p>
      </div>
    </td>
  </tr>
);

export default TableRowOverviewContentComponent;
