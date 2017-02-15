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
/*
var NewComponent = React.createClass({
  displayName: "NewComponent",

  render: function () {
    return React.createElement(
      "div",
      null,
      "Bootswatch Themes Help Blog Darkly Built With Bootstrap WrapBootstrap Darkly Flatly in night mode 90% Unlimited Downloads Choose from Over 300,000 Vectors, Graphics & Photos. ads via Carbon Navbar Buttons Typography Tables Forms Navs Indicators Progress bars Containers Dialogs Navbar Brand Link (current) Link Dropdown Link Brand Link (current) Link Dropdown Link Buttons Typography Heading 1 Heading 2 Heading 3 Heading 4 Heading 5 Heading 6 Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Example body text Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula. This line of text is meant to be treated as fine print. The following snippet of text is rendered as bold text. The following snippet of text is rendered as italicized text. An abbreviation of the word attribute is attr. Emphasis classes Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Maecenas sed diam eget risus varius blandit sit amet non magna. Blockquotes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title Tables #  Column heading  Column heading  Column heading 1  Column content  Column content  Column content 2  Column content  Column content  Column content 3  Column content  Column content  Column content 4  Column content  Column content  Column content 5  Column content  Column content  Column content 6  Column content  Column content  Column content 7  Column content  Column content  Column content Forms Legend Email Password Checkbox Textarea A longer block of help text that breaks onto a new line and may extend beyond one line. Radios Option one is this Option two can be something else Selects Focused input Disabled input Input warning Input error Input success Large input Default input Small input Input addons $ Navs Tabs Home Profile Disabled Dropdown Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Pills Home Profile Disabled Dropdown Home Profile Disabled Dropdown Breadcrumbs Home Home Library Home Library Data Pagination « 1 2 3 4 5 » « 1 2 3 » « 1 2 3 4 5 » Pager Previous Next ← Older Newer → Indicators Alerts Warning! Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Oh snap! Change a few things up and try submitting again. Well done! You successfully read this important alert message. Heads up! This alert needs your attention, but it's not super important. Labels Default Primary Success Warning Danger Info Badges Home 42 Profile Messages 3 Progress bars Basic Contextual alternatives Striped Animated Stacked Containers Jumbotron This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information. List groups 14 Cras justo odio 2 Dapibus ac facilisis in 1 Morbi leo risus Cras justo odio Dapibus ac facilisis in Morbi leo risus List group item heading Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. List group item heading Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Panels Basic panel Panel heading Panel content Panel content Panel footer Panel primary Panel content Panel success Panel content Panel warning Panel content Panel danger Panel content Panel info Panel content Wells Look, I'm in a well! Look, I'm in a small well! Look, I'm in a large well! Dialogs Modals Modal title One fine body… Popovers Tooltips Source Code",
      React.createElement(
        "ul",
        { className: "nav nav-tabs" },
        React.createElement(
          "li",
          { className: true },
          React.createElement(
            "a",
            { href: "#home", "data-toggle": "tab", "aria-expanded": "false" },
            "Home"
          )
        ),
        React.createElement(
          "li",
          { className: "active" },
          React.createElement(
            "a",
            { href: "#profile", "data-toggle": "tab", "aria-expanded": "true" },
            "Profile"
          )
        ),
        React.createElement(
          "li",
          { className: "disabled" },
          React.createElement(
            "a",
            null,
            "Disabled"
          )
        ),
        React.createElement(
          "li",
          { className: "dropdown" },
          React.createElement(
            "a",
            { className: "dropdown-toggle", "data-toggle": "dropdown", href: "#" },
            "Dropdown ",
            React.createElement("span", { className: "caret" })
          ),
          React.createElement(
            "ul",
            { className: "dropdown-menu" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#dropdown1", "data-toggle": "tab" },
                "Action"
              )
            ),
            React.createElement("li", { className: "divider" }),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#dropdown2", "data-toggle": "tab" },
                "Another action"
              )
            )
          )
        )
      ),
      React.createElement(
        "div",
        { id: "myTabContent", className: "tab-content" },
        React.createElement(
          "div",
          { className: "tab-pane fade", id: "home" },
          React.createElement(
            "p",
            null,
            "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."
          )
        ),
        React.createElement(
          "div",
          { className: "tab-pane fade active in", id: "profile" },
          React.createElement(
            "p",
            null,
            "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit."
          )
        ),
        React.createElement(
          "div",
          { className: "tab-pane fade", id: "dropdown1" },
          React.createElement(
            "p",
            null,
            "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork."
          )
        ),
        React.createElement(
          "div",
          { className: "tab-pane fade", id: "dropdown2" },
          React.createElement(
            "p",
            null,
            "Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater."
          )
        )
      ),
      "Back to top Blog RSS Twitter GitHub API Support Made by Thomas Park. Contact him at thomas@bootswatch.com. Code released under the MIT License. Based on Bootstrap. Icons from Font Awesome. Web fonts from Google."
    );
  }
});

ReactDOM.render(
  React.createElement(NewComponent, null),
  document.getElementById('menu'));
*/