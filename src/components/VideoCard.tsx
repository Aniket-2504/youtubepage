


export function VideoCard(props: any) {
  return (
    <div className="p-3">
      <img src={props.image} alt="image" className="rounded-xl border" />
      <div className="grid grid-cols-12 pt-3">
        <div className="col-span-1">
          <img
            className={"rounded-full h-10 w-10 object-cover"}
            src={props.image}
            alt="img"></img>
        </div>
        <div className="col-span-11 pl-3">
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
  )
};

