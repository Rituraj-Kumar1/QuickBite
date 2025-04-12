import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";
const Grocery = lazy(() => { return import("./components/Grocery") });
const Main = () => {
    const [userName, setuserName] = useState();
    useEffect(() => {
        const user = {
            name: "Nitesh",
            password: "xyz"
        }
        setuserName(user.name);
    }, [])
    return (
        <div className="main">
            {/* wrap whole app inside Provider and give key as store value */}
            <Provider store={appStore}>
                <UserContext.Provider value={{ loggedInUser: userName, setuserName }}> {/**we can chose in which component our context value should be what by wrapping only that portion required; nesting is also allowed || passed setusername into context for input box on home page*/}
                    <Header />
                    <Outlet />

                </UserContext.Provider>
            </Provider>
        </div >
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading lazy grocery....</h1>}>
                    <Grocery />
                </Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />);
