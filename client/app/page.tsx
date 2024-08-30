import Hero from "./home/Hero";
import Review from "./home/Review";
import TopRated from "./home/TopRated";
import OurDiffernce from "./home/OurDiffernce";
import Popular from "./home/Popular";
function Home() {
  return (
    <main className='min-h-screen h-full pl-[4rem] pr-[2.8rem]'>
      <Hero />
      <Review />
      <TopRated />
      <OurDiffernce />
      <Popular />
    </main>
  );
}

export default Home;
