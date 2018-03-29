import React from 'react';
conts Static = () => {
  return (
    <div>

      <header class="main-header">
        <h1 class="name"><a href="#">React Bootcamp</a></h1>
        <ul class="main-nav">
          <li><a href="#">My Courses</a></li>
          <li><a href="#">Account</a></li>
        </ul>
      </header>

      <div class="banner">
        <h1 class="headline">React Bootcamp</h1>
        <span class="tagline">Helping you understand everything React</span>
      </div>

      <div class="row">
        <div class="col">
          <h2>Tutoring</h2>
          <p>Progress starts with accountability. Be a part of a community. Find a mentor.</p>
          <button class="btn-blue"><a href="#">Learn More</a></button>
        </div>

        <div class="col">
          <h2>Tutorials</h2>
          <p>Don't start from scratch, just learn the pieces that you need to advance.</p>
          <button class="btn-blue"><a href="#">Learn More</a></button>
        </div>

        <div class="col">
          <h2>Code Reviews</h2>
          <p>Code isn't working out? Have a tutor review your code and get answers to your problems.</p>
          <button class="btn-blue"><a href="#">Learn More</a></button>
        </div>
      </div>

      <footer class="main-footer">
        <span>&copy;2018 React Bootcamp</span>
      </footer>

    </div>
  );
}