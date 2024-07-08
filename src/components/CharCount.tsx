type CharCountProps = {
  count: number;
};

const CharCount = ({ count }: CharCountProps) => {
  return <p className="text-sm text-gray-500">{count}</p>;
};

export default CharCount;
