<template>
  <MobileLayout>
    <!-- <Form :validation-schema="schema" @submit="handleSubmit"> -->
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
          :maxLength="255"
          regex="textOnly"
          required
        />
        <TextField
          type="text"
          name="lastname"
          placeholder="Last Name"
          label="Last Name"
          :minLength="2"
          :maxLength="255"
          regex="textOnly"
          required
        />
        <TextField
          type="Number"
          name="phoneNumber"
          placeholder="Phone Number"
          label="Phone Number"
          :mask="'##########'"
          required
        />
      </template>
      <template #footer>
        <div class="w-full flex gap-x-1">
          <OutlinedButton
            class="w-1/2"
            :click="() => this.$router.push($router.go(-1))"
          >
            Cancel
          </OutlinedButton>
          <PrimaryButton
            class="w-1/2"
            type="submit"
            :click="() => this.$router.push({ name: 'BuyerHomePage' })"
          >
            Submit
          </PrimaryButton>
        </div>
      </template>
    </FormWrapper>
    <!-- </Form> -->
  </MobileLayout>
</template>

<script>
import * as yup from "yup";
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import FormWrapper from "@/components/form/form-wrapper.vue";
import TextField from "@/components/field/text-field/text-field.vue";
import PrimaryButton from "@/components/button/primary-button.vue";
import OutlinedButton from "@/components/button/outlined-button.vue";

export default {
  name: "RegisterPage",
  components: {
    MobileLayout,
    FormWrapper,
    TextField,
    PrimaryButton,
    OutlinedButton,
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
    };
  },
  /*   methods: {
    handleSubmit(data) {

    },
  }, */
};
</script>,