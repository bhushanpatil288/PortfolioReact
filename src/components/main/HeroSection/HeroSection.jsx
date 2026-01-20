import "../../../../public/css/main/heroSection.css"

function HeroSection() {
  return (
    <section>
      <div className='container mx-auto'>

        {/* Hero Heading */}
        <div className="hero-heading xl:w-1/2 text-white px-10 py-10 mt-20 bg-black">
          <h1 className=' text-5xl font-semibold'>
              I'm Bhushan <br />
              Full Stack Developer <br />
              Based in India
          </h1>
          <p className="mt-10">
            Hi, I'm Bhushan Patil, a passionate Full-Stack Developer based in India. I specialize in crafting intuitive, user-centered digital experiences that merge beautiful design with robust functionality across the entire stack.
          </p>

          <div className="mt-10 flex gap-3">
            <p className="flex item-center justify-center mt-3">Know more about me</p>
            <a href="#">
              <button className="custom-btn">About</button>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
