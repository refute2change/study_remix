// This element has a parameterized route segment (:postID)

import { Form, redirect } from "react-router";
import type { Route } from "./+types/post";

// Mandatory exports for data loading and actions

export async function clientLoader({params}: Route.LoaderArgs) {
    let postID = params.postID;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
    return await res.json();
} //This loader extracts the postID from the route parameters and fetches data from that certain API.

export async function clientAction({params}: Route.LoaderArgs) {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`, {
        method: "DELETE"
    });
    return redirect("/");
} // Action function

export default function Post({loaderData}: Route.ComponentProps) {
  return (
    <div>
        <p>
            Post ID: {loaderData.title}
        </p>
        <p>
            Body: {loaderData.body}
        </p>

        <Form method = "delete">
            <button type = "submit"> Delete </button>
        </Form>
    </div>
  );
}

