// /*
// class menu extends React.component{
//     return() {
//  var menu = React.createElement(
//   'div',
//   null,
//   React.createElement(
//     'h1',
//     null,
//     'My Favorite Foods'
//   ),
//   React.createElement(
//     'ul',
//     null,
//     React.createElement(
//       'li',
//       null,
//       'Sushi Burrito'
//     ),
//     React.createElement(
//       'li',
//       null,
//       'Rhubarb Pie'
//     ),
//     React.createElement(
//       'li',
//       null,
//       'Nacho Cheez Straight Out The Jar'
//     ),
//     React.createElement(
//       'li',
//       null,
//       'Broiled Grapefruit',
//     )
//   )
// );
//     }
// };
// */
// var people = ['Rowe', 'Prevost', 'Gare'];

// var links = ['Home.html', 'about.html', 'ContactUs.html'];

// var peopleLIs = people.map(function (person, i) {
//   // return statement goes here:
//   return React.createElement(
//     'li',
//     { key: "person_" + i },
//     people,

//   );
// });
// var peopleLInk = link.map(function (person, v) {
//     return React.createElement(
//     'a',
//     {href: url},
//     {key: "person_" + v},
//     link
//     );
// });
// // ReactDOM.render goes here:
// ReactDOM.render(
//     React.createElement('ul', null, peopleLIs, peopleLInk), 
//     document.getElementById('menu')
// );

// /*
// class Menu extends React.Component {
//     render() {
//         let menus = ['Home',
//             'About',
//             'Assigment',
//             'Portfolio',
//             'Contact us']
//     }
// };
// class Link extends React.Component {

// }
// ReactDOM.render(menu, link,
//     document.getElementById("menu")
// );*/

// var Menu = React.createClass({
//     render: function(){
//         return React.DOM.createElement("ul", null),
//         React.DOM.createElement("li", null, "home")
//     }
// });

// ReactDOM.render(Menu,
//     document.getElementById("menu")
// );

// class Menu extends React.Component {
//     render() {
//         let menus = ['Home',
//             'About',
//             'Services',
//             'Portfolio',
//             'Contact us']
//     }
    
// };
// class Link extends React.Component {

// };
// ReactDOM.render(
//     React.createElement(Menu, null),
//     document.getElementById('menu')
// );

class Menu extends React.Component {
  render() {
    let menus = [
      'Home',
      'About',
      'Contact us']
    return React.createElement('div',
      null,
      menus.map((v, i) => {
        return React.createElement('div',
          {key: i},
          React.createElement(Link, {label: v})
        )
      })
    )
}};

// class Link extends React.Component {
//   render() {
//     const url='/'
//       + this.props.label
//         .toLowerCase()
//         .trim()
//         .replace(' ', '-')
//         //.add(".html")
//     return React.createElement('div',
//       null,
//       React.createElement(
//         'a',
//         {href: url},
//         this.props.label
//       ),
//       React.createElement('br')
//       )
//   }
// }

// ReactDOM.render(
//   React.createElement(
//     Menu,
//     null
//   ),
//   document.getElementById('menu')
// )

// var React = require('react');
// var ReactDOM = require('react-dom');

// var QuoteMaker = React.createClass({
//   displayName: 'Menu',

//   render: function () {
//     return React.createElement(
//       'ul',
//       null,
//       React.createElement(
//         'li',
//         null,
//         "Home"
//       ),
//         React.createElement(
//           'a',
//           { target: '_blank',
//             href: 'http://bit.ly/1WGzM4G',
//           key: "1" },
//           'Douglas Huebler'
//         )
//     );
//   }
// });

// var navBar = React.createElement(
//   "nav",
//   null,
//   "I am a nav bar"
// );
// var Menu = {
//   center: React.createElement(
//     "li",
//     null,
//     "Ben Wallace"
//   ),
//   powerForward: React.createElement(
//     "li",
//     null,
//     "Rasheed Wallace"
//   ),
//   smallForward: React.createElement(
//     "li",
//     null,
//     "Tayshaun Prince"
//   ),
//   shootingGuard: React.createElement(
//     "li",
//     null,
//     "Richard Hamilton"
//   ),
//   pointGuard: React.createElement(
//     "li",
//     null,
//     "Chauncey Billups"
//   )
// };

var NewComponent = React.createClass({
  displayName: "NewComponent",

  render: function () {
    return React.createElement(
      "div",
      { className: "Menu" },
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "home.html" },
            "Home"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "about.html" },
            "About"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "contactus.html" },
            "Contact US"
          )
        )
      )
    );
  }
});

ReactDOM.render(
  React.createElement(NewComponent, null),
  document.getElementById('menu'));

