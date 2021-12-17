const technologies = {
  node: {
    name: 'Node.js',
    image: 'node.png'
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
    name: 'Angular (4/5)',
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
  }
};

technologies.backend = [
  technologies.java,
  technologies.spring,
  technologies.springboot,
  technologies.node,
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
  technologies.git,
  technologies.svn,
  technologies.jira
];

export default technologies;