$(document).ready(function () {
    var search_key_word = '';
    var words = [];
    $('.search-bar-button').click(function (e) {
        e.preventDefault();
        search_key_word = $('.search-bar-input').val();
        movePageSearch(search_key_word);
    });

    $('.search-bar-input').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            search_key_word = $('.search-bar-input').val();
            movePageSearch(search_key_word);
        }
    });
    var changePage = function (){
        window.location.href = 'search.html'    
    }
    var movePageSearch = function (word) {
        words.push(word);
        localStorage.setItem('words',JSON.stringify(words))
        changePage();
    };

    
});

