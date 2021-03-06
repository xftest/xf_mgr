import { defineComponent, reactive } from 'vue';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';
import { auth } from '@/service';
import { message,  } from 'ant-design-vue';
import { result } from '@/helpers/utils';
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
      inviteCode:'',
    });

    const submitRegister = async () => {
      if(regForm.account === ''){
        message.info('用户名不能为空');
        return;
      }
      if(regForm.password === ''){
        message.info('密码不能为空');
        return;
      }
      if(regForm.inviteCode === ''){
        message.info('邀请码不能为空');
        return;
      }
      const res = await auth.register(regForm.account, regForm.password, regForm.inviteCode);
      result(res)
      .success((data)=>{
        message.success(data.msg);
      });
    };

    const loginForm = reactive({
      account: '',
      password: '',
    });
    const submitLogin = async () => {
      if(loginForm.account === ''){
        message.info('用户名不能为空');
        return;
      }
      if(loginForm.password === ''){
        message.info('密码不能为空');
        return;
      }
      const res = await auth.login(loginForm.account, loginForm.password);
      result(res)
      .success((data)=>{
        message.success(data.msg);
      });

    };
    // setup 返回值，才能被模版使用
    return {
      regForm,
      submitRegister,

      loginForm,
      submitLogin,
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
    MailOutlined,
  },
});
