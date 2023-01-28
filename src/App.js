import "./App.css";
import { Helmet } from "react-helmet";
import { useState } from "react";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

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
                    data-dark-logo="assets/blog/images/logo-dark.png"
                    data-mobile-logo="assets/blog/images/mobile-logo.png"
                  >
                    <img src="assets/blog/images/logo.png" alt="Canvas Logo" />
                  </a>
                  <a
                    href="#"
                    className="retina-logo"
                    data-dark-logo="assets/blog/images/logo-dark@2x.png"
                    data-mobile-logo="assets/blog/images/mobile-logo@2x.png"
                  >
                    <img
                      src="assets/blog/images/logo@2x.png"
                      alt="Canvas Logo"
                    />
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

                <div
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
                </div>
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
                      onClick={() => setOpenMenu(false)}
                    >
                      <a
                        className="menu-link active"
                        id="v-pills-home-tab"
                        data-toggle="pill"
                        href="#v-pills-home"
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="true"
                      >
                        Thang cuốn
                      </a>
                    </li>
                    <li
                      className="menu-item"
                      onClick={() => setOpenMenu(false)}
                    >
                      <a
                        className="menu-link"
                        id="v-pills-profile-tab"
                        data-toggle="pill"
                        href="#v-pills-profile"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="false"
                      >
                        Thang máy ngoài nhà
                      </a>
                    </li>
                    <li
                      className="menu-item"
                      onClick={() => setOpenMenu(false)}
                    >
                      <a
                        className="menu-link"
                        id="v-pills-messages-tab"
                        data-toggle="pill"
                        href="#v-pills-messages"
                        role="tab"
                        aria-controls="v-pills-messages"
                        aria-selected="false"
                      >
                        Thang máy tròn
                      </a>
                    </li>
                    <li
                      className="menu-item"
                      onClick={() => setOpenMenu(false)}
                    >
                      <a
                        className="menu-link"
                        id="v-pills-settings-tab"
                        data-toggle="pill"
                        href="#v-pills-settings"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                      >
                        Thang máy giá cao
                      </a>
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
                        <h2>
                          All online Conferences to save your box, get Inspired
                          and Stay Connected
                        </h2>
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
                    <a href="blog/images/image1.jpg" data-lightbox="image">
                      <img
                        className="rounded"
                        src="assets/blog/images/image1.jpg"
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
                        <div className="mb-2 custem-menu-2">
                          <h5 className="mb-2">Elevator categories:</h5>
                          <div
                            className="nav flex-column nav-pills mb-1"
                            id="v-pills-tab"
                            role="tablist"
                            aria-orientation="vertical"
                          >
                            <a
                              className="nav-link active"
                              id="v-pills-home-tab"
                              data-toggle="pill"
                              href="#v-pills-home"
                              role="tab"
                              aria-controls="v-pills-home"
                              aria-selected="true"
                            >
                              Thang cuốn
                            </a>
                            <a
                              className="nav-link"
                              id="v-pills-profile-tab"
                              data-toggle="pill"
                              href="#v-pills-profile"
                              role="tab"
                              aria-controls="v-pills-profile"
                              aria-selected="false"
                            >
                              Thang máy ngoài nhà
                            </a>
                            <a
                              className="nav-link"
                              id="v-pills-messages-tab"
                              data-toggle="pill"
                              href="#v-pills-messages"
                              role="tab"
                              aria-controls="v-pills-messages"
                              aria-selected="false"
                            >
                              Thang máy tròn
                            </a>
                            <a
                              className="nav-link"
                              id="v-pills-settings-tab"
                              data-toggle="pill"
                              href="#v-pills-settings"
                              role="tab"
                              aria-controls="v-pills-settings"
                              aria-selected="false"
                            >
                              Thang máy giá cao
                            </a>
                          </div>
                        </div>
                        {/* Post Single - Share
										============================================= */}
                        <div>
                          <h5 className="mb-2">Share this Post:</h5>
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
                      <div className="col-lg-1" />
                      <div className="text-content col-lg-7">
                        <div className="tab-content" id="v-pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab"
                          >
                            <h1> Thang cuốn</h1>
                            <p>
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula, eget lacinia odio sem nec elit.
                              Cras mattis consectetur purus sit amet fermentum.
                              Morbi leo risus, porta ac consectetur ac,
                              vestibulum at eros. Praesent commodo cursus magna,
                              vel scelerisque nisl consectetur et.
                            </p>
                            <br />
                            <h3>1. Content</h3>
                            In this cheat sheet, we will go over the following:
                            <ol className="list-numbers">
                              <li>Anatomy</li>
                              <li>Dropdown types and variations</li>
                              <li>Dropdown styles</li>
                              <li>Dropdown states</li>
                              <li>What the placeholder should say</li>
                              <li>When not to use a dropdown (and when to)</li>
                              <li>Native dropdowns</li>
                              <li>Accessibility checklist</li>
                              <li>Closing thoughts</li>
                            </ol>
                            <p>
                              Nullam id dolor id nibh ultricies vehicula ut id
                              elit.{" "}
                              <a href="#">Curabitur blandit tempus porttitor</a>
                              . Integer posuere erat a ante venenatis dapibus
                              posuere velit aliquet. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam. Vestibulum id
                              ligula porta felis euismod semper. Donec id elit
                              non mi porta gravida at eget metus. Vestibulum id
                              ligula porta felis euismod semper.
                            </p>
                            <blockquote>
                              <p>
                                Vestibulum id ligula porta felis euismod semper.
                                Sed posuere consectetur est at lobortis. Aenean
                                eu leo quam. Pellentesque ornare sem lacinia
                                quam venenatis vestibulum. Duis mollis, est non
                                commodo luctus, nisi erat porttitor ligula, eget
                                lacinia odio sem nec elit. Donec ullamcorper
                                nulla non metus auctor fringilla. Vestibulum id
                                ligula porta felis euismod semper.
                              </p>
                            </blockquote>
                            <br />
                            <h3>2. Anatomy</h3>
                            <p>
                              Integer posuere erat a ante venenatis dapibus
                              posuere velit aliquet. Cras mattis consectetur
                              purus sit amet fermentum. Donec id elit non mi
                              porta gravida at eget metus.
                            </p>
                            <p>
                              Morbi leo risus, porta ac consectetur ac,
                              vestibulum at eros. Aenean lacinia bibendum nulla
                              sed consectetur. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam.{" "}
                              <a href="#">Nullam quis risus eget urna</a>
                              mollis ornare vel eu leo. Integer posuere erat a
                              ante venenatis dapibus posuere velit aliquet.
                            </p>
                            <p>
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula, eget lacinia odio sem nec elit.
                              Cras mattis consectetur purus sit amet fermentum.
                              Morbi leo risus, porta ac consectetur ac,
                              vestibulum at eros. Praesent commodo cursus magna,
                              vel scelerisque nisl consectetur et.
                            </p>
                            <br />
                            <h3>3. Standard Solution</h3>
                            <p>
                              Nullam id dolor id nibh ultricies vehicula ut id
                              elit. Curabitur blandit tempus porttitor. Integer
                              posuere erat a ante venenatis dapibus posuere
                              velit aliquet. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam. Vestibulum id
                              ligula porta felis euismod semper. Donec id elit
                              non mi porta gravida at eget metus. Vestibulum id
                              ligula porta felis euismod semper.
                            </p>
                            <div className="row mb-4" data-lightbox="gallery">
                              <div className="col-md-6">
                                <a
                                  className="h-100"
                                  href="blog/images/elevator1.jpg"
                                  data-lightbox="gallery-item"
                                >
                                  <img
                                    className="rounded h-100"
                                    src="assets/blog/images/elevator1.jpg"
                                    alt="Alt Images"
                                  />
                                </a>
                              </div>
                              <div className="col-md-6">
                                <a
                                  className="h-100"
                                  href="blog/images/elevator2.jpg"
                                  data-lightbox="gallery-item"
                                >
                                  <img
                                    className="rounded h-100"
                                    src="assets/blog/images/elevator2.jpg"
                                    alt="Alt Images"
                                  />
                                </a>
                              </div>
                            </div>
                            <p>
                              Integer posuere erat a ante venenatis dapibus
                              posuere velit aliquet. Cras mattis consectetur
                              purus sit amet fermentum. Donec id elit non mi
                              porta gravida at eget metus.
                            </p>
                            <p>
                              Morbi leo risus, porta ac consectetur ac,
                              vestibulum at eros. Aenean lacinia bibendum nulla
                              sed consectetur. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam.{" "}
                              <a href="#">Nullam quis risus eget urna</a>
                              mollis ornare vel eu leo. Integer posuere erat a
                              ante venenatis dapibus posuere velit aliquet.
                            </p>
                            <div className="line" />
                            {/* Tag Cloud
												============================================= */}
                            <div className="tagcloud">
                              <h4>Related Tags</h4>
                              <a href="#">general</a>
                              <a href="#">information</a>
                              <a href="#">media</a>
                              <a href="#">press</a>
                              <a href="#">gallery</a>
                              <a href="#">illustration</a>
                            </div>
                            {/* .tagcloud end */}
                            <div className="clear" />
                            {/* Comments
												============================================= */}
                            <div id="comments">
                              <h3 id="comments-title">
                                <span>3</span> Comments
                              </h3>
                              {/* Comments List
													============================================= */}
                              <ol className="commentlist">
                                <li
                                  className="comment even thread-even depth-1"
                                  id="li-comment-1"
                                >
                                  <div id="comment-1" className="comment-wrap">
                                    <div className="comment-meta">
                                      <div className="comment-author vcard">
                                        <span className="comment-avatar">
                                          <img
                                            alt=""
                                            src="https://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=60"
                                            className="avatar avatar-60 photo avatar-default"
                                            height={60}
                                            width={60}
                                          />
                                        </span>
                                      </div>
                                    </div>
                                    <div className="comment-content">
                                      <div className="comment-author">
                                        John Doe
                                        <span>
                                          <a
                                            href="#"
                                            title="Permalink to this comment"
                                          >
                                            April 24, 2012 at 10:46 am
                                          </a>
                                        </span>
                                      </div>
                                      <p>
                                        Donec sed odio dui. Nulla vitae elit
                                        libero, a pharetra augue. Nullam id
                                        dolor id nibh ultricies vehicula ut id
                                        elit. Integer posuere erat a ante
                                        venenatis dapibus posuere velit aliquet.
                                      </p>
                                      <a
                                        className="comment-reply-link"
                                        href="#"
                                      >
                                        <i className="icon-reply" />
                                      </a>
                                    </div>
                                    <div className="clear" />
                                  </div>
                                  <ul className="children">
                                    <li
                                      className="comment byuser comment-author-_smcl_admin odd alt depth-2"
                                      id="li-comment-3"
                                    >
                                      <div
                                        id="comment-3"
                                        className="comment-wrap"
                                      >
                                        <div className="comment-meta">
                                          <div className="comment-author vcard">
                                            <span className="comment-avatar">
                                              <img
                                                alt=""
                                                src="https://1.gravatar.com/avatar/30110f1f3a4238c619bcceb10f4c4484?s=40&d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D40&r=G"
                                                className="avatar avatar-40 photo"
                                                height={40}
                                                width={40}
                                              />
                                            </span>
                                          </div>
                                        </div>
                                        <div className="comment-content">
                                          <div className="comment-author">
                                            <a
                                              href="#"
                                              rel="external nofollow"
                                              className="url"
                                            >
                                              SemiColon
                                            </a>
                                            <span>
                                              <a
                                                href="#"
                                                title="Permalink to this comment"
                                              >
                                                April 25, 2012 at 1:03 am
                                              </a>
                                            </span>
                                          </div>
                                          <p>
                                            Nullam id dolor id nibh ultricies
                                            vehicula ut id elit.
                                          </p>
                                          <a
                                            className="comment-reply-link"
                                            href="#"
                                          >
                                            <i className="icon-reply" />
                                          </a>
                                        </div>
                                        <div className="clear" />
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="comment byuser comment-author-_smcl_admin even thread-odd thread-alt depth-1"
                                  id="li-comment-2"
                                >
                                  <div id="comment-2" className="comment-wrap">
                                    <div className="comment-meta">
                                      <div className="comment-author vcard">
                                        <span className="comment-avatar">
                                          <img
                                            alt=""
                                            src="https://1.gravatar.com/avatar/30110f1f3a4238c619bcceb10f4c4484?s=60&d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&r=G"
                                            className="avatar avatar-60 photo"
                                            height={60}
                                            width={60}
                                          />
                                        </span>
                                      </div>
                                    </div>
                                    <div className="comment-content">
                                      <div className="comment-author">
                                        <a
                                          href="https://themeforest.net/user/semicolonweb"
                                          rel="external nofollow"
                                          className="url"
                                        >
                                          SemiColon
                                        </a>
                                        <span>
                                          <a
                                            href="#"
                                            title="Permalink to this comment"
                                          >
                                            April 25, 2012 at 1:03 am
                                          </a>
                                        </span>
                                      </div>
                                      <p>
                                        Integer posuere erat a ante venenatis
                                        dapibus posuere velit aliquet.
                                      </p>
                                      <a
                                        className="comment-reply-link"
                                        href="#"
                                      >
                                        <i className="icon-reply" />
                                      </a>
                                    </div>
                                    <div className="clear" />
                                  </div>
                                </li>
                              </ol>
                              {/* .commentlist end */}
                              <div className="clear" />
                              {/* Comment Form
													============================================= */}
                              <div id="respond">
                                <h3>
                                  Leave a <span>Comment</span>
                                </h3>
                                <form
                                  className="row mb-0"
                                  action="#"
                                  method="post"
                                  id="commentform"
                                >
                                  <div className="form-group col-4">
                                    <label htmlFor="author">Name</label>
                                    <input
                                      type="text"
                                      name="author"
                                      id="author"
                                      defaultValue=""
                                      size={22}
                                      tabIndex={1}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="form-group col-4">
                                    <label htmlFor="email">Email</label>
                                    <input
                                      type="text"
                                      name="email"
                                      id="email"
                                      defaultValue=""
                                      size={22}
                                      tabIndex={2}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="form-group col-4">
                                    <label htmlFor="url">Website</label>
                                    <input
                                      type="text"
                                      name="url"
                                      id="url"
                                      defaultValue=""
                                      size={22}
                                      tabIndex={3}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="w-100" />
                                  <div className="form-group col-12">
                                    <label htmlFor="comment">Comment</label>
                                    <textarea
                                      name="comment"
                                      id="comment"
                                      cols={58}
                                      rows={7}
                                      tabIndex={4}
                                      className="form-control"
                                      defaultValue={""}
                                    />
                                  </div>
                                  <div className="form-group col-12 mt-4 mb-0">
                                    <button
                                      name="submit"
                                      type="submit"
                                      id="submit-button"
                                      tabIndex={5}
                                      value="Submit"
                                      className="button button-large button-black button-dark nott fw-medium ls0 button-rounded m-0"
                                    >
                                      Submit Comment
                                    </button>
                                  </div>
                                </form>
                              </div>
                              {/* #respond end */}
                            </div>
                            {/* #comments end */}
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-profile"
                            role="tabpanel"
                            aria-labelledby="v-pills-profile-tab"
                          >
                            <h1>Thang máy đặt ở bên ngoài của tòa nhà</h1>
                            <p>
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula, eget lacinia odio sem nec elit.
                              Cras mattis consectetur purus sit amet fermentum.
                              Morbi leo risus, porta ac consectetur ac,
                              vestibulum at eros. Praesent commodo cursus magna,
                              vel scelerisque nisl consectetur et.
                            </p>
                            <br />
                            <h3>1. Content</h3>
                            In this cheat sheet, we will go over the following:
                            <ol className="list-numbers">
                              <li>Anatomy</li>
                              <li>Dropdown types and variations</li>
                              <li>Dropdown styles</li>
                              <li>Dropdown states</li>
                              <li>What the placeholder should say</li>
                              <li>When not to use a dropdown (and when to)</li>
                              <li>Native dropdowns</li>
                              <li>Accessibility checklist</li>
                              <li>Closing thoughts</li>
                            </ol>
                            <p>
                              Nullam id dolor id nibh ultricies vehicula ut id
                              elit.{" "}
                              <a href="#">Curabitur blandit tempus porttitor</a>
                              . Integer posuere erat a ante venenatis dapibus
                              posuere velit aliquet. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam. Vestibulum id
                              ligula porta felis euismod semper. Donec id elit
                              non mi porta gravida at eget metus. Vestibulum id
                              ligula porta felis euismod semper.
                            </p>
                            <blockquote>
                              <p>
                                Vestibulum id ligula porta felis euismod semper.
                                Sed posuere consectetur est at lobortis. Aenean
                                eu leo quam. Pellentesque ornare sem lacinia
                                quam venenatis vestibulum. Duis mollis, est non
                                commodo luctus, nisi erat porttitor ligula, eget
                                lacinia odio sem nec elit. Donec ullamcorper
                                nulla non metus auctor fringilla. Vestibulum id
                                ligula porta felis euismod semper.
                              </p>
                            </blockquote>
                            <br />
                            <h3>2. Anatomy</h3>
                            <p>
                              Integer posuere erat a ante venenatis dapibus
                              posuere velit aliquet. Cras mattis consectetur
                              purus sit amet fermentum. Donec id elit non mi
                              porta gravida at eget metus.
                            </p>
                            <p>
                              Morbi leo risus, porta ac consectetur ac,
                              vestibulum at eros. Aenean lacinia bibendum nulla
                              sed consectetur. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam.{" "}
                              <a href="#">Nullam quis risus eget urna</a>
                              mollis ornare vel eu leo. Integer posuere erat a
                              ante venenatis dapibus posuere velit aliquet.
                            </p>
                            <p>
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula, eget lacinia odio sem nec elit.
                              Cras mattis consectetur purus sit amet fermentum.
                              Morbi leo risus, porta ac consectetur ac,
                              vestibulum at eros. Praesent commodo cursus magna,
                              vel scelerisque nisl consectetur et.
                            </p>
                            <br />
                            <h3>3. Standard Solution</h3>
                            <p>
                              Nullam id dolor id nibh ultricies vehicula ut id
                              elit. Curabitur blandit tempus porttitor. Integer
                              posuere erat a ante venenatis dapibus posuere
                              velit aliquet. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam. Vestibulum id
                              ligula porta felis euismod semper. Donec id elit
                              non mi porta gravida at eget metus. Vestibulum id
                              ligula porta felis euismod semper.
                            </p>
                            <div className="row mb-4" data-lightbox="gallery">
                              <div className="col-md-6">
                                <a
                                  href="blog/images/single/1-full.jpg"
                                  data-lightbox="gallery-item"
                                >
                                  <img
                                    className="rounded"
                                    src="assets/blog/images/single/1.jpg"
                                    alt="Alt Images"
                                  />
                                </a>
                              </div>
                              <div className="col-md-6">
                                <a
                                  href="blog/images/single/2-full.jpg"
                                  data-lightbox="gallery-item"
                                >
                                  <img
                                    className="rounded"
                                    src="assets/blog/images/single/2.jpg"
                                    alt="Alt Images"
                                  />
                                </a>
                              </div>
                            </div>
                            <p>
                              Integer posuere erat a ante venenatis dapibus
                              posuere velit aliquet. Cras mattis consectetur
                              purus sit amet fermentum. Donec id elit non mi
                              porta gravida at eget metus.
                            </p>
                            <p>
                              Morbi leo risus, porta ac consectetur ac,
                              vestibulum at eros. Aenean lacinia bibendum nulla
                              sed consectetur. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam.{" "}
                              <a href="#">Nullam quis risus eget urna</a>
                              mollis ornare vel eu leo. Integer posuere erat a
                              ante venenatis dapibus posuere velit aliquet.
                            </p>
                            <div className="line" />
                            {/* Tag Cloud
											============================================= */}
                            <div className="tagcloud">
                              <h4>Related Tags</h4>
                              <a href="#">general</a>
                              <a href="#">information</a>
                              <a href="#">media</a>
                              <a href="#">press</a>
                              <a href="#">gallery</a>
                              <a href="#">illustration</a>
                            </div>
                            {/* .tagcloud end */}
                            <div className="clear" />
                            {/* Comments
											============================================= */}
                            <div id="comments">
                              <h3 id="comments-title">
                                <span>3</span> Comments
                              </h3>
                              {/* Comments List
												============================================= */}
                              <ol className="commentlist">
                                <li
                                  className="comment even thread-even depth-1"
                                  id="li-comment-1"
                                >
                                  <div id="comment-1" className="comment-wrap">
                                    <div className="comment-meta">
                                      <div className="comment-author vcard">
                                        <span className="comment-avatar">
                                          <img
                                            alt=""
                                            src="https://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=60"
                                            className="avatar avatar-60 photo avatar-default"
                                            height={60}
                                            width={60}
                                          />
                                        </span>
                                      </div>
                                    </div>
                                    <div className="comment-content">
                                      <div className="comment-author">
                                        John Doe
                                        <span>
                                          <a
                                            href="#"
                                            title="Permalink to this comment"
                                          >
                                            April 24, 2012 at 10:46 am
                                          </a>
                                        </span>
                                      </div>
                                      <p>
                                        Donec sed odio dui. Nulla vitae elit
                                        libero, a pharetra augue. Nullam id
                                        dolor id nibh ultricies vehicula ut id
                                        elit. Integer posuere erat a ante
                                        venenatis dapibus posuere velit aliquet.
                                      </p>
                                      <a
                                        className="comment-reply-link"
                                        href="#"
                                      >
                                        <i className="icon-reply" />
                                      </a>
                                    </div>
                                    <div className="clear" />
                                  </div>
                                  <ul className="children">
                                    <li
                                      className="comment byuser comment-author-_smcl_admin odd alt depth-2"
                                      id="li-comment-3"
                                    >
                                      <div
                                        id="comment-3"
                                        className="comment-wrap"
                                      >
                                        <div className="comment-meta">
                                          <div className="comment-author vcard">
                                            <span className="comment-avatar">
                                              <img
                                                alt=""
                                                src="https://1.gravatar.com/avatar/30110f1f3a4238c619bcceb10f4c4484?s=40&d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D40&r=G"
                                                className="avatar avatar-40 photo"
                                                height={40}
                                                width={40}
                                              />
                                            </span>
                                          </div>
                                        </div>
                                        <div className="comment-content">
                                          <div className="comment-author">
                                            <a
                                              href="#"
                                              rel="external nofollow"
                                              className="url"
                                            >
                                              SemiColon
                                            </a>
                                            <span>
                                              <a
                                                href="#"
                                                title="Permalink to this comment"
                                              >
                                                April 25, 2012 at 1:03 am
                                              </a>
                                            </span>
                                          </div>
                                          <p>
                                            Nullam id dolor id nibh ultricies
                                            vehicula ut id elit.
                                          </p>
                                          <a
                                            className="comment-reply-link"
                                            href="#"
                                          >
                                            <i className="icon-reply" />
                                          </a>
                                        </div>
                                        <div className="clear" />
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="comment byuser comment-author-_smcl_admin even thread-odd thread-alt depth-1"
                                  id="li-comment-2"
                                >
                                  <div id="comment-2" className="comment-wrap">
                                    <div className="comment-meta">
                                      <div className="comment-author vcard">
                                        <span className="comment-avatar">
                                          <img
                                            alt=""
                                            src="https://1.gravatar.com/avatar/30110f1f3a4238c619bcceb10f4c4484?s=60&d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&r=G"
                                            className="avatar avatar-60 photo"
                                            height={60}
                                            width={60}
                                          />
                                        </span>
                                      </div>
                                    </div>
                                    <div className="comment-content">
                                      <div className="comment-author">
                                        <a
                                          href="https://themeforest.net/user/semicolonweb"
                                          rel="external nofollow"
                                          className="url"
                                        >
                                          SemiColon
                                        </a>
                                        <span>
                                          <a
                                            href="#"
                                            title="Permalink to this comment"
                                          >
                                            April 25, 2012 at 1:03 am
                                          </a>
                                        </span>
                                      </div>
                                      <p>
                                        Integer posuere erat a ante venenatis
                                        dapibus posuere velit aliquet.
                                      </p>
                                      <a
                                        className="comment-reply-link"
                                        href="#"
                                      >
                                        <i className="icon-reply" />
                                      </a>
                                    </div>
                                    <div className="clear" />
                                  </div>
                                </li>
                              </ol>
                              {/* .commentlist end */}
                              <div className="clear" />
                              {/* Comment Form
												============================================= */}
                              <div id="respond">
                                <h3>
                                  Leave a <span>Comment</span>
                                </h3>
                                <form
                                  className="row mb-0"
                                  action="#"
                                  method="post"
                                  id="commentform"
                                >
                                  <div className="form-group col-4">
                                    <label htmlFor="author">Name</label>
                                    <input
                                      type="text"
                                      name="author"
                                      id="author"
                                      defaultValue=""
                                      size={22}
                                      tabIndex={1}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="form-group col-4">
                                    <label htmlFor="email">Email</label>
                                    <input
                                      type="text"
                                      name="email"
                                      id="email"
                                      defaultValue=""
                                      size={22}
                                      tabIndex={2}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="form-group col-4">
                                    <label htmlFor="url">Website</label>
                                    <input
                                      type="text"
                                      name="url"
                                      id="url"
                                      defaultValue=""
                                      size={22}
                                      tabIndex={3}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="w-100" />
                                  <div className="form-group col-12">
                                    <label htmlFor="comment">Comment</label>
                                    <textarea
                                      name="comment"
                                      id="comment"
                                      cols={58}
                                      rows={7}
                                      tabIndex={4}
                                      className="form-control"
                                      defaultValue={""}
                                    />
                                  </div>
                                  <div className="form-group col-12 mt-4 mb-0">
                                    <button
                                      name="submit"
                                      type="submit"
                                      id="submit-button"
                                      tabIndex={5}
                                      value="Submit"
                                      className="button button-large button-black button-dark nott fw-medium ls0 button-rounded m-0"
                                    >
                                      Submit Comment
                                    </button>
                                  </div>
                                </form>
                              </div>
                              {/* #respond end */}
                            </div>
                            {/* #comments end */}
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-messages"
                            role="tabpanel"
                            aria-labelledby="v-pills-messages-tab"
                          >
                            <h1>Thang máy hình trụ</h1>
                            <p>
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula, eget lacinia odio sem nec elit.
                              Cras mattis consectetur purus sit amet fermentum.
                              Morbi leo risus, porta ac consectetur ac,
                              vestibulum at eros. Praesent commodo cursus magna,
                              vel scelerisque nisl consectetur et.
                            </p>
                            <br />
                            <h3>1. Content</h3>
                            In this cheat sheet, we will go over the following:
                            <ol className="list-numbers">
                              <li>Anatomy</li>
                              <li>Dropdown types and variations</li>
                              <li>Dropdown styles</li>
                              <li>Dropdown states</li>
                              <li>What the placeholder should say</li>
                              <li>When not to use a dropdown (and when to)</li>
                              <li>Native dropdowns</li>
                              <li>Accessibility checklist</li>
                              <li>Closing thoughts</li>
                            </ol>
                            <p>
                              Nullam id dolor id nibh ultricies vehicula ut id
                              elit.{" "}
                              <a href="#">Curabitur blandit tempus porttitor</a>
                              . Integer posuere erat a ante venenatis dapibus
                              posuere velit aliquet. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam. Vestibulum id
                              ligula porta felis euismod semper. Donec id elit
                              non mi porta gravida at eget metus. Vestibulum id
                              ligula porta felis euismod semper.
                            </p>
                            <blockquote>
                              <p>
                                Vestibulum id ligula porta felis euismod semper.
                                Sed posuere consectetur est at lobortis. Aenean
                                eu leo quam. Pellentesque ornare sem lacinia
                                quam venenatis vestibulum. Duis mollis, est non
                                commodo luctus, nisi erat porttitor ligula, eget
                                lacinia odio sem nec elit. Donec ullamcorper
                                nulla non metus auctor fringilla. Vestibulum id
                                ligula porta felis euismod semper.
                              </p>
                            </blockquote>
                            <br />
                            <h3>2. Anatomy</h3>
                            <p>
                              Integer posuere erat a ante venenatis dapibus
                              posuere velit aliquet. Cras mattis consectetur
                              purus sit amet fermentum. Donec id elit non mi
                              porta gravida at eget metus.
                            </p>
                            <p>
                              Morbi leo risus, porta ac consectetur ac,
                              vestibulum at eros. Aenean lacinia bibendum nulla
                              sed consectetur. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam.{" "}
                              <a href="#">Nullam quis risus eget urna</a>
                              mollis ornare vel eu leo. Integer posuere erat a
                              ante venenatis dapibus posuere velit aliquet.
                            </p>
                            <p>
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula, eget lacinia odio sem nec elit.
                              Cras mattis consectetur purus sit amet fermentum.
                              Morbi leo risus, porta ac consectetur ac,
                              vestibulum at eros. Praesent commodo cursus magna,
                              vel scelerisque nisl consectetur et.
                            </p>
                            <br />
                            <h3>3. Standard Solution</h3>
                            <p>
                              Nullam id dolor id nibh ultricies vehicula ut id
                              elit. Curabitur blandit tempus porttitor. Integer
                              posuere erat a ante venenatis dapibus posuere
                              velit aliquet. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam. Vestibulum id
                              ligula porta felis euismod semper. Donec id elit
                              non mi porta gravida at eget metus. Vestibulum id
                              ligula porta felis euismod semper.
                            </p>
                            <div className="row mb-4" data-lightbox="gallery">
                              <div className="col-md-6">
                                <a
                                  href="blog/images/single/1-full.jpg"
                                  data-lightbox="gallery-item"
                                >
                                  <img
                                    className="rounded"
                                    src="assets/blog/images/single/1.jpg"
                                    alt="Alt Images"
                                  />
                                </a>
                              </div>
                              <div className="col-md-6">
                                <a
                                  href="blog/images/single/2-full.jpg"
                                  data-lightbox="gallery-item"
                                >
                                  <img
                                    className="rounded"
                                    src="assets/blog/images/single/2.jpg"
                                    alt="Alt Images"
                                  />
                                </a>
                              </div>
                            </div>
                            <p>
                              Integer posuere erat a ante venenatis dapibus
                              posuere velit aliquet. Cras mattis consectetur
                              purus sit amet fermentum. Donec id elit non mi
                              porta gravida at eget metus.
                            </p>
                            <p>
                              Morbi leo risus, porta ac consectetur ac,
                              vestibulum at eros. Aenean lacinia bibendum nulla
                              sed consectetur. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam.{" "}
                              <a href="#">Nullam quis risus eget urna</a>
                              mollis ornare vel eu leo. Integer posuere erat a
                              ante venenatis dapibus posuere velit aliquet.
                            </p>
                            <div className="line" />
                            {/* Tag Cloud
												============================================= */}
                            <div className="tagcloud">
                              <h4>Related Tags</h4>
                              <a href="#">general</a>
                              <a href="#">information</a>
                              <a href="#">media</a>
                              <a href="#">press</a>
                              <a href="#">gallery</a>
                              <a href="#">illustration</a>
                            </div>
                            {/* .tagcloud end */}
                            <div className="clear" />
                            {/* Comments
												============================================= */}
                            <div id="comments">
                              <h3 id="comments-title">
                                <span>3</span> Comments
                              </h3>
                              {/* Comments List
													============================================= */}
                              <ol className="commentlist">
                                <li
                                  className="comment even thread-even depth-1"
                                  id="li-comment-1"
                                >
                                  <div id="comment-1" className="comment-wrap">
                                    <div className="comment-meta">
                                      <div className="comment-author vcard">
                                        <span className="comment-avatar">
                                          <img
                                            alt=""
                                            src="https://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=60"
                                            className="avatar avatar-60 photo avatar-default"
                                            height={60}
                                            width={60}
                                          />
                                        </span>
                                      </div>
                                    </div>
                                    <div className="comment-content">
                                      <div className="comment-author">
                                        John Doe
                                        <span>
                                          <a
                                            href="#"
                                            title="Permalink to this comment"
                                          >
                                            April 24, 2012 at 10:46 am
                                          </a>
                                        </span>
                                      </div>
                                      <p>
                                        Donec sed odio dui. Nulla vitae elit
                                        libero, a pharetra augue. Nullam id
                                        dolor id nibh ultricies vehicula ut id
                                        elit. Integer posuere erat a ante
                                        venenatis dapibus posuere velit aliquet.
                                      </p>
                                      <a
                                        className="comment-reply-link"
                                        href="#"
                                      >
                                        <i className="icon-reply" />
                                      </a>
                                    </div>
                                    <div className="clear" />
                                  </div>
                                  <ul className="children">
                                    <li
                                      className="comment byuser comment-author-_smcl_admin odd alt depth-2"
                                      id="li-comment-3"
                                    >
                                      <div
                                        id="comment-3"
                                        className="comment-wrap"
                                      >
                                        <div className="comment-meta">
                                          <div className="comment-author vcard">
                                            <span className="comment-avatar">
                                              <img
                                                alt=""
                                                src="https://1.gravatar.com/avatar/30110f1f3a4238c619bcceb10f4c4484?s=40&d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D40&r=G"
                                                className="avatar avatar-40 photo"
                                                height={40}
                                                width={40}
                                              />
                                            </span>
                                          </div>
                                        </div>
                                        <div className="comment-content">
                                          <div className="comment-author">
                                            <a
                                              href="#"
                                              rel="external nofollow"
                                              className="url"
                                            >
                                              SemiColon
                                            </a>
                                            <span>
                                              <a
                                                href="#"
                                                title="Permalink to this comment"
                                              >
                                                April 25, 2012 at 1:03 am
                                              </a>
                                            </span>
                                          </div>
                                          <p>
                                            Nullam id dolor id nibh ultricies
                                            vehicula ut id elit.
                                          </p>
                                          <a
                                            className="comment-reply-link"
                                            href="#"
                                          >
                                            <i className="icon-reply" />
                                          </a>
                                        </div>
                                        <div className="clear" />
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="comment byuser comment-author-_smcl_admin even thread-odd thread-alt depth-1"
                                  id="li-comment-2"
                                >
                                  <div id="comment-2" className="comment-wrap">
                                    <div className="comment-meta">
                                      <div className="comment-author vcard">
                                        <span className="comment-avatar">
                                          <img
                                            alt=""
                                            src="https://1.gravatar.com/avatar/30110f1f3a4238c619bcceb10f4c4484?s=60&d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&r=G"
                                            className="avatar avatar-60 photo"
                                            height={60}
                                            width={60}
                                          />
                                        </span>
                                      </div>
                                    </div>
                                    <div className="comment-content">
                                      <div className="comment-author">
                                        <a
                                          href="https://themeforest.net/user/semicolonweb"
                                          rel="external nofollow"
                                          className="url"
                                        >
                                          SemiColon
                                        </a>
                                        <span>
                                          <a
                                            href="#"
                                            title="Permalink to this comment"
                                          >
                                            April 25, 2012 at 1:03 am
                                          </a>
                                        </span>
                                      </div>
                                      <p>
                                        Integer posuere erat a ante venenatis
                                        dapibus posuere velit aliquet.
                                      </p>
                                      <a
                                        className="comment-reply-link"
                                        href="#"
                                      >
                                        <i className="icon-reply" />
                                      </a>
                                    </div>
                                    <div className="clear" />
                                  </div>
                                </li>
                              </ol>
                              {/* .commentlist end */}
                              <div className="clear" />
                              {/* Comment Form
													============================================= */}
                              <div id="respond">
                                <h3>
                                  Leave a <span>Comment</span>
                                </h3>
                                <form
                                  className="row mb-0"
                                  action="#"
                                  method="post"
                                  id="commentform"
                                >
                                  <div className="form-group col-4">
                                    <label htmlFor="author">Name</label>
                                    <input
                                      type="text"
                                      name="author"
                                      id="author"
                                      defaultValue=""
                                      size={22}
                                      tabIndex={1}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="form-group col-4">
                                    <label htmlFor="email">Email</label>
                                    <input
                                      type="text"
                                      name="email"
                                      id="email"
                                      defaultValue=""
                                      size={22}
                                      tabIndex={2}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="form-group col-4">
                                    <label htmlFor="url">Website</label>
                                    <input
                                      type="text"
                                      name="url"
                                      id="url"
                                      defaultValue=""
                                      size={22}
                                      tabIndex={3}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="w-100" />
                                  <div className="form-group col-12">
                                    <label htmlFor="comment">Comment</label>
                                    <textarea
                                      name="comment"
                                      id="comment"
                                      cols={58}
                                      rows={7}
                                      tabIndex={4}
                                      className="form-control"
                                      defaultValue={""}
                                    />
                                  </div>
                                  <div className="form-group col-12 mt-4 mb-0">
                                    <button
                                      name="submit"
                                      type="submit"
                                      id="submit-button"
                                      tabIndex={5}
                                      value="Submit"
                                      className="button button-large button-black button-dark nott fw-medium ls0 button-rounded m-0"
                                    >
                                      Submit Comment
                                    </button>
                                  </div>
                                </form>
                              </div>
                              {/* #respond end */}
                            </div>
                            {/* #comments end */}
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-settings"
                            role="tabpanel"
                            aria-labelledby="v-pills-settings-tab"
                          >
                            <h1>Thang máy giá cao</h1>
                            <p>
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula, eget lacinia odio sem nec elit.
                              Cras mattis consectetur purus sit amet fermentum.
                              Morbi leo risus, porta ac consectetur ac,
                              vestibulum at eros. Praesent commodo cursus magna,
                              vel scelerisque nisl consectetur et.
                            </p>
                            <br />
                            <h3>1. Content</h3>
                            In this cheat sheet, we will go over the following:
                            <ol className="list-numbers">
                              <li>Anatomy</li>
                              <li>Dropdown types and variations</li>
                              <li>Dropdown styles</li>
                              <li>Dropdown states</li>
                              <li>What the placeholder should say</li>
                              <li>When not to use a dropdown (and when to)</li>
                              <li>Native dropdowns</li>
                              <li>Accessibility checklist</li>
                              <li>Closing thoughts</li>
                            </ol>
                            <p>
                              Nullam id dolor id nibh ultricies vehicula ut id
                              elit.{" "}
                              <a href="#">Curabitur blandit tempus porttitor</a>
                              . Integer posuere erat a ante venenatis dapibus
                              posuere velit aliquet. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam. Vestibulum id
                              ligula porta felis euismod semper. Donec id elit
                              non mi porta gravida at eget metus. Vestibulum id
                              ligula porta felis euismod semper.
                            </p>
                            <blockquote>
                              <p>
                                Vestibulum id ligula porta felis euismod semper.
                                Sed posuere consectetur est at lobortis. Aenean
                                eu leo quam. Pellentesque ornare sem lacinia
                                quam venenatis vestibulum. Duis mollis, est non
                                commodo luctus, nisi erat porttitor ligula, eget
                                lacinia odio sem nec elit. Donec ullamcorper
                                nulla non metus auctor fringilla. Vestibulum id
                                ligula porta felis euismod semper.
                              </p>
                            </blockquote>
                            <br />
                            <h3>2. Anatomy</h3>
                            <p>
                              Integer posuere erat a ante venenatis dapibus
                              posuere velit aliquet. Cras mattis consectetur
                              purus sit amet fermentum. Donec id elit non mi
                              porta gravida at eget metus.
                            </p>
                            <p>
                              Morbi leo risus, porta ac consectetur ac,
                              vestibulum at eros. Aenean lacinia bibendum nulla
                              sed consectetur. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam.{" "}
                              <a href="#">Nullam quis risus eget urna</a>
                              mollis ornare vel eu leo. Integer posuere erat a
                              ante venenatis dapibus posuere velit aliquet.
                            </p>
                            <p>
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula, eget lacinia odio sem nec elit.
                              Cras mattis consectetur purus sit amet fermentum.
                              Morbi leo risus, porta ac consectetur ac,
                              vestibulum at eros. Praesent commodo cursus magna,
                              vel scelerisque nisl consectetur et.
                            </p>
                            <br />
                            <h3>3. Standard Solution</h3>
                            <p>
                              Nullam id dolor id nibh ultricies vehicula ut id
                              elit. Curabitur blandit tempus porttitor. Integer
                              posuere erat a ante venenatis dapibus posuere
                              velit aliquet. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam. Vestibulum id
                              ligula porta felis euismod semper. Donec id elit
                              non mi porta gravida at eget metus. Vestibulum id
                              ligula porta felis euismod semper.
                            </p>
                            <div className="row mb-4" data-lightbox="gallery">
                              <div className="col-md-6">
                                <a
                                  href="blog/images/single/1-full.jpg"
                                  data-lightbox="gallery-item"
                                >
                                  <img
                                    className="rounded"
                                    src="assets/blog/images/single/1.jpg"
                                    alt="Alt Images"
                                  />
                                </a>
                              </div>
                              <div className="col-md-6">
                                <a
                                  href="assets/blog/images/single/2-full.jpg"
                                  data-lightbox="gallery-item"
                                >
                                  <img
                                    className="rounded"
                                    src="blog/images/single/2.jpg"
                                    alt="Alt Images"
                                  />
                                </a>
                              </div>
                            </div>
                            <p>
                              Integer posuere erat a ante venenatis dapibus
                              posuere velit aliquet. Cras mattis consectetur
                              purus sit amet fermentum. Donec id elit non mi
                              porta gravida at eget metus.
                            </p>
                            <p>
                              Morbi leo risus, porta ac consectetur ac,
                              vestibulum at eros. Aenean lacinia bibendum nulla
                              sed consectetur. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam.{" "}
                              <a href="#">Nullam quis risus eget urna</a>
                              mollis ornare vel eu leo. Integer posuere erat a
                              ante venenatis dapibus posuere velit aliquet.
                            </p>
                            <div className="line" />
                            {/* Tag Cloud
												============================================= */}
                            <div className="tagcloud">
                              <h4>Related Tags</h4>
                              <a href="#">general</a>
                              <a href="#">information</a>
                              <a href="#">media</a>
                              <a href="#">press</a>
                              <a href="#">gallery</a>
                              <a href="#">illustration</a>
                            </div>
                            {/* .tagcloud end */}
                            <div className="clear" />
                            {/* Comments
												============================================= */}
                            <div id="comments">
                              <h3 id="comments-title">
                                <span>3</span> Comments
                              </h3>
                              {/* Comments List
													============================================= */}
                              <ol className="commentlist">
                                <li
                                  className="comment even thread-even depth-1"
                                  id="li-comment-1"
                                >
                                  <div id="comment-1" className="comment-wrap">
                                    <div className="comment-meta">
                                      <div className="comment-author vcard">
                                        <span className="comment-avatar">
                                          <img
                                            alt=""
                                            src="https://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=60"
                                            className="avatar avatar-60 photo avatar-default"
                                            height={60}
                                            width={60}
                                          />
                                        </span>
                                      </div>
                                    </div>
                                    <div className="comment-content">
                                      <div className="comment-author">
                                        John Doe
                                        <span>
                                          <a
                                            href="#"
                                            title="Permalink to this comment"
                                          >
                                            April 24, 2012 at 10:46 am
                                          </a>
                                        </span>
                                      </div>
                                      <p>
                                        Donec sed odio dui. Nulla vitae elit
                                        libero, a pharetra augue. Nullam id
                                        dolor id nibh ultricies vehicula ut id
                                        elit. Integer posuere erat a ante
                                        venenatis dapibus posuere velit aliquet.
                                      </p>
                                      <a
                                        className="comment-reply-link"
                                        href="#"
                                      >
                                        <i className="icon-reply" />
                                      </a>
                                    </div>
                                    <div className="clear" />
                                  </div>
                                  <ul className="children">
                                    <li
                                      className="comment byuser comment-author-_smcl_admin odd alt depth-2"
                                      id="li-comment-3"
                                    >
                                      <div
                                        id="comment-3"
                                        className="comment-wrap"
                                      >
                                        <div className="comment-meta">
                                          <div className="comment-author vcard">
                                            <span className="comment-avatar">
                                              <img
                                                alt=""
                                                src="https://1.gravatar.com/avatar/30110f1f3a4238c619bcceb10f4c4484?s=40&d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D40&r=G"
                                                className="avatar avatar-40 photo"
                                                height={40}
                                                width={40}
                                              />
                                            </span>
                                          </div>
                                        </div>
                                        <div className="comment-content">
                                          <div className="comment-author">
                                            <a
                                              href="#"
                                              rel="external nofollow"
                                              className="url"
                                            >
                                              SemiColon
                                            </a>
                                            <span>
                                              <a
                                                href="#"
                                                title="Permalink to this comment"
                                              >
                                                April 25, 2012 at 1:03 am
                                              </a>
                                            </span>
                                          </div>
                                          <p>
                                            Nullam id dolor id nibh ultricies
                                            vehicula ut id elit.
                                          </p>
                                          <a
                                            className="comment-reply-link"
                                            href="#"
                                          >
                                            <i className="icon-reply" />
                                          </a>
                                        </div>
                                        <div className="clear" />
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="comment byuser comment-author-_smcl_admin even thread-odd thread-alt depth-1"
                                  id="li-comment-2"
                                >
                                  <div id="comment-2" className="comment-wrap">
                                    <div className="comment-meta">
                                      <div className="comment-author vcard">
                                        <span className="comment-avatar">
                                          <img
                                            alt=""
                                            src="https://1.gravatar.com/avatar/30110f1f3a4238c619bcceb10f4c4484?s=60&d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&r=G"
                                            className="avatar avatar-60 photo"
                                            height={60}
                                            width={60}
                                          />
                                        </span>
                                      </div>
                                    </div>
                                    <div className="comment-content">
                                      <div className="comment-author">
                                        <a
                                          href="https://themeforest.net/user/semicolonweb"
                                          rel="external nofollow"
                                          className="url"
                                        >
                                          SemiColon
                                        </a>
                                        <span>
                                          <a
                                            href="#"
                                            title="Permalink to this comment"
                                          >
                                            April 25, 2012 at 1:03 am
                                          </a>
                                        </span>
                                      </div>
                                      <p>
                                        Integer posuere erat a ante venenatis
                                        dapibus posuere velit aliquet.
                                      </p>
                                      <a
                                        className="comment-reply-link"
                                        href="#"
                                      >
                                        <i className="icon-reply" />
                                      </a>
                                    </div>
                                    <div className="clear" />
                                  </div>
                                </li>
                              </ol>
                              {/* .commentlist end */}
                              <div className="clear" />
                              {/* Comment Form
													============================================= */}
                              <div id="respond">
                                <h3>
                                  Leave a <span>Comment</span>
                                </h3>
                                <form
                                  className="row mb-0"
                                  action="#"
                                  method="post"
                                  id="commentform"
                                >
                                  <div className="form-group col-4">
                                    <label htmlFor="author">Name</label>
                                    <input
                                      type="text"
                                      name="author"
                                      id="author"
                                      defaultValue=""
                                      size={22}
                                      tabIndex={1}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="form-group col-4">
                                    <label htmlFor="email">Email</label>
                                    <input
                                      type="text"
                                      name="email"
                                      id="email"
                                      defaultValue=""
                                      size={22}
                                      tabIndex={2}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="form-group col-4">
                                    <label htmlFor="url">Website</label>
                                    <input
                                      type="text"
                                      name="url"
                                      id="url"
                                      defaultValue=""
                                      size={22}
                                      tabIndex={3}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="w-100" />
                                  <div className="form-group col-12">
                                    <label htmlFor="comment">Comment</label>
                                    <textarea
                                      name="comment"
                                      id="comment"
                                      cols={58}
                                      rows={7}
                                      tabIndex={4}
                                      className="form-control"
                                      defaultValue={""}
                                    />
                                  </div>
                                  <div className="form-group col-12 mt-4 mb-0">
                                    <button
                                      name="submit"
                                      type="submit"
                                      id="submit-button"
                                      tabIndex={5}
                                      value="Submit"
                                      className="button button-large button-black button-dark nott fw-medium ls0 button-rounded m-0"
                                    >
                                      Submit Comment
                                    </button>
                                  </div>
                                </form>
                              </div>
                              {/* #respond end */}
                            </div>
                            {/* #comments end */}
                          </div>
                        </div>
                      </div>
                      {/* Post Single - Content End */}
                    </div>
                  </div>
                </div>
                {/* .entry end */}
                <h3 className="mb-0">Related Posts</h3>
                <div className="row posts-md">
                  <div className="col-lg-3 col-sm-6">
                    <article className="entry">
                      <div className="entry-image">
                        <a href="#">
                          <img
                            src="assets/blog/images/elevator3.jpg"
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
                            src="assets/blog/images/elevator4.jpg"
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
                            src="assets/blog/images/elevator1.jpg"
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
                            src="assets/blog/images/elevator2.jpg"
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
                </div>
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
              <div className="col-lg-3 col-sm-6">
                <div className="widget widget_links">
                  <h4 className="mb-3 mb-sm-4 nott ls0">Management</h4>
                  <ul>
                    <li>
                      <a href="https://codex.wordpress.org/">About Us</a>
                    </li>
                    <li>
                      <a href="https://wordpress.org/support/forum/requests-and-feedback">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="https://wordpress.org/extend/plugins/">
                        Customers
                      </a>
                    </li>
                    <li>
                      <a href="https://wordpress.org/support/">Forums</a>
                    </li>
                    <li>
                      <a href="https://wordpress.org/extend/themes/">
                        Partners
                      </a>
                    </li>
                    <li>
                      <a href="https://wordpress.org/news/">Themes</a>
                    </li>
                    <li>
                      <a href="https://planet.wordpress.org/">Pricing</a>
                    </li>
                    <li>
                      <a href="https://planet.wordpress.org/">Reviews</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Footer Widget 3
					============================================= */}
              <div className="col-lg-3 col-sm-6">
                <div className="widget widget_links">
                  <h4 className="mb-3 mb-sm-4 nott ls0">Our Products</h4>
                  <ul>
                    <li>
                      <a href="https://codex.wordpress.org/">Real Estate</a>
                    </li>
                    <li>
                      <a href="https://wordpress.org/support/forum/requests-and-feedback">
                        Movers
                      </a>
                    </li>
                    <li>
                      <a href="https://wordpress.org/extend/plugins/">Stores</a>
                    </li>
                    <li>
                      <a href="https://wordpress.org/support/">Landing</a>
                    </li>
                    <li>
                      <a href="https://wordpress.org/extend/themes/">Seo</a>
                    </li>
                    <li>
                      <a href="https://wordpress.org/news/">CoWorking</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Footer Widget 3
					============================================= */}
              <div className="col-lg-3 col-sm-6">
                <div className="widget widget_links">
                  <h4 className="mb-3 mb-sm-4 nott ls0">Support</h4>
                  <ul>
                    <li>
                      <a href="https://codex.wordpress.org/">Privacy</a>
                    </li>
                    <li>
                      <a href="https://wordpress.org/support/forum/requests-and-feedback">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a href="https://wordpress.org/extend/plugins/">Chat</a>
                    </li>
                    <li>
                      <a href="https://wordpress.org/support/">Email Us</a>
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
              <div className="col-lg-3 col-sm-6">
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
          <div id="copyrights">
            <div className="container">
              <div className="row align-items-center justify-content-between col-mb-30">
                <div className="col-lg-auto text-center text-lg-start">
                  Copyrights © 2018 All Rights Reserved by Canvas Inc.
                  <br />
                  <div className="copyright-links">
                    <a href="#">Terms of Use</a> /{" "}
                    <a href="#">Privacy Policy</a>
                  </div>
                </div>
                <div className="col-lg-auto text-center text-lg-start">
                  <div className="copyrights-menu copyright-links m-0">
                    <a href="#">Home</a>/<a href="#">About</a>/
                    <a href="#">Features</a>/<a href="#">Portfolio</a>/
                    <a href="#">FAQs</a>/<a href="#">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* #copyrights end */}
        </footer>
        {/* #footer end */}
      </div>
      {/* #wrapper end */}
      {/* Go To Top
	============================================= */}
      <div
        id="gotoTop"
        className="icon-angle-up rounded-circle"
        style={{ left: 30, right: "auto" }}
      />

      <Helmet>
        <script src="assets/js/jquery.js" />
        <script src="assets/js/plugins.min.js" />

        <script src="assets/js/functions.js" />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        />
      </Helmet>
    </>
  );
}

export default App;
