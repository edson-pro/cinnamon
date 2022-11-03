import React from "react";
import ProductCard from "../cards/product";

export default function Products() {
  return (
    <div className=" max-w-6xl mx-auto px-5">
      <ProductCard
        color={"#91F1C3"}
        image={
          "https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F281NSZSG7VvkxHDig0qbBA%2F70ac7de86b0bb84190916ee9aac33aa7%2FMockup_1.png&w=1920&q=80"
        }
        description={
          "Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign."
        }
        tags={["QUALITY ASSURANCE", "PRODUCT DESIGN"]}
      />
      <ProductCard
        color={"#52247F"}
        image={
          "https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F14zPgk0p1qf0yptSYRjHBW%2F94e47560492e6602f69d9ee91be4ab61%2FFiona_Thumbnail.png&w=1920&q=80"
        }
        description={
          "Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations."
        }
        tags={["PRODUCT DESIGN", "WEB DEVELOPMENT"]}
      />
      <ProductCard
        color={"#FFCB49"}
        image={
          "https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F7kFgIXzEEYLIM678mr3mzo%2F6401985a011c0ae2ce0b3f940499f4c1%2Fthumbnail.png&w=1920&q=80"
        }
        description={
          "Ukulele is the number one ukulele community, where players of any level can find the most complete tabs and chords. Cinnamon offered a complete platform redesign including expansions and new features, focusing on keeping the user longer on the website."
        }
        tags={["PRODUCT DESIGN", "WEB DEVELOPMENT", "QUALITY ASSURANCE"]}
      />
    </div>
  );
}
