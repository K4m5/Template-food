import { useState } from 'react'


export default function Login() {

  return (
    <>
        <div className="osahan-signup login-page">
            <video loop autoPlay muted id="vid">
                <source src="img/bg.mp4" type="video/mp4" />
                <source src="img/bg.mp4" type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            <div className="d-flex align-items-center justify-content-center flex-column vh-100">
                <div className="px-5 col-md-6 ml-auto">
                    <div className="px-5 col-10 mx-auto mb-4">
                        <h2 className="mb-3">Verify your phone number</h2>
                        <h6 className="text-black-50">Enter your OTP code here</h6>
                        <form action="home.html">
                            <div className="row my-5 mx-0 otp">
                                <div className="col pr-1 pl-0">
                                    <input type="text" value="4" className="form-control form-control-lg" />
                                </div>
                                <div className="col px-2">
                                    <input type="text" value="0" className="form-control form-control-lg" />
                                </div>
                                <div className="col px-2">
                                    <input type="text" value="8" className="form-control form-control-lg" />
                                </div>
                                <div className="col pl-1 pr-0">
                                    <input type="text" value="0" className="form-control form-control-lg" />
                                </div>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block">Verify Now</button>
                        </form>
                    </div>
                    <div className="new-acc d-flex align-items-center justify-content-center">
                        <a href="login.html">
                            <p className="text-center m-0">Already an account? Sign in</p>
                        </a>
                    </div>
                </div>
            </div>
            <nav id="main-nav">
                <ul className="second-nav">
                    <li><a href="home.html"><i className="feather-home mr-2"></i> Homepage</a></li>
                    <li><a href="my_order.html"><i className="feather-list mr-2"></i> My Orders</a></li>
                    <li>
                        <a href="#"><i className="feather-edit-2 mr-2"></i> Authentication</a>
                        <ul>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="signup.html">Register</a></li>
                            <li><a href="forgot_password.html">Forgot Password</a></li>
                            <li><a href="verification.html">Verification</a></li>
                            <li><a href="location.html">Location</a></li>
                        </ul>
                    </li>
                    <li><a href="favorites.html"><i className="feather-heart mr-2"></i> Favorites</a></li>
                    <li><a href="trending.html"><i className="feather-trending-up mr-2"></i> Trending</a></li>
                    <li><a href="most_popular.html"><i className="feather-award mr-2"></i> Most Popular</a></li>
                    <li><a href="restaurant.html"><i className="feather-paperclip mr-2"></i> Restaurant Detail</a></li>
                    <li><a href="checkout.html"><i className="feather-list mr-2"></i> Checkout</a></li>
                    <li><a href="successful.html"><i className="feather-check-circle mr-2"></i> Successful</a></li>
                    <li><a href="map.html"><i className="feather-map-pin mr-2"></i> Live Map</a></li>
                    <li>
                        <a href="#"><i className="feather-user mr-2"></i> Profile</a>
                        <ul>
                            <li><a href="profile.html">Profile</a></li>
                            <li><a href="favorites.html">Delivery support</a></li>
                            <li><a href="contact-us.html">Contact Us</a></li>
                            <li><a href="terms.html">Terms of use</a></li>
                            <li><a href="privacy.html">Privacy & Policy</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i className="feather-alert-triangle mr-2"></i> Error</a>
                        <ul>
                            <li><a href="not-found.html">Not Found</a></li>
                            <li><a href="maintence.html">Maintenance</a></li>
                            <li><a href="coming-soon.html">Coming Soon</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i className="feather-link mr-2"></i> Navigation Link Example</a>
                        <ul>
                            <li>
                                <a href="#">Link Example 1</a>
                                <ul>
                                    <li>
                                        <a href="#">Link Example 1.1</a>
                                        <ul>
                                            <li><a href="#">Link</a></li>
                                            <li><a href="#">Link</a></li>
                                            <li><a href="#">Link</a></li>
                                            <li><a href="#">Link</a></li>
                                            <li><a href="#">Link</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Link Example 1.2</a>
                                        <ul>
                                            <li><a href="#">Link</a></li>
                                            <li><a href="#">Link</a></li>
                                            <li><a href="#">Link</a></li>
                                            <li><a href="#">Link</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#">Link Example 2</a></li>
                            <li><a href="#">Link Example 3</a></li>
                            <li><a href="#">Link Example 4</a></li>
                            <li data-nav-custom-content>
                                <div className="custom-message">
                                    You can add any custom content to your navigation items. This text is just an example.
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="bottom-nav">
                    <li className="email">
                        <a className="text-danger" href="home.html">
                            <p className="h5 m-0"><i className="feather-home text-danger"></i></p>
                            Home
                        </a>
                    </li>
                    <li className="github">
                        <a href="faq.html">
                            <p className="h5 m-0"><i className="feather-message-circle"></i></p>
                            FAQ
                        </a>
                    </li>
                    <li className="ko-fi">
                        <a href="contact-us.html">
                            <p className="h5 m-0"><i className="feather-phone"></i></p>
                            Help
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
       
    </>
  )
}


