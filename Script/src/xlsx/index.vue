<template>
  <div>
    <button @click="down">下载</button>
  </div>
</template>
<script>
import { error_code } from './data.js'
import * as XLSX from 'xlsx'
export default {
  data() {
    return {
      error_code,
    }
  },
  methods: {
    down() {
      const data = [['错误码号段', '错误码（英文文案）', '是否前端适配']]
      const print_data = []
      Object.keys(error_code).forEach((key) => {
        const item = {
          错误码号段: key,
          '错误码（英文文案）': error_code[key],
          是否前端适配: '是',
        }
        print_data.push(item)
      })
      console.log('print_data', print_data)
      // 创建一个新sheet
      const new_sheet = XLSX.utils.json_to_sheet(print_data)
      // 设置每列的列宽（可选），10代表10个字符，注意中文占2个字符
      new_sheet['!cols'] = [{ wch: 10 }, { wch: 30 }, { wch: 25 }]
      // 新建book
      const new_book = XLSX.utils.book_new()
      // 将 sheet 添加到 book 中
      XLSX.utils.book_append_sheet(new_book, new_sheet, '错误文案')
      // 导出excel文件
      XLSX.writeFile(new_book, '错误文案.xlsx')
    },
  },
}
</script>
<style></style>
