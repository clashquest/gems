
/**
 * Oggetto di supporto per le funzionalità del generatore.
 * @type object
 */
var util = {
    'init': false,
    'gems': '',
    'selector': {
        'text': {
            'hashtag': '.hashtag',
            'username': '.username-explanation',
            'character': '.character-explanation',
            'then': '.then-explanation',
            'error': {
                'hashtag': 'error-hashtag-blinking',
                'username': 'error-username-blinking'
            }
        },
        'div': {
            'generator': '.generator-body',
            'news': '.brawlStars-news-content',
            'comment': '.brawlstars-comment'
        },
        'button': {
            'generate': '.generate'
        },
        'textarea': {
            'console': '.brawlStars-console'
        },
        'input': {
            'username': '.brawlstars-username'
        },
        'placeholder': {
            'username': '${username}',
            'module': '${moduleNumber}'
        }
    },
    'data': {
        'json': {
            'console': {
                'en': [
                    "Loading...",
                    "Preparing packages...",
                    "Unpacking...",
                    "Initialization...",
                    "Connecting to the server...",
                    "Loading modules ${moduleNumber}",
                    "Clearing traces...",
                    "Verifying connection...",
                    "Preparing injection...",
                    "Requesting authentication...",
                    "User authentication...",
                    "Connection attempt for [<span style='color: #105ce5;'>${username}</span>]...",
                    "Connected to [<span style='color: #105ce5;'>${username}</span>]",
                    "Loading injection...",
                    "Waiting for the server...",
                    "Connection established.",
                    "Waiting for the server...",
                    "Server response <span style='color: #00cd00;'>OK</span>!",
                    "Loading gems injection...",
                    "Injecting <span style='color:#ecc508;'>${gems}</span> gems...",
                    "Clearing traces...",
                    "Optimizaing operation...",
                    "Awaiting verification...",
                    "<span style='color:red'>The server is full of requests, </span><br><span style='color:lime'>ANTI SPAM VERIFICATION REQUIRED!</span><br><span style='color:orangered'> Click the VERIFY button below !</span>"
                ]
            }
        }
    }
};

/**
 * Registro in JQuery le funzioni di animazioni.
 * Non toccare.
 */
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

function init(username, gems) {
    listenerModalLoading();
    $(util.selector.textarea.console).console(util.selector.textarea.console, util.data.json.console['en'], username, gems);
}

function listenerModalLoading(){
    $('.verify').on('click', function(){
        $('#modalGenerate').modal('show');
    });
}