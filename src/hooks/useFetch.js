
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useFetch(url) {
  
const {data:posts,isLoading} = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    select: (data) => data?.data?.data?.posts
})

  async function getPosts() {
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  }

  
  return { posts, isLoading };
}
