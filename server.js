import fastify from 'fastify'
import fastify_formbody from 'fastify-formbody'
import {hub, switch$} from './hub'
import {performSomeTest} from './test'
import {FLOW_ARR, CC_TO} from './config'

const app = fastify({logger: false})

app.register(fastify_formbody)

app.get('/', ({body}, reply) => {
    // console.log('POST IS CALLED', body)
    reply.send('HELLO WORLD')
})

app.post('/', ({body}, reply) => {
    console.log('POST IS CALLED', body)
    reply.send(body)
})

app.post('/calls', ({body}, reply) => {
    console.log('POST IS CALLED /calls', body)
    hub.emit('SWITCH', body)
    reply.send(body)
})

app.post('/prompts', ({body}, reply) => {
    console.log('POST IS CALLED /prompts', body)
    hub.emit('SWITCH', body)
    reply.send(body)
})

app.post('/dtmf', ({body}, reply) => {
    console.log('POST IS CALLED /dtmf', body)
    hub.emit('SWITCH', body)
    reply.send(body)
})

app.post('/hangup', ({body}, reply) => {
    console.log('POST IS CALLED /hangup', body)
    hub.emit('SWITCH', body)
    reply.send(body)
})



async function startServer(){
    const a = await app.listen('7575')

    // ToDo perform some test
    // if(CC_TO !== '380981306111'){
    //     console.log('CHANGE CREATE CALL TO TO YOUR NUMBER')
    // } else {
        // performSomeTest(FLOW_ARR)
    // }

}

startServer()

export {FLOW_ARR}