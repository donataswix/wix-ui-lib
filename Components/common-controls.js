/**
 * Created with IntelliJ IDEA.
 * User: mayah
 * Date: 12/12/12
 * Time: 2:52 PM
 * To change this template use File | Settings | File Templates.
 */

function Checkbox (el, deafult) {
    var checkbox = el;
    checkbox.addClass('tpa-checkbox');
    checkbox.addClass(deafult);

    checkbox.on('click', function (e) {
        el.toggleClass('checked');
        el.toggleClass('unchecked');
    });
}

function RadioButton (el, deafult) {
    var radioButton = el;
    radioButton.addClass('tpa-radio-button');
    radioButton.addClass(deafult);

    radioButton.on('click', function (e) {
        el.toggleClass('checked');
        el.toggleClass('unchecked');
    });
}

function Slider(el) {
    var _SLIDER_OFFSET = 10;
    var $opacitySlider = el;
    var outputValue;

    $opacitySlider.addClass('tpa-slider-bar');

    var $bar = $("<div id=\"tpaBar\"></div>").appendTo($opacitySlider);

    var $left = $("<span class=\"tpa-slider-bar-left\"></div>").appendTo($bar);
    var $middle = $("<span class=\"tpa-slider-bar-body\"></div>").appendTo($bar);
    var $right = $("<span class=\"tpa-slider-bar-right\"></div>").appendTo($bar);

    var $slider = $("<div class=\"tpa-slider\"></div>").appendTo($bar);

    $(document).ready(function() {

        $slider.bind('mousedown', function(event) {
            var lastX = event.pageX;
            $(document).bind('mouseup.slider.drag', function() {
                unbindSliderDrag();

                var sliderPos = parseInt($slider.css('left'));
                var outputValue = (sliderPos + ($slider.width() / 2)) / ($bar.width() + 1);
                console.log(outputValue);
            });

            $(document).bind('mousemove.slider.drag', function(event) {
                setSliderPosition(event.pageX - lastX);
                lastX = event.pageX;
            });

            // cancel out any text selections
            document.body.focus();

            // prevent text selection in IE
            document.onselectstart = function () { return false; };
            // prevent IE from trying to drag an image
            event.target.ondragstart = function() { return false; };

            // prevent text selection (except IE)
            return false;
        });
    });

    function setSliderPosition(xMov) {
        if ( ((xMov < 0) && (($slider.position().left + xMov) < (0 - ($slider.width() / 2)))) ||
            ((xMov >= 0) && (($slider.position().left +  xMov) > ($bar.width() - ($slider.width() / 2)))) ) {
            return;
        }

        $slider.css('left', + ($slider.position().left + xMov) + 'px');

    }

    function unbindSliderDrag() {
        $(document).unbind('mousemove.slider.drag');
        $(document).unbind('mouseup.slider.drag');
    }

}

