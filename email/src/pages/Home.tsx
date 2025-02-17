import CardBasic from "../components/CardBasic";
import { CardsForHome } from "../constants";

const Home = () => {
  return (
    <div className=" relative">
      <div className="relative min-h-screen flex flex-col ">
        <div className="w-[60%] mx-auto text-center">
          <div
            className="text-6xl font-extrabold text-neutral-950 bg-gradient-to-r 
          from-blue-900 via-yellow-900 to-teal-950 inline-block text-transparent bg-clip-text mt-[200px]"
          >
            The Minimalist, <br /> AI powered email client.
          </div>
          <div className="flex justify-center items-center">
            <div className="text-xl text-neutral-700 w-[70%] mt-2 ">
              Normal Human is a minimalistic, AI-divowered email client that
              empowers you to manage your email with ease.
            </div>
          </div>
          <div className="space-x-2 mt-3">
            <button className="p-2 bg-blue-800 border-whote rounded-lg text-white hover:bg-blue-600">Get Started</button>
            <button className="p-2 bg-blue-100 border-whote rounded-lg text-black hover:bg-blue-200">Learn More</button>
          </div>
          <div className="flex space-x-4">
            {
                CardsForHome.map((item) => (
                    <CardBasic title={item.title} description={item.description}/>
                ))
            }
          </div>
        </div>
        {/* Grid background */}
        <div
          className="absolute -z-10 inset-0 h-1/2 w-full  
            bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:20px_20px]"
        />
      </div>
    </div>
  );
};

export default Home;
