const express = require(`express`);
const router = express.Router();
const burger = require(`../models/burger`);

///////////////////////////////////////////
// GET
///////////////////////////////////////////

router.get(`/`, (req, res) => {
    burger.all((data) => {
        const hbsObject = {
         burgers: data,   
        };
        console.log(hbsObject);
        res.render(`index`, hbsObject);
    });
});

///////////////////////////////////////////
// POST
///////////////////////////////////////////

router.post('/api/burgers', (req, res) => {
    burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], (result) => {
      res.json({ id: result.insertId });
    });
  });

  router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
    console.log('condition', condition);
  
    burger.update(
      {
        devoured: req.body.devoured,
      }
    );
  });

///////////////////////////////////////////
// GET DELETE
///////////////////////////////////////////

  router.delete('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
  });


module.exports = router;