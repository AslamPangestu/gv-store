import Image from 'next/image';

interface Props {
  height: number;
  width: number;
}
const UploadAvatarComponent = ({ height, width }: Props) => (
  <>
    <label htmlFor="avatar">
      <Image src="/icon/default-upload.svg" width={width} height={height} />
    </label>
    <input
      id="avatar"
      type="file"
      name="avatar"
      accept="image/png, image/jpeg"
    />
  </>
);

export default UploadAvatarComponent;
