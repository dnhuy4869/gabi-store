import Api from "app/api";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import BlogCard from "../blog/blog-card";

export default function BlogSection() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        try {
            (async () => {
                const res = await Api.Get("/blog/find-paginate?limit=3");
                if (!res.isSuccess) {
                    toast.error("Đã có lỗi xảy ra");
                    return;
                }

                setBlogs(res.response.data);
            })();
        }
        catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <div className="mx-auto max-w-screen-xl mt-96 sm:mt-3">
            <h2 className="mt-14 font-bold text-center text-gray-800 text-[24px] dark:text-gray-400 uppercase">
                Bài viết
            </h2>
            <div className="mx-auto border-b border-red-700 w-44 dark:border-gray-400" />
            <div className="p-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    blogs.map((obj, index) => {
                        return (
                            <BlogCard key={index} data={obj} />
                        )
                    })
                }
            </div>
        </div>

    );
}
