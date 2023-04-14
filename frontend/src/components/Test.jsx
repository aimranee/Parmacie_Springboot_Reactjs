const Test = () => {
  return (
    <>
      <div className="section gray padding-top-65 padding-bottom-70 full-width-carousel-fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              {/* Section Headline */}
              <div className="section-headline margin-top-0 margin-bottom-25">
                <h3>Highest Rated Freelancers</h3>
                <a
                  href="freelancers-grid-layout.html"
                  className="headline-link"
                >
                  Browse All Freelancers
                </a>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="default-slick-carousel freelancers-container freelancers-grid-layout">
                {/*Freelancer */}
                <div className="freelancer">
                  {/* Overview */}
                  <div className="freelancer-overview">
                    <div className="freelancer-overview-inner">
                      {/* Bookmark Icon */}
                      <span className="bookmark-icon" />
                      {/* Avatar */}
                      <div className="freelancer-avatar">
                        <div className="verified-badge" />
                        <a href="single-freelancer-profile.html">
                          <img src="images/user-avatar-big-01.jpg" alt="" />
                        </a>
                      </div>
                      {/* Name */}
                      <div className="freelancer-name">
                        <h4>
                          <a href="single-freelancer-profile.html">
                            Tom Smith{" "}
                            <img
                              className="flag"
                              src="images/flags/gb.svg"
                              alt=""
                              title="United Kingdom"
                              data-tippy-placement="top"
                            />
                          </a>
                        </h4>
                        <span>UI/UX Designer</span>
                      </div>
                      {/* Rating */}
                      <div className="freelancer-rating">
                        <div className="star-rating" data-rating={5.0} />
                      </div>
                    </div>
                  </div>
                  {/* Details */}
                  <div className="freelancer-details">
                    <div className="freelancer-details-list">
                      <ul>
                        <li>
                          Location{" "}
                          <strong>
                            <i className="icon-material-outline-location-on" />{" "}
                            London
                          </strong>
                        </li>
                        <li>
                          Rate <strong>$60 / hr</strong>
                        </li>
                        <li>
                          Job Success <strong>95%</strong>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="single-freelancer-profile.html"
                      className="button button-sliding-icon ripple-effect"
                    >
                      View Profile{" "}
                      <i className="icon-material-outline-arrow-right-alt" />
                    </a>
                  </div>
                </div>
                {/* Freelancer / End */}
                {/*Freelancer */}
                <div className="freelancer">
                  {/* Overview */}
                  <div className="freelancer-overview">
                    <div className="freelancer-overview-inner">
                      {/* Bookmark Icon */}
                      <span className="bookmark-icon" />
                      {/* Avatar */}
                      <div className="freelancer-avatar">
                        <div className="verified-badge" />
                        <a href="single-freelancer-profile.html">
                          <img src="images/user-avatar-big-02.jpg" alt="" />
                        </a>
                      </div>
                      {/* Name */}
                      <div className="freelancer-name">
                        <h4>
                          <a href="#">
                            David Peterson{" "}
                            <img
                              className="flag"
                              src="images/flags/de.svg"
                              alt=""
                              title="Germany"
                              data-tippy-placement="top"
                            />
                          </a>
                        </h4>
                        <span>iOS Expert + Node Dev</span>
                      </div>
                      {/* Rating */}
                      <div className="freelancer-rating">
                        <div className="star-rating" data-rating={5.0} />
                      </div>
                    </div>
                  </div>
                  {/* Details */}
                  <div className="freelancer-details">
                    <div className="freelancer-details-list">
                      <ul>
                        <li>
                          Location{" "}
                          <strong>
                            <i className="icon-material-outline-location-on" />{" "}
                            Berlin
                          </strong>
                        </li>
                        <li>
                          Rate <strong>$40 / hr</strong>
                        </li>
                        <li>
                          Job Success <strong>88%</strong>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="single-freelancer-profile.html"
                      className="button button-sliding-icon ripple-effect"
                    >
                      View Profile{" "}
                      <i className="icon-material-outline-arrow-right-alt" />
                    </a>
                  </div>
                </div>
                {/* Freelancer / End */}
                {/*Freelancer */}
                <div className="freelancer">
                  {/* Overview */}
                  <div className="freelancer-overview">
                    <div className="freelancer-overview-inner">
                      {/* Bookmark Icon */}
                      <span className="bookmark-icon" />
                      {/* Avatar */}
                      <div className="freelancer-avatar">
                        <a href="single-freelancer-profile.html">
                          <img
                            src="images/user-avatar-placeholder.png"
                            alt=""
                          />
                        </a>
                      </div>
                      {/* Name */}
                      <div className="freelancer-name">
                        <h4>
                          <a href="#">
                            Marcin Kowalski{" "}
                            <img
                              className="flag"
                              src="images/flags/pl.svg"
                              alt=""
                              title="Poland"
                              data-tippy-placement="top"
                            />
                          </a>
                        </h4>
                        <span>Front-End Developer</span>
                      </div>
                      {/* Rating */}
                      <div className="freelancer-rating">
                        <div className="star-rating" data-rating="4.9" />
                      </div>
                    </div>
                  </div>
                  {/* Details */}
                  <div className="freelancer-details">
                    <div className="freelancer-details-list">
                      <ul>
                        <li>
                          Location{" "}
                          <strong>
                            <i className="icon-material-outline-location-on" />{" "}
                            Warsaw
                          </strong>
                        </li>
                        <li>
                          Rate <strong>$50 / hr</strong>
                        </li>
                        <li>
                          Job Success <strong>100%</strong>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="single-freelancer-profile.html"
                      className="button button-sliding-icon ripple-effect"
                    >
                      View Profile{" "}
                      <i className="icon-material-outline-arrow-right-alt" />
                    </a>
                  </div>
                </div>
                {/* Freelancer / End */}
                {/*Freelancer */}
                <div className="freelancer">
                  {/* Overview */}
                  <div className="freelancer-overview">
                    <div className="freelancer-overview-inner">
                      {/* Bookmark Icon */}
                      <span className="bookmark-icon" />
                      {/* Avatar */}
                      <div className="freelancer-avatar">
                        <div className="verified-badge" />
                        <a href="single-freelancer-profile.html">
                          <img src="images/user-avatar-big-03.jpg" alt="" />
                        </a>
                      </div>
                      {/* Name */}
                      <div className="freelancer-name">
                        <h4>
                          <a href="#">
                            Sindy Forest{" "}
                            <img
                              className="flag"
                              src="images/flags/au.svg"
                              alt=""
                              title="Australia"
                              data-tippy-placement="top"
                            />
                          </a>
                        </h4>
                        <span>Magento Certified Developer</span>
                      </div>
                      {/* Rating */}
                      <div className="freelancer-rating">
                        <div className="star-rating" data-rating={5.0} />
                      </div>
                    </div>
                  </div>
                  {/* Details */}
                  <div className="freelancer-details">
                    <div className="freelancer-details-list">
                      <ul>
                        <li>
                          Location{" "}
                          <strong>
                            <i className="icon-material-outline-location-on" />{" "}
                            Brisbane
                          </strong>
                        </li>
                        <li>
                          Rate <strong>$70 / hr</strong>
                        </li>
                        <li>
                          Job Success <strong>100%</strong>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="single-freelancer-profile.html"
                      className="button button-sliding-icon ripple-effect"
                    >
                      View Profile{" "}
                      <i className="icon-material-outline-arrow-right-alt" />
                    </a>
                  </div>
                </div>
                {/* Freelancer / End */}
                {/*Freelancer */}
                <div className="freelancer">
                  {/* Overview */}
                  <div className="freelancer-overview">
                    <div className="freelancer-overview-inner">
                      {/* Bookmark Icon */}
                      <span className="bookmark-icon" />
                      {/* Avatar */}
                      <div className="freelancer-avatar">
                        <a href="single-freelancer-profile.html">
                          <img
                            src="images/user-avatar-placeholder.png"
                            alt=""
                          />
                        </a>
                      </div>
                      {/* Name */}
                      <div className="freelancer-name">
                        <h4>
                          <a href="#">
                            Sebastiano Piccio{" "}
                            <img
                              className="flag"
                              src="images/flags/it.svg"
                              alt=""
                              title="Italy"
                              data-tippy-placement="top"
                            />
                          </a>
                        </h4>
                        <span>Laravel Dev</span>
                      </div>
                      {/* Rating */}
                      <div className="freelancer-rating">
                        <div className="star-rating" data-rating="4.5" />
                      </div>
                    </div>
                  </div>
                  {/* Details */}
                  <div className="freelancer-details">
                    <div className="freelancer-details-list">
                      <ul>
                        <li>
                          Location{" "}
                          <strong>
                            <i className="icon-material-outline-location-on" />{" "}
                            Milan
                          </strong>
                        </li>
                        <li>
                          Rate <strong>$80 / hr</strong>
                        </li>
                        <li>
                          Job Success <strong>89%</strong>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="single-freelancer-profile.html"
                      className="button button-sliding-icon ripple-effect"
                    >
                      View Profile{" "}
                      <i className="icon-material-outline-arrow-right-alt" />
                    </a>
                  </div>
                </div>
                {/* Freelancer / End */}
                {/*Freelancer */}
                <div className="freelancer">
                  {/* Overview */}
                  <div className="freelancer-overview">
                    <div className="freelancer-overview-inner">
                      {/* Bookmark Icon */}
                      <span className="bookmark-icon" />
                      {/* Avatar */}
                      <div className="freelancer-avatar">
                        <a href="single-freelancer-profile.html">
                          <img
                            src="images/user-avatar-placeholder.png"
                            alt=""
                          />
                        </a>
                      </div>
                      {/* Name */}
                      <div className="freelancer-name">
                        <h4>
                          <a href="#">
                            Gabriel Lagueux{" "}
                            <img
                              className="flag"
                              src="images/flags/fr.svg"
                              alt=""
                              title="France"
                              data-tippy-placement="top"
                            />
                          </a>
                        </h4>
                        <span>WordPress Expert</span>
                      </div>
                      {/* Rating */}
                      <div className="freelancer-rating">
                        <div className="star-rating" data-rating={5.0} />
                      </div>
                    </div>
                  </div>
                  {/* Details */}
                  <div className="freelancer-details">
                    <div className="freelancer-details-list">
                      <ul>
                        <li>
                          Location{" "}
                          <strong>
                            <i className="icon-material-outline-location-on" />{" "}
                            Paris
                          </strong>
                        </li>
                        <li>
                          Rate <strong>$50 / hr</strong>
                        </li>
                        <li>
                          Job Success <strong>100%</strong>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="single-freelancer-profile.html"
                      className="button button-sliding-icon ripple-effect"
                    >
                      View Profile{" "}
                      <i className="icon-material-outline-arrow-right-alt" />
                    </a>
                  </div>
                </div>
                {/* Freelancer / End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Highest Rated Freelancers / End*/}
    </>
  );
};
export default Test;
