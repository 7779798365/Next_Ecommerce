import { groq } from "next-sanity";

export const AllCategoriesQuery: string = groq`
*[_type == "category"]{
  "id":_id,
    name,
    "slug":slug.current,
    "image":image.asset->url
}
`;
export const AllProductsQuery: string = groq`
*[_type == "product"]{
  "id":_id,
  name,
  description,
  price,
  rating,
  "slug":slug.current,
  "mainImage":mainImage.asset->url,
  category->{
    "id":_id,
    name,
    "image":image.asset->url
  }
}`;

export const getCategoryProducts: string = groq`
*[_type == "product" && references($id)]{
  "id":_id,
  name,
  description,
  price,
  rating,
  "slug":slug.current,
  "mainImage":mainImage.asset->url,
  category->{
    "id":_id,
    name,
    "image":image.asset->url
  }
}
`;

export const getProductDetail: string = groq`
*[_type == "product" && slug.current == $slug][0] {
  ...,
  "id": _id,
  "slug": slug.current,
    "mainImage": mainImage.asset->url,
    category->{
        name,
        "id": _id,
        "image": image.asset->url
    },
    "gallery": gallery[].asset->url
}
`;
