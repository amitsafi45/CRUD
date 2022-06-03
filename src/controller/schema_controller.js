import dimmy from "../model/schema.js";
class Controller {
    static insert = async (req, res) => {
        try {
            await dimmy.sync({ force: true })
            await dimmy.bulkCreate(req.body)
            res.send('data entered')
        }
        catch (error) {
            res.send(error)
        }
    }
    static show = async (req, res) => {
        try {

            const result = await dimmy.findAll({ raw: true });
            res.send(result)
        }
        catch (error) {
            res.send(error)
        }
    }
    static show_by_id = async (req, res) => {
        try {
            const result = await dimmy.findAll({ where: { id: req.params.id } })
            res.send(result)
        }
        catch (error) {
            res.send(error)
        }
    }
    static delete_id = async (req, res) => {
        try {
            const result = await dimmy.destroy({ where: { id: req.params.id } });
            res.send('deleted')
        }
        catch (error) {
            res.send(error)
        }
    }
    static update_by_id = async (req, res) => {
        try {
            let id = await dimmy.update(req.body,
                { where: { id: req.params.id } });
            res.send('update')
        }
        catch (error) {
            res.send(error)
        }

    }
}
export default Controller