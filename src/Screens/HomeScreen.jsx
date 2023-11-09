import React from "react";
import Card from "../Components/Card";

export default function HomeScreen() {
  let produtos = JSON.parse(localStorage.getItem("produtos"));

  let updateProducts = () => {
          return produtos.map((produto) => (
        <Card
          key={produto.key}
          permalink={produto.permalink}
          title={produto.title}
          price={produto.price}
          image={produto.thumbnail}
        />
      ));
  };

  return (
    <div className="container mx-auto flex-wrap gap-10 justify-center flex flex-row m-5">
      {updateProducts()}
    </div>
  );
}
