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
    <header className="main-header">
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
    <h1 className="name">
      <a href="props.href">{props.title}</a>
    </h1>
  );
}

const Navigation = () => {
  return (
    <ul className="main-nav">
      <NavLink 
        title={"My Courses"}
        href={"#"}
      />
      <NavLink 
        title={"Account"}
        href={"#"}
      />
    </ul>
  );
}

const NavLink = (props) =>{
  return (
    <li>
      <a href={props.href}>{props.title}</a>
    </li>
  );
}

const Banner = () => {
  return (
    <div className="banner">
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
    <h1 className="headline">{props.title}</h1>
  );
}

const HeadTag = (props) => {
  return (
    <span className="tagline">{props.title}</span>
  );
}

const CardList = () => {
  return (
    <div className="row">
      <Card
        title={"Tutoring"}
        content={"Progress starts with accountability. Be a part of a community. Find a mentor."}
        buttonName={"Learn More"}
      />
      <Card
        title={"Tutorials"}
        content={"Do not start from scratch, just learn the pieces that you need to advance."}
        buttonName={"Learn More"}
      />
      <Card
        title={"Code Reviews"}
        content={"Code is not working out? Have a tutor review your code and get answers to your problems."}
        buttonName={"Learn More"}
      />
    </div>
  );
}

const Card = (props) => {
  return (
    <div className="col">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button className="btn-blue"><a href="#">{props.buttonName}</a></button>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="main-footer">
      <span>&copy;2018 React Bootcamp</span>
    </footer>
  );
}


export default Static;