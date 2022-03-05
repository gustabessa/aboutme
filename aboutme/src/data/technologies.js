const technologies = {
  node: {
    name: 'Node.js',
    image: 'node.png'
  },
  nest: {
    name: 'Nest.js',
    image: 'nestjs.png'
  },
  java: {
    name: 'Java',
    image: 'java.png'
  },
  spring: {
    name: 'Spring',
    image: 'spring.png'
  },
  springboot: {
    name: 'Spring Boot',
    image: 'springboot.png'
  },
  vuejs: {
    name: 'Vue.js',
    image: 'vue.png'
  },
  angular: {
    name: 'Angular',
    image: 'angular.png'
  },
  react: {
    name: 'React',
    image: 'react.png'
  },
  reactnative: {
    name: 'ReactNative',
    image: 'reactnative.png'
  },
  postgres: {
    name: 'PostgreSQL',
    image: 'postgre.png'
  },
  sequelize: {
    name: 'Sequelize',
    image: 'sequelize.png'
  },
  quasar: {
    name: 'Quasar',
    image: 'quasar.png'
  },
  git: {
    name: 'Git',
    image: 'git.png'
  },
  svn: {
    name: 'SVN',
    image: 'svn.png'
  },
  jira: {
    name: 'Jira',
    image: 'jira.png'
  },
  typescript: {
    name: 'Typescript',
    image: 'typescript.png'
  }
};

technologies.backend = [
  technologies.java,
  technologies.spring,
  technologies.springboot,
  technologies.node,
  technologies.nest,
  technologies.sequelize,
  technologies.postgres
];

technologies.frontend = [
  technologies.vuejs,
  technologies.react,
  technologies.angular,
  technologies.quasar
];

technologies.mobile = [
  technologies.reactnative
];

technologies.other = [
  technologies.typescript,
  technologies.git,
  technologies.svn,
  technologies.jira
];

export default technologies;