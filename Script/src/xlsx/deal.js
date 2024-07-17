const fs = require('fs')

const deal = (file)=>{
  const initialCn = require(`./${file}/initialCn.js`)
  const initialEn = require(`./${file}/initialEn.js`)
  const cn = require(`./${file}/cn.js`)
  const en = require(`./${file}/en.js`)
  const [resCn, resCn1] = addData(cn, initialCn)
  const [resEn, resEn1] = addData(en, initialEn)
  writeData(resCn, `${file}/resCn.json`)
  writeData(resCn1, `${file}/resCn1.json`)
  writeData(resEn, `${file}/resEn.json`)
  writeData(resEn1, `${file}/resEn1.json`)
}

const addData = (data,initial)=>{
  const resCn = data
  const resCn1 = {}
  Object.keys(initial).forEach(key=>{
    if(resCn[key]){
     if(resCn[key] !== initial[key]){
      resCn1[`${key}_1`] = data[key]
     }
    }else{
      resCn[key] = initial[key]
    }
  })
  return [resCn, resCn1]
}
const writeData = (data,file)=>{

  fs.writeFile(`/Users/len/Desktop/gitlab/vue2-study/Script/src/xlsx/${file}`, JSON.stringify(data), {}, (err) => {
    if (err) {
      console.error(err)
    }
  })
}

deal('feature-front')
deal('web-frontend')
deal('web-frontend-next')