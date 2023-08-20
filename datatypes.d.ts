interface registerProps {
  cpassword: string;
  email: string;
  name: string;
  password: string;
}

interface LoginProps {
  email: string;
  password: string;
}

interface Category {
  id: string;
  name: string;
  image: string;
}

interface Rating {
  rate: number;
  count: number;
}
interface Product {
  category: Category;
  id: string;
  name: string;
  description: string;
  price: number;
  rating: Rating;
  slug: string;
  mainImage: string;
}
interface CartItemProps {
  id: number;
  product_description: string;
  product_id: string;
  product_image: string;
  product_name: string;
  product_price: number;
  product_quantity: number;
  user_id: string;
}
interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

interface Params {
  params: { id?: string; slug?: string };
}
interface CheckoutItem {
  name: string;
  price: number;
  product: number;
  quantity: number;
}

interface AppState {
  cart: CartItemProps[];
  checkout: CheckoutItem[];
}
