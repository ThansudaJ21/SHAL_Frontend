<template>
  <DesktopLayout>
    <div class="flex gap-x-6 justify-center" v-if="shop">
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
          <p class="text-xl leading-6 text-center font-semibold">
            {{ shop.shopName }}
          </p>
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
              class="
                object-contain
                w-full
                h-full
                border-[1px] border-primary-100
              "
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
            <div>
              <TextLabel label="Status" required />
              <select
                v-model="currentStatus"
                class="custom-select w-full h-[42px]"
              >
                <option class="select-selected" value="ENABLE">Enable</option>
                <option class="select-selected" value="DISABLE">Disable</option>
              </select>
            </div>
            <div v-if="currentStatus == 'DISABLE'">
              <TextLabel label="Reasons for failure" required class="mb-3" />
              <div
                v-for="(fail, index) in reasonsFailureAll"
                :key="fail.reason"
              >
                <Field v-slot="{ field }" :name="'reasonsFailure_' + index">
                  <div
                    @click="addCheck(fail.reason)"
                    class="flex items-center inline-block"
                  >
                    <div>
                      <input
                        v-bind="field"
                        type="checkbox"
                        :value="fail.reason"
                        :id="fail.reason"
                        v-model="checkFailure"
                        class="
                          my-3
                          mr-4
                          h-5
                          w-5
                          border-[1px]
                          !border-neutral-500
                          checked:!border-primary-900 checked:!bg-primary-900
                        "
                      />
                    </div>
                    <div>
                      <label
                        :class="[
                          checkFailure.includes(fail.reason)
                            ? 'text-black'
                            : 'text-neutral-500',
                        ]"
                        class="text-start text-sm font-normal leading-[17px]"
                        for="fail.reason"
                        >{{ fail.reason }}</label
                      >
                    </div>
                  </div>
                </Field>
              </div>
              <Field v-slot="{ field }" name="reasonsFailure_six">
                <div
                  @click="switchMethod"
                  class="flex items-center inline-block mt-3 mb-6"
                >
                  <input
                    v-bind="field"
                    type="checkbox"
                    value="Others"
                    id="Others"
                    v-model="checkFailure2"
                    class="
                      mr-4
                      h-5
                      w-5
                      border-[1px]
                      !border-neutral-500
                      checked:!border-primary-900 checked:!bg-primary-900
                    "
                  />

                  <label
                    :class="[
                      checkFailure2 == true ? 'text-black' : 'text-neutral-500',
                    ]"
                    class="text-start text-sm font-normal leading-[17px]"
                    for="Others"
                  >
                    Others
                  </label>
                </div>
              </Field>
              <div v-if="checkFailure2 == true">
                <TextField
                  label="Others reasons for failure"
                  class="flex w-full"
                  type="text"
                  :valueField="textForOther"
                  name="reasonsFailure_six_other"
                  placeholder="eg: ID card has expired"
                  required
                />
              </div>
            </div>
          </div>
          <div
            class="
              w-full
              flex
              gap-x-2
              relative
              fixed
              bottom-0
              left-0
              right-0
              mt-6
            "
          >
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
import { Form, Field } from "vee-validate";
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
    Field,
  },
  methods: {
    addCheck(reason) {
      if (
        this.checkFailure.includes(reason) &&
        this.checkFailure.indexOf(reason) !== -1
      ) {
        this.checkFailure.splice(this.checkFailure.indexOf(reason), 1);
      } else {
        this.checkFailure.push(reason);
      }
    },
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
      console.log(shopStatus);
      if (
        this.currentStatus == "DISABLE" &&
        this.checkFailure.length == 0 &&
        this.checkFailure2 == false
      ) {
        showAlert(
          "error",
          "Error",
          "Please select the reason for failure at least 1 reason"
        );
      } else if (
        this.currentStatus == "DISABLE" &&
        this.checkFailure2 == true &&
        (shopStatus.reasonsFailure_six_other === undefined ||
          shopStatus.reasonsFailure_six_other === "")
      ) {
        showAlert(
          "error",
          "Error",
          "Please fill the others reasons for failure"
        );
      } else {
        showAlert(
          "confirm",
          "Confirmation",
          "Are you sure to " + this.currentStatus.toLowerCase() + " this shop?"
        ).then((res) => {
          if (res.isConfirmed) {
            let arr = [];
            if (this.currentStatus == "ENABLE") {
              arr = [];
            } else {
              if (
                this.checkFailure.includes(
                  "Selfie Photo with ID card does not clear"
                )
              ) {
                arr.push({
                  text: null,
                  failureReasons: {
                    reason: "Selfie Photo with ID card does not clear",
                  },
                });
              }
              if (this.checkFailure.includes("Inappropriate shop logo")) {
                arr.push({
                  text: null,
                  failureReasons: { reason: "Inappropriate shop logo" },
                });
              }
              if (this.checkFailure.includes("Inappropriate shop name")) {
                arr.push({
                  text: null,
                  failureReasons: { reason: "Inappropriate shop name" },
                });
              }
              if (
                this.checkFailure.includes(
                  "ID card number does not match the selfie photo with ID card"
                )
              ) {
                arr.push({
                  text: null,
                  failureReasons: {
                    reason:
                      "ID card number does not match the selfie photo with ID card",
                  },
                });
              }
              if (
                this.checkFailure.includes("Name does not match the ID card")
              ) {
                arr.push({
                  text: null,
                  failureReasons: { reason: "Name does not match the ID card" },
                });
              }
              if (
                this.checkFailure2 == true &&
                shopStatus.reasonsFailure_six_other != undefined
              ) {
                arr.push({
                  text: shopStatus.reasonsFailure_six_other,
                  failureReasons: { reason: "Others" },
                });
              }
            }

            let shopStatusObject = {
              id: this.$route.params.id,
              shopStatus: this.currentStatus,
            };
            ShopService.updateShopStatus(shopStatusObject, 1).then(() => {
              ShopService.shopFailureReason(this.$route.params.id, arr).then(
                () => {
                  this.$router.push({ name: "ShopManagementPage" });
                }
              );
            });
          }
        });
      }
    },
    currentStatusAtNow() {
      return this.currentStatus;
    },
  },
  data() {
    return {
      shop: null,
      reasonsFailureAll: [],
      currentStatus: null,
      showReason: false,
      switchData: false,
      checkFailure: [],
      checkFailure2: "",
      textForOther: "",
    };
  },
  async created() {
    await ShopService.getRegisterShop(this.$route.params.id).then(
      async (res) => {
        this.shop = await res.data.data.getRegisterShop;
        console.log(res.data.data.getRegisterShop);
        console.log(res.data.data.getRegisterShop.failureReasonLists);
        this.currentStatus = this.getStatus(
          res.data.data.getRegisterShop.shopStatus
        );
        for (
          let index = 0;
          index < res.data.data.getRegisterShop.failureReasonLists.length;
          index++
        ) {
          this.checkFailure.push(
            res.data.data.getRegisterShop.failureReasonLists[index]
              .failureReasons.reason
          );
          if (
            this.checkFailure.includes("Others") &&
            this.checkFailure.indexOf("Others") !== -1
          ) {
            this.checkFailure.splice(this.checkFailure.indexOf("Others"), 1);
          }
          if (
            res.data.data.getRegisterShop.failureReasonLists[index]
              .failureReasons.reason == "Others"
          ) {
            this.checkFailure2 = true;
            this.textForOther =
              res.data.data.getRegisterShop.failureReasonLists[index].text;
          }
        }
        this.checkFailure = JSON.parse(JSON.stringify(this.checkFailure));
      }
    );
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
</script>

<style>
.custom-select {
  @apply h-[42px] !rounded-[20px] !border-neutral-500 !p-0 !placeholder-neutral-500  hover:border-neutral-500 border-2;
}

.select option {
  border: 1px solid #1f3a89;
  box-shadow: 0px 8px 15px 0px rgba(190, 219, 254, 0.2);
  @apply z-10 mt-2 rounded-[20px] py-0;
}

.select-selected {
  @apply !h-6 !py-0 !px-4 !text-sm leading-[17px] !text-neutral-600 hover:bg-primary-100 hover:!text-black;
}
</style>