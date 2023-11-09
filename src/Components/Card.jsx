

export default function Card(props) {
    //Formatando o preço
    const precoFormatado = (props.price).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    return (
        <div className="bg-white w-[300px] h-[500px] rounded-lg p-3">
            <img
                className="rounded-lg bg-cover bg-center w-[100%]"
                alt="nada"
                src={props.image.replace(/\w\.jpg/gi, "W.jpg")}
            />
            <h3 className="text-lg p-1 h-[100px]">{props.title}</h3>
            <h3 className="font-bold text-2xl p-1">{precoFormatado}</h3>
            <a href={props.permalink}>
                <button className="bg-green-500 text-white font-bold px-4 py-2 w-[75%] rounded-lg my-2 mx-auto block">
                    Visitar no site
                </button>
            </a>
        </div>
    );
}
