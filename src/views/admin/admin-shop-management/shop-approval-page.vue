<template>
  <DesktopLayout>
    <div class="flex gap-x-6 justify-center">
      <div
        class="
          bg-white
          pb-6
          justify-center
          items-center
          overflow-hidden
          md:max-w-sm
          rounded-[20px]
          w-[372px]
          h-fit
        "
      >
        <div class="relative h-14 bg-primary-50"></div>
        <div
          class="
            relative
            mx-auto
            h-32
            w-32
            -my-12
            border-primary-900
            rounded-full
            overflow-hidden
            border-4
          "
        >
          <img
            v-if="shop.shopLogoImagePath"
            class="object-cover w-full h-full bg-primary-100"
            :src="shop.shopLogoImagePath"
          />
          <img
            v-else
            class="object-cover w-full h-full bg-primary-100"
            src="@/assets/no-shop-logo.jpg"
          />
        </div>
        <div class="mt-16 space-y-[18px] px-[18px]">
          <p class="text-xl leading-6 text-center font-semibold">{{ shop.shopName }}</p>
          <div class="flex flex-wrap">
            <div class="w-32 text-base leading-[19px] text-start font-semibold">
              Promptpay
            </div>
            <div class="w-52 text-base leading-[19px] text-start">
              {{ shop.promptPay }}
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-32 text-base leading-[19px] text-start font-semibold">
              ID Card Number
            </div>
            <div class="w-52 text-base leading-[19px] text-start">
              {{ shop.idCard }}
            </div>
          </div>
          <div class="w-full text-base leading-[19px] text-start font-semibold">
            Selfie Photo with ID Card
          </div>
          <div class="w-full h-32">
            <img
              v-if="shop.selfiePhotoWithIdCardPath"
              class="object-contain w-full h-full border-[1px] border-primary-100"
              :src="shop.selfiePhotoWithIdCardPath"
            />
            <img
              v-else
              class="object-cover w-full h-full bg-primary-100"
              src="@/assets/no-image-available.png"
            />
          </div>
          <div class="flex flex-wrap">
            <div class="w-32 text-base leading-[19px] text-start font-semibold">
              House Number
            </div>
            <div class="w-52 text-base leading-[19px] text-start">
              {{ shop.shopAddress.houseNumber }}
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-32 text-base leading-[19px] text-start font-semibold">
              Moo
            </div>
            <div class="w-52 text-base leading-[19px] text-start">
              {{ shop.shopAddress.moo }}
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-32 text-base leading-[19px] text-start font-semibold">
              Sub-District
            </div>
            <div class="w-52 text-base leading-[19px] text-start">
              {{ shop.shopAddress.subDistrict }}
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-32 text-base leading-[19px] text-start font-semibold">
              District
            </div>
            <div class="w-52 text-base leading-[19px] text-start">
              {{ shop.shopAddress.district }}
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-32 text-base leading-[19px] text-start font-semibold">
              Province
            </div>
            <div class="w-52 text-base leading-[19px] text-start">
              {{ shop.shopAddress.province }}
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-32 text-base leading-[19px] text-start font-semibold">
              Postcode
            </div>
            <div class="w-52 text-base leading-[19px] text-start">
              {{ shop.shopAddress.postalCode }}
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-[20px] grid p-[18px] w-[372px] min-h-full">
        <Form @submit="handleSubmit">
          <div class="items-start space-y-6">
            <p class="text-primary-900 font-semibold text-[28px] leading-10">
              Shop Approval
            </p>

            <!-- <Dropdown
            label="Status"
            name="shopStatus"
            :model="currentStatus"
            :value="currentStatus"
            :reduce="(option) => option.id"
            :options="[
              { label: 'ENABLE', id: 1 },
              { label: 'DISABLE', id: 2 },
            ]"
            :change="getStatus('Enable')"
            required
          /> -->
            <TextLabel label="Status" required />
            <select v-model="currentStatus">
              <option value="ENABLE">Enable</option>
              <option value="DISABLE">Disable</option>
            </select>
            <div v-if="currentStatus == 'DISABLE'">
              <TextLabel label="Reasons for failure" required />
              <Checkbox
                v-for="(fail, index) in reasonsFailureAll"
                :key="fail"
                :name="'reasonsFailure_' + index"
                :label="fail.reason"
                :checkValue="fail.reason"
              />
              <div @click="switchMethod">
                <Checkbox
                  name="reasonsFailure_six"
                  label="Others"
                  checkValue="Others"
                />
              </div>
              <div v-if="switchData">
                <TextField
                  label="Others reasons for failure"
                  class="flex w-full"
                  type="text"
                  name="reasonsFailure_six_other"
                  placeholder="eg: ID card has expired"
                  required
                />
              </div>
            </div>
          </div>
          <div class="w-full flex gap-x-2 relative fixed bottom-0 left-0 right-0 mt-6">
            <OutlinedButton
              class="w-1/2"
              :click="() => this.$router.push({ name: 'ShopManagementPage' })"
            >
              Cancel
            </OutlinedButton>
            <PrimaryButton class="w-1/2" type="submit" :click="confirmation">
              Submit
            </PrimaryButton>
          </div>
        </Form>
      </div>
    </div>
  </DesktopLayout>
