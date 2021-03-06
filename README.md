jsdoc-by-experiment
===================

Learn how to document your code by experimenting on readily available code
samples.

# How to build this documentation from scratch

Simply running `jsdoc .` will render documentation pages to `out/` directory.

To include lengthy tutorials into documentation, use `jsdoc -u tutorials .` (do
not miss the ending dot character).

Want to incorporate contents of this README.md file into documentation's Index
page?

```
jsdoc -u tutorials . README.md
```

See {@link http://usejsdoc.org/about-including-readme.html} about including
README file into documentation generated by JSDoc 3.

# Who uses JSDoc 3 and how?

* jQuery does not use JSDoc, [here is why][jquery-jsdoc].

[jquery-jsdoc]: http://stackoverflow.com/questions/4050233/why-doesnt-jquery-use-jsdoc

# Code and projects related to JSDoc

*   [doctrine](https://github.com/Constellation/doctrine)

    doctrine is JSDoc parser written in JavaScript which can be used both in
    browser and in node.js scripts.

    * [jsd](https://www.npmjs.org/package/jsd) yet another JSDoc parser.
    * [bem-jsdoc](https://www.npmjs.org/package/bem-jsdoc) yet another... how it
        relates to BEM from Yandex?

# Alternatives to JSDoc for documenting JavaScript code

* [JSDoc vs YUIDoc vs Doxx vs Docco – Choosing a JavaScript documentation generator][fusioncharts-comparison]
    by Kaustav Das Modak on December 4, 2013

[fusioncharts-comparison]: http://blog.fusioncharts.com/2013/12/jsdoc-vs-yuidoc-vs-doxx-vs-docco-choosing-a-javascript-documentation-generator/

# HTML in README.md

Scrips included in README.md will be executed in a viewer's browser.

<script>
    // This will be executed in a viewer's browser.
    console.log('Hello from HTML in README.md section');
</script>