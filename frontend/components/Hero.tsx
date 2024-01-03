import Title from "@/components/UI/Title";
import { montserratMedium } from "@/public/fonts";

const Hero = () => {
  return (
    <div>
      <Title name="WEVENTS"></Title>

      <div className="line w-[52rem] mb-[2rem]"></div>

      <p
        className={`${montserratMedium.className} text-4xl mr-[2.5rem] mb-[2.5rem]`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Elit scelerisque
        mauris pellentesque pulvinar pellentesque habitant morbi tristique
        senectus. Vitae et leo duis ut diam quam nulla porttitor massa. A diam
        sollicitudin tempor id eu nisl nunc mi ipsum. At quis risus sed
        vulputate odio ut enim blandit. Sit amet luctus venenatis lectus magna
        fringilla. Placerat orci nulla pellentesque dignissim enim sit. Aliquam
        nulla facilisi cras fermentum odio.
      </p>
      <button className="btn_active mr-[3rem]">Get started</button>
      <button className="btn mb-[2rem]">Learn More</button>

      <div className="line w-[42rem]"></div>
    </div>
  );
};

export default Hero;
