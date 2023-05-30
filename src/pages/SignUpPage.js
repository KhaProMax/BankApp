import Button from "../components/Button";
import { useInView } from "react-intersection-observer";

function SignUpPage() {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0.26,
  });

  const classReveal = `flex h-full bg-custom-gray flex-col items-center justify-center transition-all duration-700 ${!inView && 'opacity-0 translate-y-1/4'}`;

  return (
    <div ref={ref} className="h-80">
      <div className={classReveal}>
        <div className="max-w-xl text-white font-semibold text-3xl mb-12">
          The best day to join Bankist was one year ago. The second best is
          today!
        </div>
        <Button className="font-medium text-black px-6 py-3 pb-2.5">
          Open your free account today!
        </Button>
      </div>
    </div>
  );
}

export default SignUpPage;
