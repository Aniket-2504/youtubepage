import { VideoCard } from "./VideoCard";

const VIDEOS = [{
    title: "Master Rollup.js with these one video",
    image: "imgtwo.jpg",
    author: "ImranCode",
    views: "7K",
    time: "13 days ago",
},
{
    title: "How to become a senior dev",
    image: "imgfour.jpg",
    author: "ImranCode",
    views: "200K",
    time: "1 month ago",
},
{
    title: "Project Setup like senior dev",
    image: "imgthree.jpg",
    author: "ImranCode",
    views: "20K",
    time: "3 days ago",
},
{
    title: "Deployment strategies like senior dev",
    image: "imgone.jpg",
    author: "ImranCode",
    views: "70K",
    time: "20 days ago",
},
{
    title: "How to become a senior dev",
    image: "imgfour.jpg",
    author: "ImranCode",
    views: "200K",
    time: "1 month ago",
},
{
    title: "Deployment strategies like senior dev",
    image: "imgone.jpg",
    author: "ImranCode",
    views: "70K",
    time: "20 days ago",
},
{
    title: "Master Rollup.js with these one video",
    image: "imgtwo.jpg",
    author: "ImranCode",
    views: "7K",
    time: "13 days ago",
},
{
    title: "Project Setup like senior dev",
    image: "imgthree.jpg",
    author: "ImranCode",
    views: "20K",
    time: "3 days ago",
},
]

export const VideoGrid = ()=>{
    return(
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2"> 

        {VIDEOS.map(video=> 
            <div>
            <VideoCard
                title={video.title}
                image={video.image}
                author={video.author}
                views={video.views}
                time={video.time}

            ></VideoCard>
            </div>
        )}  
        </div>

    )
};