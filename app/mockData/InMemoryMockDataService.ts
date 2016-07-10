import {Slide} from '../model/Slide';
import {Comment} from '../model/Comment';

export class InMemoryMockDataService {

  public comments: Comment[] = [
    {
      id: 1, name: 'Mr. Nice', date: 'November 5, 1955',
      content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
      likes: 6, ammountComments: 12, lastUpdate: '6 days', avatarUrl: 'https://d3rt1990lpmkn.cloudfront.net/unbranded/9bdd59379eb0e0815301c00fb985b6549f5221eb',
      imageUrl: 'https://img.stb.s-msn.com/usappex/tenant/amp/entityid/BBfcpPq_m4_h400_w600.png'
    },
    {
      id: 1, name: 'John Smith', date: 'Sep 5, 1986',
      content: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.',
      likes: 65, ammountComments: 1322, lastUpdate: '6 days', avatarUrl: 'https://d3rt1990lpmkn.cloudfront.net/unbranded/37f615e5ec794b796556f99c608b6e283dc27286',
      imageUrl: 'https://img.stb.s-msn.com/usappex/tenant/amp/entityid/AA9yPlh_m4_h400_w600.jpg'
    },
    {
      id: 1, name: 'Christ', date: 'November 4, 1993',
      content: 'Hello, World!',
      likes: 545, ammountComments: 1322, lastUpdate: '6 days', avatarUrl: 'https://d3rt1990lpmkn.cloudfront.net/unbranded/c0a1734e77ce741761bee6a4f788865a48ba92b6',
      imageUrl: 'https://img.stb.s-msn.com/usappex/tenant/amp/entityid/AA9ySKy_m4_h400_w600.jpg'
    },
    {
      id: 1, name: 'Mr. Nice', date: 'November 5, 1955',
      content: "Do you struggle to build your chest? Then you've come to the right place. Sometimes your pecs just need a special type of TLC in the form of heavy weights, moderate weights, and challenging body weight exercises, which is exactly what this program provides.",
      likes: 6, ammountComments: 12, lastUpdate: '6 days', avatarUrl: 'https://d3rt1990lpmkn.cloudfront.net/unbranded/37f615e5ec794b796556f99c608b6e283dc27286',
      imageUrl: 'https://img.stb.s-msn.com/usappex/tenant/amp/entityid/BBfckaV_m4_h400_w600.jpg'
    }
  ];

  public slides: Slide[] = [
    {
      title: "Compete against the global elites",
      description: "Get <b>inspired</b> to increase your daily steps or cardio score with new, personalized competitive leaderboard profiles who share your age, gender and BMI. One matches your activity level, and one is within the top 25% of people like you",
      imageUrl: "img/global.png",
    },
    {
      title: "Get out and explorer with Microsoft Band 2 and the Explore tile",
      description: "GPS and altimeter/barometer tracks your path, elevation change, and more. Smart alerts remind you to stay hydrated and refuel. Drop points of interest as you go to remember exploration highlights.",
      imageUrl: "http://ionicframework.com/dist/preview-app/www/img/ica-slidebox-img-2.png",
    }
  ];

  constructor() {
  }
}