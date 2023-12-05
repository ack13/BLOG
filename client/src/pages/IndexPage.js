import Post from "../Post";
import {useEffect, useState} from "react";

export default function IndexPage() {
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch('https://blogapp-z0o6.onrender.com/post').then(response=>{
            response.json().then(posts=>{
                setPosts(posts);
                console.log(posts);
            });
        });

    },[]);
  return (
    <>
   {posts.length>0 && posts.map(post=>(
           <Post {...post} key={post._id}/>
   ))}

    </>
  )
}