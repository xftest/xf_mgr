import { defineComponent, reactive } from 'vue';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';
import {auth} from '@/service';
/**
 * defineComponent函数
 * 只是对setup函数进行封装，返回options的对象
 * defineComponent最重要的是：在TypeScript下，给予了组件 正确的参数类型推断 。
 */
export default defineComponent({
  // 在组件初始化的时候会执行一次，只会执行这一次,入口函数
  setup() {
    // ref 一次 可以监听一个值，reactive可以传多个值
    const regForm = reactive({
      account: '',
      password: '',
    });

    const submit = () => {
      auth.register(regForm.account, regForm.password);
    };
    // setup 返回值，才能被模版使用
    return {
      regForm,
      submit,
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
    MailOutlined,
  },
});
