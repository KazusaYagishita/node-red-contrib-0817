module.exports = function(RED) {
    function Node0817(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = msg.payload + "dekitayo";
            node.send(msg);
        });
    }
    RED.nodes.registerType("Node0817",Node0817);
}