import "./content.css";
import imagem from "../images/imagemAtividade.jpeg";

const Content = () => {
    return (
        <div className="contentContainer">
        <img className="imagem" src={imagem} alt ="" />
            <p>As notas do Exame Nacional do Ensino Médio (Enem) 2021 foram divulgadas e os estudantes podem escolher como usá-las para ingressar no ensino superior. Sisu, Prouni e Fies para instituições de ensino brasileiras ou faculdades estrangeiras, com as quais o Ministério da Educação mantém acordos. Acesse a página do participante para conferir sua nota.</p>
            <p>Países como Portugal, Inglaterra, França, Irlanda e Canadá, aceitam estudantes brasileiros com a nota do Enem. Em alguns casos, a Instituição exige que o candidato também passe pelo processo seletivo local, por isso é importante ficar atento ao calendário divulgado no site da universidade internacional de interesse.</p>
            <p>Já nas Instituições de ensino brasileiras, é necessário observar os critérios de ingresso. Confira como a nota do Enem pode ser utilizada no Brasil:</p>
            <p>
                <cite><strong>Sisu - Universidades Públicas</strong></cite>
            </p>
            <p>
                As instituições públicas brasileiras utilizam o Sistema de Seleção Unificada (Sisu). Para conseguir ingressar em uma das vagas, é preciso ficar atento à abertura das vagas e à nota de corte do curso desejado. O candidato precisa ter alcançado uma nota igual ou maior à nota mínima definida para aquele curso.
            </p>
            <p>
                Segundo o calendário divulgado pelo Ministério da Educação (MEC), as inscrições para o Sisu começam na próxima terça-feira, 15 de fevereiro, e devem ser feitas no site do programa.
            </p>
            <p>
                <cite><strong>Prouni - Faculdades Particulares</strong></cite>
                <br/>
            </p>
            <p>
                O Programa Universidade para Todos (Prouni) é uma iniciativa do MEC que oferece bolsas integrais e parciais em faculdades particulares. Pelo Prouni, apenas alunos que cursaram todo o ensino médio em escolas da rede pública ou com bolsa integral em escolas particulares podem concorrer a uma bolsa.
            </p>
            <p>
                Para se candidatar no Prouni, é preciso ter renda familiar per capita de até 3 salários mínimos (R$ 3,636 mil). A bolsa integral exige renda familiar mensal per capita de até 1,5 salário mínimo (R$ 1.818); já a bolsa parcial (50% da mensalidade), renda familiar mensal per capita de 1,5 a 3 salários mínimos (de R$ 1.818 a R$ 3.636).
            </p>
            <p>
                Segundo o calendário do MEC, para se candidatar às vagas do primeiro semestre de 2022, o candidato deve se inscrever entre os dias 22 e 25 de fevereiro pelo site do programa.
            </p>
            <p>
                <cite><strong>Fies - Faculdades Particulares</strong></cite>
            </p>
            <p>
                O Fies e o Fundo de Financiamento Estudantil do governo federal, criado em 1999, que arca com parte das mensalidades de estudantes em universidades e faculdades particulares. No entanto, como é um financiamento, o estudante Fies precisa quitar a dívida após a conclusão do curso.
            </p>
            <p>
                O financiamento pode cobrir de 50% a 100% da mensalidade. É possível conseguir juros zero ou uma escala de financiamento que varia conforme a renda familiar do candidato.
            </p>
            <p>
                De acordo com informações do MEC, neste primeiro semestre de 2022, o Fies está com 111 mil vagas. O período de inscrição será de 8 a 11 de março, pelo site oficial do Fies.
            </p>
            <p>
                <cite>
                    <a 
                        target="_blank" 
                        href="https://campinagrande.portaldacidade.com/noticias/educacao/saiu-o-resultado-do-enem-usar-no-sisu-prouni-fies-ou-faculdades-estrangeiras-2136"
                        rel="noreferrer noopener"
                    >
                        Link do local do texto
                    </a>
                </cite>
            </p>
        </div>
    );
}

export default Content;
