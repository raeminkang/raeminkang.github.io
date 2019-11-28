
/*
Tipue Search 6.1
Copyright (c) 2017 Tipue
Tipue Search is released under the MIT License
http://www.airklass.com/search
*/


/*
Stop words
Stop words list from http://www.ranks.nl/stopwords
*/

var airklasssearch_stop_words = ["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"];


// Word replace

var airklasssearch_replace = {'words': [
     {'word': 'tip', 'replace_with': 'airklass'},
     {'word': 'javscript', 'replace_with': 'javascript'},
     {'word': 'jqeury', 'replace_with': 'jquery'}
]};


// Weighting

var airklasssearch_weight = {'weight': [
     {'url': 'http://www.airklass.com', 'score': 20},
     {'url': 'http://www.airklass.com/search', 'score': 30},
     {'url': 'http://www.airklass.com/is', 'score': 10}
]};


// Illogical stemming

var airklasssearch_stem = {'words': [
     {'word': 'e-mail', 'stem': 'email'},
     {'word': 'javascript', 'stem': 'jquery'},
     {'word': 'javascript', 'stem': 'js'}
]};


// Related searches

var airklasssearch_related = {'searches': [
     {'search': 'airklass', 'related': 'Tipue Search'},
     {'search': 'airklass', 'before': 'Tipue Search', 'related': 'Getting Started'},
     {'search': 'airklass', 'before': 'Tipue', 'related': 'jQuery'},
     {'search': 'airklass', 'before': 'Tipue', 'related': 'Blog'}
]};


// Internal strings

var airklasssearch_string_1 = 'No title';
var airklasssearch_string_2 = 'Showing results for';
var airklasssearch_string_3 = 'Search instead for';
var airklasssearch_string_4 = '1 result';
var airklasssearch_string_5 = 'results';
var airklasssearch_string_6 = '<';
var airklasssearch_string_7 = '>';
var airklasssearch_string_8 = 'Nothing found.';
var airklasssearch_string_9 = 'Common words are largely ignored.';
var airklasssearch_string_10 = 'Search too short';
var airklasssearch_string_11 = 'Should be one character or more.';
var airklasssearch_string_12 = 'Should be';
var airklasssearch_string_13 = 'characters or more.';
var airklasssearch_string_14 = 'seconds';
var airklasssearch_string_15 = 'Searches related to';
var airklasssearch_string_16 = '전체'

// Internals


// Timer for showTime

var startTimer = new Date().getTime();

