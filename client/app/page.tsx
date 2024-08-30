import Hero from "./home/Hero";
import Review from "./home/Review";
import TopRated from "./home/TopRated";
import OurDiffernce from "./home/OurDiffernce";
function Home() {
  return (
    <main className='min-h-screen h-full pl-[4rem] pr-[3rem]'>
      <Hero />
      <Review />
      <TopRated />
      <OurDiffernce />
    </main>
  );
}

export default Home;
