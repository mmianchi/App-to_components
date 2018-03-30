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
      <HeadLine
        title={"React Bootcamp"}
      />
      <HeadTag 
        title={"Helping you understand everything React"}
      />
    </div>
  );
}

const HeadLine = (props) => {
  return (
    <h1 class="headline">{props.title}</h1>
  );
}

const HeadTag = (props) => {
  return (
    <span class="tagline">{props.title}</span>
  );
}

const CardList = () => {
  return (
    <div class="row">
      <CardOne
        title={"Tutoring"}
        content={"Progress starts with accountability. Be a part of a community. Find a mentor."}
        buttonName={"Learn More"}
      />
      <CardTwo 
        title={"Tutorials"}
        content={"Do not start from scratch, just learn the pieces that you need to advance."}
        buttonName={"Learn More"}
      />
      <CardThree 
        title={"Code Reviews"}
        content={"Code is not working out? Have a tutor review your code and get answers to your problems."}
        buttonName={"Learn More"}
      />
    </div>
  );
}

const CardOne = (props) => {
  return (
    <div class="col">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button class="btn-blue"><a href="#">{props.buttonName}</a></button>
    </div>
  );
}

const CardTwo = (props) => {
  return (
    <div class="col">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button class="btn-blue"><a href="#">{props.buttonName}</a></button>
    </div>
  );
}

const CardThree = (props) => {
  return (
    <div class="col">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button class="btn-blue"><a href="#">{props.buttonName}</a></button>
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