import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import { useState } from "react";
import api from "../api/api";

export default function Header() {
    const [produtos, setProdutos] = useState([]);
    const [query, setQuery] = useState('');
  
      async function fetchItems(){
          const response = await api.get(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
          setProdutos({itens: response.data});
      };
  
  const handleInputChange = e => setQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
      fetchItems(query);
      console.log(query, produtos);
  }

  return (
    <div className="bg-[#fdf163] p-3 flex flex-row justify-between items-center">
      <div className="flex flex-row">
        <img src={logo} alt="logo do site" className="h-[40px]" />
        <h1 className="ml-2 leading-9 text-center hidden font-bold text-xl sm:inline">
          Comércio Liberado
        </h1>
      </div>
      <div>
      <form onSubmit={handleSubmit}>
          <input
            onChange={handleInputChange}
            value={query}
            className="rounded-md p-1 w-[250px]"
            type="text"
          />
          <FontAwesomeIcon
            type="submit"
            className="p-2 absolute right-3 rounded-lg hover:cursor-pointer"
            icon={faMagnifyingGlass}
            style={{ color: "#000000" }}
          />
        </form>
      </div>
    </div>
  );
}
