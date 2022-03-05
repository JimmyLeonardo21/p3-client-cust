import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import "./Style.css";
import { fetchNewsById } from "../store/actions/newsAction";
import { useSelector, useDispatch } from "react-redux";

function Detail() {
  const { id } = useParams();
  // const [news, setNews] = useState([]);
  const { detailNews } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewsById(id));
  }, [dispatch, id]);

  return (
    <div>
      <div>
        <p className="title-detail">{detailNews.title}</p>
      </div>
      <div>
        <p className="title-detail-user">
          Release Date: {detailNews.createdAt}
        </p>
        {/* <p className="title-detail-user">Penulis: {detailNews.User.username}</p> */}
      </div>
      <div className="container-img-detail">
        <img className="img-detail" src={detailNews.imgUrl} alt="error" />
      </div>
      <div className="container-descripsi-detail">
        <p className="descripsi-detail">{detailNews.content}</p>
      </div>
    </div>
  );
}

export default Detail;
