// import Hero from "./Hero";
// import OurDiffernce from "./OurDiffernce";
// import Review from "./Review";
// import TopRated from "./TopRated";

import Hero from "./Hero";
import News from "./News";
import Newsletter from "./Newsletter";
import OurDiffernce from "./OurDiffernce";
import Popular from "./Popular";
import Review from "./Review";
import TopRated from "./TopRated";
import WhatClientSay from "./WhatClientSay";

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
      <Newsletter />
    </main>
  );
}

export default Home;
