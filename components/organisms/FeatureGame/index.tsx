import GameItem from 'components/molecules/GameItem';

const ITEMS = [
  {
    id: 1,
    title: 'Super Mechs',
    category: 'Mobile',
    thumbnail: '/img/Thumbnail-1.png',
  },
  {
    id: 2,
    title: 'Call of Duty: Modern',
    category: 'Mobile',
    thumbnail: '/img/Thumbnail-2.png',
  },
  {
    id: 3,
    title: 'Mobile Legends',
    category: 'Mobile',
    thumbnail: '/img/Thumbnail-3.png',
  },
  {
    id: 4,
    title: 'Clash of Clans',
    category: 'Mobile',
    thumbnail: '/img/Thumbnail-4.png',
  },
  {
    id: 5,
    title: 'Valorant',
    category: 'PC',
    thumbnail: '/img/Thumbnail-5.png',
  },
];
const FeatureGameComponent = () => (
  <section className="featured-game pt-50 pb-50">
    <div className="container-fluid">
      <h2 className="text-4xl fw-bold color-palette-1 mb-30">
        Our Featured
        <br />
        {' '}
        Games This Year
      </h2>
      <div
        className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
        data-aos="fade-up"
      >
        {ITEMS.map((item) => (
          <GameItem
            key={item.id}
            id={item.id}
            title={item.title}
            category={item.category}
            thumbnail={item.thumbnail}
          />
        ))}
      </div>
    </div>
  </section>
);

export default FeatureGameComponent;
