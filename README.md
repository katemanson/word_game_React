#Word game: React version

This is an ongoing individual project, begun in Week 16 (the final week) of the immersive coding course at [CodeClan](https://codeclan.com/). 

It develops an [earlier personal project](https://github.com/katemanson/word_game), converting it from JavaScript-only to use React. 

##What it does

The (eventual) aim is to make a version of the game [Bananagrams](http://www.bananagrams.com/games/bananagrams), which is kind of like speed-Scrabble... with a banana theme. (Bear with me, here &ndash; it's probably my favourite-ever game.) 

At the moment what it does is populate a grid with letter tiles, which can then be drag-and-dropped however you like to construct a crossword-style set of words (which is the basic aim of the game). There's code in place for working out what words have been made, and for an API query to a Scrabble dictionary, to check that those words made are valid. The next stage is to link these things up, so that the 'Submit' button in the browser can be used to trigger a check of the words made. 

![screenshot](https://github.com/katemanson/word_game_react/raw/master/img/screenshot.png)

##Tech

* JavaScript (ES6, mostly)
* React
* [React DnD](https://react-dnd.github.io/react-dnd/) with HTML5 backend (drag and drop package)
* Node.js
* Express (lightweight web framework)
* Babel (ES6 to ES5 compiler)
* webpack (module bundler)
* lodash (JavaScript utility library)
* xml2json (converter)
