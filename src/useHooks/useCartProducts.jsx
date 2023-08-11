import { useQuery } from "@tanstack/react-query";

const useCartProducts = () => {
  const {
    data: cartProducts,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["cartProducts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/cartProducts");
      const data = await res.json();
      return data;
    },
  });
  return [cartProducts, refetch, isLoading];
};

export default useCartProducts;
