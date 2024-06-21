
onmessage = function (e) {
   
    var workerResult = [];
    
    let amount = e.amount, offset = e.offset, time = e.time;
    const rotZMult = 2;
    const rotYDiv = 4;
    
    let z = e.z;
   
    let offsetZ = offset - z;
    let rotZ = Math.sin( z / rotYDiv + time );

    for (let x = 0; x < amount; x++) {
        for (let y = 0; y < amount; y++) {
            
            let resultItem = {
                positionX: offset - x,
                positionY: offset - y,
                positionZ: offsetZ,
                rotationY : ( Math.sin( x / rotYDiv + time ) + Math.sin( y / rotYDiv + time ) + rotZ ),
                rotationZ : 0
            };

            workerResult.push(resultItem);
        }
    }

    postMessage(workerResult);
};

