"use client";
import {
  BuildBoard,
  CardPortal,
  CarouselCustom,
  ProductCard,
} from "./_components";
import { FiBell } from "react-icons/fi";
import { Fade, Slide } from "react-awesome-reveal";
import Product from "@/app/(marketing)/mockup/product.json";
import Category from "@/app/(marketing)/mockup/category.json";
import { ProductProps } from "./_components/cards/product-card";

const HomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden px-2 lg:px-0">
      <div className="relative flex flex-row items-center gap-x-3">
        <div className="text-xl lg:text-3xl">
          <FiBell />
        </div>
        <div className="flex flex-col">
          <span className="text-md lg:text-2xl font-semibold">
            โปรโมชั่นและข่าวสาร
          </span>
          <span className="text-sm lg:text-xl text-main-cc-1">
            Promotion & News
          </span>
        </div>
      </div>
      <div className="relative grid grid-cols-3 py-2 gap-3 transition-all duration-300">
        <BuildCarousel />
        <div className="col-span-3 my-7 lg:my-0 md:col-span-1">
          <BuildBoard title="ประกาศจากทางร้าน" />
        </div>
      </div>
      <div className="relative grid grid-cols-2 lg:grid-cols-4 py-2 gap-4">
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <CardPortal
              height="h-[6rem] lg:h-[12rem]"
              image="https://placehold.co/240x240"
              key={index}
            />
          );
        })}
      </div>
      <Slide direction="right" duration={300}>
        <BuildCategory />
      </Slide>
      <Slide direction="left" duration={300}>
        <BuildProduct />
      </Slide>
    </div>
  );
};

function BuildCarousel() {
  return (
    <div className="relative col-span-3 px-2 md:col-span-2 lg:px-0 transition-all duration-300">
      <CarouselCustom
        loop={true}
        autoPlay={true}
        images={[
          "https://placehold.co/1200x400",
          "https://placehold.co/1200x400",
          "https://placehold.co/1200x400",
          "https://placehold.co/1200x400",
        ]}
        className={"rounded-xl h-[12rem] md:h-[20rem]"}
      />
    </div>
  );
}

interface CategoryProps {
  categoryId: number;
  categoryName: String;
  categoryImage: String;
  categorySlug: String;
  categoryRate: String;
}

function BuildCategory() {
  return (
    <div className="relative flex flex-col gap-x-3 py-4">
      <Slide delay={10} direction="up">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <Fade cascade>
              <span className="text-2xl font-semibold">หมวดหมู่แนะนำ</span>
              <span className="text-xl text-main-cc-1">
                Category Recommended
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
      <div className="relative grid grid-cols-1 lg:grid-cols-2 py-2 gap-4 lg:gap-8">
        {Category.map((item: CategoryProps, index) => {
          return (
            <CardPortal
              height="h-[6rem] lg:h-[12rem]"
              image={item.categoryImage}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

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

export default HomePage;
