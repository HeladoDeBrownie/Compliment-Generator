var grammar = tracery.createGrammar({
    origin: "#compliment.capitalize#! #emoji#",

    compliment: [
        "I appreciate how hard you #work##maybeWorkModifier#",
        "I like being #yourFriend#",
        "you are #aJoy#",
        "you have #aNice# #quality#",
        "your #somethingThatMatters# #matters#",
        "#people# are better off since you exist",
        "#youHaveGoodTaste#",
    ],

    work: [
        "make an effort",
        "try",
        "work",
    ],

    maybeWorkModifier: [
        "",
        "",
        " #workModifier#",
    ],

    workModifier: [
        "during #tough# times",
        "even when things are #tough#",
        "for the benefit of #people#",
        "to make #people# feel #good#",
    ],

    tough: [
        "difficult",
        "rough",
        "tough",
    ],

    people: [
        "others",
        "people",
        "people around you",
        "the people #youChooseToBeAround#",
        "those you care about",
        "your friends",
    ],

    good: [
        "good",
        "happy",
        "like they #areGood#",
        "nice",
        "valid",
        "wanted",
        "welcome#maybeD#",
    ],

    areGood: [
        "are valid",
        "are wanted",
        "are welcome",
        "belong",
    ],

    maybeD: [
        "",
        "d",
    ],

    yourFriend: [
        "#friend#s with you",
        "your #friend#",
    ],

    friend: [
        "bud",
        "friend",
        "pal",
    ],

    aJoy: [
        "a joy #toBeAround#",
        "one of the good things in this world",
    ],

    toBeAround: [
        "to be around",
        "to exist near",
        "to know",
        "to live in the same time with",  
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

    somethingThatMatters: [
        "capacity for #capacityThatMatters#",
        "existence",
        "hard work",
    ],

    capacityThatMatters: [
        "friendship",
        "kindness",
        "love",
    ],

    matters: [
        "is something to be #valued#",
        "is valuable for its own sake",
        "matters",
        "will all be worth it",
        "will be worth it in the end",
    ],

    valued: [
        "celebrated",
        "cherished",
        "proud of",
        "valued",
    ],

    youHaveGoodTaste: [
        "you have good taste in #somethingTasteful#",
    ],

    somethingTasteful: [
        "clothing",
        "#friends#",
    ],

    friends: [
        "friends",
        "the people #youChooseToBeAround#",
    ],

    youChooseToBeAround: [
        "whose company you keep",
        "you choose to be around",
        "you keep near you",
        "you spend your time with",
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
        "^#_.limit10#^",
        "(:",
    ],

    _: [
        "",
        "_",
        "_",
        "_",
        "_#_#",
    ],
})

grammar.modifiers.capitalize = function (string) {
    return string.replace(/^./, function (character) {
        return character.toUpperCase()
    })
}

grammar.modifiers.limit10 = function (string) {
    return string.substring(0, 10)
}
