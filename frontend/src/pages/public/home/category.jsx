import Api from "app/api";
import { API_URL } from "app/config";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

export default function CategorySection() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        try {
            (async () => {
                const res = await Api.Get("/category/find-paginate");
                setCategories(res.response.data);
            })();
        }
        catch (err) {
            console.log(err);
        }
    }, []);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <>
            <div className="mx-auto max-w-screen-xl">
                <section className="flex items-center py-10 dark:bg-gray-800 font-poppins">
                    <div className="p-4 mx-auto max-w-6xl">
                        <h2 className="pb-4  font-bold text-center text-gray-800 text-[24px] dark:text-gray-400 uppercase">
                            Danh mục sản phẩm
                        </h2>
                        <div className="mx-auto mb-10 border-b border-red-700 w-44 dark:border-gray-400" />

                        <Carousel
                            responsive={responsive}
                            swipeable={false}
                            draggable={false}
                            infinite={true}
                            autoPlay={true}
                        >
                            {
                                categories.map((obj, index) => {
                                    return (
                                        <div key={index} className="flex flex-col items-center">
                                            <Link to={`/product?category=${obj.id}`}>
                                                <img
                                                    className="w-48 h-48 mb-3 rounded-full shadow-lg"
                                                    src={`${API_URL}${obj.imageUrl}`} alt="category" />
                                            </Link>

                                            <h5 className="mt-3 mb-1 text-xl font-medium text-gray-900 capitalize">{obj.name}</h5>
                                        </div>

                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </section>
            </div>
        </>
    );
}