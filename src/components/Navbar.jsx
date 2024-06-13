import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [isLogin, setIsLogin] = useState(false);
    const [authUser, setAuthUser] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        axios.get('http://localhost:8000/profile', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
            .then(res => {
                setIsLogin(true);
                setAuthUser(res.data.data);
                if (location.pathname === '/login') {
                    navigate('/profile')
                }
            })
            .catch(err => {
                setIsLogin(false);
                console.log(err.response);
                if (err.response.status == 401 && location.pathname != '/login') {
                    navigate('/login?message=' + encodeURIComponent('anda belum login!'));
                } 
            })
    }, [navigate]);
    return (
        <div className="bg-blue-600 py-2">
            <div className="grid grid-cols-12">
                <section className="col-span-10 col-start-2">
                    <div className="flex items-center">
                        {/* <div>
                        <Link
                            className="mr-2 text-sm font-semibold uppercase text-white"
                            to="/"
                        >
                            INVENTARIS APP
                        </Link>
                        <Link to="/login"><small className="text-white">Login</small></Link>
                        {
                            isLogin ? (
                                isLogin ? authUser['role'] === 'admin' ? (
                                    <>
                                    <Link to="/profile"><small className="text-white absolute top-0 mt-3 right-0 h-16 w-16">Profile</small></Link>
                                    <Link to="/stuff"><small className="text-white ms-3">Stuff</small></Link>
                                    <Link to="/inbound"><small className="text-white ms-3">Inbound</small></Link>
                                    <Link to="/lending"><small className="text-white ms-3">Lending</small></Link>
                                    <Link to="/user"><small className="text-white ms-3">User</small></Link>
                                    </>
                                )
                             : (
                                    
                                <Link to="/lending"><small className="text-white ms-3">Lending</small></Link>
                            ) : ''     
                            ) : '' 
                        }
                        </div> */}
                        {/* <div className="flex items-center">
                            <Link
                                className="mr-2 text-sm font-semibold uppercase text-white"
                                to="/"
                            >
                                INVENTARIS APP
                            </Link>
                            {!isLogin && <Link to="/login"><small className="text-white">Login</small></Link>}
                            
                            {isLogin && authUser ? (
                                <>
                                    {authUser.role === 'admin' && (
                                        <div className="flex items-center">
                                            <Link to="/stuff"><small className="text-white ms-3">Stuff</small></Link>
                                            <Link to="/inbound"><small className="text-white ms-3">Inbound</small></Link>
                                            <Link to="/lendings"><small className="text-white ms-3">Lending</small></Link>
                                            <Link to="/user"><small className="text-white ms-3">User</small></Link>
                                        </div>
                                    )}
                                    {authUser.role === 'staff' && (
                                        <Link to="/lendings"><small className="text-white ms-3">Lending</small></Link>
                                    )}
                                </>
                            ) : null}
                        </div>
                        
                        {isLogin && <Link to="/profile"><small className="text-white ms-3">Profile</small></Link>} */}

                        <div className="flex items-center">
                            <Link
                                className="mr-2 text-sm font-semibold uppercase text-white"
                                to="/"
                            >
                                INVENTARIS APP
                            </Link>
                            {!isLogin && <Link to="/login"><small className="text-white">Login</small></Link>}

                            {isLogin && authUser && (
                                <div className="flex items-center">
                                    {authUser.role === 'admin' && (
                                        <>
                                            <Link to="/stuff"><small className="text-white ms-3">Stuff</small></Link>
                                            <Link to="/inbound"><small className="text-white ms-3">Inbound</small></Link>
                                            <Link to="/lendings"><small className="text-white ms-3">Lending</small></Link>
                                            <Link to="/user"><small className="text-white ms-3">User</small></Link>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>

                        {isLogin && (
                            <>
                                <Link to="/profile"><small className="text-white ms-3">Profile</small></Link>
                                {isLogin && authUser && authUser.role === 'staff' && (
                                    <Link to="/lendings"><small className="text-white ms-3">Lending</small></Link>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}



// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// export default function Navbar() {
//     const [isLogin, setIsLogin] = useState(false);
//     const [authUser, setAuthUser] = useState(null);

//     const navigate = useNavigate();
//     const location = useLocation();

//     useEffect(() => {
//         const token = localStorage.getItem('access_token');
//         if (!token) {
//             console.log('Token tidak ditemukan di local storage');
//             navigate('/login?message=' + encodeURIComponent('Anda belum login'));
//             return;
//         }

//         axios.get('http://localhost:8000/profile', {
//             headers: {
//                 'Authorization': 'Bearer ' + token,
//             }
//         })
//             .then(res => {
//                 setIsLogin(true);
//                 setAuthUser(res.data.data);
//                 if (location.pathname === '/login') {
//                     navigate('/profile');
//                 }
//             })
//             .catch(err => {
//                 setIsLogin(false);
//                 if (err.response && err.response.status === 401 && location.pathname !== '/login') {
//                     navigate('/login?message=' + encodeURIComponent('Anda belum login'));
//                 }
//             });
//     }, [navigate]);

//     return (
//         <div className="bg-blue-600 py-2">
//             <div className="grid grid-cols-12">
//                 <section className="col-span-10 col-start-2">
//                     <div className="flex items-center justify-between">
                        // <div className="flex items-center">
                        //     <Link
                        //         className="mr-2 text-sm font-semibold uppercase text-white"
                        //         to="/"
                        //     >
                        //         INVENTARIS APP
                        //     </Link>
                        //     {!isLogin && <Link to="/login"><small className="text-white">Login</small></Link>}
                            
                        //     {isLogin && authUser ? (
                        //         <>
                        //             {authUser.role === 'admin' && (
                        //                 <div className="flex items-center">
                        //                     <Link to="/stuff"><small className="text-white ms-3">Stuff</small></Link>
                        //                     <Link to="/inbound"><small className="text-white ms-3">Inbound</small></Link>
                        //                     <Link to="/lending"><small className="text-white ms-3">Lending</small></Link>
                        //                     <Link to="/user"><small className="text-white ms-3">User</small></Link>
                        //                 </div>
                        //             )}
                        //             {authUser.role === 'staff' && (
                        //                 <Link to="/lending"><small className="text-white ms-3">Lending</small></Link>
                        //             )}
                        //         </>
                        //     ) : null}
                        // </div>
                        
                        // {isLogin && <Link to="/profile"><small className="text-white ms-3">Profile</small></Link>}
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// }