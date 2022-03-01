const {Router, request, response} = require ('express');

const router = Router();

const randomstring = require("randomstring");

router.post('/', async (req, res) => {
    if(req.files === null) {
        return res.status(400).json({msg: 'Нет файлов для загрузки'})
    }

    const file = req.files.file;

    const fs = require('fs');
    const filesString = randomstring.generate(50);

    if (!fs.existsSync(`./uploads/${filesString}`)) {
        fs.mkdirSync(`./uploads/${filesString}`);
    }

    await file.mv(`./uploads/${filesString}/${file.name}`, err => {
        if (err) {
            console.log('Ошибка, код: 500');
            return res.status(500).send(err);
        }

        res.json({filesString: filesString})
    });
});


module.exports = router;