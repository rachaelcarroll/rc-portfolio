import scene from '../../images/thescene.png';
import overlook from '../../images/overlook.png';
import clientell from '../../images/clientell.png';
import onlydevs from '../../images/onlydevs.png';
import portfolio from '../../images/portfolio.png'
import rancid from '../../images/rancid.png';
import ranch from '../../images/ranch.png';
import rosemary from '../../images/rosemary.png';
import daily from '../../images/thedaily.png';

export const projectData = [
    {
      name: 'the scene',
      image: scene,
      summary: 'An application that allows a user to shuffle and save amusing conversation starters',
      tech: 'React | Router | React Hooks | JavaScript | SCSS | Cypress | REST API | Vercel',
      accomplishments: 'Implemented React Hooks, Router, and CSS animations',
      timeline: '1 week',
      deployedLink: 'https://the-scene.vercel.app/',
      repoLink: 'https://github.com/rachaelcarroll/the-scene',
      id: 1
    },
    {
      name: 'ClienTell',
      image: clientell,
      summary: 'A platform that empowers sex workers to document and share their date experiences',
      tech: 'GraphQL | ApolloClient | React | Router | Circle CI | JavaScript | SCSS | HTML5 | Cypress | Netlify',
      accomplishments: 'Self-taught GraphQL and worked on a full-stack team',
      timeline: '3 weeks',
      deployedLink: 'https://clientell.netlify.app/',
      repoLink: 'https://github.com/rachaelcarroll/date-em-rate-em-fe-1',
      id: 2
    },
    {
      name: 'Rancid Tomatillos',
      image: rancid,
      summary: 'A movie browsing application',
      tech: 'React | React Router | Cypress | JavaScript | CSS3 | HTML5 | Vercel | Miro',
      accomplishments: 'My inaugural React application!',
      timeline: '10 days',
      deployedLink: 'https://rancid-tomatillos-one.vercel.app/',
      repoLink: 'https://github.com/rachaelcarroll/Rancid-Tomatillos',
      id: 3
    },
    {
      name: 'OnlyDevs',
      image: onlydevs,
      summary: 'A question-answer forum for technical front end development concepts',
      tech: 'React | Router | React Hooks | JavaScript | Cypress | SCSS | PostgreSQL | Express.js | Heroku',
      accomplishments: 'Self-taught backend technologies to create a database and host an API',
      timeline: '10 days',
      deployedLink: 'https://onlydevs.herokuapp.com/',
      repoLink: 'https://github.com/rachaelcarroll/only-devs',
      id: 4
    },
    {
      name: 'Portfolio',
      image: portfolio,
      summary: 'The portfolio site that you are currently viewing',
      tech: 'React | JavaScript | SCSS | Figma | Google Analytics | Vercel',
      accomplishments: 'Fetched the Astronomy Picture of the Day (APOD) from a NASA endpoint to create home image, Implemented Google Analytics to track site traffic',
      deployedLink: 'https://www.rcarroll.co/',
      repoLink: 'https://github.com/rachaelcarroll/rc-portfolio',
      id: 5
    },
    {
      name: 'The Overlook',
      image: overlook,
      summary: 'An application to book and display hotel reservations',
      tech: 'JavaScript | HTML5 | SCSS | WebPack | Fetch API | Day.js | Lighthouse | Sketch',
      accomplishments: 'Robust unit testing, GET & POST network requests, Accessibility rating of 100',
      timeline: '6 days',
      deployedLink: '',
      repoLink: 'https://github.com/rachaelcarroll/overlook-hotel',
      id: 6
    },
    {
        name: 'Rosemary & Sage',
        image: rosemary,
        summary: 'An application to view, favorite, and search through a collection of recipes',
        tech: 'HTML5 | CSS3 | Mocha | Chai | Webpack',
        accomplishments: 'Utilized array prototype methods to perform data manipulation',
        timeline: '1 week',
        deployedLink: 'https://www.youtube.com/watch?v=JDhKCZePFT0',
        repoLink: 'https://github.com/rachaelcarroll/Whats-Cookin',
        id: 7
      },
      {
        name: 'the daily',
        image: daily,
        summary: 'A daily news reader application, built in 8 hours',
        tech: 'React | Hooks | Router | SCSS | Netlify | Miro',
        accomplishments: 'An 8 hour React challenge: Consumed the NYTimes API to display, categorize, and search daily news',
        timeline: '1 day',
        deployedLink: 'https://the-daily-take-home.netlify.app/',
        repoLink: 'https://github.com/rachaelcarroll/nyt-reader',
        id: 8
      },
      {
        name: 'Ranch!',
        image: ranch,
        summary: 'A static comp for Ranch rankings',
        tech: 'HTML5 | CSS3',
        accomplishments: 'Wrote DRY and semantic HTML and CSS, responsive across various screen sizes',
        timeline: '5 days',
        deployedLink: 'https://rachaelcarroll.github.io/static-comp/',
        repoLink: 'https://github.com/rachaelcarroll/static-comp',
        id: 9
      }

  ]