import { Router } from 'express'

import meta from './_meta'
import article from './article'

const router = Router()

router.use('/article', article)
router.use('/', meta)

export default router
