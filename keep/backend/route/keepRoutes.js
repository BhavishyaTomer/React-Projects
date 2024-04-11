const express=require('express');
const { getAllList, findInList, createList, updateList, deleteinList } = require('../service/keepService');
const router=express.Router();
router.get('/',getAllList)
router.get('/:id',findInList)
router.post('/',createList)
router.put('/:id',updateList)
router.delete('/:id',deleteinList)

module.exports=router;