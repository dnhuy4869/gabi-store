import React from 'react';
import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BlogCard from './BlogCard';

const cx = classNames.bind(styles);

function Blog() {
    const [blog, setBlog] = useState([
            {
              id: 1,
              img: "https://file.hstatic.net/1000184601/file/_o_polo_nam.png",
              title: "THU HÚT PHÁI ĐẸP VỚI 7 CÁCH PHỐI ÁO POLO ĐẸP XUẤT SẮC",
              describe: "Theo thống kế của các nhà phê bình thời trang nổi tiếng thế giới, áo thun Polo là một item thời trang mà bất kì người mẫu nào cũng sở hữu trong tủ quần áo. Áo Polo có thể mặt như một chiếc áo độc lập, hay là một kiểu áo nền ở bên trong. Nói chung, áo Polo mặc kiểu nào cũng đẹp.",
              describe2: "Tuy nhiên, bạn phải biết cách phối đồ thì mới có thể tôn lên được vẻ đẹp của chiếc áo Polo. Trong bài viết này, GABI STORE sẽ hướng dẫn bạn các cách mix-match chiếc áo Polo với các sản phẩm thời trang khác để có thể thu hút ánh nhìn của phái đẹp.",
              date: "2023-08-08",
              title2: "Áo Polo Không Nút",
              content2: "Trừ khi bạn đang ở một nơi có không khí trang trọng thì nên cài nút áo lại, còn không thì hãy bung hết tất cả nút áo ra. Nghe thì có vẻ hơi khó hiểu nhưng bạn biết không, các nhà thiết kế thời trang gần đây đang dần chuyển sang mặc các loại áo Polo không nút. Chính sự đơn giản này là điểm nhấn chết người của chiếc áo Polo không nút.",
              content2v1: "Cách phối đơn giản nhất là phối áo Polo không nút với giày chinos hoặc loafer. Ngoài ra hãy kết hợp với các loại quần jeans màu sáng và quần tây ống cao.",
              content2v2: "Chú ý, hãy chọn những chiếc áo Polo vừa vặn với dáng người nếu bạn không muốn trở thành 'chú hề' mặc áo Polo nhé!",
              img2: "https://file.hstatic.net/1000184601/file/_o_polo_1.png",
              title3: "Mix-match với Veston",
              content3: "Hầu như ai cũng nghĩ mặc đồ Veston thì phải mặc với áo sơ mi ở bên trong. Nhưng mà bây giờ là thời đại 2018 rồi, thời trang cũng cần phải được cải tiến chứ. Hiện tại, rất nhiều người mẫu chuộng cách phối áo Polo với đồ Veston đó.",
              content3v1: "Cách phối đồ này cũng rất đơn giản luôn. Hãy chú ý một điều rất quan trọng là màu sắc của áo Polo và áo vest, quần tây phải tương phản nhau. Đừng chọn các màu gần giống hoặc giống nhau, như vậy áo Polo sẽ bị chìm trong các layer khác.",
              content3v2: null,
              img3: "https://file.hstatic.net/1000184601/file/_o_polo_2.png",
              title4: "Áo Polo Kẻ Sọc",
              content4: "Áo Polo kẻ sọc là một sự lựa chọn hoàn hảo cho những ngày cuối tuần hay đi du lịch. Điều này giúp bạn trông thật cá tính và năng động. Không cần phải phối nhiều, một chiếc áo Polo kẻ sọc và quần jeans đơn giản là bạn đã sẵn sàng cho một ngày dạo chơi ngoài trời.",
              content4v1: "Áo Polo kẻ sọc cũng có thể kết hợp với các loại quần shorts hoặc chân váy ngắn nếu bạn là người yêu thích phong cách trẻ trung.",
              content4v2: null,
              img4: "https://file.hstatic.net/1000184601/file/_o_polo_ke_s__c.png",
              title5: "Áo Polo Phối Sọc Ngang",
              content5: "Áo Polo phối sọc ngang thường mang đến sự tươi trẻ và thời trang. Bạn có thể phối chiếc áo này với các loại quần jeans, quần shorts hoặc chinos. Chọn một màu sáng cho áo Polo để tạo điểm nhấn trong trang phục.",
              content5v1: "Khi bạn mặc áo Polo phối sọc ngang, hãy chọn các phụ kiện như nón, giày thể thao hoặc đồng hồ thể thao để tạo phong cách thể thao năng động.",
              content5v2: null,
              img5: "https://file.hstatic.net/1000184601/file/_o_polo_phoi_s_c_ngang.png",
              title6: "Áo Polo Kết Hợp Áo Sơ Mi",
              content6: "Khi bạn muốn thêm sự lịch lãm và trang trọng cho trang phục với áo Polo, hãy thử phối nó với áo sơ mi. Các loại áo sơ mi trắng sạch sẽ và màu trơn thường tạo điểm nhấn cho chiếc áo Polo.",
              content6v1: "Kết hợp áo Polo với áo sơ mi và quần tây sẽ thích hợp cho các dịp quan trọng và buổi họp mặt chuyên nghiệp.",
              content6v2: null,
              img6: "https://file.hstatic.net/1000184601/file/_o_polo_ao_so_mi.png",
              title7: "Phối Áo Polo Với Quần Jogger",
              content7: "Nếu bạn đang tìm kiếm một phong cách thời trang thoải mái và thích hợp cho cuộc sống hàng ngày, thì hãy phối chiếc áo Polo với quần jogger. Đây là một trang phục dễ dàng di chuyển và cực kỳ thoải mái.",
              content7v1: "Bạn có thể thêm các phụ kiện như giày thể thao hoặc nón và bạn sẽ trông rất thời trang và sành điệu trong trang phục này.",
              content7v2: null,
              img7: "https://file.hstatic.net/1000184601/file/_o_polo_qu_n_jogger.png"
            }
            
    
          
        
    ]);

    const navigate = useNavigate();
    // useEffect(() => {
    //     axios.get('http://localhost:8000/blog').then((data) => setBlog(data.data));
    // }, []);

    return (
        // <div className={cx('wrapper')}>
        //     <div className={cx('inner')}>
        //         {blog.map((data) => (
        //             // <div key={data.id} className={cx('post')}>
        //             //     <div className={cx('img')}>
        //             //         <img src={data.img} />
        //             //     </div>
        //             //     <div className={cx('content')}>

        //             //             <h2>{data.title}</h2>

        //             //         <p>{data.shortDescribtion}</p>
        //             //         <Button outline>Xem thêm</Button>
        //             //     </div>
        //             // </div>
        //             <BlogCard item={data} key={data.id} />
        //         ))}
        //     </div>
        // </div>

        <section className="w-[1320px] m-auto flex items-center bg-white  dark:bg-gray-800 font-poppins">
        <div className="p-4 mx-auto max-w-7xl h-full">
          <div className="mb-20 mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:p-2 xl:p-4">
            <div className="w-full mb-6 border rounded-md shadow-md dark:bg-transparent dark:border-gray-700">
              <div className="relative mb-5 overflow-hidden h-72">
                <img
                  className="object-cover w-full h-full transition-all rounded hover:scale-110"
                  src="https://i.postimg.cc/sgcrq8Jc/pexels-mnz-1598508.jpg"
                  alt
                />
              </div>
              <div className="px-4">
                <a className="mb-0 lg:mb-4" href="#">
                  <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                    {" "}
                    Rope Jump is really healthy and will help for fat loss
                  </h2>
                  <p className="text-base leading-7 text-gray-400">
                    Keep on jumping to get the most of the jump rope exercise. It
                    will help you to increase your bone density as well
                  </p>
                </a>
                <div className="mt-4 mb-4">
                  <p className="text-lg flex justify-between">
                    <span className=" text-gray-400  dark:text-gray-400">
                      <i
                        href="#"
                        class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 h-4 mr-1 bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>
                        15/11/2023
                      </i>
                    </span>
                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                      <i
                        href="#"
                        class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 h-4 mr-1 bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                        </svg>
                        8 view
                      </i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mb-6 border rounded-md shadow-md dark:bg-transparent dark:border-gray-700">
              <div className="relative mb-5 overflow-hidden h-72">
                <img
                  className="object-cover w-full h-full transition-all rounded hover:scale-110"
                  src="https://i.postimg.cc/sgcrq8Jc/pexels-mnz-1598508.jpg"
                  alt
                />
              </div>
              <div className="px-4">
                <a className="mb-0 lg:mb-4" href="#">
                  <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                    {" "}
                    Rope Jump is really healthy and will help for fat loss
                  </h2>
                  <p className="text-base leading-7 text-gray-400">
                    Keep on jumping to get the most of the jump rope exercise. It
                    will help you to increase your bone density as well
                  </p>
                </a>
                <div className="mt-4 mb-4">
                  <p className="text-lg flex justify-between">
                    <span className=" text-gray-400  dark:text-gray-400">
                      <i
                        href="#"
                        class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 h-4 mr-1 bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>
                        15/11/2023
                      </i>
                    </span>
                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                      <i
                        href="#"
                        class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 h-4 mr-1 bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                        </svg>
                        8 view
                      </i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mb-6 border rounded-md shadow-md dark:bg-transparent dark:border-gray-700">
              <div className="relative mb-5 overflow-hidden h-72">
                <img
                  className="object-cover w-full h-full transition-all rounded hover:scale-110"
                  src="https://i.postimg.cc/sgcrq8Jc/pexels-mnz-1598508.jpg"
                  alt
                />
              </div>
              <div className="px-4">
                <a className="mb-0 lg:mb-4" href="#">
                  <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                    {" "}
                    Rope Jump is really healthy and will help for fat loss
                  </h2>
                  <p className="text-base leading-7 text-gray-400">
                    Keep on jumping to get the most of the jump rope exercise. It
                    will help you to increase your bone density as well
                  </p>
                </a>
                <div className="mt-4 mb-4">
                  <p className="text-lg flex justify-between">
                    <span className=" text-gray-400  dark:text-gray-400">
                      <i
                        href="#"
                        class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 h-4 mr-1 bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>
                        15/11/2023
                      </i>
                    </span>
                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                      <i
                        href="#"
                        class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 h-4 mr-1 bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                        </svg>
                        8 view
                      </i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mb-6 border rounded-md shadow-md dark:bg-transparent dark:border-gray-700">
              <div className="relative mb-5 overflow-hidden h-72">
                <img
                  className="object-cover w-full h-full transition-all rounded hover:scale-110"
                  src="https://i.postimg.cc/sgcrq8Jc/pexels-mnz-1598508.jpg"
                  alt
                />
              </div>
              <div className="px-4">
                <a className="mb-0 lg:mb-4" href="#">
                  <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                    {" "}
                    Rope Jump is really healthy and will help for fat loss
                  </h2>
                  <p className="text-base leading-7 text-gray-400">
                    Keep on jumping to get the most of the jump rope exercise. It
                    will help you to increase your bone density as well
                  </p>
                </a>
                <div className="mt-4 mb-4">
                  <p className="text-lg flex justify-between">
                    <span className=" text-gray-400  dark:text-gray-400">
                      <i
                        href="#"
                        class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 h-4 mr-1 bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>
                        15/11/2023
                      </i>
                    </span>
                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                      <i
                        href="#"
                        class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 h-4 mr-1 bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                        </svg>
                        8 view
                      </i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mb-6 border rounded-md shadow-md dark:bg-transparent dark:border-gray-700">
              <div className="relative mb-5 overflow-hidden h-72">
                <img
                  className="object-cover w-full h-full transition-all rounded hover:scale-110"
                  src="https://i.postimg.cc/sgcrq8Jc/pexels-mnz-1598508.jpg"
                  alt
                />
              </div>
              <div className="px-4">
                <a className="mb-0 lg:mb-4" href="#">
                  <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                    {" "}
                    Rope Jump is really healthy and will help for fat loss
                  </h2>
                  <p className="text-base leading-7 text-gray-400">
                    Keep on jumping to get the most of the jump rope exercise. It
                    will help you to increase your bone density as well
                  </p>
                </a>
                <div className="mt-4 mb-4">
                  <p className="text-lg flex justify-between">
                    <span className=" text-gray-400  dark:text-gray-400">
                      <i
                        href="#"
                        class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 h-4 mr-1 bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>
                        15/11/2023
                      </i>
                    </span>
                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                      <i
                        href="#"
                        class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 h-4 mr-1 bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                        </svg>
                        8 view
                      </i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mb-6 border rounded-md shadow-md dark:bg-transparent dark:border-gray-700">
              <div className="relative mb-5 overflow-hidden h-72">
                <img
                  className="object-cover w-full h-full transition-all rounded hover:scale-110"
                  src="https://i.postimg.cc/sgcrq8Jc/pexels-mnz-1598508.jpg"
                  alt
                />
              </div>
              <div className="px-4">
                <a className="mb-0 lg:mb-4" href="#">
                  <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                    {" "}
                    Rope Jump is really healthy and will help for fat loss
                  </h2>
                  <p className="text-base leading-7 text-gray-400">
                    Keep on jumping to get the most of the jump rope exercise. It
                    will help you to increase your bone density as well
                  </p>
                </a>
                <div className="mt-4 mb-4">
                  <p className="text-lg flex justify-between">
                    <span className=" text-gray-400  dark:text-gray-400">
                      <i
                        href="#"
                        class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 h-4 mr-1 bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>
                        15/11/2023
                      </i>
                    </span>
                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                      <i
                        href="#"
                        class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 h-4 mr-1 bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                        </svg>
                        8 view
                      </i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mb-6 border rounded-md shadow-md dark:bg-transparent dark:border-gray-700">
              <div className="relative mb-5 overflow-hidden h-72">
                <img
                  className="object-cover w-full h-full transition-all rounded hover:scale-110"
                  src="https://i.postimg.cc/sgcrq8Jc/pexels-mnz-1598508.jpg"
                  alt
                />
              </div>
              <div className="px-4">
                <a className="mb-0 lg:mb-4" href="#">
                  <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                    {" "}
                    Rope Jump is really healthy and will help for fat loss
                  </h2>
                  <p className="text-base leading-7 text-gray-400">
                    Keep on jumping to get the most of the jump rope exercise. It
                    will help you to increase your bone density as well
                  </p>
                </a>
                <div className="mt-4 mb-4">
                  <p className="text-lg flex justify-between">
                    <span className=" text-gray-400  dark:text-gray-400">
                      <i
                        href="#"
                        class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 h-4 mr-1 bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>
                        15/11/2023
                      </i>
                    </span>
                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                      <i
                        href="#"
                        class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 h-4 mr-1 bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                        </svg>
                        8 view
                      </i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mb-6 border rounded-md shadow-md dark:bg-transparent dark:border-gray-700">
              <div className="relative mb-5 overflow-hidden h-72">
                <img
                  className="object-cover w-full h-full transition-all rounded hover:scale-110"
                  src="https://i.postimg.cc/sgcrq8Jc/pexels-mnz-1598508.jpg"
                  alt
                />
              </div>
              <div className="px-4">
                <a className="mb-0 lg:mb-4" href="#">
                  <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                    {" "}
                    Rope Jump is really healthy and will help for fat loss
                  </h2>
                  <p className="text-base leading-7 text-gray-400">
                    Keep on jumping to get the most of the jump rope exercise. It
                    will help you to increase your bone density as well
                  </p>
                </a>
                <div className="mt-4 mb-4">
                  <p className="text-lg flex justify-between">
                    <span className=" text-gray-400  dark:text-gray-400">
                      <i
                        href="#"
                        class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 h-4 mr-1 bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>
                        15/11/2023
                      </i>
                    </span>
                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                      <i
                        href="#"
                        class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 h-4 mr-1 bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                        </svg>
                        8 view
                      </i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mb-6 border rounded-md shadow-md dark:bg-transparent dark:border-gray-700">
              <div className="relative mb-5 overflow-hidden h-72">
                <img
                  className="object-cover w-full h-full transition-all rounded hover:scale-110"
                  src="https://i.postimg.cc/sgcrq8Jc/pexels-mnz-1598508.jpg"
                  alt
                />
              </div>
              <div className="px-4">
                <a className="mb-0 lg:mb-4" href="#">
                  <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                    {" "}
                    Rope Jump is really healthy and will help for fat loss
                  </h2>
                  <p className="text-base leading-7 text-gray-400">
                    Keep on jumping to get the most of the jump rope exercise. It
                    will help you to increase your bone density as well
                  </p>
                </a>
                <div className="mt-4 mb-4">
                  <p className="text-lg flex justify-between">
                    <span className=" text-gray-400  dark:text-gray-400">
                      <i
                        href="#"
                        class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 h-4 mr-1 bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>
                        15/11/2023
                      </i>
                    </span>
                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                      <i
                        href="#"
                        class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 h-4 mr-1 bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                        </svg>
                        8 view
                      </i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>
    );
}

export default Blog;
