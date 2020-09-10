type Props = {
  name: "handshake" | "id" | "medal";
};

export const Illustration = ({ name }: Props) => {
  return (
    <img alt="" className="w-40 h-40" src={`/illustrations/${name}.png`} />
  );
};
