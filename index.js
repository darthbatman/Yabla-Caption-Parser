var fs = require("fs");

fs.readFile('video_words.txt', function(err, data) {
    if(err) throw err;
    fs.writeFile("video_words_parsed.txt", "");
    var captionsArray = JSON.parse(data);
    for (var i = 0; i < captionsArray.length; i++){
    	console.log(captionsArray[i].transcript_words);
    	for (var j = 0; j < captionsArray[i].transcript_words.length; j++){
    		console.log(captionsArray[i].transcript_words[j].word);
    		fs.appendFile("video_words_parsed.txt", captionsArray[i].transcript_words[j].word + " ");
    	}
    	fs.appendFile("video_words_parsed.txt", "\r\n");
    }
});