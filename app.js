$(function () {
    let sentences = ["ten ate neite ate nee enet ite ate inet ent eate", "Too ato too nOt enot one totA not anot tOO aNot", "oat itain oat tain nate eate tea anne inant nean", "itant eate anot eat nato inate eat anot tain eat", "nee ene ate ite tent tiet ent ine ene ete ene ate"];
    //let sentences = ['ten ate', 'neite ate', 'nee enet'];
    let sentenceDiv = $("#sentence");
    let yellowBlock = $("#yellow-block");
    let targetLetter = $("#target-letter");
    let i = 0;
    let j = 0;
    let individualSent = sentences[j].split("");
    console.log(individualSent);
    sentenceDiv.html(sentences[i]);
    targetLetter.html(individualSent[i]);

    const lowerKeyboard = $("#keyboard-lower-container");
    const upperKeyboard = $("#keyboard-upper-container")

    upperKeyboard.hide();

    $(document).keydown(function (e) {
        let key = e.key.charCodeAt(0);
        if (e.keyCode == 16 && e.key === "Shift") {
            lowerKeyboard.hide()
            upperKeyboard.show()
        } else {
            $(`#${key}`).css("backgroundColor", "yellow");
            console.log(j);
            console.log("sentences length", sentences[i].length);
            j++;

            if (j == sentences[i].length) {
                i++;
                j = 0;
                individualSent = sentences[i].split("");
                sentenceDiv.html(sentences[i]);
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
