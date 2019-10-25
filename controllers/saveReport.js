const Report = require('./reportHelper')

module.exports = async (req, res) => {
    try {
        const { report } = req.body

        await Report.proveNewReport(report)
        res.send('added a new Report')

    } catch (error) {
        console.log(error)
    }
}