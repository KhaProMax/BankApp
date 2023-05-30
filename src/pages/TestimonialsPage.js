import User_1 from "../img/user-1.jpg";
import User_2 from "../img/user-2.jpg";
import User_3 from "../img/user-3.jpg";
import Button from "../components/Button";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

function TestimonialsPage() {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0.26,
  });

  const messages = [
    {
      id: 1,
      title: "Best financial decision ever!",
      message:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpaqui officia deserunt mollit anim id est laborum. Ut enim adminim veniam, quis nostrud exercitation ullamlaboris nisi utaliquip ex ea commodo cons.",
      userName: "Aarav Lynn",
      userAddress: "San Francisco, USA",
      userImage: User_1,
    },
    {
      id: 2,
      title: "The last step to becoming a complete minimalist",
      message:
        "Quisquam itaque deserunt ullam, quia ea repellendus provident,ducimus neque ipsam modi voluptatibus doloremque, corruptilaborum. Incidunt numquam perferendis veritatis neque repellendus.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      userName: "Miyah Miles",
      userAddress: "London, UK",
      userImage: User_2,
    },
    {
      id: 3,
      title: "Finally free from old-school banks",
      message:
        "Debitis, nihil sit minus suscipit magni aperiam vel teneturincidunt commodi architecto numquam omnis nulla autem,necessitatibus blanditiis modi similique quidem. Odio aliquamculpa dicta beatae quod maiores ipsa minus consequatur error sunt.",
      userName: "Francisco Gomes",
      userAddress: "Lisbon, Portugal",
      userImage: User_3,
    },
  ];

  const [curSlide, setCurSlide] = useState(1);
  const renderedMessage = messages.map((message, index) => {
    return (
      <div
        key={index}
        style={{ transform: `translateX(${(message.id - curSlide) * 100}%)` }}
        className={`slide absolute flex top-0 h-72 w-full items-center justify-center transition-all duration-700`}
      >
        <div className="testimonial relative w-8/12">
          <div className="absolute -top-8 -left-12 text-primary-color text-9xl z-[-1]">
            &#x201C;
          </div>
          <h5 className="font-medium text-xl mb-8">{message.title}</h5>
          <p className="font-thin text-sm text-gray-600 mb-8">
            {message.message}
          </p>
          <div className="grid grid-cols-[max-content_1fr] gap-x-4 ml-4">
            <img
              src={message.userImage}
              alt=""
              className="object-cover rounded-full w-16 row-span-2 row-start-1 auto"
            />
            <h6 className="font-medium text-sm">
              {message.userName}
            </h6>
            <p className="font-light text-xs">{message.userAddress}</p>
          </div>
        </div>
      </div>
    );
  });

  const handleClickButton = (direction) => {
    if (curSlide === 1 && direction === -1) {
      return;
    }
    if (curSlide === 3 && direction === 1) {
      return;
    }
    setCurSlide(curSlide + direction);
  };

  const handleClickDot = (index) => {
    setCurSlide(index);
  };

  const renderedDots = messages.map((message, index) => {
    return (
      <button
        key={index}
        onClick={() => handleClickDot(message.id)}
        className="mr-1.5 w-2 h-2 bg-slate-400 rounded-full"
        style={{ backgroundColor: `${curSlide === message.id ? "black" : ""}` }}
      >
        {" "}
      </button>
    );
  });

  const classReveal = `flex flex-col items-center transition-all duration-700 ${
    !inView && "opacity-0 translate-y-1/4"
  }`;

  return (
    <div
      ref={ref}
      id="testimonials"
      className="section py-28 px-8"
    >
      <div className={classReveal}>
        <div className="title mb-20 w-full max-w-3xl text-4xl font-medium">
          <p className="mb-4 text-lg font-semibold text-primary-color">
            NOT SURE YET?
          </p>
          <p>Millions of Bankists are already making their lifes simpler.</p>
        </div>

        <div className="slider relative h-72 w-full max-w-3xl flex overflow-hidden">
          {renderedMessage}

          <Button
            onClick={() => handleClickButton(-1)}
            className="left_button absolute top-1/2 py-3 px-4 left-2 z-40 "
            style={{ opacity: `${curSlide === 1 ? 0.5 : ""}` }}
          >
            &larr;
          </Button>
          <Button
            onClick={() => handleClickButton(1)}
            className="right_button absolute top-1/2 py-3 px-4 right-8 z-40 "
            style={{ opacity: `${curSlide === 3 ? 0.5 : ""}` }}
          >
            &rarr;
          </Button>
          <div className="dots flex absolute left-1/2 bottom-2 -translate-x-1/2">
            {renderedDots}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsPage;
