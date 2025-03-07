import { Feedback } from "../Feedback/Feedback";

export interface ProductData {
  name: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  feedback: Feedback;
};

export const productsData: ProductData[] = [
  {
    name: 'Digital downloads',
    title: 'Ebooks, templates, and any file type you can think of',
    description: 'Have an ebook to sell? Templates you love? Podia makes it easy to spin up a sales page and sell ebooks, templates, audio files, video files, spreadsheets, and any other file type.',
    image: '/digital-downloads.jpg',
    buttonText: 'Learn more about downloads',
    feedback: {
      rating: 5, 
      feedback: '"I’ve wanted to offer e-courses for a while but always felt overwhelmed with how to set it up. Podia has made it super easy."',
      author: 'Joy Cho, Oh Joy! Academy',
    },
  },
  {
    name: 'Online courses',
    title: 'Beautiful online courses you can build in moments',
    description: 'Make a beautiful online course for your customers. Podia hosts your course. That means all the lessons, files, and videos you want handled for you.',
    image: '/online-courses.jpg',
    buttonText: 'Learn more about courses',
    feedback: {
      rating: 5, 
      feedback: '"We didn’t have to stress about technical details or custom coding. Using Podia made selling our first eBook quick, efficient, and fun."',
      author: 'Matt & Steph, Plant-based food bloggers',
    },
  }
];

