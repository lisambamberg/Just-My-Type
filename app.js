$(function () {
    const lowerKeyboard = $("#keyboard-lower-container");
    const upperKeyboard = $("#keyboard-upper-container")
    // lowerKeyboard.show();
    upperKeyboard.hide();

    //lowerKeyboard.toggle();
    $(document).keydown(function (e) {
        if (e.keyCode == 16) {
            lowerKeyboard.hide()
            upperKeyboard.show()
        } else {
            $(document).keyup(function (e) {
                lowerKeyboard.show()
                upperKeyboard.hide()
            })
        }
    })

    $(document).keypress(function (e) {
        $(`#${e.keyCode}`).css("backgroundColor", "yellow");
        setTimeout(function () {
            $(`#${e.keyCode}`).css("backgroundColor", "#f5f5f5");
        }, 300);
    })
})
