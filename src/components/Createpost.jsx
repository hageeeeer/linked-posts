import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useRef, useState } from "react";

export default function Createpost() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imagePreview, setImagepreview] = useState(null);
  const bodyRef = useRef(null);
  const imgRef = useRef(null);

  function handleCloseMenu() {
    imgRef.current.value = "";
    bodyRef.current.value = "";
    setImagepreview(null);
    setMenuOpen(false);
  }

  function handleUploadImage(e) {
    const file = URL.createObjectURL(e.target.files[0]);
    if (file) {
      setImagepreview(file);
    }
  }

  function handlePost() {
    const formData = new FormData();
    if (bodyRef.current.value) formData.append("body", bodyRef.current.value);
    if (imgRef.current.files?.[0])
      formData.append("image", imgRef.current.files[0]);

    return axios.post(`https://linked-posts.routemisr.com/posts`, formData, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
  }

  const { mutate, data, isPending } = useMutation({
    mutationFn: handlePost,
    onSuccess: () => {
      handleCloseMenu();
    },
  });

  console.log("data", data);

  return (
    <div>
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <input
          onClick={() => setMenuOpen(true)}
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Title"
          type="text"
          ref={bodyRef}
        />
        <input
          ref={imgRef}
          type="file"
          onChange={handleUploadImage}
          className="hidden"
          id="imageFile"
        />
        {/* image preview */}
        {imagePreview && (
          <div className="relative">
            {" "}
            <img src={imagePreview} alt="" className="w-full" />
            <i
              onClick={() => {
                setImagepreview(null);
                imgRef.current.value = "";
              }}
              className="fa-solid fa-close fa-3x absolute top-0 right-0"
            ></i>
          </div>
        )}
        {/* icons */}
        {menuOpen && (
          <div className="icons flex text-gray-500 m-2">
            <label htmlFor="imageFile">
              <svg
                className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            </label>
          </div>
        )}
        {/* buttons */}
        {menuOpen && (
          <div className="buttons flex">
            <div
              className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
              onClick={handleCloseMenu}
            >
              Cancel
            </div>
            <div
              onClick={mutate}
              className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            >
              {isPending ? "postinh..." : "Post"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
