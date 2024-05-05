'use client'
import CardCompt from "@/components/Card";
import Skeleton from "@/components/Skeleton";
import { fetchProducts } from "@/redux/slices/productsSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {

  const dispatch = useDispatch<AppDispatch>();
  const {
    dataProducts,
    status,
    error,
  } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <Skeleton />;
  if (status === "failed") return <div>error {error}</div>;

  return (
    <>
      <div className="container">
        <CardCompt dataProducts={dataProducts} />
      </div>
    </>
  )
}

export default HomePage