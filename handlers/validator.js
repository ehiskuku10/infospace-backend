const validate = (req, res) => {
    if (req.url === '/register') {
        req.sanitizeBody('fullname')
        req.checkBody('fullname', 'You must supply your fullname!').notEmpty();
    }
    req.checkBody('email', 'That Email is not valid!').isEmail();
    req.sanitizeBody('email').normalizeEmail({
      remove_dots: false,
      remove_extension: false,
      gmail_remove_subaddress: false
    });
    req.checkBody('password', 'Password Cannot be Blank!').notEmpty();

    const errors = req.validationErrors();
    if (errors) {
        // stop the fn from running
        return res.status(400).json({  
            message: errors
        }) 
    }
}

module.exports = validate