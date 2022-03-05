import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card({ data }) {
  const navigate = useNavigate();
  function HandleId(params) {
    console.log(data, "dsjhdkjshdkhsdsh");

    navigate(`/${params}/${data.slug}`);
  }
  return (
    <div className="card">
      <img className="img-content" src={data.imgUrl} alt="Avatar" />
      <div className="container">
        <h4>
          <b>{data.title}</b>
        </h4>
        <h5>
          <b>Author: {data.User.username}</b>
        </h5>
        <h5>
          <b>Tags: {data.Tags.map((el) => el.name + ", ")}</b>
        </h5>
      </div>
      <div>
        <button onClick={() => HandleId(data.id)}>Detail</button>
      </div>
    </div>
  );
}

export default Card;
