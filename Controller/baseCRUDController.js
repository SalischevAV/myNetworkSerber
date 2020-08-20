module.exports = class baseCRUDController {
    constructor(model) {
        this.model = model;
    }
    getAll(req, res, next) {
        model.find({}, (err, data) => {
            if (data) {
                res.status(200);
                res.json(data);
            } else {
                next(err);
            }
        });
    }

    get(req, res, next) {
        model.findById(req.params.id, (err, data) => {
            if (data) {
                res.status(200);
                res.json(data);
            } else {
                next(err);
            }
        });
    }

    delete(req, res, next) {
        model.findByIdAndDelete(req.params.id, (err, data) => {
            if (data) {
                res.status(204);
                res.end()
            } else {
                next(err);
            }
        });
    }

    post(req, res, next){
        model.create()
    }



}//final for class