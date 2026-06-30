const BlogPost = async ({ params }) => {
    const ps = await params;
    console.log("PSS",ps);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        {`Post ID: ${ps.id}`}
      </h1>
      <p>{ps.content}</p>
    </div>
  );
}

export default BlogPost;