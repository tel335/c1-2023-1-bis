import { obtenerPorOcurrencia } from '../../../dist/routes/actionsctx/eventosctx'
import eventos from '../../actions/eventos'

exports.obtenerPorOcurrencia = (ctx)=>{
    //obtenemos los datos filtrados segun la ocurrencia

    if (ctx.params.ocurrence != 'ac' || ctx.params.ocurrence != 'dc'){
        ctx.status=400
        //mensajes para cuando pruebe la api pueda saber a que punto llega
        ctx.body={message : 'mal mal'}
        return ctx
    }
    const evn= eventos.obtenerPorOcurrencia(ctx.params.ocurrence)
    if (evn == -1){
        ctx.status = 400
        ctx.body={message : 'mal'}
        return ctx.status
    }

    ctx.status=200
    ctx.body=evn

    return ctx
}
