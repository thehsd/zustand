import { Link } from "react-router-dom";
import AddCount from "../components/AddCount";
import MinusCount from "../components/MinusCount";
import { useCount } from "../store/count";
const Home = () => {
  const number = useCount((state) => state.count);
  return (
    <div>
      <AddCount />
      <MinusCount />
      <Link to="/posts"> go to posts</Link>
      <br />
      {number}
    </div>
  );
};

export default Home;
