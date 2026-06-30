import Link from "next/link";
import Posts from "./components/posts";
import { Suspense } from "react";

export default async function Blog() {
    const promise = fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center my-12">
        Blog Page
      </h1>
        {/* <div > */}
            <Suspense fallback={<div>Loading posts...</div>}>
                <Posts promise={promise} />
            </Suspense>
        {/* </div> */}
    </div>
  );
}