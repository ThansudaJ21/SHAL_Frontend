<template>
  <Form :validation-schema="schema" @submit="handleProductSubmit">
    <FormWrapper label="Shipping (maximum 4 options)" required>
      <template #body>
        <Checkbox
          name="shipping_one"
          label="ไม่มี"
          label_option="ไม่มี"
          checkValue="ไม่มี"
        />
      </template>
    </FormWrapper>
    <FormWrapper class="mt-4">
      <template #body>
        <div class="flex w-full gap-x-4 py-4">
          <p
            class="
              flex
              justify-start
              text-base
              leading-[19px]
              text-neutral-900
              w-full
            "
          >
            Publish Product
          </p>
          <div class="flex justify-end">
            <Toggle />
          </div>
        </div>
      </template>
      <template #footer>
        <PrimaryButton type="submit"> Submit </PrimaryButton>
      </template>
    </FormWrapper>
  </Form>
</template>

<script>
import { Form } from "vee-validate";
import * as yup from "yup";
import ProductService from "@/services/shop/shop-service";
import FormWrapper from "@/components/form/form-wrapper.vue";
import PrimaryButton from "@/components/button/primary-button.vue";
import Checkbox from "@/components/checkbox/checkbox.vue";
import Toggle from "@/components/toggle/toggle.vue";

export default {
  name: "EditProductPageFive",
  components: {
    Form,
    FormWrapper,
    PrimaryButton,
    Checkbox,
    Toggle,
  },
  data() {
    const schema = yup.object().shape({
      productName: yup
        .string()
        .required("Please fill the product name")
        .min(2, "The minimum length must be at least 2"),
      productDeatails: yup
        .string()
        .required("Please fill the product details")
        .min(15, "The minimum length must be at least 15"),
    });

    return {
      schema,
    };
  },
  methods: {
    handleProductSubmit(shop) {
      ProductService.registerShop(shop);
    },
  },
};
</script>