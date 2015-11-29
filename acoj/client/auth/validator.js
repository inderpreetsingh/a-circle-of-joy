/**
 * Removes extra unwanted characters
 * @return trimmed value
 */
trimInput = function(value)
{
    return value.replace(/^s*$/g,'');
};

/**
 * Checks whether input field is empty or filled
 */
isNotEmpty = function(value)
{
    if (value && value !== '') {
	return true;
    }
    sAlert.error("Please fill in all the fields");
    return false;
};

/**
 * Validates the email field, it should be a proper email address
 */

isEmail = function(value)
{
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(value)) {
	return true;
    }
    sAlert.error("Your email address is not valid");
    return false;
};

/**
 * Validates the password, password shall be more than 6 characters
 */

isValidPassword = function(password)
{
    if (password.length < 6) {
	sAlert.error("Password should be at-least 6 characters long");
	return false;
    }
    return true;
};

/**
 * Checks if password field and confirm password field match
 */

areValidPasswords = function(password,confirmPassword)
{
    if (!isValidPassword(password)) {
	return false;
    }
    if (password !== confirmPassword) {
	throwError("Password and confirm-password fields don't match");
	return false;
    }
    return true;
};
