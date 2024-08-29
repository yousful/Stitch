import Hero from "./Hero";
import Review from "./Review";
import TopRated from "./TopRated";
import OurDiffernce from "./OurDiffernce";
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
