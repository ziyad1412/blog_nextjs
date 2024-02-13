import Image from "next/image";

const CommentSection = ({ name, body }: { name: string; body: string }) => {
  return (
    <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 ">
            <div className="mr-2 w-6 h-6 rounded-full">
              <Image
                src="/avatar.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{name}</p>
        </div>
      </footer>
      <p>{body}</p>
      <div className="flex items-center mt-4 space-x-4">
        <button
          type="button"
          className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
        >
          <svg
            className="mr-1.5 w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
          </svg>
          Reply
        </button>
      </div>
    </article>
  );
};

export default CommentSection;
