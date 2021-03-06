const express = require('express');

const shopController = require('../controllers/shop')
const isAuth =require('../middleware/is-auth')
const router = express.Router();



router.get('/', shopController.getIndex);

router.get('/books', shopController.getBooks);

router.get('/books/:bookId', shopController.getBook);

router.get('/cart', isAuth, shopController.getCart);

router.post('/cart', isAuth, shopController.postCart);

router.post('/cart-delete-item', isAuth, shopController.postCartDeleteBook);

router.post('/create-order', isAuth, shopController.postOrder);

router.get('/orders', isAuth, shopController.getOrders);





module.exports = router; 