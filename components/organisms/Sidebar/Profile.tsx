import Image from 'next/image';

const ProfileSidebarComponent = () => (
  <div className="user text-center pb-50 pe-30">
    <div className="img-fluid mb-20">
      <Image
        src="/img/avatar-1.png"
        width={90}
        height={90}
      />
    </div>
    <h2 className="fw-bold text-xl color-palette-1 m-0">Shayna Anne</h2>
    <p className="color-palette-2 m-0">shayna@anne.com</p>
  </div>
);

export default ProfileSidebarComponent;
