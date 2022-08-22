import {normalizeTheModel, models} from '../nested-model/definition'

console.log('```mermaid')
console.log('graph TD;')

for (const name of Object.keys(models)) {
    const model = normalizeTheModel(models[name]);

    console.log(model.methods.filter(m => m.returns).map(m => {
        return `${name}-->|${m.alias}| ${m.returns}`
    }).join('\n'))
}
console.log('```')
