const controllers = {
    index: (req, res) => {
        return res.render('index');
    },
    menu: (req, res) => {
        return res.render('menu.ejs');
    },
};

module.exports = controllers;
