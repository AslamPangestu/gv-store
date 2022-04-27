import { ReactNode } from 'react';
import Image from 'next/image';

interface Props {
  icon: string;
  totalSpent: string;
  category: ReactNode;
}

const CategoryOverviewContentComponent = ({
  icon,
  totalSpent,
  category,
}: Props) => (
  <div className="categories-card">
    <div className="d-flex align-items-center mb-24">
      <Image src={icon} width={60} height={60} />
      <p className="color-palette-1 mb-0 ms-12">
        {category}
      </p>
    </div>
    <div>
      <p className="text-sm color-palette-2 mb-1">Total Spent</p>
      <p className="text-2xl color-palette-1 fw-medium m-0">{totalSpent}</p>
    </div>
  </div>
);

export default CategoryOverviewContentComponent;
