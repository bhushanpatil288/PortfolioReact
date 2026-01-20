import "../../../assets/css/main/heroSection.css";

function HeroSection() {
  return (
    <section>
      <div className="container flex mx-auto sm:mt-20 flex-wrap gap-10 xl:gap-0">
        {/* Hero Heading */}
        <div className="hero-heading w-full xl:w-1/2 text-white px-10 py-10 bg-black flex flex-col justify-between">
         <div>
           <h1 className=" text-5xl font-semibold">
            I'm Bhushan <br />
            Full Stack Developer <br />
            Based in India
          </h1>
          <p className="mt-10 text-gray-300">
            Hi, I'm Bhushan Patil, a passionate Full-Stack Developer based in
            India. I specialize in crafting intuitive, user-centered digital
            experiences that merge beautiful design with robust functionality
            across the entire stack.
          </p>
         </div>

          <div className="mt-10 flex gap-3 justify-end">
            <p className="flex item-center justify-center mt-3 font-semibold">
              Know more about me
            </p>
            <a href="#">
              <button className="custom-btn">About</button>
            </a>
          </div>
        </div>

        {/* hero code block */}
        <div className="w-full px-6 xl:w-1/2">
          <pre className="code-block bg-black border border-black p-6 text-sm overflow-x-auto">
            <code className="font-mono text-slate-200">
              <span className="text-indigo-400 font-bold">const</span>{" "}
              <span className="text-cyan-400 font-bold">bio</span>{" "}
              <span className="text-indigo-400 font-bold">=</span>{" "}
              <span className="text-slate-200">{"{"}</span>
              {"\n\n"}
              {"  "}
              <span className="text-emerald-400">name</span>
              <span className="text-slate-400">:</span>{" "}
              <span className="text-white font-bold">"Mayur Patil"</span>
              <span className="text-slate-400">,</span>
              {"\n\n"}
              {"  "}
              <span className="text-emerald-400">role</span>
              <span className="text-slate-400">:</span>{" "}
              <span className="text-white font-bold">
                "Backend-Focused Full Stack Developer"
              </span>
              <span className="text-slate-400">,</span>
              {"\n\n"}
              {"  "}
              <span className="text-emerald-400">about</span>
              <span className="text-slate-400">:</span>{" "}
              <span className="text-slate-200">[</span>
              {"\n"}
              {"    "}
              <span className="text-white font-bold">
                "Enjoys understanding systems from the ground up"
              </span>
              <span className="text-slate-400">,</span>
              {"\n"}
              {"    "}
              <span className="text-white font-bold">
                "Focused on backend, databases, and CS fundamentals"
              </span>
              <span className="text-slate-400">,</span>
              {"\n"}
              {"    "}
              <span className="text-white font-bold">
                "Prefers efficient, simple solutions over flashy demos"
              </span>
              {"\n"}
              {"  "}
              <span className="text-slate-200">]</span>
              <span className="text-slate-400">,</span>
              {"\n\n"}
              {"  "}
              <span className="text-emerald-400">currentFocus</span>
              <span className="text-slate-400">:</span>{" "}
              <span className="text-slate-200">{"{"}</span>
              {"\n"}
              {"    "}
              <span className="text-emerald-400">learning</span>
              <span className="text-slate-400">:</span>{" "}
              <span className="text-slate-200">[</span>
              {"\n"}
              {"      "}
              <span className="text-white font-bold">"Backend Development"</span>
              <span className="text-slate-400">,</span>
              {"\n"}
              {"      "}
              <span className="text-white font-bold">"Database Design"</span>
              <span className="text-slate-400">,</span>
              {"\n"}
              {"      "}
              <span className="text-white font-bold">
                "Computer Science Fundamentals"
              </span>
              {"\n"}
              {"    "}
              <span className="text-slate-200">]</span>
              <span className="text-slate-400">,</span>
              {"\n\n"}
              {"    "}
              <span className="text-emerald-400">belief</span>
              <span className="text-slate-400">:</span>{" "}
              <span className="text-white font-bold">
                "Consistency beats motivation"
              </span>
              {"\n"}
              {"  "}
              <span className="text-slate-200">{"}"}</span>
              {"\n\n"}
              <span className="text-slate-200">{"}"}</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
