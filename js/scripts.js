
// Change color of words in text

const prepositions = ["about", "beside", "near", "to", "above", "between", "of", "towards", "across", "beyond", "off", "under", "after", "by","on", "underneath", "against", "despite", "onto", "unlike", "along", "down", "opposite", "until", "among", "during", "out", "up", "around", "except", "outside", "upon", "as", "for", "over", "via", "at", "from", "past", "with", "before", "in", "round", "within", "behind", "inside", "since", "without", "below", "into", "than", "beneath", "like", "through"];
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

