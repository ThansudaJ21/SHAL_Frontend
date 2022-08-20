<template>
  <Form
    :validation-schema="schema"
    @submit="handleSubmit"
    :initial-values="
      this.$store.getters.getRegisterShop &&
      this.$store.getters.getRegisterShop.firstPage
    "
  >
    <FormWrapper label="Basic Information">
      <template #body>
        <TextLabel label="Shop Logo" required />

        <UploadImage name="shopLogo" :fullbox="true" />
        <TextField
          type="text"
          name="shopName"
          placeholder="Shop Name"
          label="Shop Name"
          :minLength="2"
          :maxLength="255"
          regex="combine"
          required
        />
        <TextField
          type="text"
          name="promptPay"
          placeholder="eg: phone number, ID card number"
          label="Promptpay"
          :minLength="10"
          :maxLength="13"
          regex="numberOnly"
          required
        />
        <TextField
          type="text"
          name="idCard"
          placeholder="eg: 7992982055324"
          label="ID Card Number"
          :mask="'#############'"
          required
        />
        <TextLabel label="Selfie Photo with ID Card" required />
        <UploadImage name="selfiePhotoWithIdCard" :fullbox="true" />
      </template>
      <template #footer>
        <PrimaryButton type="submit"> Next </PrimaryButton>
      </template>
    </FormWrapper>
  </Form>
</template>

<script>
import { Form } from "vee-validate";
import * as yup from "yup";
import UtilService from "@/services/util-service";
import FormWrapper from "@/components/form/form-wrapper.vue";
import TextLabel from "@/components/field/text-label.vue";
import TextField from "@/components/field/text-field/text-field.vue";
import UploadImage from "@/components/image-field/upload-image.vue";
import PrimaryButton from "@/components/button/primary-button.vue";

export default {
  name: "ShopRegistrationPageOne",
  components: {
    Form,
    FormWrapper,
    TextLabel,
    TextField,
    UploadImage,
    PrimaryButton,
  },
  data() {
    const schema = yup.object().shape({
      shopLogo: yup.mixed().required("Please upload the shop logo"),
      shopName: yup
        .string()
        .required("Please fill the shop name")
        .min(2, "The minimum length must be at least 2"),
      promptPay: yup
        .string()
        .required("Please fill Promptpay")
        .min(10, "The Promptpay must contain 10 digits or 13 digits"),
      idCard: yup
        .string()
        .required("Please fill the ID card number")
        .min(13, "The ID card number must contain 13 digits"),
      selfiePhotoWithIdCard: yup
        .mixed()
        .required("Please upload the selfie photo with ID card"),
    });

    return {
      schema,
      shopLogoPath: null,
      selfiePhotoPath: null,
    };
  },
  async created() {
    this.tempStoreData = await this.$store.getters.getRegisterShop;
  },
  methods: {
    handleSubmit(shop) {
      UtilService.uploadImage(shop.shopLogo[0].value)
        .then((response) => {
          this.shopLogoPath = response.data;
        })
        .then(() => {
          UtilService.uploadImage(shop.selfiePhotoWithIdCard[0].value)
            .then((response) => {
              this.selfiePhotoPath = response.data;
            })
            .then(() => {
              let pageOne = {
                shopName: shop.shopName,
                idCard: shop.idCard,
                shopLogoImagePath: this.shopLogoPath,
                selfiePhotoWithIdCardPath: this.selfiePhotoPath,
                promptPay: shop.promptPay,
              };
              this.$store.dispatch("setRegisterShop", {
                ...this.$store.getters.getRegisterShop,
                firstPage: pageOne,
              });
              console.log(this.$store.getters.getRegisterShop);
              this.$router.push({ name: "ShopRegistrationPageTwo" });
            });
        });
    },
  },
  mounted() {
    liff
      .init({
        liffId: process.env.VUE_APP_LINELIFF_BUEYR_REGISTER_SHOP,
      })
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login();
        } else {
          liff
            .getProfile()
            .then(() => {
              this.name = liff.getDecodedIDToken().name;
              this.userId = liff.getDecodedIDToken().sub;
              this.picture = liff.getDecodedIDToken().picture;
            })
            .catch((err) => console.error(err));
        }
      });
  },
};
</script>