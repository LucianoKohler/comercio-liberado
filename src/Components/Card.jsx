


export default function Card(){
    return(
        <div className="bg-gray-100 w-[300px] rounded-lg p-3">
            <img className="rounded-lg aspect-square object-cover" alt="nada" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" />
            <h3 className="font-bold text-2xl p-1">Nome do Produto</h3>
            <h3 className="font-bold text-2xl p-1">R$1.220,00</h3>
            <button className="bg-green-500 text-white font-bold px-4 py-2 w-[75%] rounded-lg my-2 mx-auto block">Comprar Agora</button>
        </div>
    )
};