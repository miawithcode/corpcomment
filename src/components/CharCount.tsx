type CharCountProps = {
  count: number;
};

const CharCount = ({ count }: CharCountProps) => {
  return <p>{count}</p>;
};

export default CharCount;
