const db = require("../models/index"),
    Machine = db.machine,
    Op = db.Sequelize.Op;

exports.getAllMachines = async (req, res) => {
    try {
        data = await Machine.findAll();
        console.log(data);
        res.render("getMachine", {machines: data});
    } catch (err) {
        res.status(500).send({
        message: err.message
        });
    }
};