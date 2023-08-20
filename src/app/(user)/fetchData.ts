import { getCookie } from "cookies-next";

const token = getCookie("auth_token");
export const addToCartItem = async (
  id: string | number,
  name: string,
  image: string,
  description: string,
  price: string | number
) => {
  const res = await fetch("/api/cart", {
    method: "POST",
    body: JSON.stringify({
      productId: id,
      productName: name,
      productImage: image,
      productDescription: description,
      productPrice: price,
      productQuantity: 1,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await res.json();
  return result;
};

export const getCartItems = async () => {
  const id = getCookie("user_id");
  const res = await fetch(`/api/cart?user_id=${id}`);
  const data = await res.json();
  return data;
};

export const deleteItem = async (itemId: string) => {
  const res = await fetch(`/api/cart?item_id=${itemId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
};

export const deleteAllItems = async () => {
  const res = await fetch(`/api/cart`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
};

export const updateItem = async (itemId: string, quantity: string | number) => {
  const res = await fetch(`/api/cart?item_id=${itemId}`, {
    method: "PUT",
    body: JSON.stringify({ product_quantity: quantity }),
  });
  const data = await res.json();
  return data;
};

export const registerUser = async (userData: registerProps) => {
  const res = await fetch("/api/register", {
    method: "POST",
    body: JSON.stringify({
      name: userData?.name,
      email: userData?.email,
      password: userData?.password,
      cpassword: userData?.cpassword,
    }),
  });
  const result = await res.json();

  return result;
};

export const loginUser = async (userData: LoginProps) => {
  const res = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({
      email: userData?.email,
      password: userData?.password,
    }),
  });
  const result = await res.json();
  return result;
};
