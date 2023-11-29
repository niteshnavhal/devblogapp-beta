import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navigation" class="collapse navbar-collapse flex-column">
          <div class="profile-section pt-3 pt-lg-0">
            <img
              className="profile-image mb-3 rounded-circle mx-auto"
              src="assets/images/profile-2.jpg"
              alt="image"
            />

            <div class="bio mb-3">
              Hi, my name is Dev cat. Briefly introduce yourself here. You can
              also provide a link to the about page.
              <br />
              <Link to="/aboutme">Find out more about me</Link>
            </div>
            <ul class="social-list list-inline py-3 mx-auto">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter fa-fw"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in fa-fw"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-github-alt fa-fw"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-stack-overflow fa-fw"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-codepen fa-fw"></i>
                </a>
              </li>
            </ul>
            <hr />
          </div>

          <ul class="navbar-nav flex-column text-start">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                <i class="fas fa-home fa-fw me-2"></i>Blog Home{" "}
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/blog-post">
                <i class="fas fa-bookmark fa-fw me-2"></i>Blog Post
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/aboutme">
                <i class="fas fa-user fa-fw me-2"></i>About Me
              </Link>
            </li>
          </ul>

          <div class="my-2 my-md-3">
            <a
              className="btn btn-primary"
              href="https://niteshnavhal.github.io/myProfile/"
              target="_blank"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