</template>

<script>
import { showAlert } from "@/hooks/sweet-alert/sweet-alert.js";
import { Form } from "vee-validate";
import ShopService from "@/services/shop/shop-service";
import DesktopLayout from "@/components/layout/desktop-app-layout.vue";
import Dropdown from "@/components/dropdown/dropdown.vue";
import PrimaryButton from "@/components/button/primary-button.vue";
import OutlinedButton from "@/components/button/outlined-button.vue";
import Checkbox from "@/components/checkbox/checkbox.vue";
import TextLabel from "@/components/field/text-label.vue";
import CheckboxField from "@/components/checkbox/checkbox-field.vue";
import TextField from "@/components/field/text-field/text-field.vue";

export default {
  name: "ShopApprovalPage",
  components: {
    DesktopLayout,
    TextLabel,
    Dropdown,
    Checkbox,
    PrimaryButton,
    OutlinedButton,
    CheckboxField,
    Form,
    TextField,
  },
  methods: {
    /*  confirmation() {
      showAlert(
        "confirm",
        "Confirmation",
        "Are you sure to enable this shop?"
      ).then((response) => {
        if (response.isConfirmed) {
          this.$router.push({ name: "ShopManagementPage" });
        }
      });
    }, */
    getStatus(status) {
      if (status == "Enable") {
        this.currentStatus = "ENABLE";
        return "ENABLE";
      } else {
        this.currentStatus = "DISABLE";
        return "DISABLE";
      }
    },
    switchMethod() {
      if (this.switchData == false) {
        this.switchData = true;
        return true;
      } else if (this.switchData == true) {
        this.switchData = false;
        return false;
      }
    },
    handleSubmit(shopStatus) {
      let arr = [];
      if (shopStatus.reasonsFailure_0 != undefined) {
        arr.push({
          text: null,
          failureReasons: { reason: shopStatus.reasonsFailure_0 },
        });
      }
      if (shopStatus.reasonsFailure_1 != undefined) {
        arr.push({
          text: null,
          failureReasons: { reason: shopStatus.reasonsFailure_1 },
        });
      }
      if (shopStatus.reasonsFailure_2 != undefined) {
        arr.push({
          text: null,
          failureReasons: { reason: shopStatus.reasonsFailure_2 },
        });
      }
      if (shopStatus.reasonsFailure_3 != undefined) {
        arr.push({
          text: null,
          failureReasons: { reason: shopStatus.reasonsFailure_3 },
        });
      }
      if (shopStatus.reasonsFailure_4 != undefined) {
        arr.push({
          text: null,
          failureReasons: { reason: shopStatus.reasonsFailure_4 },
        });
      }
      if (
        shopStatus.reasonsFailure_six != undefined &&
        shopStatus.reasonsFailure_six_other != undefined
      ) {
        arr.push({
          text: shopStatus.reasonsFailure_six_other,
          failureReasons: { reason: shopStatus.reasonsFailure_six },
        });
      }
      let shopStatusObject = {
        id: this.$route.params.id,
        shopStatus: this.currentStatus,
      };
      ShopService.updateShopStatus(shopStatusObject).then(() => {
        ShopService.shopFailureReason(this.$route.params.id, arr).then(() => {
          this.$router.push({ name: "ShopManagementPage" });
        });
      });
    },
  },
  data() {
    return {
      shop: null,
      reasonsFailureAll: [],
      currentStatus: null,
      showReason: false,
      switchData: false,
    };
  },
  created() {
    let failureArray = null;
    ShopService.getRegisterShop(this.$route.params.id).then((res) => {
      this.shop = res.data.data.getRegisterShop;
      console.log(res.data.data.getRegisterShop);
      this.currentStatus = this.getStatus(
        res.data.data.getRegisterShop.shopStatus
      );
      failureArray = res.data.data.getRegisterShop.failureReasonLists;
    });
    ShopService.getFailureReason(this.$route.params.id).then((res) => {
      for (
        let index = 0;
        index < res.data.data.getFailureReason.length - 1;
        index++
      ) {
        this.reasonsFailureAll.push(res.data.data.getFailureReason[index]);
      }
    });
  },
};
</script>,