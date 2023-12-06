import Image from "next/image";
import Link from "next/link";
import { GrBasket } from "react-icons/gr";

export interface ProductCardProps {
  image: String;
  product: ProductProps;
  height?: String;
}

export interface ProductProps {
  productId: number;
  productName: String;
  productImage: String;
  productAmount: number;
  productPrice: number;
  productPriceReduced: number;
  isSale: boolean;
}

export const ProductCard = ({ product, image, height }: ProductCardProps) => {
  return (
    <div
      className={`
            ${height ?? "min-h-[12rem]"}
             transition-all object-cover h-auto  bg-cover border border-slate-500 p-2
            duration-300`}
    >
      <Image
        width={200}
        height={200}
        quality={100}
        src={image as string}
        alt=""
        className="w-full"
      ></Image>
      <div className="p-2 text-2xl">{product.productName}</div>
      <div className="relative flex flex-row items-center justify-between p-2">
        <div className="text-md">เหลือ : {product.productAmount} ชิ้น</div>
        <div className="absolute right-5 -top-2 text-red-600 text-xs">
          {product.productPriceReduced}
        </div>
        <div className="text-md inline-block bg-main-cc-1 px-4 rounded-md">
          {product.productPriceReduced} -
        </div>
      </div>
      <Link href={`product/`+product.productId}>
      <div
        className="w-full bg-main-cc-2 border-main-cc-1 border
                                rounded-md py-2 hover:bg-main-cc-1 cursor-pointer transition-all duration-300 
                                flex flex-row justify-center items-center gap-x-2"
      >
        <GrBasket /> <span>สั่งซื้อเลยตอนนี้</span>
      </div>
      </Link>
    </div>
  );
};
