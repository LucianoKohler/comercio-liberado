import React from "react";
import Card from "../Components/Card";

export default function HomeScreen() {
  let produtos = JSON.parse(localStorage.getItem("produtos"));

  let updateProducts = () => {
    if(Array.isArray(produtos)){
      return produtos.map((produto) => (
        <Card
        key={produto.key}
        permalink={produto.permalink}
        title={produto.title}
        price={produto.price}
        image={produto.thumbnail}
        />
        ));
      }else{
        return <h1>Erro na procura de produtos! Use a barra no cabeçalho para procurar algo</h1>
      }
  };

  return (
    <div className="container mx-auto flex-wrap gap-10 justify-center flex flex-row m-5">
      {updateProducts()}
    </div>
  );
}
