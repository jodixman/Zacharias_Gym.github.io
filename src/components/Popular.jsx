
import styles from "../style"
import { popular } from "../constants"

const Popular = () => {
  return (
    <section id="popular" className="flex flex-wrap flex-col text-white mt-20">
        {/* Top[Title] */}
        <h1 className="">Popular Exceises</h1>
        {/* Bottom[Card] */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10 w-[full]">
            {popular.map((popul) => (
                <div key={popul.id} className="relative mt-10 cursor-pointer hover:scale-110 transition group duration-500 md:w-[30%]">
                    <img src={popul.Image} alt={popul.id}  className={``}/>
                    <p className="text-5xl absolute z-[99] bottom-0 py-4 group-hover:bg-black w-full group-hover:bg-opacity-70 bg-transparent transition duration-500">{popul.title}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Popular