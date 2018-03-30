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
      <HeaderLogo 
      title={"React Bootcamp"}
      href={"#"}
      new={null}
      /> 
      <Navigation />
    </header>
  );
}

const HeaderLogo = (props) => {
  console.log("parent p",props)
  return (
    <h1 class="name">
      <a href="props.href">{props.title}</a>
    </h1>
  );
}

const Navigation = () => {
  return (
    <ul class="main-nav">
      <NavOne 
        title={"My Courses"}
        href={"#"}
      />
      <NavTwo 
        title={"Account"}
        href={"#"}
      />
    </ul>
  );
}

const NavOne = (props) =>{
  return (
    <li>
      <a href={props.href}>{props.title}</a>
    </li>
  );
}

const NavTwo = (props) => {
  return (
    <li>
      <a href={props.href}>{props.title}</a>
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
      <p>Do not start from scratch, just learn the pieces that you need to advance.</p>
      <button class="btn-blue"><a href="#">Learn More</a></button>
    </div>
  );
}

const CardThree = () => {
  return (
    <div class="col">
      <h2>Code Reviews</h2>
      <p>Code is not working out? Have a tutor review your code and get answers to your problems.</p>
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