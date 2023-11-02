const catchError = require('../utils/catchError');
const Crud = require('../models/Crud');

const getAll = catchError(async(req, res) => {
  const crud = await Crud.findAll();
    // Operaciones...
    return res.json(crud)
});

const create = catchError(async(req, res) => {
  const {first_name, last_name, email, password, birthday} = req.body;
  const crud= await Crud.create({
    first_name:first_name,
    last_name:last_name,
    email:email,
    password:password,
    birthday:birthday
  });
  return res.status(201).json(crud);
});

const remove = catchError(async(req, res) => {
  const { id } = req.params;
  await Crud.destroy({where: {id:id}});
  return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
  const { id } = req.params;
  const {first_name, last_name, email, password, birthday} = req.body;
  const crud= await Crud.update(
    {first_name, last_name, email, password, birthday},
    {where: {id}, returning: true}
  );
  return res.json(crud);
  
})



module.exports = {
    getAll,
    create,
    remove,
    update
}