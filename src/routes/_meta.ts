import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

router.head('/health', (req, res) => {
  res.sendStatus(200)
})

router.get('/health', (req, res) => {
  res.json({ message: 'OK' })
})

router.get('/no-health', (req, res, next) => {
  next(new Error('No health'))
})

export default router
