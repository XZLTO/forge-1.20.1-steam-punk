const SMELT_DATA = [
  {
    output: 'minecraft:iron_ingot',
    nugget: 'minecraft:iron_nugget',
    raw   : 'minecraft:raw_iron'
  },
  {
    output: 'minecraft:copper_ingot',
    nugget: 'create:copper_nugget',
    raw   : 'minecraft:raw_copper'
  },
  {
    output: 'minecraft:gold_ingot',
    nugget: 'minecraft:gold_nugget',
    raw   : 'minecraft:raw_gold'
  },
  {
    output: 'create:zinc_ingot',
    nugget: 'create:zinc_nugget',
    raw   : 'create:raw_zinc'
  }
]


ServerEvents.recipes(event => {
  for (const entry of SMELT_DATA) {
    event.remove([{ type: 'minecraft:smelting', output:entry.output}])
    event.smelting(`3x ${entry.nugget}`, entry.raw)
  }
})