const Elevator = () => {
  return (
    <div
      className="fade show active"
      //   id="v-pills-home"
      //   role="tabpanel"
      //   aria-labelledby="v-pills-home-tab"
    >
      <h1> Thang máy</h1>
      <p>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
        fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
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
        Nullam id dolor id nibh ultricies vehicula ut id elit.{" "}
        <a href="#">Curabitur blandit tempus porttitor</a>. Integer posuere erat
        a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus
        ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis
        euismod semper. Donec id elit non mi porta gravida at eget metus.
        Vestibulum id ligula porta felis euismod semper.
      </p>
      <blockquote>
        <p>
          Vestibulum id ligula porta felis euismod semper. Sed posuere
          consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare
          sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
          ligula porta felis euismod semper.
        </p>
      </blockquote>
      <br />
      <h3>2. Anatomy</h3>
      <p>
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi
        porta gravida at eget metus.
      </p>
      <p>
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean
        lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam.{" "}
        <a href="#">Nullam quis risus eget urna</a>
        mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus
        posuere velit aliquet.
      </p>
      <p>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
        fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
      </p>
      <br />
      <h3>3. Standard Solution</h3>
      <p>
        Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit
        tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere
        velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget
        quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non
        mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod
        semper.
      </p>
      <div className="row mb-4" data-lightbox="gallery">
        <div className="col-md-6">
          <a
            className="h-100"
            href="images/elevator1.jpg"
            data-lightbox="gallery-item"
          >
            <img
              className="rounded h-100"
              src="assets/images/elevator1.jpg"
              alt="Alt Images"
            />
          </a>
        </div>
        <div className="col-md-6">
          <a
            className="h-100"
            href="images/elevator2.jpg"
            data-lightbox="gallery-item"
          >
            <img
              className="rounded h-100"
              src="assets/images/elevator2.jpg"
              alt="Alt Images"
            />
          </a>
        </div>
      </div>
      <p>
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi
        porta gravida at eget metus.
      </p>
      <p>
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean
        lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam.{" "}
        <a href="#">Nullam quis risus eget urna</a>
        mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus
        posuere velit aliquet.
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
          <li className="comment even thread-even depth-1" id="li-comment-1">
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
                    <a href="#" title="Permalink to this comment">
                      April 24, 2012 at 10:46 am
                    </a>
                  </span>
                </div>
                <p>
                  Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Integer
                  posuere erat a ante venenatis dapibus posuere velit aliquet.
                </p>
                <a className="comment-reply-link" href="#">
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
                <div id="comment-3" className="comment-wrap">
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
                      <a href="#" rel="external nofollow" className="url">
                        SemiColon
                      </a>
                      <span>
                        <a href="#" title="Permalink to this comment">
                          April 25, 2012 at 1:03 am
                        </a>
                      </span>
                    </div>
                    <p>
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                    </p>
                    <a className="comment-reply-link" href="#">
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
                    <a href="#" title="Permalink to this comment">
                      April 25, 2012 at 1:03 am
                    </a>
                  </span>
                </div>
                <p>
                  Integer posuere erat a ante venenatis dapibus posuere velit
                  aliquet.
                </p>
                <a className="comment-reply-link" href="#">
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
          <form className="row mb-0" action="#" method="post" id="commentform">
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
  );
};

export default Elevator;
