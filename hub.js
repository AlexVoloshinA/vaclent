import EventEmitter from 'eventemitter3'
import {fromEvent} from 'most'

export const
    hub = new EventEmitter,
    app$ = fromEvent('APP', hub),
    switch$ = fromEvent('SWITCH', hub).multicast()