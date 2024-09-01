import instancias from "./instancias.json" with { type: "json" };

export const layout = "layout.tsx";

const IndexPage = () => {
    return (
        <>
            <header>
                <h1>Eternas Saudades</h1>
                <p>
                    Uma singela homenagem, para lembrarmos das instâncias do
                    FediVerso que nos deixaram.
                </p>
            </header>
            <hr />
            <main>
                {instancias.sort((a, b) => b.fim - a.fim).map(
                    (instancia) => (
                        <article>
                            <img
                                src={instancia.imagem ||
                                    "/images/flower.svg"}
                                alt={`Imagem da instância ${instancia.nome}`}
                            />
                            <h2>
                                {instancia.nome}
                            </h2>
                            <small>
                                {instancia.inicio} - {instancia.fim}
                            </small>
                            <p>{instancia.descricao}</p>
                        </article>
                    ),
                )}
            </main>
            <footer></footer>
        </>
    );
};

export default IndexPage;
