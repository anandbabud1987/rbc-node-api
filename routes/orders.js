const express = require('express');
const router = express.Router();
const fs=require('fs');
/* GET users listing. */
router.get('/', function (req, res, next) {
  let finalData=[];
  const fileLocation=__dirname+"/../";
  fs.readdirSync(fileLocation).forEach(value => {
    if(value.startsWith("checkedout-")){
      const orders=require(fileLocation+value);
      const order = JSON.stringify(orders);
      finalData.push(order)
    }
  })
  res.send(finalData);
});

router.post('/', function (req, res, next) {
  const order = JSON.stringify(req.body);
  const currentDate=new Date();

  fs.writeFile('checkedout-'+currentDate.getTime()+'.json', order, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  res.send('success');
});

module.exports = router;
