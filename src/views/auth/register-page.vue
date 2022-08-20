<template>
  <MobileLayout :displayName="this.name">
    <Form :validation-schema="schema" @submit="handleSubmit">
      <FormWrapper
        label="SHAL Registration"
        :labelCenter="true"
        :headerColor="true"
      >
        <template #body>
          <TextField
            type="text"
            name="firstname"
            placeholder="First Name"
            label="First Name"
            :minLength="2"
            :maxLength="50"
            regex="textOnly"
            required
          />
          <TextField
            type="text"
            name="lastname"
            placeholder="Last Name"
            label="Last Name"
            :minLength="2"
            :maxLength="50"
            regex="textOnly"
            required
          />
          <TextField
            type="Number"
            name="phoneNumber"
            placeholder="Phone Number"
            label="Phone Number"
            :mask="'##########'"
            regex="numberOnly"
            required
          />
        </template>
        <template #footer>
          <PrimaryButton type="submit"> Submit </PrimaryButton>
        </template>
      </FormWrapper>
    </Form>
  </MobileLayout>
</template>

<script>
import liff from "@line/liff";
import { showAlert } from "@/hooks/sweet-alert/sweet-alert.js";
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import AuthService from "@/services/auth/auth-service";
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import FormWrapper from "@/components/form/form-wrapper.vue";
import TextField from "@/components/field/text-field/text-field.vue";
import PrimaryButton from "@/components/button/primary-button.vue";

export default {
  name: "RegisterPage",
  components: {
    Form,
    Field,
    MobileLayout,
    FormWrapper,
    TextField,
    PrimaryButton,
  },
  data() {
    const schema = yup.object().shape({
      firstname: yup
        .string()
        .required("Please fill firstname")
        .min(2, "The minimum length must be at least 2"),
      lastname: yup
        .string()
        .required("Please fill lastname")
        .min(2, "The minimum length must be at least 2"),
      phoneNumber: yup
        .string()
        .required("Please fill the phone number")
        .min(10, "The phone number must contain 10 digits"),
    });

    return {
      schema,
      email: "",
      userId: "",
      picture: "",
      name: "",
    };
  },
  mounted() {
    liff
      .init({
        liffId: process.env.VUE_APP_LINELIFF_REGISTER_NEW_USER,
      })
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login();
        } else {
          liff
            .getProfile()
            .then(() => {
              this.email = liff.getDecodedIDToken().email;
              this.name = liff.getDecodedIDToken().name;
              this.userId = liff.getDecodedIDToken().sub;
              this.picture = liff.getDecodedIDToken().picture;
            })
            .catch((err) => console.error(err));
        }
      });
  },
  methods: {
    handleSubmit(user) {
      let userObject = {
        firstname: user.firstname.toString(),
        lastname: user.lastname.toString(),
        email: this.email,
        pictureUrl: this.picture,
        displayName: this.name,
        userId: this.userId,
        phoneNumber: user.phoneNumber.toString(),
        enabled: true,
      };
      AuthService.registerUser(userObject).then((res) => {
        if (res.data.data.registerUser != null) {
          this.$store.dispatch("setUser", userObject);
          showAlert("success", "", "Registration Successfully!").then(() => {
            liff.closeWindow();
          });
        } else {
          showAlert(
            "error",
            "Registration Unsuccessfully!",
            "At least one in the field is invalid."
          );
        }
      });
    },
  },
};
</script>
