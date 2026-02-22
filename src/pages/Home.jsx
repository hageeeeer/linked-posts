import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from './Loading';
import PostItem from "../components/PostItem";
import Createpost from "../components/Createpost";
import useFetch from "../hooks/useFetch";

export default function Home() {
 

  const {posts} = useFetch(`https://route-posts.routemisr.com/posts`)

  console.log(posts);
  

  return <div>
    <Createpost/>
    {posts.reverse().map(post=><PostItem isHome postItem={post} key={post?._id}></PostItem>)}
  </div>;
}
