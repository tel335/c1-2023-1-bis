import eventosJSON from '../dataset/historical_data.json'

let eventos=[]
//eventos = eventosJSON.events

eventosJSON.result.events.forEach(element => {
    eventos.push(element.events)
});

exports.getEventosHistoricos = (ocurrencia)=>{
    if (ocurrencia == 'ac'){
        let eventos_filtrados = eventos.filter((evn)=> evn.date < 0)
        return eventos_filtrados
    }
    else if(ocurrencia =='dc'){
        let eventos_filtrados = eventos.filter((evn)=> evn.date >0)
        return eventos_filtrados
    }else{
        return -1
    }
    
}




