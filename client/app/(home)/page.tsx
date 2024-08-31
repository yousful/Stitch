import Hero from "./Hero";
import OurDiffernce from "./OurDiffernce";
import Review from "./Review";
import TopRated from "./TopRated";

function Home() {
  return (
    <main className='min-h-screen h-full pl-[2rem]  pr-[2rem]'>
      <Hero />
      <Review />
      <TopRated />
      <OurDiffernce />
    </main>
  );
}

export default Home;
