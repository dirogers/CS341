exports.get404 = (req, res, next) => {
    res.status(404).send('<h1>404 Page not found.</h1>')
}