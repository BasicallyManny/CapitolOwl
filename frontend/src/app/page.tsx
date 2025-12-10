

import About from "./homeComponents/about";
import Hero from "./homeComponents/hero";
export default function Home() {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center">
      <Hero />
      <About />
    </div>
  );
}
