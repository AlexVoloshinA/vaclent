import request from 'superagent'
import {
    SERVER_API,
    TOKEN,

    CC_FROM,
    CC_TO,
    CC_CALLBACK,

    CC_OBJ,

    PP_FILE_URI ,
    PP_CALLBACK,
    PP_COOKIE,

    PP_OBJ,

    GD_CALLBACK ,
    GD_GREETINGS ,
    GD_COUNT, 
    GD_TERMINATOR ,

    GD_OBJ,

    HG_CALLBACK,
    
    HG_OBJ
} from "./config"

const CC = () => request
    .post(SERVER_API+'/api/v1/calls')
    .set('Content-Type', 'application/json')
    .set('x-access-token', TOKEN)
    // .send(`{"From": ${CC_FROM}, "To": ${CC_TO}, "Callback": "${CC_CALLBACK}"}`)
    .send(JSON.stringify(CC_OBJ))
    .then(({body}) => body)
    .catch(err => console.log('ERROR US', err))



const PP = callID => request
    .post(SERVER_API+'/api/v1/prompts')
    .set('Content-Type', 'application/json')
    .set('x-access-token', TOKEN)
    // .send(`{"CallId":  "${callID}", "FileURI": "${PP_FILE_URI}", "Command": "PlayPrompt", "Callback": "${PP_CALLBACK}", "Cookie": "${PP_COOKIE}"} `)
    .send(JSON.stringify(Object.assign(PP_OBJ, {CallId: callID})))
    .then(({body}) => body)
    .catch(err => console.log('ERROR US', err))

const GD = callID => request
    .post(SERVER_API+'/api/v1/dtmf')
    .set('Content-Type', 'application/json')
    .set('x-access-token', TOKEN)
    // .send(`{"CallId": "${callID}", "Command": "CollectDTMF", "Callback": "${GD_CALLBACK}", "Greetings": "${GD_GREETINGS}", "Count": ${GD_COUNT}, "Terminator": "${GD_TERMINATOR}"}`)
    .send(JSON.stringify(Object.assign(GD_OBJ, {CallId: callID})))
    .then(({body}) => body)
    .catch(err => console.log('ERROR US', err))

const HG = callID => request
    .post(SERVER_API+'/api/v1/hangup')
    .set('Content-Type', 'application/json')
    .set('x-access-token', TOKEN)
    // .send(`{"CallId": "${callID}", "Command": "Hangup", "Callback": "${HG_CALLBACK}"}`)
    .send(JSON.stringify(Object.assign(HG_OBJ, {CallId: callID})))
    .then(({body}) => body)
    .catch(err => console.log('ERROR US', err))



export {CC, PP, GD, HG}