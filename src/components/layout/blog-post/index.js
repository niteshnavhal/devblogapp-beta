import React from "react";
import Header from "../header";
import Footer from "../footer";

function Blogpost() {
  return (
    <div>
      <Header></Header>
      <div className="main-wrapper">
        <article className="blog-post px-3 py-5 p-md-5">
          <div className="container single-col-max-width">
            <header className="blog-post-header">
              <h2 className="title mb-2">
                Why Every Developer Should Have A Blog
              </h2>
              <div className="meta mb-3">
                <span className="date">Published 2 days ago</span>
                <span className="time">5 min read</span>
                <span className="comment">
                  <a className="text-link" href="#">
                    4 comments
                  </a>
                </span>
              </div>
            </header>
            <div className="blog-post-body">
              <figure className="blog-banner">
                <a href="https://made4dev.com">
                  <img
                    className="img-fluid"
                    src="assets/images/blog/blog-post-banner.jpg"
                    alt="image"
                  />
                </a>
                <figcaption className="mt-2 text-center image-caption">
                  Image Credit:{" "}
                  <a
                    className="theme-link"
                    href="https://made4dev.com?ref=devblog"
                    target="_blank"
                  >
                    made4dev.com (Premium Programming T-shirts)
                  </a>
                </figcaption>
              </figure>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim.{" "}
              </p>

              <h3 className="mt-5 mb-3">Code Block Example</h3>
              <p>
                You can get more info at{" "}
                <a
                  className="text-link"
                  href="https://highlightjs.org/"
                  target="_blank"
                >
                  https://highlightjs.org/
                </a>
                . Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
                justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                dictum felis eu pede mollis pretium. Integer tincidunt. Cras
                dapibus. Vivamus elementum semper nisi. Aenean vulputate
                eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                vitae, eleifend ac, enim.{" "}
              </p>
            </div>
          </div>
        </article>
        <section className="promo-section theme-bg-light py-5 text-center">
          <div className="container">
            <h2 className="title">Promo Section Heading</h2>
            <p>
              You can use this section to promote your side projects etc. Lorem
              ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa.{" "}
            </p>
            <figure className="promo-figure">
              <a href="https://made4dev.com" target="_blank">
                <img
                  className="img-fluid"
                  src="assets/images/promo-banner.jpg"
                  alt="image"
                />
              </a>
            </figure>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Blogpost;
