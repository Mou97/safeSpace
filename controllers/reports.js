const provenDb = require('@southbanksoftware/provendb-node-driver')
const Report = require('./reportHelper')

module.exports = async (req, res) => {
    try {
        let reports = await Report.getAllReports()
        res.send(reports)
    } catch (error) {
        res.send(error)
    }


}