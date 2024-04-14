import { ISkills } from '../types';
import { DiLinux, DiDatabase } from 'react-icons/di';
import {
  SiAnsible,
  SiKubernetes,
  SiReact,
  SiLinkedin,
  SiGithub,
  SiTelegram,
  SiGmail,
} from 'react-icons/si';
import { AiTwotoneCloud, AiFillGitlab } from 'react-icons/ai';

// TODO: Make with configmap.js or configmap.json
export const BACKEND_URL = process.env.REACT_APP_API_URL
  ? process.env.REACT_APP_API_URL
  : '';

export const SITENAME = 'saigo.info';
export const MYNAME = 'IganoSaigo';
export const NAVLINKS = [
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
];
export const AUTHLINKS = {
  logout: { name: 'Logout', path: '/logout' },
  login: { name: 'Login', path: '/login' },
};
export const SOCIALACCOUNTS = [
  {
    url: 'https://github.com/iganosaigo',
    label: 'Github Account',
    type: 'gray',
    icon: <SiGithub />,
  },
  {
    url: 'https://www.linkedin.com/in/iganosaigo',
    label: 'LinkedIn Account',
    type: 'linkedin',
    icon: <SiLinkedin />,
  },
  {
    url: 'mailto:an.grigoriev84@gmail.com',
    label: 'Email Account',
    type: 'red',
    icon: <SiGmail />,
  },
  {
    url: 'https://t.me/Iganosaigo',
    label: 'Telegram Account',
    type: 'telegram',
    icon: <SiTelegram />,
  },
];
export const INTERESTS: ISkills[] = [
  {
    title: 'Hardskills',
    skills: [
      {
        heading: 'Языки программирования',
        content:
          'Очень нравится Python😍, немного пишу на Golang. Чуть-чуть трогал JS/TS для своих пет-проектов в рамках React.',
        icon: SiGithub,
      },
      {
        heading: 'ОС',
        content:
          'Только GNU/Linux. С Windows не работал давно. И не хочу начинать. Я не хейтер окон: просто её не понимаю => не умею готовить🍳',
        icon: DiLinux,
      },
      {
        heading: 'K8S',
        content:
          'Kubernetes и Docker. Погружаться в кубер и его экосистему можно бесконечно😁. За каждой ссылкой стоят десять ссылок🤓',
        icon: SiKubernetes,
      },
      {
        heading: 'БД',
        content:
          'MySQL, Elasticsearch, Redis - основной БД стэк. Вообще, БД - невероятно сложное и интересное ПО, в которое интересно погружаться😊',
        icon: DiDatabase,
      },
      {
        heading: 'SCM',
        content:
          "Ansible. Не могу сказать, что влюблен в него, но после Puppet'а дышать стало легче. Хотя DSL Puppet'а часто не хватает🤔",
        icon: SiAnsible,
      },
      {
        heading: 'Фреймворки',
        content:
          'В своих пет-проектах использую React, Fastapi и SQLAlchemy. Надо бы погрузиться в Next.js😬 и хочется потрогать Vuejs.',
        icon: SiReact,
      },
      {
        heading: 'Облака',
        content:
          'AWS. Есть небольшой опыт с YandexCloud👶. Активно использую Terraform, но Pulumi нравится гораздо больше❤️',
        icon: AiTwotoneCloud,
      },
      {
        heading: 'CI/CD',
        content:
          'GitLab🚂 Пожалуй, сегодня по функционалу из коробки и популярности - вне конкуренции.',
        icon: AiFillGitlab,
      },
    ],
  },
];
// TODO: change parse to simple structure
export const ABOUTME = [
  'Последние несколько лет углубляю свои знания с прицелом на DevOps и SRE. Недостижимая мечта объять необъятное - главный для меня мотиватор в профессии.',
  'В своем блоге я стараюсь заглянуть глубже в обсуждаемые темы, что далеко не всем будет интересно. Когда я сталкиваюсь с новой для себя технологией, то мне интересно понять, как она устроена изнутри. Конечно же в меру своих возможностей и весьма скромных способностей.',
  'Кроме IT я интересуюсь литературой(в основном, классической) и музыкой. Отдельно стоит упомянуть об интересах к инвестициям, трейдингу и блокчейну, о которых я тоже планирую переодически писать.',
];
