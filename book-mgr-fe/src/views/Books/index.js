import { defineComponent } from 'vue';
import AddOne from './AddOne/index.vue';


export default defineComponent({
  setup(){
    const columns = [
      {  title: '名称',dataIndex: 'name',  key: 'name'},
      {  title: '年龄', dataIndex: 'age', key: 'age' },
    ];

    const data = [
      { key: '1', name: 'John Brown', age: 32 },
      { key: '2', name: 'Jim Green', age: 42 },
      { key: '3', name: 'Joe Black',  age: 32 },
    ];
    return {
      data,
      columns,
    }
  },
  components:{
    AddOne,
  },

})