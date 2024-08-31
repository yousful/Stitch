import Hero from "./home/Hero";
import Review from "./home/Review";
import TopRated from "./home/TopRated";
import OurDiffernce from "./home/OurDiffernce";
import Popular from "./home/Popular";
import News from "./home/News";
import WhatClientSay from "./home/WhatClientSay";
function Home() {
  return (
    <main className='min-h-screen h-full pl-[4rem] pr-[4.5rem]'>
      <Hero />
      <Review />
      <TopRated />
      <OurDiffernce />
      <Popular />
      <News />
      <WhatClientSay />
    </main>
  );
}

export default Home;
