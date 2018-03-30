import React from 'react';
const Static = () => {
  return (
    <div>
      <Header />
      <Banner />
      <CardList />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header class="main-header">
      <HeaderLogo /> 
      <Navigation />
    </header>
  );
}

const HeaderLogo = () => {
  return (
    <h1 class="name">
      <a href="#">React Bootcamp</a>
    </h1>
  );
}

const Navigation = () => {
  return (
    <ul class="main-nav">
      <NavOne />
      <NavTwo />
    </ul>
  );
}

const NavOne = () =>{
  return (
    <li>
      <a href="#">My Courses</a>
    </li>
  );
}

const NavTwo = () => {
  return (
    <li>
      <a href="#">Account</a>
    </li>
  );
}

const Banner = () => {
  return (
    <div class="banner">
      <HeadLine />
      <HeadTag />
    </div>
  );
}

const HeadLine = () => {
  return (
    <h1 class="headline">React Bootcamp</h1>
  );
}

const HeadTag = () => {
  return (
    <span class="tagline">Helping you understand everything React</span>
  );
}

const CardList = () => {
  return (
    <div class="row">
      <CardOne />
      <CardTwo />
      <CardThree />
    </div>
  );
}

const CardOne = () => {
  return (
    <div class="col">
      <h2>Tutoring</h2>
      <p>Progress starts with accountability. Be a part of a community. Find a mentor.</p>
      <button class="btn-blue"><a href="#">Learn More</a></button>
    </div>
  );
}


const CardTwo = () => {
  return (
    <div class="col">
      <h2>Tutorials</h2>
      <p>Don't start from scratch, just learn the pieces that you need to advance.</p>
      <button class="btn-blue"><a href="#">Learn More</a></button>
    </div>
  );
}

const CardThree = () => {
  return (
    <div class="col">
      <h2>Code Reviews</h2>
      <p>Code isn't working out? Have a tutor review your code and get answers to your problems.</p>
      <button class="btn-blue"><a href="#">Learn More</a></button>
    </div>
  );
}


const Footer = () => {
  return (
    <footer class="main-footer">
      <span>&copy;2018 React Bootcamp</span>
    </footer>
  );
}

export default Static;