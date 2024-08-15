import { LeftBar } from "./LeftBar"
import { Searchbar } from "./Searchbar"

export const Appbar =()=>{

    return (

        <div className="flex justify-between pt-4 align-middle pb-11 items-center p-6">
                  
            <div >
            <img src="./youtube.png" alt="image here " className="h-10 w-25 pl-6"  />
            </div>
            <div>
                <Searchbar/>
            </div>

            <div>
                <button className=" rounded-full bg-zinc-800 h-[5vh] w-[12vh] text-[17px] text-gray-400">SignIn</button>

            </div>
        </div>
    )

}