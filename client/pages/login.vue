<template>
  <div id="main">
    <div class="login">
      <div class="login-form">
        <div class="login-logo">
          <span>欢迎</span>
        </div>
        <Form inline ref="loginFormRef" :model="formData" :rules="rule">
          <FormItem prop="account" class="form-item">
            <Input type="text" icon="person" v-model="formData.account" @on-enter="loginSubmit" placeholder="登录账号"></Input>
          </FormItem>
          <FormItem prop="password" class="form-item">
            <Input type="password" icon="ios-locked" v-model="formData.password" @on-enter="loginSubmit" placeholder="账户密码"></Input>
          </FormItem>
          <FormItem class="form-item" style="margin-bottom:5px;">
            <Checkbox v-model="formData.is_record">记住登录</Checkbox> 
            <!-- <a style="float:right;">忘记密码</a> -->
          </FormItem>
          <FormItem class="form-item">
            <Button class="loginBtn" type="primary" :loading="loading" @click="loginSubmit">
              登 录
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { LoginModel } from "@/models/login.model";

@Component
export default class extends Vue {
    private loading : Boolean = false;
    private formData: LoginModel = { };
    private rule = {};

    async asyncData({query}){
        return {
            formData: {
                account: '',
                password: '',
                is_record: '',
            },
            rule: {
                account: [
                    { required: true, message: '请填写登录账户', trigger: 'blur' },
                    {
                        type: 'string',
                        min: 2,
                        message: '登录账户最少为2个字符',
                        trigger: 'blur'
                    }
                ],
                password: [
                    { required: true, message: '请填写账户密码', trigger: 'blur' },
                    {
                        type: 'string',
                        min: 6,
                        max: 30,
                        message: '账户密码必须为6~30字符',
                        trigger: 'blur'
                    }
                ]
            },
        }
    };
    loginSubmit(){
        debugger;
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
            this.$Message.success('恭喜您，登录成功！')
            window.location.href = "/";
        }, 3000);
    };
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/pages/login.scss"
</style>

