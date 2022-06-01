function sendAction(){
    pubChannel.publish('action',{bank:{addbank:a}})
}