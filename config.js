
const method = ssl => ssl ? 'https' : 'http'

export const
    IS_DEV = true,
    IS_STAGE = false,
    IS_PROD = false,

    SERVER_SSL = false,
    SERVER_HOST = '0.0.0.0',
    SERVER_PORT = 9393,
    SERVER_API = `${method(SERVER_SSL)}://${SERVER_HOST}:${SERVER_PORT}`,
    
    TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcl9wcm9kdWN0Ijoic29tZXByb2R1Y3QxIiwiaXBfYWRkcmVzcyI6IjEyNy4wLjAuMSIsInRlY2hfcHJlZml4IjoiLS1wcmUiLCJpYXQiOjE1NjE2MzY2MzAsImV4cCI6MTU2MTcyMzAzMCwic3ViIjoiN2U5Y2NmMmYtMzg3Ny00ZjNiLTk0OWQtMDJlMTVmOTgwMTM2In0.A_XjzaycfaPFXg1o3I7dArw-ZDPsL9IVsH6ZZg_R8uQ',
    
    CC_FROM = '380930082071',
    CC_TO = '380981306111',
    CC_CALLBACK = '127.0.0.1:6767/calls',

    CC_OBJ = {
        From: CC_FROM,
        To: CC_TO,
        Callback: CC_CALLBACK
    },

    PP_FILE_URI = 'http://146.148.19.43/files/123.mp3',
    PP_CALLBACK = '127.0.0.1:6767/prompts',
    PP_COOKIE='somerandomstring',

    PP_OBJ = {
        FileURI: PP_FILE_URI,
        Command: "PlayPrompt",
        Callback: PP_CALLBACK,
        Cookie: PP_COOKIE
    },
    
    GD_CALLBACK = '127.0.0.1:6767/dtmf',
    GD_GREETINGS = 'http://146.148.19.43/files/123.mp3',
    GD_COUNT =  2, 
    GD_TERMINATOR = "#",

    GD_OBJ = {
        Command: "CollectDTMF",
        Callback: GD_CALLBACK,
        Greetings: GD_GREETINGS,
        Count: GD_COUNT,
        Terminator: GD_TERMINATOR
    },

    HG_CALLBACK = '127.0.0.1:6767/hangup',

    HG_OBJ = {
        Command: "Hangup",
        Callback: HG_CALLBACK
    },


    // FLOW_ARR = [ 'GD', 'GD', 'GD', 'HG']
    // FLOW_ARR = [ 'PP', 'HG']
    FLOW_ARR = [ 'GD', 'HG']
    // FLOW_ARR = [ 'PP', 'GD', 'HG']