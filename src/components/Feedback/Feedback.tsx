export interface Feedback {
  rating: number;
  feedback: string;
  author: string;
}

const Feedback = (props: Feedback) => {
  const {
    rating,
    feedback,
    author,
  } = props;


  return (
    <div className="max-w-[1000px] mx-auto px-[30px] text-center">
      {
        Array(rating).fill(null).map((_, index) => (
          <i key={`${index}-star`} className='bx bxs-star text-yellow-400 text-2xl tracking-[3px] mb-4' />
        ))
      }
      <div className="text-lg text-black mb-4">
        {feedback}
      </div>
      <div className="text-sm text-gray-600">
        — {author}
      </div>
    </div>
  )
};

export default Feedback;