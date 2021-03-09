import { defineComponent,reactive } from 'vue';
import { books } from '@/service';
import { result } from '@/helpers/utils';


const defaultForm = {
  name:'',
  price: 0, 
  authur: '', 
  publishDate: 0, 
  classify: '',
}

export default defineComponent({
  data() {
    return {
      visible:true,
    }
  },
  setup(){
    const addForm = reactive({
      name:'',
      price: 0, 
      authur: '', 
      publishDate: 0, 
      classify: '',
    });

    const onOk = async() =>{
      const params = JSON.parse(JSON.stringify(addForm));
      params.publishDate = addForm.publishDate.valueOf();
      const res = await books.add(params);
      result(res).success((data)=>{

      })

    }
    return {
      addForm,
      onOk,
    }
    
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  },
 
})