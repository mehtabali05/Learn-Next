export default function Blog() {
    const posts = [
        { id: 1, title: "First Post", content: "This is the first post." },
        { id: 2, title: "Second Post", content: "This is the second post." },
        { id: 3, title: "Third Post", content: "This is the third post." },
    ];
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Blog Page
      </h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}