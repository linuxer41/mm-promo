import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/linuxer41/mm-promo.git', // Update to point to your repository
  user: {
   name: 'francisco ochoa', // update to use your name
   email: 'linuxer41@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);