import Image from 'next/image';
import Link from 'next/link';

interface Props {
  id:Number;
  title: string;
  category: string;
  thumbnail: string;
}

const GameItemComponent = ({
  title, category, thumbnail, id,
}:Props) => (
  <div className="featured-game-card position-relative">
    <Link href={`/games/${id}`} passHref>
      <a href="dummy">
        <div className="blur-sharp">
          <Image
            className="thumbnail"
            src={thumbnail}
            width={205}
            height={270}
            alt=""
          />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div className="game-icon mx-auto">
              <Image src="/icon/joystick.svg" width={54} height={36} />
            </div>
            <div>
              <p className="fw-semibold text-white text-xl m-0">{title}</p>
              <p className="fw-light text-white m-0">{category}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  </div>
);

export default GameItemComponent;
