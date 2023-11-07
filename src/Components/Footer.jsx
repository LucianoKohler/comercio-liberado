export default function Footer() {
    return (
    <footer className="text-sm bg-white rounded-lg shadow m-4 text-center">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span>
            © 2023
            Comércio Liberado™ &bull; Todos os direitos reservados
            </span>
            <ul className="flex gap-3 flex-wrap justify-center mt-3 font-medium">
                <li>
                    <a href="/" className="hover:underline">
                    Sobre
                    </a>
                </li>
                <li>
                    <a href="/" className="hover:underline">
                    Política de Privacidade
                    </a>
                </li>
                <li>
                    <a href="/" className="hover:underline">
                    Licensas
                    </a>
                </li>
                <li>
                    <a href="/" className="hover:underline">
                    Contato
                    </a>
                </li>
            </ul>
        </div>
    </footer>
    );
}
