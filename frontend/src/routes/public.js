import PublicLayout from "layouts/public";
import HomePage from "pages/public/Home";
import ProductPage from "pages/public/Product";
import ContactPage from "pages/public/Contact";
import AboutPage from "pages/public/About";
import CartPage from "pages/public/Cart";
import CheckoutPage from "pages/public/checkout";
import BillDetailPage from "pages/public/bill-detail"

import Blog from "pages/public/Blog";
import BlogDetail from "pages/public/Blog/BlogDetail";
import Story from "pages/public/Story";
import StoryDetail from "pages/public/Home/Story/StoryDetail";
import PostItem from "pages/public/Home/PostItem";
import Catelog from "pages/public/Home/Catelog"
import BestSeller from "pages/public/Home/best-selling";
import ForgetPassword from "pages/public/ForgetPassword";

import Following from "pages/public/Following";

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
        { path: '/product-detail/:id', element: <ProductDetailPage /> },

        { path: '/contact', element: <ContactPage /> },
        { path: '/about', element: <AboutPage /> },

        { path: '/cart', element: <CartPage /> },
        { path: '/checkout', element: <CheckoutPage /> },

        { path: '/bill-detail/:id', element: <BillDetailPage /> },

        { path: '/rules', element: <Rules /> },
        { path: '/information', element: <Information /> },
        { path: '/blog', element: <Blog /> },
        { path: '/blog/:id', element: <BlogDetail /> },

        { path: '/story', element: <Story /> },
        { path: '/postitem', element: <PostItem /> },
        { path: '/catelog', element: <Catelog /> },
        { path: '/bestSeller', element: <BestSeller /> },
        { path: '/forgetPassword', element: <ForgetPassword /> },

        { path: '/following', element: <Following /> },
        { path: '/policy', element: <Policy /> },
        { path: '/storydetail', element: <StoryDetail /> },
    ]
};