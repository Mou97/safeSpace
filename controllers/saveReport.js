const Report = require('./reportHelper')

module.exports = async (req, res) => {
    try {
        const { report } = req.body
        console.log(report)

        let sent = await Report.proveNewReport(report)
        if (sent) {
            res.send('added a new Report')

        }

    } catch (error) {
        console.log(error)
    }
}