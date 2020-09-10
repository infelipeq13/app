export type IllustrationName = "edit-customer" | "handshake" | "id" | "medal";

type Props = {
  name: IllustrationName;
};

export const Illustration = ({ name }: Props) => {
  return (
    <img alt="" className="w-40 h-40" src={`/illustrations/${name}.png`} />
  );
};
