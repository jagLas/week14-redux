import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import { toggleLike } from "../../store/produce";

function ProduceDetails({ produce }) {
  const dispatch = useDispatch();

  const cartItem = {};

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={() => dispatch(toggleLike(produce.id))}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={e => {
            dispatch(addToCart(produce.id))
          }}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;