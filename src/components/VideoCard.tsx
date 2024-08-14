

function VideoCard() {
  return (
    <div className="grid grid-cols-4 gap-6 h-[30vh] m-16 text-center ">
       <div className=" rounded-lg  border ">
       <img src="/imgone.jpg" alt="image" className=" w-full h-full object-cover" />
       </div>
       <div className=" rounded-lg  border ">
            <img src="/imgtwo.jpg" alt="image" className=" w-full h-full object-cover" />

       </div>
       <div className=" rounded-lg  border">
       <img src="/imgthree.jpg" alt="image" className=" w-full h-full object-cover" />

       </div>
       <div className=" rounded-lg  border">
       <img src="/imgfour.jpg" alt="image" className=" w-full h-full object-cover" />

       </div>
    </div>
  )
}

export default VideoCard