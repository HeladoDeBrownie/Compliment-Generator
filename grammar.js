var grammar = tracery.createGrammar({
    origin: "#compliment.capitalize#! #emoji#",

    compliment: [
        "I appreciate how hard you #work##maybeWorkModifier#",
        "I feel #safe# #aroundYou#",
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
        "#safe#",
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

    safe: [
        "calm",
        "good",
        "like nothing bad can happen",
        "protected",
        "safe",
    ],

    aroundYou: [
        "around you",
        "when you're #here#",
        "with you #here#",
    ],

    here: [
        "around",
        "close",
        "here",
        "here with me",
        "#near#",
    ],

    near: [
        "near",
        "nearby",
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
        "#aJoy_# #toBeAround#",
        "one of the #goodBetterBest# things #inThisWorld#",
    ],

    aJoy_: [
        "a joy",
        "a pleasure",
        "fun",
        "someone I #amLucky#",
    ],

    amLucky: [
        "am #fortunate#",
        "consider myself #fortunate#",
        "count myself #fortunate#",
    ],

    fortunate: [
        "fortunate",
        "lucky",
    ],

    toBeAround: [
        "to be around",
        "to exist near",
        "to know",
        "to #live# in the same time with",
    ],

    live: [
        "be alive",
        "exist",
        "live",
    ],

    goodBetterBest: [
        "good",
        "good",
        "good",
        "good",
        "better",
        "best",
    ],

    inThisWorld: [
        "in the history of #humanity#",
        "in this world",
        "on this planet #weCallEarth#",
        "to come out of the Big Bang",
    ],

    humanity: [
        "humanity",
        "#theEarth#",
        "the universe",
        "the world",
    ],

    theEarth: [
        "Earth",
        "the earth",
    ],

    weCallEarth: [
        "#theEarth#",
        "third from our sun",
        "we call #theEarth#",
    ],

    aNice: [
        "an adorable",
        "a lovely",
        "a nice",
        "a radiant",
    ],

    quality: [
        "#aura#",
        "laugh",
        "smile",
        "way of #doingSomethingNice#"
    ],

    aura: [
        "aura",
        "energy",
    ],

    doingSomethingNice: [
        "#being#",
        "doing things",
        "letting #people# know that things will be all right",
        "making #people# feel #good#",
    ],

    being: [
        "being",
        "existing",
    ],

    somethingThatMatters: [
        "capacity for #capacityThatMatters#",
        "courage",
        "existence",
        "hard work",
    ],

    capacityThatMatters: [
        "affection",
        "friendship",
        "kindness",
        "love",
        "positive change",
    ],

    matters: [
        "#comparativelyMatters# than you realize",
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

    comparativelyMatters: [
        "is more valuable #maybeToPeople#",
        "makes #people# happier",
        "matters more",
    ],

    maybeToPeople: [
        "",
        "to #people#",
    ],

    youHaveGoodTaste: [
        "you have good taste in #somethingTasteful#",
    ],

    somethingTasteful: [
        "art",
        "clothing",
        "#friends#",
        "#hobbies#",
        "music",
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

    hobbies: [
        "hobbies",
        "pastimes",
        "the things you strive toward #eachDay#",
    ],

    eachDay: [
        "all the time",
        "each day",
        "on a daily basis",
    ],

    emoji: [
        "#emojiCommon#",
        "#emojiCommon#",
        "#emojiCommon#",
        "#emojiCommon#",
        "#emojiUncommon#",
    ],

    emojiCommon: "#maybeEmojiEyebrows##emojiEyes##emojiMouth#",

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
        "#emojiMouthAstonished#",
        ">",
    ],

    emojiMouthAstonished: [
        "o",
        "O",
        "v",
        "V",
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
