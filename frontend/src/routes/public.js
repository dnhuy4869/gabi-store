import PublicLayout from "layouts/public";
import HomePage from "pages/public/Home";
import ProductPage from "pages/public/Product";
import ProductDetailPage from "pages/public/product-detail";
import ContactPage from "pages/public/Contact";
import PolicyPage from "pages/public/Policy";
import AboutPage from "pages/public/About";
import CartPage from "pages/public/Cart";
import CheckoutPage from "pages/public/checkout";
import BillPage from "pages/public/bill";
import BillDetailPage from "pages/public/bill-detail"
import WishlistPage from "pages/public/wishlist";
import BlogPage from "pages/public/blog";   
import BlogDetailPage from "pages/public/blog/blog-detail";

import Story from "pages/public/Story";
import StoryDetail from "pages/public/Home/Story/StoryDetail";
import PostItem from "pages/public/Home/PostItem";
import Catelog from "pages/public/Home/Catelog"

import Following from "pages/public/Following";

import Rules from "pages/public/Rules";
import Information from "pages/public/Information";

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
        { path: '/policy', element: <PolicyPage /> },
        { path: '/about', element: <AboutPage /> },

        { path: '/cart', element: <CartPage /> },
        { path: '/checkout', element: <CheckoutPage /> },

        { path: '/bill', element: <BillPage /> },
        { path: '/bill-detail/:id', element: <BillDetailPage /> },

        { path: '/blog', element: <BlogPage /> },
        { path: '/blog-detail/:id', element: <BlogDetailPage /> },

        { path: '/wishlist', element: <WishlistPage /> },

        { path: '/rules', element: <Rules /> },
        { path: '/information', element: <Information /> },

        { path: '/story', element: <Story /> },
        { path: '/postitem', element: <PostItem /> },
        { path: '/catelog', element: <Catelog /> },

        { path: '/following', element: <Following /> },
        { path: '/storydetail', element: <StoryDetail /> },
    ]
};