import { categoriesString, cities, services } from "@/constants/String";
import CategoryCard from "@/module/CategoryCard";
import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";

const HomePage = () => {
    return (
        <div className=' container' >
            <div className=" mt-16" >
                <h1 className=" font-bold text-2xl md:text-4xl text-center text-Green" >Property Purchase and Rental System</h1>
                <ul className="flex flex-wrap justify-center gap-x-2 md:gap-x-4 mt-5 md:mt-8" > 
                    {
                        services.map( (i) => (
                            <li key={ i } className="flex items-center gap-x-1 text-xs md:text-base px-2 py-1 bg-Lorange rounded"  >
                                <FiCircle />
                                <span>{ i }</span>
                            </li>
                        ) )
                    }
                </ul>
            </div>
            <div className="flex flex-wrap justify-center gap-x-5 mt-28 gap-y-10 " >
                {
                    Object.keys( categoriesString ).map( ( i ) => (
                        <CategoryCard key={ i } title={ categoriesString[ i ] } name={ i } />
                    ) )
                }
            </div>
            <div className=" mt-32 flex flex-col justify-center items-center" >
                <h3 className="text-xl md:text-2xl mb-9 font-bold" >Popular Cities</h3>
                <ul className="flex flex-wrap justify-between gap-x-4 gap-y-3" >
                    {
                        cities.map( (i) => (
                            <li key={ i } className="flex items-center gap-x-1 text-xs md:text-base px-2 py-1 bg-orange rounded"  >
                                <FaCity />
                                <span>{ i }</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default HomePage;