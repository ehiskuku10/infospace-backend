const express = require ('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')
const storyController = require('../controllers/storyController')
const { catchErrors } = require('../handlers/errorHandlers')


// Registration/Verify Registration/Login/Logout
router.post('/register', 
    catchErrors(userController.validateRegister),
    catchErrors(userController.register)
)
// router.get('/', catchErrors(userController.verifyRegistration))
router.post('/login', catchErrors(authController.login))
// router.get('/logout', authController.logout)


// Manage User Profile
// router.get('/account', authController.isLoggedIn, userController.account)
// router.post('/account', catchErrors(userController.updateAccount))
// router.post('/account/forgot', catchErrors(authController.forgot))
// router.post('/account/reset/:token',
//   authController.confirmedPasswords,
//   catchErrors(authController.update)
// )


// // Manage Stories
router.get('/stories',authController.isLoggedIn, catchErrors(storyController.stories))
// router.get('/stories/:id', storyController.single_story)
// router.get('/stories/:category_id', storyController.fetch_stories_by_category)
// router.get('/stories/my-collection', storyController.my_collection)
// router.get('/stories/my-collection/:category_id', storyController.my_collection_by_category)
// router.post('/stories/add-to-my-collection', storyController.add_to_my_collection)
// router.delete('/stories/remove-from-my-collection', userController.remove_from_my_collection)
// router.get('/stories/my-favs', storyController.my_favs)
// router.get('/stories/add-to-my-favs', storyController.add_to_my_favs)
// router.post('/stories/share-story', userController.share_story)


module.exports = router;