import { defineComponent } from 'vue';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';
/**
 * defineComponent函数
 * 只是对setup函数进行封装，返回options的对象
 * defineComponent最重要的是：在TypeScript下，给予了组件 正确的参数类型推断 。
 */
export default defineComponent({
  setup() {
    // 在组件初始化的时候会执行一次，只会执行这一次,入口函数
  },
  components: {
    UserOutlined,
    LockOutlined,
    MailOutlined,
  },
});
