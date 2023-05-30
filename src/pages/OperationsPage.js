import Button from "../components/Button";
import { useInView } from "react-intersection-observer";
import { BiUserX, BiUpload, BiHomeAlt } from "react-icons/bi";
import { useState } from "react";

function OperationsPage() {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0.26,
  });

  const [tab, setTab] = useState(1);

  const operations = [
    {
      id: 1,
      logo: <BiUpload />,
      logoStyle: "text-secondary-color bg-secondary-opacity-color",
      title: "Tranfser money to anyone, instantly! No fees, no BS.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      logo: <BiHomeAlt />,
      logoStyle: "text-primary-color bg-primary-opacity-color",
      title: "Buy a home or make your dreams come true, with instant loans.",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      logo: <BiUserX />,
      logoStyle: "text-tertiary-color bg-tertiary-opacity-color",
      title: "No longer need your account? No problem! Close it instantly.",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const handleClick = (id) => {
    setTab(id);
  };

  const renderedOperation = (tab) => {
    const operation = operations.filter((item) => {
      return item.id === tab;
    })[0];

    return (
      <div className="relative bg-stone-50 p-16 -translate-y-5 z-[-1]">
        <div className="flex w-full justify-center items-center mb-4">
          <div
            className={`w-16 h-16 border rounded-full text-3xl ${operation.logoStyle} p-4 mr-8`}
          >
            {operation.logo}
          </div>
          <h1 className="my-4 text-lg font-bold flex-1 items-center">
            {operation.title}
          </h1>
        </div>

        <div className="ml-24">{operation.content}</div>
      </div>
    );
  };

  return (
    <div
      ref={ref}
      id="operations"
      className={`p-32 flex flex-col justify-center p-28`}
    >
      <div
        className={`transition-all duration-700 ${
          !inView && "opacity-0 translate-y-1/4"
        }`}
      >
        <h1 className="mb-20 text-4xl px-32 font-medium">
          <p className="mb-4 text-lg font-semibold text-primary-color">
            OPERATIONS
          </p>
          Everything as simple as possible, but no simpler.
        </h1>

        <div className="flex justify-center text-xs font-medium text-black">
          <Button
            onClick={() => handleClick(1)}
            className="mx-4 px-8 bg-secondary-color py-3 pb-2.5 hover:bg-secondary-darker-color"
            style={{
              transform: `translateY(${tab === 1 ? "-6px" : "0"})`,
              transition: "all 0.5s",
            }}
          >
            <span className="font-semibold">01</span> Instant Transfers
          </Button>
          <Button
            onClick={() => handleClick(2)}
            className="mx-4 px-8 py-3 pb-2.5 hover:bg-primary-darker-color"
            style={{
              transform: `translateY(${tab === 2 ? "-6px" : "0"})`,
              transition: "all 0.5s",
            }}
          >
            <span className="font-semibold">02</span> Instant Loans
          </Button>
          <Button
            onClick={() => handleClick(3)}
            className="mx-4 px-8 bg-tertiary-color py-3 pb-2.5 hover:bg-tertiary-darker-color"
            style={{
              transform: `translateY(${tab === 3 ? "-6px" : "0"})`,
              transition: "all 0.5s",
            }}
          >
            <span className="font-semibold">03</span> Instant Closing
          </Button>
        </div>

        {renderedOperation(tab)}
      </div>
    </div>
  );
}

export default OperationsPage;
