<template>
  <div>
    <button @click="down">下载</button>
    <el-upload
      action="#"
      :auto-upload="false"
      :on-change="onChange"
      :limit="1"
      :show-file-list="false"
      accept=".xls,.xlsx"
    >
      <el-button type="primary">上传excel</el-button>
    </el-upload>
    <input type="text" placeholder="请输入文件名称" v-model="fileName" />
    <button @click="trans">转换</button>
  </div>
</template>
<script>
import { error_code } from "./data.js";
import { resData } from "./res.js";
import * as xlsx from "xlsx";
export default {
  data() {
    return {
      error_code,
      fileName: "",
    };
  },
  methods: {
    down() {
      const data = [["错误码号段", "错误码（英文文案）", "是否前端适配"]];
      const print_data = [];
      Object.keys(error_code).forEach((key) => {
        const item = {
          错误码号段: key,
          "错误码（英文文案）": error_code[key],
          是否前端适配: "是",
        };
        print_data.push(item);
      });
      console.log("print_data", print_data);
      // 创建一个新sheet
      const new_sheet = xlsx.utils.json_to_sheet(print_data);
      // 设置每列的列宽（可选），10代表10个字符，注意中文占2个字符
      new_sheet["!cols"] = [{ wch: 10 }, { wch: 30 }, { wch: 25 }];
      // 新建book
      const new_book = xlsx.utils.book_new();
      // 将 sheet 添加到 book 中
      xlsx.utils.book_append_sheet(new_book, new_sheet, "错误文案");
      // 导出excel文件
      xlsx.writeFile(new_book, "错误文案.xlsx");
    },
    trans() {
      const cnRes = {};
      const enRes = {};
      resData.forEach((item) => {
        const key = `e_${item.Code}`;
        cnRes[key] = item.Translations;
        enRes[key] = item.Value;
      });
      console.log("cnRes", JSON.stringify(cnRes));
      console.log("enRes", JSON.stringify(enRes));
    },
    async onChange(file) {
      /**
       * 1. 使用原生api去读取好的文件
       * */
      // console.log("原始上传的文件", file);
      // 读取文件不是立马能够读取到的，所以是异步的，使用Promise
      let dataBinary = await new Promise((resolve) => {
        // Web API构造函数FileReader，可实例化对象，去调用其身上方法，去读取解析文件信息
        let reader = new FileReader(); // https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader
        // console.log("实例化对象有各种方法", reader);
        reader.readAsBinaryString(file.raw); // 读取raw的File文件
        reader.onload = (ev) => {
          // console.log("文件解析流程进度事件", ev);
          resolve(ev.target.result); // 将解析好的结果扔出去，以供使用
        };
        reader.onerror = (ev) => {
          console.log(11, ev);
        };
      });
      console.log(11, dataBinary);
      /**
       * 2. 使用xlsx插件去解析已经读取好的二进制excel流文件
       * */
      let workBook = xlsx.read(dataBinary, { type: "binary", cellDates: true });
      // excel中有很多的sheet，这里取了第一个sheet：workBook.SheetNames[0]
      let firstWorkSheet = workBook.Sheets[workBook.SheetNames[0]];
      // 分为第一行的数据，和第一行下方的数据
      const header = this.getHeaderRow(firstWorkSheet);
      console.log("读取的excel表头数据（第一行）", header);
      const data = xlsx.utils.sheet_to_json(firstWorkSheet);
      this.dealData(data);
      // console.log("读取所有excel数据", JSON.stringify(data));
    },
    dealData(data) {
      const enRes = {};
      const cnRes = {};
      data.map((item) => {
        const code = `e_${Math.abs(item.Code)}`;
        enRes[code] = item.Value;
        cnRes[code] = item.Translations;
      });
      console.log("cnRes", JSON.stringify(cnRes));
      console.log("enRes", JSON.stringify(enRes));
    },
    getHeaderRow(sheet) {
      const headers = []; // 定义数组，用于存放解析好的数据
      const range = xlsx.utils.decode_range(sheet["!ref"]); // 读取sheet的单元格数据
      let C;
      const R = range.s.r;
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        const cell = sheet[xlsx.utils.encode_cell({ c: C, r: R })];
        /* find the cell in the first row */
        let hdr = "UNKNOWN " + C; // <-- replace with your desired default
        if (cell && cell.t) hdr = xlsx.utils.format_cell(cell);
        headers.push(hdr);
      }
      return headers; // 经过上方一波操作遍历，得到最终的第一行头数据
    },
  },
};
</script>
<style></style>
