/**
 * Created by antianlu on 14-10-12.
 */
var expresss = require('express'),
    router   = expresss.Router();
var member = require('../test/member');

router.get('/',function(req,res){
    res.send('This is test angular route,thanks.');
});

router.get('/:name',function(req,res){
    res.render('angular/'+req.params.name,{},function(err,html){
        if(err)
            res.render('angular/404',{error:'模板不存在......\n'+err.message});
        else
            res.send(html);
    });
});

module.exports = router;