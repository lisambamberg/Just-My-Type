$(function () {
    let sentences = ["ten ate neite ate nee enet ite ate inet ent eate", "Too ato too nOt enot one totA not anot tOO aNot", "oat itain oat tain nate eate tea anne inant nean", "itant eate anot eat nato inate eat anot tain eat", "nee ene ate ite tent tiet ent ine ene ete ene ate"];
    //let sentences = ['ten ate', 'neite ate',];
    let sentenceDiv = $("#sentence");
    let yellowBlock = $("#yellow-block");
    let targetLetter = $("#target-letter");
    let i = 0;
    let j = 0;
    let individualSent = sentences[j].split("");
    sentenceDiv.html(sentences[i]);
    targetLetter.html(individualSent[i]);
    let feedback = $("#feedback");
    let numberOfMistakes = 0;
    let numberOfWords = sentences.join(" ").split(" ").length;
    let startTime = null;

    const lowerKeyboard = $("#keyboard-lower-container");
    const upperKeyboard = $("#keyboard-upper-container");

    upperKeyboard.hide();

    $(document).keydown(function (e) {
        if (startTime === null) {
            startTime = Date.now();
        }
        //prevents auto scroll when space bar is pressed
        if (e.keyCode === 32) {
            e.preventDefault();
        }
        let key = e.key.charCodeAt(0);
        if (e.keyCode == 16 && e.key === "Shift") {
            lowerKeyboard.hide()
            upperKeyboard.show()
        } else {
            if (e.key === individualSent[j]) {
                feedback.addClass("glyphicon-ok");
                feedback.removeClass("glyphicon-remove");
                feedback.html("&#10003;");
            }
            if (e.key !== individualSent[j]) {
                feedback.removeClass("glyphicon-ok");
                feedback.addClass("glyphicon-remove");
                feedback.html("&#10060;");
                numberOfMistakes++;
            }
            $(`#${key}`).css("backgroundColor", "yellow");
            yellowBlock.css('left', '+=17.5px')
            j++;
            if (j == sentences[i].length) {
                i++;
                j = 0;
                yellowBlock.css('left', '17.5px')
                if (i == sentences.length) {
                    let stopTime = Date.now();
                    let minutes = Math.abs((stopTime - startTime)) / 60000;
                    let wordsPerMinute = numberOfWords / minutes - 2 * numberOfMistakes;
                    function results(x) {
                        alert("Your words per minute: " + x.toFixed(2));
                    }
                    results(wordsPerMinute);
                } else {
                    individualSent = sentences[i].split("");
                    sentenceDiv.html(sentences[i]);
                }
            }
        }
    })

    $(document).keyup(function (e) {
        let key = e.key.charCodeAt(0);
        lowerKeyboard.show()
        upperKeyboard.hide()
        $(`#${key}`).css("backgroundColor", "#f5f5f5");
        targetLetter.html(individualSent[j]);
    })
})