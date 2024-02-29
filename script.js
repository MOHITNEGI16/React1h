const para4 = React.createElement(
  "p",
  {},
  React.createElement(
    "a",
    { href: "https://developer.mozilla.org/en-US/docs/Learn/CSS" },
    "CSS — Styling the web"
  ),
  React.createElement("br", null, null),
  "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS."
);

const para3 = React.createElement(
  "p",
  {},
  React.createElement(
    "a",
    { href: "https://developer.mozilla.org/en-US/docs/Learn/HTML" },
    "HTML — Structuring the web"
  ),
  React.createElement("br", null, null),
  "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail."
);

const para2 = React.createElement(
  "p",
  {},
  React.createElement(
    "a",
    {
      href: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web",
    },
    "Getting started with the web"
  ),
  React.createElement("br", null, null),
  "Provides a practical introduction to web development for complete beginners."
);

const para1 = React.createElement(
  "p",
  {},
  "The following is a list of all the topics we cover in the MDN learning area."
);

const heading = React.createElement(
  "h1",
  { style: { marginTop: "0px" } },
  "Topics Coverd"
);

const div = React.createElement(
  "div",
  {
    style: {
      height: "83vh",
      width: "60vw",
      padding: "40px",
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: "1.4rem",
      lineHeight: "6vh",
    },
  },
  [heading, para1, para2, para3, para4]
);

ReactDOM.render(div, document.getElementById("root"));
