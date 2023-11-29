import React from "react";

function Mainhead() {
  return (
    <section className="cta-section theme-bg-light py-5">
      <div className="container text-center single-col-max-width">
        <h2 className="heading">DevCat- A Blog Template Made For Developers</h2>
        <div className="intro">
          Welcome to my blog. Search here and get blog post.
        </div>
        <div className="single-form-max-width pt-3 mx-auto">
          <form className="signup-form row g-2 g-lg-2 align-items-center">
            <div className="col-12 col-md-9">
              <label className="sr-only" for="semail">
                Your email
              </label>
              <input
                type="email"
                id="semail"
                name="semail1"
                className="form-control me-md-1 semail"
                placeholder="Search"
              />
            </div>
            <div className="col-12 col-md-2">
              <button type="submit" className="btn btn-primary">
                Find Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Mainhead;
