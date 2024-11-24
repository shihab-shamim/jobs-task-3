import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles
// ..
AOS.init()

const Home = () => {
  return (
    <div className="min-h-[25vw]">
      <h2
        data-aos="flip-left"
        data-aos-duration="1500"
        className="md:text-6xl text-xl font-semibold md:my-16 text-center text-blue-600 uppercase"
      >
        Welcome to <br /> Property Management Dashboard
      </h2>
    </div>
  )
}

export default Home
