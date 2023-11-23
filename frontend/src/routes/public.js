import { PublicLayout } from "layouts/public";
import { HomePage } from "pages/public/Home";
import ProductPage from "pages/public/product";
import ContactPage from "pages/public/contact";

import Cart from "pages/public/cart";
import Blog from "pages/public/Blog";
import BlogDetail from "pages/public/Blog/BlogDetail";
import DeliverInfo from "pages/public/DeliverInfo";
import Story from "pages/public/Story";
import StoryDetail from "pages/public/Home/Story/StoryDetail";
import Slider from "pages/public/Home/Slider";
import PostItem from "pages/public/Home/PostItem";
import Description from "pages/public/Home/Description";
import Catelog from "pages/public/Home/Catelog"
import BestSeller from "pages/public/Home/BestSeller";
import NewProducts from "pages/public/Home/NewProducts";
import Card from "pages/public/Home/NewProducts/Card";
import ForgetPassword from "pages/public/ForgetPassword";
import About from "pages/public/About";


import Following from "pages/public/Following";
import BillDetail from "pages/public/BillDetail"
import Policy from "pages/public/Policy";
import Rules from "pages/public/Rules";
import Information from "pages/public/Information";
import ProductDetailPage from "pages/public/product-detail";


export const publicRoutes = {
    path: '/',
    element: <PublicLayout />,
    children: [
        {
            path: '/',
            element: <HomePage />,
        },
        { path: '/product', element: <ProductPage /> },
        { path: '/contact', element: <ContactPage /> },
        { path: '/product-detail/:id', element: <ProductDetailPage /> },

        { path: '/cart', element: <Cart /> },
        { path: '/rules', element: <Rules /> },
        { path: '/information', element: <Information /> },
        { path: '/blog', element: <Blog /> },
        { path: '/blog/:id', element: <BlogDetail /> },

        { path: '/deliverInfo', element: <DeliverInfo /> },
        { path: '/story', element: <Story /> },
        { path: '/slider', element: <Slider /> },
        { path: '/postitem', element: <PostItem /> },
        { path: '/description', element: <Description /> },
        { path: '/catelog', element: <Catelog /> },
        { path: '/bestSeller', element: <BestSeller /> },
        { path: '/newproducts', element: <NewProducts /> },
        { path: '/card', element: <Card /> },
        { path: '/forgetPassword', element: <ForgetPassword /> },

        { path: '/about', element: <About /> },
        { path: '/following', element: <Following /> },
        { path: '/BillDetail', element: <BillDetail /> },
        { path: '/policy', element: <Policy /> },
        { path: '/storydetail', element: <StoryDetail /> },
    ]
};