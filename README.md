# JavaScript Documentation examples

Should you decide to document your code in JavaScript (you should!), there is one standard and several output tools available to you. Your ESLint file will help you get the formatting right.

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
     *
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

![screen shot 2019-02-12 at 9 04 03 am](https://user-images.githubusercontent.com/867334/52640969-ce789000-2ea5-11e9-9ecc-d84fa3fa6f2f.png)

[http://documentation.js.org/](http://documentation.js.org/)

- Outputs HTML, Markdown, and JSON

Run `yarn documentation`

### Docz

![screen shot 2019-02-12 at 9 06 21 am](https://user-images.githubusercontent.com/867334/52640968-ce789000-2ea5-11e9-8782-8d2046cb70d7.png)

[https://www.docz.site](https://www.docz.site)

- Outputs HTML and Markdown
- Is used to create interactive components

Run `yarn docz`

### ESDoc

![screen shot 2019-02-12 at 9 07 54 am](https://user-images.githubusercontent.com/867334/52640967-ce789000-2ea5-11e9-8da7-0d29610fc9ac.png)

[https://esdoc.org/](https://esdoc.org/)

- Pretty colours in HTML
- Requires plugins to work with ES6 and React, check `packages.json`

Run `yarn esdoc`

## Tools

Currently no specific tools. Looking for a good ES6 doctest library.

## References

- [https://github.com/airbnb/javascript#comments](https://github.com/airbnb/javascript#comments)
- [https://make.wordpress.org/core/handbook/best-practices/inline-documentation-standards/javascript/](https://make.wordpress.org/core/handbook/best-practices/inline-documentation-standards/javascript/)
- [https://www.drupal.org/docs/develop/standards/javascript/javascript-api-documentation-and-comment-standards](https://www.drupal.org/docs/develop/standards/javascript/javascript-api-documentation-and-comment-standards)
- [https://google.github.io/styleguide/jsguide.html](https://google.github.io/styleguide/jsguide.html)
- [https://github.com/rwaldron/idiomatic.js/#comments](https://github.com/rwaldron/idiomatic.js/#comments)
- [https://contribute.jquery.org/style-guide/js/#comments](https://contribute.jquery.org/style-guide/js/#comments)
