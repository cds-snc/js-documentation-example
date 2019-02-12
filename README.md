# JavaScript Documentation examples

Should you decide to document your code in JavaScript (you should!), there are several tools available to you.

## Use JSDoc

[JSDoc](http://usejsdoc.org/) appears to be the de facto standard for documentation in JavaScript.

### Examples

Documenting a component and its functions and properties:

```
/** Component representing a button. */
class Button extends Component {

    propTypes = {
        /** Name is a string passed to the Button component*/
        text: PropTypes.string,
    }

    /**
     * Upcase a string.
     * @param {string} str - The string to upcase.
     * @return {string} The upcased string.
     */
    upcase(str) {
        return str.toUpperCase()
    }

    render() {
    return (
      <Button>{this.upcase(this.props.text)}</Button>
    );
}

```

## Output options

### Documentation.js

[http://documentation.js.org/](http://documentation.js.org/)

- Outputs HTML, Markdown, and JSON

Run `yarn documentation`

### Docz

[https://www.docz.site](https://www.docz.site)

- Outputs HTML and Markdown
- Is used to create interactive components

Run `yarn docz`

## Tools

Currently no specific tools. Looking for a good ES6 doctest library.
