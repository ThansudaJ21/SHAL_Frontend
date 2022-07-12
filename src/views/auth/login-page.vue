<template>
  <div class="bg-primary-50 min-h-screen p-2">
    <Form :validation-schema="schema" @submit="handleSubmit">
      <FormWrapper label="Login" :labelCenter="true" :headerColor="true">
        <template #body>
          <TextField
            type="text"
            name="username"
            placeholder="Username"
            label="Username"
            :minLength="2"
            :maxLength="50"
            required
          />
          <TextField
            type="password"
            name="password"
            placeholder="Password"
            label="Password"
            :minLength="2"
            :maxLength="100"
            required
          />
        </template>
        <template #footer>
          <PrimaryButton type="submit"> Login </PrimaryButton>
        </template>
      </FormWrapper>
    </Form>
  </div>
</template>

<script>
import liff from "@line/liff";
import { showAlert } from "@/hooks/sweet-alert/sweet-alert.js";
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import FormWrapper from "@/components/form/form-wrapper.vue";
import TextField from "@/components/field/text-field/text-field.vue";
import PrimaryButton from "@/components/button/primary-button.vue";
import OutlinedButton from "@/components/button/outlined-button.vue";
import authService from "@/services/auth/auth-service";

export default {
  name: "LoginPage",
  components: {
    Form,
    Field,
    FormWrapper,
    TextField,
    PrimaryButton,
    OutlinedButton,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("Please fill username")
        .min(2, "The minimum length must be at least 2"),
      password: yup
        .string()
        .required("Please fill password")
        .min(2, "The minimum length must be at least 2"),
    });

    return {
      schema,
    };
  },
  mounted() {
    liff
      .init({
        liffId: process.env.VUE_APP_LINELIFF_REGISTER,
      })
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login();
        } else {
          liff
            .getProfile()
            .then((profile) => {
              this.email = liff.getDecodedIDToken().email;
              console.log(liff.getDecodedIDToken().email);
              this.name = liff.getDecodedIDToken().name;
              console.log(liff.getDecodedIDToken().name);
              this.liffId = liff.getDecodedIDToken().sub;
              console.log(liff.getDecodedIDToken().sub);

              this.lineId = this.$route.query["lineId"];
              console.log(this.lineId);
              console.log(profile);
            })
            .catch((err) => console.error(err));
        }
      });
  },
  methods: {
    handleSubmit(user) {
      authService.login(user);
      this.$router.push({ name: "BuyerHomePage" });
    },
  },
};
</script>
,
