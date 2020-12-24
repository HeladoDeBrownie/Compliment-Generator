var grammar = tracery.createGrammar({
    origin: "#compliment.capitalize#! #emoji#",

    compliment: [
        "I appreciate how hard you #work##maybeWorkModifier#",
        "you have #aNice# #quality#",
    ],

    work: [
        "make an effort",
        "try",
        "work",
    ],

    maybeWorkModifier: [
        "",
        "",
        " #doSomethingModifier#",
    ],

    doSomethingModifier: [
        "even when things are tough",
        "to make people around you feel good",
    ],

    aNice: [
        "an adorable",
        "a lovely",
        "a nice",
        "a radiant",
    ],

    quality: [
        "laugh",
        "smile",
    ],

    emoji: [
        "#maybeEmojiEyebrows##emojiEyes##emojiMouth#",
        "#emojiUncommon#",
    ],

    maybeEmojiEyebrows: [
        "",
        "",
        "",
        "",
        "#emojiEyebrows#",
    ],

    emojiEyebrows: [
        ">",
        "}",
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
        "]",
        "}",
        "3",
        "o",
        "O",
    ],

    emojiUncommon: [
        "^^",
        "^_^",
        "(:",
    ],
})

grammar.modifiers.capitalize = function (string) {
    return string.replace(/^./, function (character) {
        return character.toUpperCase()
    })
}
