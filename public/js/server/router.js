import { photographerProfil } from "../photographers/photographers.js";
import { photographersFactory } from "../factories/photographers/photographers-factory.js";

export const router = async () => {
    const routes = [
        { path: "/projet6-FishEye/", component: () => photographersFactory() },
        { path: "/projet6-FishEye/index.html", component: () => photographersFactory() },
        { path: "/projet6-FishEye/views/photographers.html", component: () => photographerProfil() }
    ]

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    const view = match.route.component();

    return view;
}