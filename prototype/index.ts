console.log("allo");
declare function require(module: string);
var SpellChecker = require('simple-spellchecker');
SpellChecker.getDictionary("en-GB.dic", function(err, dictionary) {
    if(!err) {
        var word: string = "sdfsdf";
        var misspelled = ! dictionary.spellCheck(word);
        if(misspelled) {
            console.log(word + " is not a word!");
        }
    }
    else {
        console.log(err);
    }
}); 