import Router from 'koa-router'
import getHealth from './health/health'
import eventos from '../routes/actionsctx/eventosctx'

const router = new Router()

router.get('/health', getHealth)


router.get('/history/:ocurrence', eventos.obtenerPorOcurrencia)


export default router
