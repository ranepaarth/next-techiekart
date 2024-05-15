"use server";

export const fetchApiDataAction = async () => {
  const res = await fetch("https://fakestoreapi.com/products");

  const data: FakeStoreApiData = await res.json();
  if (!res.ok) {
    return;
  }
  return data;
};
