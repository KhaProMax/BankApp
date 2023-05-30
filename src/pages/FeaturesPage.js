import { useInView } from "react-intersection-observer";
import { loremIpsum } from "react-lorem-ipsum";
import cardImage from "../img/card.jpg";
import digitalImage from "../img/digital.jpg";
import growImage from "../img/grow.jpg";
import { FiMonitor, FiTrendingUp, FiCreditCard } from "react-icons/fi";

function FeaturesPage() {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0.1,
  });

  const featureContents = [
    {
      logo: <FiMonitor />,
      title: "100% digital bank",
      content: loremIpsum(),
      image: cardImage,
    },
    {
      logo: <FiTrendingUp />,
      title: "Watch your money grow",
      content: loremIpsum(),
      image: digitalImage,
      isReverse: true,
    },
    {
      logo: <FiCreditCard />,
      title: "Free debit card included",
      content: loremIpsum(),
      image: growImage,
    },
  ];

  const renderedContent = featureContents.map((item, index) => {
    return (
      <div key={index} className={`flex ${item.isReverse && "flex-row-reverse"} mb-4`}>
        <div className="w-2/4 flex-1 p-8">
          <img
            src={item.image}
            alt="feature_image"
            className="w-full"
          />
        </div>

        <div className="flex-1 text-xs font-light items-center px-16 py-8">
          <p className="inline-block p-4 mb-4 text-xl text-primary-color bg-primary-opacity-color border rounded-full">
            {item.logo}
          </p>
          <br />
          <p className="mb-4 text-lg font-bold">{item.title}</p>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return (
    <div
      ref={ref}
      id="features"
      className={`px-auto flex flex-col justify-center`}
    >
      {/* <div
        className={`transition-all duration-700`}
      > */}
      <div
        className={`transition-all duration-700 ${
          !inView && "opacity-0 translate-y-1/4"
        }`}
      >
        <h1 className="max-w-3xl my-20 text-4xl mx-auto font-medium">
          <p className="mb-4 text-lg font-semibold text-primary-color">
            FEATURES
          </p>
          Everything you need in a modern bank and more.
        </h1>
        <div className="mx-36">{renderedContent}</div>
      </div>
    </div>
  );
}

export default FeaturesPage;
