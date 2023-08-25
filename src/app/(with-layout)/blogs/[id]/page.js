import { useParams, useSearchParams } from "next/navigation";

const SingleBlog = ({ params }) => {
  /* console.log(params.segments);
  const [year, id] = params.segments || [];
  const params2=useParams();
  const searchParams2=useSearchParams();
  console.log(params2.segments,searchParams2.get("title")); */
  return (
    <div>
      SingleBlogs{params.id}
      {/* <h1>
        SingleBlog{year || new Date().getFullYear()} for {id}
      </h1>
      <br />
      {searchParams.title} */}
    </div>
  );
};

export default SingleBlog;
