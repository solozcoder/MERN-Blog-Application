import { useRef, useState } from "react";
import EditorLayout from "../../components/editor/Editor";
import { usePostContentMutation } from "../../redux/services/PostApi";

const CreateBlog = () => {
  // Post Content
  const [postContent, { isLoading: isCreating }] = usePostContentMutation();

  // Variable Post
  const titleRef = useRef("");
  const captionRef = useRef("");
  const contentRef = useRef("");
  const [content, setContent] = useState("");

  // Set content from children
  const setContentFn = (content) => {
    setContent(content);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    postContent({
      title: titleRef?.current?.value,
      caption: captionRef?.current?.value,
      content,
    });
  };

  return (
    <form
      className="bg-white shadow-md rounded mx-8 my-8 px-8 py-8 border border-[#eee]"
      onSubmit={formSubmit}
    >
      <div>
        <p className="text-2xl font-semibold m-auto text-center mb-8">
          Create Your Blog's
        </p>
      </div>

      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="blogImage"
          type="file"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="blogTitle"
        >
          Blog's Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="blogTitle"
          type="text"
          placeholder="Blog's Title"
          ref={titleRef}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="blogCaption"
        >
          Blog's Caption
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="blogCaption"
          type="text"
          placeholder="Blog's Caption"
          ref={captionRef}
        />
      </div>

      <div className="mb-4">
        <EditorLayout setContent={setContentFn} />
      </div>

      <div className="mb-4">
        <button className="text-[#3466ff] hover:text-white border border-[#3466ff] rounded-lg px-3 py-2 mt-5 hover:bg-[#3466ff] transition-all duration-500">
          Add Blog's
        </button>
      </div>
    </form>
  );
};

export default CreateBlog;
