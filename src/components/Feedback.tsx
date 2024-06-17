import { TriangleUpIcon } from "@radix-ui/react-icons";

const Feedback = () => {
  return (
    <li>
      {/* Company Logo */}
      <div>
        <img src="" alt="" />
      </div>

      {/* Feedback Content */}
      <div>
        <div>
          <p>Starbucks</p>
          <p>· 1d</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus qui laborum exercitationem consequatur non. Dolorum?
        </p>
      </div>

      {/* Vote Button */}
      <button>
        <TriangleUpIcon />
        <span>112</span>
      </button>
    </li>
  );
};

export default Feedback;
