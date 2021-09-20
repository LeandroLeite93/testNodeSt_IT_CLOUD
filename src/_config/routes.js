const authRouter = require('../features/auth/routes')
const userRouter = require('../features/user/routes')

module.exports = router => {
    authRouter(router)
    userRouter(router)
}

