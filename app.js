/*
class Menu extends React.Component {
  render() {
    let menus = [
      'Home',
      'About',
      'Services',
      'Portfolio',
      'Contact us'
      ]
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

class Link extends React.Component {
  render() {
    const url='/'
      + this.props.label
        .toLowerCase()
        .trim()
        .replace(' ', '-')
        //.add(".html")
    return React.createElement('div',
      null,
      React.createElement(
        'a',
        {href: url},
        this.props.label
      ),
      React.createElement('br')
      )
  }
};

ReactDOM.render(
  React.createElement(
    Menu,
    null
  ),
  document.getElementById('menu')
)
*/

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