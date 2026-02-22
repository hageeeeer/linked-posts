import { CardHeader } from '@heroui/card'
import React from 'react'
import { formateDate } from '../utilites/formattedDate'

export default function CommentItem({comment}) {
    
  const STATIC_IMAGE="https://static.thenounproject.com/png/363639-200.png"
 
  return (
     <CardHeader className="flex  justify-between w-full">
        <div className='flex bg-red-400 w-2/3 gap-2 items-center'>
        <img
          alt="heroui logo"
          height={60}
          radius="full"
          src={comment.commentCreator?.photo}
          width={60}
          onError={(e)=>e.target.src=STATIC_IMAGE}
        />
        <div className="flex flex-col w-full">
          <p className="text-md">{comment.commentCreator?.name}</p>
          <p className="text-small text-default-500">{formateDate(comment.createdAt)}</p>
          <p className=" rounded-4xl  w-full text-black">{comment?.content}</p>
        </div>
        </div>
       <i class="fa-solid fa-ellipsis"></i>
      </CardHeader>
  )
}
