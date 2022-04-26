import Image from 'next/image';

interface Props {
  icon: 'step-1' | 'step-2' | 'step-3';
  title: string;
  description1: string;
  description2: string;
}

const StepItemComponent = ({
  icon, title, description1, description2,
}: Props) => (
  <div className="card feature-card border-0">
    <div className="mb-30">
      <Image src={`/icon/${icon}.svg`} height="80" width="80" />
    </div>

    <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
    <p className="text-lg color-palette-1 mb-0">
      {description1}
      <br />
      {description2}
    </p>
  </div>
);

export default StepItemComponent;
