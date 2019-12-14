module.exports = async (req, res) => {
    try {
        res.render('home')
    } catch (error) {
        res.send(error)
    }
}