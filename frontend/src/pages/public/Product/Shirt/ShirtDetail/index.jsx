// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// import styles from './ShirtDetail.module.scss';
// import classNames from 'classnames/bind';

// import { Link, useParams } from 'react-router-dom';
// import Button from 'components/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// const cx = classNames.bind(styles);

// function ShirtDetail() {
//     const [details, setDetails] = useState({});
//     const [quanity, setQuanity] = useState(1);
//     const location = useLocation();
//     useEffect(() => {
//         setDetails(location.state.item);
//     }, []);
//     return (
//         <div className={cx('wrapper')}>
//             <div className={cx('inner')}>
//                 <div className={cx('left')}>
//                     <div className={cx('images')}>
//                         <img src={details.img} /> 
//                     </div>

//                     {/* <div className={cx('mainImg')}>
//                         <img src={data[selectedImg]} />
//                     </div> */}
//                 </div>

//                 <div className={cx('right')}>
//                     <h2>{details.name}</h2>
//                     <span className={cx('price')}>{details.price}.000</span>
//                     <p>{details.mainDescription}</p>
//                     <div className={cx('quanity')}>
//                         <button onClick={() => setQuanity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
//                         {quanity}
//                         <button onClick={() => setQuanity((prev) => prev + 1)}>+</button>
//                     </div>

//                     <div className={cx('add')}>
//                         <FontAwesomeIcon icon={faShoppingCart} className={cx('icon-cart')} />
//                         <Link to="/cart">
//                             <Button  className={cx('cart')}>
//                                 Thêm vào giỏ
//                             </Button>
//                         </Link>
//                     </div>
//                     <hr />

//                     <div className={cx('info')}>
//                         <span>Tên áo: {details.name}</span>
//                         <span>Loại áo: {details.type}</span>
//                         <span>Tag: T-shirt, Man, Unisex</span>
//                     </div>
//                     <hr />
//                     <div className={cx('info')}>
//                         <span>{details.subDescription}</span>
//                         <hr />
//                         <span>Sản xuất tại: {details.fromTo}</span>
//                         <hr />
//                         <span>FAQ</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ShirtDetail;
