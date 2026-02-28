
/** @type {Object.<Internal.Component, Internal.BlockContainerJS>} */
const lastUsedBlock = {}

BlockEvents.rightClicked((event) => {
    lastUsedBlock[event.player.name] = event.block;
})



// ItemEvents.smelted((event) => {
//     let player = event.player;
//     let item = event.item;
    
//     if (lastUsedBlock[player.name] != null && lastUsedBlock[player.name].id == 'minecraft:furnace' && item.hasTag("forge:ingots")) {
//         let block = lastUsedBlock[player.name];
//         let count = item.getCount();

//         let random = Math.random()
//         player.tell(`random:${random} round:${Math.round(count * random)}`)
//         item.setCount(Math.round(count * random));

//         let coal = block.createEntity("item")
//         coal.item = Item.of("coal")
//         coal.item.count = (item.getCount() - count)/2
//         coal.x = block.x;
//         coal.y = block.y;
//         coal.z = block.z;
//     }
// })
