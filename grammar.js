var grammar = tracery.createGrammar({
    origin: "#compliment.capitalize#! #emoji#",

    compliment: [
        "I appreciate how hard you work",
        "you have a nice #niceQuality#",
    ],

    niceQuality: [
        "laugh",
        "smile",
    ],

    emoji: [
        "#emojiEyes##emojiMouth#",
        "#emojiUncommon#",
    ],

    emojiEyes: [
        ":",
        ":",
        ":",
        ":",
        "8",
    ],

    emojiMouth: [
        ")",
        "#emojiMouthUncommon#",
    ],

    emojiMouthUncommon: [
        "D",
        "3",
        "o",
        "O",
    ],

    emojiUncommon: [
        "^^",
        "^_^",
    ],
})

grammar.modifiers.capitalize = function (string) {
    return string.replace(/^./, function (character) {
        return character.toUpperCase()
    })
}
