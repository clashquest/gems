
/* global util, COUNTRY_CODE */

/**
 * Plugin jQuery per la console del generatore di hack
 * @param {type} $
 * @returns {undefined}
 */
 (function ($) {

    var writeOnConsole = function (selector, text, append, i, length) {
        if (text === null) {
            $(selector).append(append);
        } else {
            $(selector).html(text);
        }

        $(selector).scrollTop($(selector)[0].scrollHeight);

        if (i === length) {
            setTimeout(function () {
                $('.verify').hide().removeClass('d-none').addClass('d-flex').fadeIn(2000);
            }, 500);
        }
    };

    var writeModule = function (selector, string, moduleNumber, totalModule, index, length) {
        var exModule = string.replace('${moduleNumber}', `${moduleNumber - 1}/${totalModule}`);
        var module = string.replace('${moduleNumber}', `${moduleNumber}/${totalModule}`);
        if (moduleNumber !== 0) {
            writeOnConsole(selector, $(selector).html().replace(exModule, module), null, index, length);
        } else {
            writeOnConsole(selector, null, module + '<br>', index, length);
        }
    };

    var init = function (selector, data, name, nGems) {
        var time = 0;
        var totalModule = 21;
        var length = data.length - 1;

        $.each(data, function (index, item) {

            if (~item.indexOf('${moduleNumber}')) {
                for (var i = 0; i <= totalModule; i++) {
                    setTimeout(writeModule.bind(null, selector, item, i, totalModule, index, length), time);
                    time += (100 * (Math.floor(Math.random() * 6) + 1));
                }
            } else if (~item.indexOf('${username}')) {
                setTimeout(function () {
                    writeOnConsole(selector, null, item.replace('${username}', name) + '<br>', index, length);
                }, time);
            } else if (~item.indexOf('${gems}')) {
                setTimeout(function () {
                    writeOnConsole(selector, null, item.replace('${gems}', nGems) + '<br>', index, length);
                }, time);
            } else {
                setTimeout(function () {
                    writeOnConsole(selector, null, item + '<br>', index, length);
                }, time);
            }

            time += (100 * (Math.floor(Math.random() * 8) + 4));
        });
    };

    $.fn.console = function (selector, data, name, gems) {
        init(selector, data, name, gems);
        return this;
    };


}(jQuery));