import technologiesData from './technologies.js'
const projects = [
  {
    name: 'AppRaise',
    images: [
      {
        name: 'appraise1.png',
        className: 'appraise-img',
        xs: 12, sm: 6, md: 'auto', lg: 'auto'
      },
      {
        name: 'appraise2.png',
        className: 'appraise-img',
        xs: 12, sm: 6, md: 'auto', lg: 'auto'
      }
    ],
    description: 'Projeto desenvolvido durante o curso de Tecnólogo em Análise e Desenvolvimento de Sistemas. O AppRaise é uma aplicação mobile desenvolvida com ReactNative, possui área administrativa web em Vue.js e diversas outras tecnologias.',
    technologies: [
      technologiesData.reactnative,
      technologiesData.node,
      technologiesData.sequelize,
      technologiesData.postgres,
      technologiesData.vuejs
    ]
  },
  {
    name: 'Bessa PDV',
    images: [
      {
        name: 'bessapdv1.jpg',
        className: 'bessapdv-img',
        xs: 12, sm: 12, md: 12, lg: 12
      },
      {
        name: 'bessapdv2.jpg',
        className: 'bessapdv-img',
        xs: 12, sm: 12, md: 12, lg: 12
      },
      {
        name: 'bessapdv3.jpg',
        className: 'bessapdv-img',
        xs: 12, sm: 12, md: 12, lg: 12
      }
    ],
    description: 'Bessa PDV é um sistema web desenvolvido com finalidades acadêmicas utilizando Vue.js, Node e outras tecnologias. Pelo sistema, o usuário (lojista) é capaz de gerenciar seus produtos e realizar/imprimir vendas (sem valor fiscal). Atualmente, apenas meu pai usufrui do sistema.',
    technologies: [
      technologiesData.vuejs,
      technologiesData.quasar,
      technologiesData.node,
      technologiesData.sequelize,
      technologiesData.postgres
    ]
  },
  {
    name: 'Bigdim',
    images: [
      {
        name: 'gestor-mobile.jpg',
        className: 'appraise-img',
        xs: 12, sm: 6, md: 'auto', lg: 'auto'
      },
      {
        name: 'loja-delivery.jpg',
        className: 'appraise-img',
        xs: 12, sm: 6, md: 'auto', lg: 'auto'
      }
    ],
    description: 'O Bigdim é um sistema de fidelização digital de clientes e delivery no qual atuei como desenvolvedor. Ele permite o cliente (empresário) configurar através da sua área administrativa, todas as configurações de delivery (produtos, taxas de entrega, horários de funcionamento, etc.), e todas as opções de fidelização digital (prêmios, cashback, sorteios, etc.). Através do terminal web, o empresário consegue gerenciar as transações de fidelização e, através do cardápio digital, os clientes finais podem fazer pedidos via delivery. Os pedidos chegam tanto no gestor de pedidos web, quanto no gestor de pedidos mobile.',
    technologies: [
      technologiesData.angular,
      technologiesData.vuejs,
      technologiesData.quasar,
      technologiesData.reactnative,
      technologiesData.java,
      technologiesData.spring,
      technologiesData.springboot,
      technologiesData.postgres,
    ],
    disclaimer: {
      text: 'O Bigdim pertence a empresa M-DU Tecnologia e possui todos os seus direitos reservados, acesse:',
      url: 'https://bigdim.com.br'
    }
  },
]

export default projects;