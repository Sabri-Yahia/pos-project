import { cartStore } from "../store/cartStore";
export default function Cart() {
  const { closeCart } = cartStore();
  return (
    <div
      className="w-full h-full bg-black/80 fixed z-50 top-0 left-0"
      onClick={closeCart}
    >
      <div
        className="w-[300px] h-full bg-gray-900 text-white shadow border absolute right-0"
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Cart</h1>
        <button onClick={closeCart} className="btn btn-error">
          Close
        </button>
      </div>
    </div>
  );
}
