# Monostack theme

Monostack is a Gutenberg-ready WordPress theme that brings the beauty of code editors to the frontend. With a strong focus on typography and color, Monostack highlights specific grammar much like syntax highlighting does in code editors. Monostack is named after the "monospace" font stacks used throughout the theme.

### Foundation

The Monostack theme is built on the [Gutenberg starter theme](https://github.com/WordPress/gutenberg-starter-theme).

### Font Stack

The font stack is where it’s at. I spent a lot of time thinking it through to bring the best quality monospace typefaces to your screen.

```
body {
    font-family: "Space Mono", "Noto Mono", "Oxygen Mono", Courier, 
    monospace;
}
```

And just to throw more into the loop, I worked the `pre` and `code` a bit as well.

```
pre, code {
    font-family: Consolas, "Noto Mono", "Oxygen Mono", 
    Courier, monospace;
}
```
### Syntax Highlighting

Monostack uses syntax highlighting to pop certain grammar from the English language. 

* Blue words are conjunctions
* Pink words are prepositions
* Green words are pronouns

![Image of Monostack](https://cldup.com/sNkM_BJyoP.png)
