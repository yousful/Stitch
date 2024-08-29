import Hero from "./Hero";
import Review from "./Review";
import TopRated from "./TopRated";
function Home() {
  return (
    <main className='min-h-screen h-full pl-[2rem]  pr-[2rem]'>
      <Hero />
      <Review />
      <TopRated />
    </main>
  );
}

export default Home;
