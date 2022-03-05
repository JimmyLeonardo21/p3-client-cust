import React, { useEffect } from "react";
import Card from "../components/card/Card";
import "./Style.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../store/actions/newsAction";

function Home() {
  // const [news, setNews] = useState([]);
  const { news } = useSelector((state) => state);

  console.log(news, "wjkjawekjhwk");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  return (
    <div>
      <div className="content-card">
        {news.map((el) => (
          <Card key={el.id} data={el} />
        ))}
      </div>
    </div>
  );
}

export default Home;
