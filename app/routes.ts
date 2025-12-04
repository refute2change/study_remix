import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("post/:postID", "routes/post.tsx"), // Example of a dynamic route
    // layout("routes/dashboard.tsx", [ //By forcing a lyout, dashboard becomes somewhat of an abstract route, which can now be used to generate its children (aka inheritance)
    //     route("about", "routes/about.tsx"),
    //     route("contacts", "routes/contacts.tsx"),
    // ]), // Nested routes
    layout("routes/dashboard.tsx", [
        ...prefix("dash", [
            route("about", "routes/about.tsx"),
            route("contacts", "routes/contacts.tsx"),
        ])
    ]), // Nested routes using layout, but with actual prefixes
] satisfies RouteConfig;
