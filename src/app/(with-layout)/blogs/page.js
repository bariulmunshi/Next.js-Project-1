// "use client";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export const metadata = {
  title: "Blogs | Next Hero",
  description: "Hero Next",
};

/* const blogs = [
  {
    id: 1,
    year: 2012,
    title: "title-1",
  },
  {
    id: 2,
    year: 2012,
    title: "title-2",
  },
  {
    id: 3,
    year: 2012,
    title: "title-3",
  },
  {
    id: 4,
    year: 2012,
    title: "title-4",
  },
]; */
const BlogsPage = async () => {
  // const router = useRouter();
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const blogs = await res.json();
  return (
    <div className="container mx-auto">
      {blogs.map(({ id, body, title }) => (
        <div key={id} className="border border-blue-500 p-2 my-2">
          <h2 className="text-2xl">
            {id}. {title}
          </h2>
          <p>{body}</p>
          <Link className="inline-block mt-5" href={`/blogs/${id}`}>
            <button className="text-white px-2 py-1 bg-blue-500">
              Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
