// This element has a parameterized route segment (:postID)

import type { Route } from "./+types/post";

// Mandatory exports for data loading and actions

export async function loader({params}: Route.LoaderArgs) {
    let postID = params.postID;
    return { postID };
} //This loader extracts the postID from the route parameters and returns it as part of the loader data.

export async function action() {

}

export default function Post({loaderData}: Route.ComponentProps) {
  return (
    <div>
        <p>
            Post ID: {loaderData.postID}
        </p>
    </div>
  );
}

