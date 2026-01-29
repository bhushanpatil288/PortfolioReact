import computerImage from "/images/computer.webp"

function SocialLinks() {
  return (
    <div className='mt-10 container mx-auto relative px-10'>
      <div className='computerImage-container overflow-hidden'>
        <img src={computerImage} className="grayscale relative bot-deco top-deco"></img>
      </div>
    </div>
  )
}

export default SocialLinks
