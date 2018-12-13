create = (req,res) => {
    const db = req.app.get('db')
    db.create_product(req.body)
    .then(() => res.sendStatus(200))
    .catch(err => {
        res.status(500).send({errorMessage: 'Oops! Something went wrong.  Our engineers have been informed!'})
        console.log(err)
    })
}

getOne = (req,res) => {
    const db = req.app.get('db')
    db.read_product(req.params.id)
    .then((response) => {
        res.status(200).json(response)})
    .catch(err => {
        res.status(500).send({errorMessage: 'Well.....that didnt work'})
        console.log(err);
    })
}

getAll = (req,res) => {
    const db = req.app.get('db')
    db.read_products()
    .then((response) => {
        res.status(200).json(response)
    .catch(err => {
        res.status(500).send({errorMessage: 'Hmm what happened'})
        console.log(err);
    })
    })
}

update = (req,res) => {
    const db = req.app.get('db')
    db.update_product([req.params.id,req.query.desc])
    .then((response) => {
        res.status(200).json(response)})
    .catch(err => {
        res.status(500).send({errorMessage: 'Stuff DIDNT update'})
        console.log(err);
    })
}

deleteIt = (req,res) => {
    const db = req.app.get('db')
    db.delete_product(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => {
        res.status(500).send({errorMessage: 'Why didnt this delete'})
        console.log(err);
    })
}


module.exports = {
    create,
    getOne,
    getAll,
    update,
    deleteIt
}