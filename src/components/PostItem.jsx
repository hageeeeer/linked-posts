import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";
import { formateDate } from "../utilites/formattedDate";
import CommentItem from "./CommentItem";
import { NavLink } from "react-router-dom";

export default function PostItem({ postItem, isHome }) {
  const { image, body, user, createdAt } = postItem;

  const firstComment = postItem.comments?.[0];

  const STATIC_IMAGE = "https://static.thenounproject.com/png/363639-200.png";

  return (
    <Card className="md:w-1/2 mx-auto my-10 w-full bg-gray-500 p-5">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={60}
          radius="full"
          src={user?.photo}
          width={60}
        />
        <div className="flex flex-col">
          <p className="text-md">{user?.name}</p>
          <p className="text-small text-default-500">
            {formateDate(createdAt)}
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <img src={image} className="w-full" alt="" />
        <p className="my-3">{body}</p>
      </CardBody>
      <Divider />

      <CardFooter>
        <div className="flex justify-between text-center w-full">
          <div>
            <i className="fa-solid fa-thumbs-up txet-white font-bold"></i>
            <p>like</p>
          </div>
          <div>
            <i className="fa-solid fa-comment txet-white font-bold"></i>
            <p>comments</p>
          </div>
          <div>
            <i className="fa-solid fa-share txet-white font-bold"></i>
            <p>share</p>
          </div>
        </div>
      </CardFooter>
      <Divider />

      {isHome && (
        <NavLink to={`/postdetails/${postItem._id}`} className="text-blue-600">
          show more comments
        </NavLink>
      )}

      {isHome && firstComment && <CommentItem comment={firstComment} />}

      {!isHome &&
        postItem?.comments?.map((com) => (
          <CommentItem key={com?.key} comment={com}></CommentItem>
        ))}
    </Card>
  );
}
