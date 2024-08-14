


function VideoCard(props: any) {
  return (
    <div>
      <img src={props.image} alt="image" className="rounded-xl" />
      <div className="grid grid-cols-12 pt-8">
        <div className="col-span-1">
          <img
            className={"rounded-full h-20 w-20 object-cover"}
            src={props.image}
            alt="img"></img>
        </div>
        <div className="col-span-11 pl-1">
            <div>
            {props.title}
            </div>
            <div className="col-span-11  text-gray-400 text-base">
           {props.author}
        </div>
        <div className="col-span-11  text-gray-500 text-base">
            {props.views} | {props.time}
        </div>
        </div>
   
      </div>
    </div>
  );
}

export default VideoCard;
