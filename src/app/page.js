import HomeMenu from "../components/layout/HomeMenu"
import SectionHeaders from "../components/layout/SectionHeaders"
import Hero from "../components/layout/Hero"

export default function Home() {
  return (
    <>
    <Hero />
    <HomeMenu />
    <section className="text-center my-16" id="about">
      <SectionHeaders 
      subHeader = {'Our story'}
      mainHeader = {'About us'} />

      <div className="text-gray-500 mt-4 mx-auto max-w-md flex flex-col gap-4">
            <p>
            Welcome to our shop!
            At our shop, we believe in the power of pizza to bring people together. Our journey began with a passion for crafting delicious and memorable pizzas that not only satisfy your cravings but also create moments of joy and connection. Nestled
            in the heart of Delhi, we take pride in serving the community with mouthwatering pizzas made from the finest
            ingredients and a dash of love.
            </p>
            <p>
            Our shop was founded on the idea that pizza is more than just a meal, it is an experience. Our story is one of dedication to the craft, a commitment to quality, and a genuine desire to bring a slice of happiness to your table. From the crispy crust to the rich and flavorful toppings.
            </p>
      </div>
    </section>
    <section className="text-center my-8" id="contact">
      <SectionHeaders 
      subHeader={'Don\'t hesitate'}
      mainHeader={'Contact Us'}
      />
      <div className="mt-8">
      <a href="tel:+919876321230" className="text-4xl underline text-gray-500">
        +91 987 632 1230
      </a>
      </div>
    </section>
    </>
  )
}
