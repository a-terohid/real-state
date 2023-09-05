import Link from "next/link";
import Image from "next/image";
import { Capitaliz } from "@/utils/capitalize";


function CategoryCard({ name, title }) {  

  return (
    <div className=" shadow-2xl font-bold overflow-hidden px-4 py-3  rounded-2xl" >
      <Link 
            href={`/advertisments?category=${name}`}
            className="flex flex-col items-center gap-y-2 ">
        <Image
          src={`/img/${name}.png`}
          alt={ title }
          width={ 240 }
          height={ 144 }
          priority={ true }
          className=" rounded-2xl"
        />
        <p>{ Capitaliz( title ) }</p>
      </Link>
    </div>
  );
}
export default CategoryCard;