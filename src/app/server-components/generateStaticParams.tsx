import { intanceAxios } from "@/services/apiConfig";
import { Products } from "@/types/productType";

export async function generateStaticParams() {
  const { data } = await intanceAxios.get<Products[]>(`/products`);

  return data.products.map((product: Products) => ({
    id: product.id.toString(),
  }));
}

export const getProductsById = async (id: string) => {
  const { data } = await intanceAxios.get<Products>(`/products/${id}`);
  return data;
};