"use client"; // this is a client component

import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "./page.module.css";

import { useState } from "react";
import Script from "next/script";
import contact from "public/assets/images/phoneGift.gif";
import Camera from "./components/camera";
import Elevator from "./components/elevator";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [active, setActive] = useState(1);

  const renderDate = () => {
    var weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
      month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      a = new Date();
    return weekday[a.getDay()] + ", " + month[a.getMonth()] + " " + a.getDate();
  };
  return (
    <>
      {/* Document Wrapper
	============================================= */}
      <div id="wrapper">
        {/* Header
		============================================= */}
        <header
          id="header"
          className="header-size-custom"
          data-sticky-shrink="false"
        >
          <div id="header-wrap">
            <div className="container">
              <div className="header-row justify-content-lg-between">
                {/* Logo
						============================================= */}
                <div
                  id="logo"
                  className="mx-lg-auto col-auto flex-column order-lg-2 px-0"
                >
                  <a
                    href="#"
                    className="standard-logo"
                    data-dark-logo="assets/images/logo-dark.png"
                    data-mobile-logo="assets/images/mobile-logo.png"
                  >
                    {/* <img src="assets/images/logo.png" alt="Canvas Logo" /> */}
                    <div style={{ fontSize: "3.5rem" }}>Thiên Tân</div>
                  </a>
                  <a
                    href="#"
                    className="retina-logo"
                    data-dark-logo="assets/images/logo-dark@2x.png"
                    data-mobile-logo="assets/images/mobile-logo@2x.png"
                  >
                    <img src="assets/images/logo@2x.png" alt="Canvas Logo" />
                  </a>
                  <span className="divider divider-center date-today">
                    <span className="divider-text"> {renderDate()} </span>
                  </span>
                </div>
                {/* #logo end */}
                <div className="col-auto col-lg-3 order-lg-1 d-none d-md-flex px-0">
                  <div className="social-icons">
                    <a
                      href="https://facebook.com/semicolonweb"
                      className="social-icon si-rounded si-dark si-mini si-facebook"
                      target="_blank"
                    >
                      <i className="icon-facebook" />
                      <i className="icon-facebook" />
                    </a>
                    <a
                      href="https://twitter.com/__semicolon"
                      className="social-icon si-rounded si-dark si-mini si-twitter"
                      target="_blank"
                    >
                      <i className="icon-twitter" />
                      <i className="icon-twitter" />
                    </a>
                    <a
                      href=" https://instagram.com/semicolonweb"
                      className="social-icon si-rounded si-dark si-mini si-instagram"
                      target="_blank"
                    >
                      <i className="icon-instagram" />
                      <i className="icon-instagram" />
                    </a>
                  </div>
                </div>
                <div className="header-misc col-auto col-lg-3 justify-content-lg-end ms-0 ms-sm-3 px-0">
                  {/* Bookmark
							============================================= */}
                  {/* <div class="dropdown dropdown-langs">
								<button class="btn dropdown-toggle px-1" type="button" id="dropdownMenuButton"
									data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<img src="seo/images/flags/eng.png" alt="French">
								</button>
								<div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
									<a href="#" class="dropdown-item"><img src="seo/images/flags/fre.png" alt="Lang">
										French</a>
									<a href="#" class="dropdown-item"><img src="seo/images/flags/ara.png" alt="Lang">
										Arabic</a>
									<a href="#" class="dropdown-item"><img src="seo/images/flags/tha.png" alt="Lang">
										Thailand</a>
									<a href="#" class="dropdown-item disabled" tabindex="-1" aria-disabled="true"><img
											src="seo/images/flags/eng.png" alt="Lang"> English</a>
								</div>
							</div> */}
                  {/* Top Search
							============================================= */}
                  <div id="top-search" className="header-misc-icon">
                    <a href="#" id="top-search-trigger">
                      <i className="icon-line-search" />
                      <i className="icon-line-cross" />
                    </a>
                  </div>
                  {/* #top-search end */}
                  {/* <div class="dark-mode header-misc-icon d-none d-md-block">
								<a href="#"><i class="icon-dark"></i></a>
							</div> */}
                </div>

                {/* <div
                  onClick={() => {
                    setOpenMenu(!openMenu);
                  }}
                  className={`${openMenu ? "primary-menu-open" : ""}`}
                >
                  <div id="primary-menu-trigger">
                    <svg className="svg-trigger" viewBox="0 0 100 100">
                      <path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path>
                      <path d="m 30,50 h 40" />
                      <path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path>
                    </svg>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="container custom-menu">
              <div className="header-row justify-content-lg-center header-border">
                <nav className="primary-menu with-arrows">
                  <ul
                    className={`menu-container justify-content-between ${
                      openMenu ? "d-block h-auto" : ""
                    }`}
                  >
                    <li
                      className="menu-item"
                      onClick={() => {
                        setOpenMenu(false);
                        setActive(1);
                      }}
                    >
                      <a className="menu-link active cursor-pointer">
                        Thang máy
                      </a>
                    </li>
                    <li
                      className="menu-item"
                      onClick={() => {
                        setOpenMenu(false);
                        setActive(2);
                      }}
                    >
                      <a className="menu-link cursor-pointer">Lắp đặt camera</a>
                    </li>
                  </ul>
                </nav>
                {/* <form class="top-search-form" action="search.html" method="get">
							<input type="text" name="q" class="form-control" value=""
								placeholder="Type &amp; Hit Enter.." autocomplete="off">
						</form> */}
              </div>
            </div>
          </div>
          <div className="header-wrap-clone" />
        </header>
        {/* #header end */}
        {/* Content
		============================================= */}
        <section id="content">
          <div className="content-wrap pt-5" style={{ overflow: "visible" }}>
            <div className="container">
              {/* Single Page Content
					============================================= */}
              <div className="single-post mb-0">
                {/* Single Post
						============================================= */}
                <div className="entry">
                  <div className="row justify-content-center">
                    <div className="col-lg-6">
                      {/* Entry Title
									============================================= */}
                      <div className="entry-title">
                        <div className="entry-categories">
                          <a href="#">Coronavirus Update - World</a>
                        </div>
                        <h2>Dịch vụ sửa chữa thang máy</h2>
                      </div>
                      {/* .entry-title end */}
                    </div>
                  </div>
                  {/* Entry Meta
							============================================= */}
                  <div className="d-flex justify-content-center mt-2">
                    <div className="entry-meta">
                      <ul>
                        <li>10th July 2014</li>
                        <li>
                          By <a href="#">SemiColonWeb</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .entry-meta end */}
                  {/* Entry Image
							============================================= */}
                  <div className="entry-image mt-5">
                    <a href="images/image1.jpg" data-lightbox="image">
                      <img
                        className="rounded"
                        src="assets/images/image1.jpg"
                        alt="Blog Single"
                      />
                    </a>
                  </div>
                  {/* .entry-image end */}
                  {/* Entry Content
							============================================= */}
                  <div className="entry-content">
                    <div className="row">
                      <div
                        className="col-lg-4 media-content"
                        data-animate="fadeIn"
                      >
                        <div className="d-flex flex-column">
                          <div>
                            {/* <div className="mb-2 custem-menu-2">
                              <h4 className="mb-2 fw-bolder">Danh mục:</h4>

                              <div className="nav flex-column nav-pills mb-1">
                                <a
                                  onClick={() => setActive(1)}
                                  className="nav-link active cursor-pointer"
                                  data-toggle="pill"
                                >
                                  Thang máy
                                </a>
                                <a
                                  onClick={() => setActive(2)}
                                  className="nav-link cursor-pointer"
                                  data-toggle="pill"
                                >
                                  Lắp đặt camera
                                </a>
                              </div>
                            </div> */}
                            {/* Post Single - Share
										============================================= */}
                            <div>
                              <h4 className="mb-2 fw-bolder">
                                Chia sẻ bài viết:
                              </h4>
                              <div>
                                <a
                                  href="#"
                                  className="social-icon si-small si-rounded si-colored si-facebook"
                                >
                                  <i className="icon-facebook" />
                                  <i className="icon-facebook" />
                                </a>
                                <a
                                  href="#"
                                  className="social-icon si-small si-rounded si-colored ms-1 si-twitter"
                                >
                                  <i className="icon-twitter" />
                                  <i className="icon-twitter" />
                                </a>
                                <a
                                  href="#"
                                  className="social-icon si-small si-rounded si-colored ms-1 si-pinterest"
                                >
                                  <i className="icon-pinterest" />
                                  <i className="icon-pinterest" />
                                </a>
                                <a
                                  href="#"
                                  className="social-icon si-small si-rounded si-colored ms-1 si-rss"
                                >
                                  <i className="icon-rss" />
                                  <i className="icon-rss" />
                                </a>
                              </div>
                            </div>
                            {/* Post Single - Share End */}
                          </div>
                          <div>
                            <hr />
                            <a
                              href="tel:%2002822333599"
                              target="_self"
                              className="button button-blue rounded"
                            >
                              <i class="icon-phone"></i>{" "}
                              <span>HOTLINE: 0909876836</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-1" />
                      <div className="text-content col-lg-7">
                        <div id="v-pills-tabContent">
                          {active === 1 && <Elevator />}
                          {active === 2 && <Camera />}
                        </div>
                      </div>
                      {/* Post Single - Content End */}
                    </div>
                  </div>
                </div>
                {/* .entry end */}
                {/* <h3 className="mb-0">Bài viết liên quan</h3>
                <div className="row posts-md">
                  <div className="col-lg-3 col-sm-6">
                    <article className="entry">
                      <div className="entry-image">
                        <a href="#">
                          <img
                            src="assets/images/elevator3.jpg"
                            alt="Image 3"
                          />
                        </a>
                      </div>
                      <div className="entry-title title-sm text-start">
                        <div className="entry-categories">
                          <a href="#">Travel</a>
                        </div>
                        <h3>
                          <a
                            href="#"
                            className="color-underline stretched-link"
                          >
                            The Best Destinations in Asia for Solo Travel
                          </a>
                        </h3>
                      </div>
                      <div className="entry-meta">
                        <ul>
                          <li>
                            <a href="#">Mar 11, 2016</a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <article className="entry">
                      <div className="entry-image">
                        <a href="#">
                          <img
                            src="assets/images/elevator4.jpg"
                            alt="Image 3"
                          />
                        </a>
                      </div>
                      <div className="entry-title title-sm text-start">
                        <div className="entry-categories">
                          <a href="#">Fashion</a>
                        </div>
                        <h3>
                          <a
                            href="#"
                            className="color-underline stretched-link"
                          >
                            10 Trendy Fashion Instagram Profile You Need to
                            Follow
                          </a>
                        </h3>
                      </div>
                      <div className="entry-meta">
                        <ul>
                          <li>
                            <a href="#">Mar 11, 2016</a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <article className="entry">
                      <div className="entry-image">
                        <a href="#">
                          <img
                            src="assets/images/elevator1.jpg"
                            alt="Image 3"
                          />
                        </a>
                      </div>
                      <div className="entry-title title-sm text-start">
                        <div className="entry-categories">
                          <a href="#">Travel</a>
                        </div>
                        <h3>
                          <a
                            href="#"
                            className="color-underline stretched-link"
                          >
                            23 Top Travel Bloggers Who Inspire Us To Travel
                          </a>
                        </h3>
                      </div>
                      <div className="entry-meta">
                        <ul>
                          <li>
                            <a href="#">Mar 11, 2016</a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <article className="entry">
                      <div className="entry-image">
                        <a href="#">
                          <img
                            src="assets/images/elevator2.jpg"
                            alt="Image 3"
                          />
                        </a>
                      </div>
                      <div className="entry-title title-sm text-start">
                        <div className="entry-categories">
                          <a href="#">Travel</a>
                        </div>
                        <h3>
                          <a
                            href="#"
                            className="color-underline stretched-link"
                          >
                            23 Top Travel Bloggers Who Inspire Us To Travel
                          </a>
                        </h3>
                      </div>
                      <div className="entry-meta">
                        <ul>
                          <li>
                            <a href="#">Mar 11, 2016</a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                </div> */}
              </div>
              {/* Single Page Content */}
            </div>
          </div>
        </section>
        {/* #content end */}
        {/* Footer
		============================================= */}
        <footer id="footer">
          <div className="container">
            {/* Footer Widgets
				============================================= */}
            <div className="footer-widgets-wrap row col-mb-50">
              {/* Footer Widget 3
					============================================= */}
              <div className="col-lg-4 col-sm-6">
                <div className="widget widget_links">
                  <h4 className="mb-3 mb-sm-4 nott ls0">Địa chỉ</h4>
                  <p>
                    45 Lê Văn Việt, phường Hiệp Phú, TP Thủ Đức, TP Hồ Chí Minh
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.518636114121!2d106.77325785041361!3d10.848101860794909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175270c49f79e7d%3A0x90c3f5c4965201d7!2zNDUgxJAuIEzDqiBWxINuIFZp4buHdCwgSGnhu4dwIFBow7osIFF14bqtbiA5LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1675957813912!5m2!1sen!2s"
                    width="600"
                    height="400"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              {/* Footer Widget 3
					============================================= */}
              {/* <div className="col-lg-3 col-sm-6">
                <div className="widget widget_links">
                  <h4 className="mb-3 mb-sm-4 nott ls0">
                    Dịch vụ của chúng tôi
                  </h4>
                  <ul>
                    <li>
                      <a href="#">Lắp đặt thang máy</a>
                    </li>
                    <li>
                      <a href="#">Lắp đặt camera</a>
                    </li>
                  </ul>
                </div>
              </div> */}
              {/* Footer Widget 3
					============================================= */}
              <div className="col-lg-4 col-sm-6">
                <div className="widget widget_links">
                  <h4 className="mb-3 mb-sm-4 nott ls0">Hỗ trợ</h4>
                  <ul>
                    <li>
                      <a>Email: lethu210398@gmail.com</a>
                    </li>
                    <li>
                      <a>Hotline: 0909876836</a>
                    </li>
                  </ul>
                  <div className="mt-3">
                    <a
                      href="https://facebook.com/semicolonweb"
                      className="social-icon si-small si-dark si-facebook"
                      title="Facebook"
                      target="_blank"
                    >
                      <i className="icon-facebook" />
                      <i className="icon-facebook" />
                    </a>
                    <a
                      href="https://instagram.com/semicolonweb"
                      className="social-icon si-small si-dark si-instagram"
                      title="instagram"
                      target="_blank"
                    >
                      <i className="icon-instagram" />
                      <i className="icon-instagram" />
                    </a>
                    <a
                      href="https://twitter.com/__semicolon"
                      className="social-icon si-small si-dark si-twitter"
                      title="twitter"
                      target="_blank"
                    >
                      <i className="icon-twitter" />
                      <i className="icon-twitter" />
                    </a>
                    <a
                      href="#"
                      className="social-icon si-small si-dark si-wikipedia"
                      title="Apple Pay"
                    >
                      <i className="icon-apple-pay" />
                      <i className="icon-apple-pay" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Footer Widget 2
						============================================= */}
              <div className="col-lg-4 col-sm-6">
                <div className="widget widget_links">
                  <h4 className="mb-3 mb-sm-4 nott ls0">Tag Cloud</h4>
                  <div className="tagcloud">
                    <a href="#">general</a>
                    <a href="#">videos</a>
                    <a href="#">music</a>
                    <a href="#">media</a>
                    <a href="#">photography</a>
                    <a href="#">parallax</a>
                    <a href="#">ecommerce</a>
                    <a href="#">terms</a>
                    <a href="#">coupons</a>
                    <a href="#">modern</a>
                    <a href="#">magazine</a>
                    <a href="#">bootstrap</a>
                    <a href="#">news</a>
                    <a href="#">blog</a>
                    <a href="#">wordpress</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Copyrights
			============================================= */}
          <div id="copyrights" className="py-3">
            <div className="container">
              <div className=" text-center ">
                Copyrights © {new Date().getFullYear()} All Rights Reserved by
                Canvas Inc.
              </div>
            </div>
          </div>
          {/* #copyrights end */}
        </footer>
        {/* #footer end */}
      </div>
      {/* #wrapper end */}

      <div className="hotLine">
        <div className={` icon iconPhone flex items-center`}>
          <div>
            <div className="flex flex-col ml-2">
              <a href="tel:%2002822333599" target="_self">
                <div
                  style={{
                    display: "flex",
                    boxShadow:
                      " rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    marginLeft: 10,
                    overflow: "hidden",
                  }}
                  data-toggle="modal"
                  data-target="#kt_chat_modal"
                >
                  <Image
                    src={contact}
                    className="w-100 h-100"
                    alt="phone_icon"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Go To Top
	============================================= */}
      <div
        id="gotoTop"
        className="icon-angle-up rounded-circle"
        style={{ left: 30, right: "auto" }}
      />

      <Script src="assets/js/jquery.js" />
      <Script src="assets/js/plugins.min.js" />

      <Script src="assets/js/functions.js" />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"
      />
    </>
  );
}
