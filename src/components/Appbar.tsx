export const Appbar =()=>{

    return (
        <div className="flex justify-between pt-4 align-middle pb-11">
            <div >
            <img src="./youtube.png" alt="image here " className="h-12 w-30 pl-6"  />
            </div>
            <div>
                <input type="text"  placeholder="search" className="p-4 rounded-l-full  bg-gray-900 h-[80%] w-[40vh]"/>
                <button className="rounded-r-full bg-gray-700 h-[80%] w-[10vh]">search</button>
            </div>

            <div>
                <button className=" rounded-full bg-gray-800 h-[5vh] w-[12vh]">SignIn Here</button>
            </div>
        </div>
    )

}