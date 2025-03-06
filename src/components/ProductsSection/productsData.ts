
export interface ProductData {
  name: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
};

export const productsData: ProductData[] = [
  {
    name: 'Digital downloads',
    title: 'Ebooks, templates, and any file type you can think of',
    description: 'Have an ebook to sell? Templates you love? Podia makes it easy to spin up a sales page and sell ebooks, templates, audio files, video files, spreadsheets, and any other file type.',
    image: '/digital-downloads.jpg',
    buttonText: 'Learn more about downloads',
  },
  {
    name: 'Online courses',
    title: 'Beautiful online courses you can build in moments',
    description: 'Make a beautiful online course for your customers. Podia hosts your course. That means all the lessons, files, and videos you want handled for you.',
    image: '/online-courses.jpg',
    buttonText: 'Learn more about courses',
  }
];

