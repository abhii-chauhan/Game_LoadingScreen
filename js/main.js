
$(function () {
    const time = 2000
    const array = $('.container')
    $(array[0]).fadeIn(2000);
    let a = 1
    window.setInterval(function () {
        console.log(a);
        if (a == array.length) {
            a = 1
            $(array[0]).fadeIn(2000);
            $(array[array.length]).fadeOut(2000);
        } else {
            $(array[a]).fadeIn(2000);
            a = a + 1
            for (let i = 0; i < array.length; i++) {
                $(array[i]).fadeOut(2000);
            }
        }
    }, time);

})

// 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