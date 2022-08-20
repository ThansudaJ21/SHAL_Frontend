<template>
  <Form
    :validation-schema="schema"
    @submit="handleSubmit"
    v-slot="{ values }"
    :initial-values="this.$store.getters.getRegisterShop"
  >
    <FormWrapper label="Shop Address">
      <template #body>
        <div class="flex gap-x-4">
          <TextField
            type="text"
            name="houseNumber"
            placeholder="House Number"
            label="House Number"
            :minLength="1"
            :maxLength="255"
            regex="houseNumber"
            required
          />
          <TextField
            type="text"
            name="moo"
            placeholder="Moo"
            label="Moo"
            :minLength="1"
            :maxLength="255"
            regex="numberOnly"
            required
          />
        </div>
        <TextField
          type="text"
          name="postalCode"
          placeholder="Postalcode"
          label="Postalcode"
          :mask="'#####'"
          :maxLength="5"
          required
          @change="getAddressByPostalCode(values.postalCode)"
        />
        <Dropdown
          label="Province"
          name="province"
          placeholder="Province"
          :options="province"
          :disabled="
            values.postalCode && values.postalCode.length
              ? values.postalCode.length !== 5
              : true
          "
          required
        />
        <Dropdown
          label="District"
          name="district"
          placeholder="District"
          :options="amphoes"
          class="min-w-0"
          :disabled="values.province && values.postalCode ? false : true"
          required
          @change="filterTumbon(values.district)"
        />
        <Dropdown
          label="Sub-District"
          name="subDistrict"
          placeholder="Sub-District"
          :options="tumbons"
          :disabled="
            values.province && values.postalCode && values.district
              ? false
              : true
          "
          required
        />
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
import ShopService from "@/services/shop/shop-service";
import FormWrapper from "@/components/form/form-wrapper.vue";
import TextField from "@/components/field/text-field/text-field.vue";
import Dropdown from "@/components/dropdown/dropdown.vue";
import PrimaryButton from "@/components/button/primary-button.vue";

export default {
  name: "ShopRegistrationPageTwo",
  components: {
    Form,
    FormWrapper,
    TextField,
    Dropdown,
    PrimaryButton,
  },
  data() {
    const schema = yup.object().shape({
      houseNumber: yup.string().required("Please fill house number"),
      moo: yup.string().required("Please fill Moo"),
      postalCode: yup
        .string()
        .required("Please fill the postalcode")
        .min(5, "The postalcode must contain 5 digits"),
      province: yup.string().required("Please select province"),
      district: yup.string().required("Please select district"),
      subDistrict: yup.string().required("Please select sub-district"),
    });

    return {
      schema,
      firstPageData: null,
      addressByPostalCode: null,
      province: [],
      amphoes: [],
      tumbons: [],
    };
  },
  created() {
    this.firstPageData = this.$store.getters.getRegisterShop.firstPage;
    console.log(this.firstPageData);
  },
  methods: {
    handleSubmit(shop) {
      let shopObject = {
        shopName: this.firstPageData.shopName,
        idCard: this.firstPageData.idCard,
        shopLogoImagePath: this.firstPageData.shopLogoImagePath,
        selfiePhotoWithIdCardPath: this.firstPageData.selfiePhotoWithIdCardPath,
        promptPay: this.firstPageData.promptPay,
        shopAddress: {
          houseNumber: shop.houseNumber,
          moo: shop.moo,
          postalCode: shop.postalCode,
          subDistrict: shop.subDistrict,
          district: shop.district,
          province: shop.province,
        },
      };
      this.$store.dispatch("setRegisterShop", shopObject);
      ShopService.registerShop(shopObject, 1);
      console.log(shopObject);
      this.$router.push({ name: "BuyerProfilePage" });
    },
    getAddressByPostalCode(e) {
      if (e && e.length == 5) {
        ShopService.getAddressFromPostCode(e)
          .then((res) => {
            this.addressByPostalCode = res.data.data.getAddressFromPostCode;
            this.province = this.addressByPostalCode.province;
            this.amphoes = this.addressByPostalCode.amphoes.map(
              (x) => x.amphoe
            );
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.province = [];
        this.amphoes = [];
      }
    },
    filterTumbon(e) {
      if (e) {
        this.tumbons = this.addressByPostalCode.amphoes.filter(
          (x) => x.amphoe === e
        )[0].tumbons;
      }
    },
  },
  computed: {
    getTumbons() {
      if (this.addressByPostalCode) {
        return this.addressByPostalCode.amphoes.filter(
          (x) => x.amphoe === this.amphoe
        )[0].tumbons;
      } else {
        return [];
      }
    },
  },
};
</script>