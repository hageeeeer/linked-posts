import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading';
import PostItem from '../components/PostItem';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function PostDetails() {
    const {id} = useParams()

    const [isLoading, setLoading] = useState(false);
      const [post,setPost] = useState({})
    
      async function getPost() {
        setLoading(true);
        try {
          const { data } = await axios.get(
            `https://linked-posts.routemisr.com/posts/${id}`,
            {
              headers: {
                token: localStorage.getItem("token"),
              },
            },
          );
          setPost(data?.post);
          
          
        } catch (error) {
          toast.error(error.message);
        } finally {
          setLoading(false);
        }
      }
    
      useEffect(()=>{
        getPost()
      },[])
  if(isLoading)
     return <Loading></Loading>
 
   return <div>
     <PostItem postItem={post}  isHome={false}></PostItem> 
   </div>;
}
