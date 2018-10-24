
// Change color of words in text

const prepositions = [ translateWords.about, translateWords.beside, translateWords.near, translateWords.to, translateWords.above, translateWords.between, translateWords.of, translateWords.towards, translateWords.across, translateWords.beyond, translateWords.off, translateWords.under, translateWords.after, translateWords.by, translateWords.on, translateWords.underneath, translateWords.against, translateWords.despite, translateWords.onto, translateWords.unlike, translateWords.along, translateWords.down, translateWords.opposite, translateWords.until, translateWords.among, translateWords.during, translateWords.out, translateWords.up, translateWords.around, translateWords.except, translateWords.outside, translateWords.upon, translateWords.as, translateWords.for, translateWords.over, translateWords.via, translateWords.at, translateWords.from, translateWords.past, translateWords.with, translateWords.before, translateWords.in, translateWords.round, translateWords.within, translateWords.behind, translateWords.inside, translateWords.since, translateWords.without, translateWords.below, translateWords.into, translateWords.than, translateWords.beneath, translateWords.like, translateWords.through ];
const conjunctions = ["for", "and", "nor", "but", "or", "yet", "so", "either", "neither", "not only", "but also", "both", "whether", "although", "though", "even though", "as much as", "as long as", "as soon as", "because", "since", "so that", "in order that", "if", "lest", "even if", "that", "unless", "until", "when", "where", "while"];
const pronouns = ["I", "we", "me", "us", "you", "she", "he", "her", "him", "they", "them", "it", "that", "which", "who", "whom", "whose", "whichever", "whoever", "whomever", "this", "these", "that", "those", "anybody", "anyone", "anything", "each", "either", "everyone", "everybody", "everything", "nobody", "neither", "no one", "nothing", "somebody", "one", "someone", "something", "few", "many", "both", "several", "any", "all", "some", "most", "none", "myself", "yourself", "ourselves", "yourselves", "herself", "himself", "themselves", "itself", "who", "what", "which","whose", "whom"]
const el = document.getElementsByClassName("hentry")[0];

const markup = el.innerHTML.split(" ").map((word) => {
  if (conjunctions.includes(word)) {
    return '<span class="highlight-conjunctions">' + word + '</span>';
  } else if (prepositions.includes(word)) {
  	return '<span class="highlight-prepositions">' + word + '</span>';
  } else if (pronouns.includes(word)) {
  	return '<span class="highlight-pronouns">' + word + '</span>';
  } else {
    return word;
  };
}).join(" ");

el.innerHTML = markup;

