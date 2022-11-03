import React from "react";
import ProductCard from "../cards/product";

export default function Products() {
  return (
    <div className=" max-w-6xl mx-auto px-5">
      <ProductCard
        title={"Corrily: Optimize prices <br/> to maximize revenue"}
        color={"#91F1C3"}
        image={"/images/Mockup_1.webp"}
        description={
          "Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign."
        }
        tags={["QUALITY ASSURANCE", "PRODUCT DESIGN"]}
      />
      <ProductCard
        title={"Fiona: Engage & <br /> Decide"}
        color={"#52247F"}
        image={"/images/Fiona_Thumbnail.webp"}
        description={
          "Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations."
        }
        tags={["PRODUCT DESIGN", "WEB DEVELOPMENT"]}
      />
      <ProductCard
        title={"Ukulele:<br/> The largest ukulele tabs archive"}
        color={"#FFCB49"}
        image={"/images/thumbnail.webp"}
        description={
          "Ukulele is the number one ukulele community, where players of any level can find the most complete tabs and chords. Cinnamon offered a complete platform redesign including expansions and new features, focusing on keeping the user longer on the website."
        }
        tags={["PRODUCT DESIGN", "WEB DEVELOPMENT", "QUALITY ASSURANCE"]}
      />
    </div>
  );
}
