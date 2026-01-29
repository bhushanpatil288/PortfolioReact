import { Link } from "react-router-dom"
function About() {
  return (
    <>
        <div className="container mx-auto select-none hero-heading w-full mt-15  text-white px-10 py-10 bg-black flex  justify-between top-deco bot-deco">
           <div className="px-10 py-10">
             <div>
              <h2 className=" text-2xl font-semibold">
                I'm Bhushan
                — a developer in progress, a foundation-builder, and someone serious about long-term growth.
              </h2>
              <p className="mt-10 text-gray-300">
                I chose full-stack development because I’ve always been fascinated by how computers and systems work under the hood. Instead of chasing trends, I’m focused on building strong core skills in backend development, databases, and computer science fundamentals.
              </p>
              <p className="mt-5 text-gray-300">
                I’ve gone through phases of doubt, procrastination, and feeling “behind” — but I approach challenges by learning, improving, and pushing forward anyway. Whether it’s coding, fitness, communication, or creativity, I’m working toward becoming a more disciplined and capable version of myself.
              </p>
              <p className="mt-5 text-gray-300">
                My goal is simple: <br />
                To become a developer who can build real products, solve real problems, and teach others clearly.
              </p>
              <p className="mt-5 text-gray-300">Still learning. Still building. Still leveling up.</p>
            </div>

            <div className="mt-10 flex gap-3 justify-end">
              <p className="flex item-center justify-center mt-3 font-semibold">
                Know more about me
              </p>
              <Link to='/about'>
                <button className="custom-btn">About</button>
              </Link>
            </div>
           </div>
        </div>
    </>
  )
}

export default About
