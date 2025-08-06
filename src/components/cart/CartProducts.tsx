import { useOptimisticCart } from "@/hooks/useOptimisticCart";
import SingleCartProduct from "./SingleCartProduct";
import ProductsCheckout from "./ProductsCheckout";

const CartProducts = () => {
  const { optimisticItems, handleDecrease, handleIncrease, totalAmount } =
    useOptimisticCart();

  if (!optimisticItems || optimisticItems.length === 0) {
    return <p className="text-white mt-10">Your cart is empty</p>;
  }

  return (
    <>
      <div className="flex flex-col gap-2 mt-10 h-[50vh] overflow-y-auto pr-1">
        {optimisticItems.map((item) => (
          <SingleCartProduct
            key={`${item.product._id}-${item.size}`}
            item={item}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
          />
        ))}
      </div>
      <ProductsCheckout totalAmount={() => totalAmount} />
    </>
  );
};

export default CartProducts;
