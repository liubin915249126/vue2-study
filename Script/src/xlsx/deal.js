const fs = require('fs')

const deal = (file)=>{
  try {
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
  } catch (error) {
    console.log(111 ,error)
  }
}

const addData = (data,initial)=>{
  const resCn = initial
  const resCn1 = {}
  Object.keys(data).forEach(key=>{
    resCn[key] = data[key]
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