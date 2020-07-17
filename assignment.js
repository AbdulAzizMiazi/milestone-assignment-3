/**Problem No.1 */
function feetToMile(feet) {
    const multiplyer = 0.000189394;
    let mile = feet * multiplyer;
    return mile;
}



/**Problem No.2*/
function woodCalculator(chair, table, bed) {
    let totalWood = (chair*1) + (table*3) + (bed*5);
    return totalWood;
}



/**Problem No.3 */
function brickCalculator(floorNum) {
    let brickNum;
   
    if (floorNum <= 10) {
        let height = floorNum*15;
        brickNum = height*1000;
    }
    else if (floorNum <= 20) {
        let height10 = 150;  /**(10floor*15feet) = 150feet*/
        let remainFloor = floorNum - 10;
        let height20 = remainFloor*12;
        let totalHeight = height20 + height10;
        brickNum = totalHeight*1000;
    }
    else{
        let height10 = 150;   /**(10floor*15feet) = 150feet*/
        let height20 = 120;  /**(10floor*12feet) = 120feet*/
        let remainFloor = floorNum - 20;
        let height30 = remainFloor*10;
        let totalHeight = height30+ height20 + height10;
        brickNum = totalHeight*1000;
    }
    return brickNum;
}


/**Problem No.4 */
function tinyFriend(names) {
    let min = names[0].length; 
    let name = [];
    for(let i = 0; i < names.length; i++){
        if (min > names[i].length)
        {
            min = names[i].length;
            name.push(names[i]);
        }
    }
    return name;
}

