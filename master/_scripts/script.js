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

    var widthBtnSignupLogin = $btnSignupLogin.outerWidth() - 13;
    $login.width(widthBtnSignupLogin);
    $signup.width(widthBtnSignupLogin);

    var widthLogin = $submitLogin.position().left -
                        $btnCloseLogin.position().left +
                        $submitLogin.outerWidth(true),
        widthSignup = $submitFacebook.position().left -
                        $btnCloseSignup.position().left +
                        $submitFacebook.outerWidth(true);


    var showLogin = function () {
        $btnSignupLogin.hide();
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
        $btnSignupLogin.fadeIn(msFade);
        $login.width(widthBtnSignupLogin);
    },
    showSignup = function () {
        $btnSignupLogin.hide();
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
        $btnSignupLogin.fadeIn(msFade);
        $signup.width(widthBtnSignupLogin);
    };


    $btnLogin.click(showLogin);
    $btnSignup.click(showSignup);

    $btnCloseLogin.click(hideLogin);
    $btnCloseSignup.click(hideSignup);

};

signuplogin($("#et-signuplogin"));