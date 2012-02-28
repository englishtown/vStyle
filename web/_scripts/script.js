var signuplogin = function ($el) {

    if (!$el || $el.length === 0) {
        return;
    }

    var $btnSignupLogin = $el.find(".et-btn-signuplogin"),
        $btnLogin = $btnSignupLogin.find(".et-btn-r"),
        $btnSignup = $btnSignupLogin.find(".et-btn-l"),
        $login = $el.find(".et-login"),
        $signup = $el.find(".et-signup"),
        $inputLoginEmail = $login.find(".et-login-input[type=email]"),
        $inputSignupEmail = $signup.find(".et-login-input[type=email]"),
        $submitLogin = $login.find(".et-btn-login"),
        $submitSignup = $signup.find(".et-btn-signup"),
        $submitFacebook = $signup.find(".et-btn-facebook"),
        $btnCloseLogin = $login.find(".et-btn-close"),
        $btnCloseSignup = $signup.find(".et-btn-close");

    var msWidth = 200,
        msFade = 800;

    var widthBtnSignupLogin = $btnSignupLogin.outerWidth() + 12;
    $login.width(widthBtnSignupLogin);
    $signup.width(widthBtnSignupLogin);

    var widthLogin = $submitLogin.position().left -
                        $btnCloseLogin.position().left +
                        $submitLogin.outerWidth(true),
        widthSignup = $submitFacebook.position().left -
                        $btnCloseSignup.position().left +
                        $submitFacebook.outerWidth(true);


    var showLogin = function () {
        //$btnSignupLogin.hide();
        $btnSignupLogin.css("opacity", "0");
        $login
        .css("visibility", "visible")
        .width(widthLogin);
        $inputLoginEmail.focus();
    },
    hideLogin = function () {
        var fn = function () {
            $login.css("visibility", "hidden");
        };
        window.setTimeout(fn, msWidth);
        //$btnSignupLogin.fadeIn(msFade);
        $btnSignupLogin.css("opacity", "1");
        $login.width(widthBtnSignupLogin);
    },
    showSignup = function () {
        //$btnSignupLogin.hide();
        $btnSignupLogin.css("opacity", "0");
        $signup
        .css("visibility", "visible")
        .width(widthSignup);
        $inputSignupEmail.focus();
    },
    hideSignup = function () {
        var fn = function () {
            $signup.css("visibility", "hidden");
        };
        window.setTimeout(fn, msWidth);
        //$btnSignupLogin.fadeIn(msFade);
        $btnSignupLogin.css("opacity", "1");
        $signup.width(widthBtnSignupLogin);
    };


    $btnLogin.click(showLogin);
    $btnSignup.click(showSignup);

    $btnCloseLogin.click(hideLogin);
    $btnCloseSignup.click(hideSignup);

};

var $elHeader = $("#et-header"),
    $elSignupLogin = $("#et-signuplogin");

signuplogin($elSignupLogin);


var $elHeaderProfile = $elHeader.find(".et-header-profile"),
    $elHeaderPicname = $elHeaderProfile.find(".et-header-picname"),
    $elHeaderPicnameIcon = $elHeaderPicname.find(".et-circle"),
    $elHeaderPicnameIconDirection = $elHeaderPicnameIcon.find("> span"),
    $elProfileBar = $("#et-profilebar");

$elSignupLogin.find(".et-btn-login").click(function () {
    $elSignupLogin.hide();
    $elHeader.find(".et-header-hotline").hide();
    $elHeaderProfile.show();
});

$elHeaderPicname.click(function () {
    var $this = $(this),
        normalClass = "et-rdrect-whi",
        activeClass = "et-rdrect-lightgra",
        normalIconClass = "et-rdrect-indigo-concave",
        activeIconClass = "et-rdrect-ora-concave",
        normalDirectionClass = "et-icon-arrow-whi-b",
        activeDirectionClass = "et-icon-arrow-whi-t",
        normalProfileClass = "et-profilebar-hide",
        activeProfileClass = "et-profilebar-show";
    if ($this.hasClass(activeClass)) {
        $this.removeClass(activeClass).addClass(normalClass);
        $elHeaderPicnameIcon.removeClass(activeIconClass).addClass(normalIconClass);
        $elHeaderPicnameIconDirection.removeClass(activeDirectionClass).addClass(normalDirectionClass);
        $elProfileBar.removeClass(activeProfileClass).addClass(normalProfileClass);
    }
    else {
        $this.removeClass(normalClass).addClass(activeClass);
        $elHeaderPicnameIcon.removeClass(normalIconClass).addClass(activeIconClass);
        $elHeaderPicnameIconDirection.removeClass(normalDirectionClass).addClass(activeDirectionClass);
        $elProfileBar.removeClass(normalProfileClass).addClass(activeProfileClass);
    }
});

$elProfileBar.find(".et-profilebar-logout").click(function () {
    location.reload();
});

$elProfileBar.find(".et-profilebar-challenge").toggle(
    function () {
        $(this).find(".et-profilebar-challenge-progresstext").text(95);
        $(this).find(".et-profilebar-challenge-progressbar").width("95%");
    },
    function () {
        $(this).find(".et-profilebar-challenge-progresstext").text(35);
        $(this).find(".et-profilebar-challenge-progressbar").width("35%");
    }
);