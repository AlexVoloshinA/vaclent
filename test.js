import {switch$, hub} from './hub'
import {periodic} from 'most'
import {CC, PP, GD, HG} from './fetch'

const commandMap = new Map([
    ['CC', CC],
    ['PP', PP],
    ['GD', GD],
    ['HG', HG]
])

const sleep = ms => new Promise((res,rej) => setTimeout(res, ms))

const cantConnectFn = () => {
    console.log('CANT CONNECT FN')
}

const connectFnc = async (flowArr, callId) => {

    console.log('CONNECT FN')

    const fn = commandMap.get(flowArr.shift())
    await sleep(2000)
    if(fn){
        const PP_res = await fn(callId)
    } else {
        throw new Error('')
    }

}

const performSomeTest = async (flowARR) => {

    const CC_res = await CC()

    console.log('CC RES', CC_res)

    switch$
        .observe(el => {
            switch(el.event){
                case 'Connect':
                case 'DTMF':
                case 'PromptEnded':
                    connectFnc(flowARR, CC_res.callId)
                    break
                case 'Disconnect':
                    cantConnectFn()
                    break   
                default:
                    console.log('DEFAULT CASE IN PERFORMTEST') 
        }
    })

    // console.log('SOME TEST PERFORMED')
}   

export {performSomeTest}