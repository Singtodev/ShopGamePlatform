"use client"
import { Fade, Slide } from "react-awesome-reveal";
import Product from "@/app/(marketing)/mockup/product.json";
import { ProductCard, ProductProps } from "../_components/cards/product-card";
const ShopPage = () => {
  return (
    <div>
      <Slide direction="up" duration={300}>
        <BuildProduct />
      </Slide>
    </div>
      
  );
};


function BuildProduct() {
  return (
    <div className="relative flex flex-col gap-x-3 py-4">
      <Slide delay={10} direction="up">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <Fade cascade>
              <span className="text-2xl font-semibold">สินค้าแนะนำ</span>
              <span className="text-xl text-main-cc-1">
                Product Recommended
              </span>
            </Fade>
          </div>
          <div className="flex items-center px-2">
            <Slide delay={1} direction="right" duration={100}>
              <button className="bg-main-cc-1 inline-block py-1 px-4 rounded-xl">
                ดูข้อมูลเพิ่มเติม
              </button>
            </Slide>
          </div>
        </div>
      </Slide>
      <div className="relative grid grid-cols-2 lg:grid-cols-5 py-2 gap-4">
        {Product.map((item: ProductProps, index) => {
          return (
            <ProductCard
              height="min-h-[18rem]"
              image={item.productImage}
              product={item}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ShopPage;
