import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Política de Privacidade | Bell Nacif",
  description:
    "Política de Privacidade do site Bell Nacif, com informações sobre coleta, uso, armazenamento e proteção de dados pessoais.",
};

const sections = [
  {
    title: "1. Informações gerais",
    content: [
      "Esta Política de Privacidade explica como o site www.bellnacif.com.br coleta, utiliza, armazena, compartilha e protege dados pessoais de visitantes, contatos, clientes em potencial e parceiros que interagem com os canais digitais da Bell Nacif.",
      "O documento foi elaborado com base na Lei Geral de Proteção de Dados Pessoais, Lei nº 13.709/2018, e pode ser atualizado sempre que houver mudanças legais, técnicas ou operacionais relevantes.",
    ],
  },
  {
    title: "2. Quais dados podem ser coletados",
    content: [
      "Ao navegar pelo site ou preencher formulários, podemos coletar dados como nome completo, empresa, cargo, especialidade, e-mail, telefone ou WhatsApp, serviço de interesse, quantidade de pessoas envolvidas e informações que você descreva voluntariamente sobre desafios, necessidades, oportunidades ou projetos.",
      "Também podem ser tratados dados técnicos de navegação, como endereço de IP, tipo de navegador, páginas acessadas, data e horário de acesso e informações necessárias para funcionamento, segurança e melhoria do site.",
      "Caso você se cadastre em comunicações por e-mail, poderemos tratar nome e e-mail para envio de conteúdos, novidades e comunicações relacionadas aos temas do site.",
    ],
  },
  {
    title: "3. Como os dados são coletados",
    content: [
      "Os dados são coletados quando você preenche formulários de contato, envia mensagens pelos canais informados no site, interage com links externos ou navega pelas páginas de www.bellnacif.com.br.",
      "O site não exige criação de conta para navegação pública. Caso áreas restritas sejam criadas futuramente, esta política poderá ser atualizada para contemplar esses novos tratamentos.",
    ],
  },
  {
    title: "4. Para quais finalidades utilizamos os dados",
    content: [
      "Utilizamos dados pessoais para responder solicitações de contato, entender necessidades comerciais, avaliar possibilidades de mentoria, consultoria, treinamentos, palestras, parcerias e projetos, enviar propostas ou informações solicitadas e manter comunicações relacionadas ao atendimento iniciado pelo usuário.",
      "Também podemos utilizar dados para melhorar a experiência no site, manter a segurança das páginas e formulários, cumprir obrigações legais e registrar comunicações necessárias à execução de contratos ou tratativas comerciais.",
    ],
  },
  {
    title: "5. Bases legais para tratamento",
    content: [
      "O tratamento de dados pode ocorrer com fundamento no consentimento, na execução de contrato ou procedimentos preliminares relacionados a contrato, no legítimo interesse para atendimento, segurança e melhoria dos serviços, e no cumprimento de obrigações legais ou regulatórias.",
      "Quando a base legal for o consentimento, você poderá revogá-lo a qualquer momento pelos canais de contato indicados nesta política.",
    ],
  },
  {
    title: "6. Compartilhamento de dados",
    content: [
      "Os dados pessoais podem ser compartilhados apenas quando necessário para operação do site, hospedagem, envio de e-mails, gestão de contatos, atendimento, cumprimento de obrigações legais ou proteção de direitos.",
      "Fornecedores e parceiros técnicos que eventualmente tratem dados pessoais devem atuar de acordo com finalidades legítimas e medidas adequadas de segurança.",
      "Ao clicar em links externos, como WhatsApp, LinkedIn, Instagram ou YouTube, você será direcionado para ambientes de terceiros, sujeitos às respectivas políticas de privacidade.",
    ],
  },
  {
    title: "7. Armazenamento e retenção",
    content: [
      "Os dados pessoais são armazenados pelo tempo necessário para cumprir as finalidades descritas nesta política, responder solicitações, manter registros comerciais, cumprir obrigações legais ou preservar direitos.",
      "Quando os dados deixarem de ser necessários, eles poderão ser eliminados ou anonimizados, salvo quando houver obrigação legal, regulatória, contratual ou outra base legítima para conservação.",
    ],
  },
  {
    title: "8. Segurança dos dados",
    content: [
      "Adotamos medidas técnicas e organizacionais razoáveis para proteger dados pessoais contra acessos não autorizados, perda, alteração, comunicação indevida ou uso inadequado.",
      "Apesar dos cuidados adotados, nenhum ambiente digital é absolutamente imune a riscos. Caso ocorra incidente relevante envolvendo dados pessoais, serão tomadas as providências cabíveis conforme a legislação aplicável.",
    ],
  },
  {
    title: "9. Cookies e dados de navegação",
    content: [
      "O site pode utilizar cookies técnicos e tecnologias semelhantes para funcionamento adequado das páginas, segurança, preferências de navegação e melhoria da experiência.",
      "Também podemos utilizar cookies opcionais de análise, especialmente Google Analytics 4, para compreender métricas agregadas de navegação, como páginas acessadas, origem de tráfego, dispositivo, navegador, tempo de interação e eventos de uso. Esses cookies de análise só são carregados após o consentimento do visitante no banner de cookies.",
      "Você pode aceitar ou recusar cookies de análise. Também pode configurar seu navegador para bloquear ou remover cookies, mas alguns recursos do site podem funcionar de forma limitada.",
    ],
  },
  {
    title: "10. Direitos do titular dos dados",
    content: [
      "Nos termos da LGPD, você pode solicitar confirmação da existência de tratamento, acesso aos dados, correção de informações incompletas ou desatualizadas, anonimização, bloqueio ou eliminação de dados desnecessários, portabilidade, informação sobre compartilhamento e revogação do consentimento quando aplicável.",
      "As solicitações podem ser feitas pelo e-mail bell@bellnacif.com.br. Para sua segurança, poderemos solicitar informações adicionais para confirmar sua identidade antes de atender determinados pedidos.",
    ],
  },
  {
    title: "11. Alterações nesta política",
    content: [
      "Esta Política de Privacidade poderá ser modificada a qualquer momento para refletir mudanças no site, nos serviços, em ferramentas utilizadas ou na legislação aplicável.",
      "A versão atualizada será publicada nesta página, com indicação da data da última atualização.",
    ],
  },
  {
    title: "12. Contato",
    content: [
      "Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento de dados pessoais no site www.bellnacif.com.br, entre em contato pelo e-mail bell@bellnacif.com.br.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="privacy-title">
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow}>
              <span aria-hidden="true" />
              Privacidade
            </p>
            <h1 id="privacy-title">Política de Privacidade</h1>
            <p>
              Transparência sobre como os dados pessoais são tratados no site
              www.bellnacif.com.br.
            </p>
            <time dateTime="2026-07-15">Última atualização: 15 de julho de 2026</time>
          </div>
        </section>

        <section className={styles.content} aria-label="Conteúdo da política">
          <div className={`container ${styles.contentInner}`}>
            {sections.map((section) => (
              <article className={styles.section} key={section.title}>
                <h2>{section.title}</h2>
                {section.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
