<template>
  <div class="md:hidden bg-primary-50 min-h-screen" v-if="product">
    <div class="static">
      <slide
        :data="slide"
        class="h-[258px] w-full object-contain"
        :time="5000"
        :spot="false"
      />
      <div class="absolute top-2 w-full flex justify-between px-4">
        <div class="items-start">
          <div
            @click="() => this.$router.go(-1)"
            class="
              !w-8
              !h-8
              !px-[0px]
              bg-neutral-50
              rounded-full
              !min-w-8 !min-h-8
              flex
              justify-center
              items-center
            "
          >
            <BackIcon />
          </div>
        </div>
        <div class="items-end gap-x-2 flex">
          <div
            @click="
              () =>
                this.$router.push({
                  name: 'MyCartPage',
                })
            "
            class="
              !w-8
              !h-8
              !px-[0px]
              bg-primary-100
              rounded-full
              !min-w-8 !min-h-8
              flex
              justify-center
              items-center
            "
          >
            <div class="">
              <div
                class="
                  flex
                  items-center
                  rounded-full
                  w-[18px]
                  h-[18px]
                  bg-error-500
                  absolute
                  right-2
                  top-0
                  text-white
                  justify-center
                "
                v-if="inCartItemCount > 0"
              >
                {{ inCartItemCount }}
              </div>
              <CartIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Sale and Auction -->
    <div
      class="space-y-2 px-2 pt-2 pb-4 mb-12"
      v-if="product.saleTypeName == 'Auction and Sale'"
    >
      <FormWrapper variant="details">
        <template #body>
          <p class="text-base leading-[19px] text-black">
            {{ product.productName }}
          </p>
          <p class="text-lg leading-[19px] font-semibold text-primary-900">
            Price for Buy Now ฿{{ Number(product.salePrice).toLocaleString() }}
          </p>
          <div class="grid grid-cols-3 gap-2 items-center">
            <div class="text-center">
              <p class="text-xs leading-[14px] text-neutral-900 font-semibold">
                Time Left
              </p>
              <p class="text-sm leading-[17px] text-error-500 font-semibold">
                {{ toHHMMSS(timerCount) }}
              </p>
            </div>
            <div class="text-center">
              <p class="text-xs leading-[14px] text-neutral-900 font-semibold">
                Current Bid
              </p>
              <p
                class="text-sm leading-[17px] text-primary-900 font-semibold"
                v-if="auctionWinner"
              >
                ฿{{ Number(auctionWinner.bidAmount).toLocaleString() }}
              </p>
              <p
                class="text-sm leading-[17px] text-primary-900 font-semibold"
                v-else
              >
                ฿{{ Number(product.auction.startingBid).toLocaleString() }}
              </p>
            </div>
            <div class="text-center">
              <p class="text-xs leading-[14px] text-neutral-900 font-semibold">
                Current Winner
              </p>
              <p class="text-sm leading-[17px] text-black font-semibold">
                <span
                  class="text-ellipsis overflow-hidden"
                  v-if="auctionWinner"
                >
                  {{ auctionWinnerName }}
                </span>
                <span class="text-ellipsis overflow-hidden" v-else> - </span>
              </p>
            </div>
          </div>
        </template>
      </FormWrapper>
      <div class="rounded-2xl bg-white space-y-4 px-2 py-4">
        <div class="flex items-center w-full justify-between">
          <div
            class="flex items-center gap-x-2 w-3/4"
            @click="
              () => {
                this.$store.dispatch('setRegisterShop', shops);
                this.$router.push({
                  name: 'ShopPage',
                  params: { id: shops.id },
                });
              }
            "
          >
            <img :src="shops.shopLogoImagePath" class="w-8 h-8 rounded-full" />
            <p class="text-xs font-semibold">{{ shops.shopName }}</p>
          </div>
          <div class="w-1/4 flex justify-end mr-4">
            <ChevronRightIcon />
          </div>
        </div>
      </div>
      <FormWrapper variant="details">
        <template #body>
          <p
            class="
              text-sm
              leading-[17px]
              font-semibold
              text-black
              flex
              items-center
              gap-x-2
            "
          >
            <TruckIcon /> Shipping
          </p>
          <div v-for="shipment in product.shipments" :key="shipment">
            <p class="text-xs leading-[14px] text-black">
              {{ shipment }}
            </p>
            <p class="text-xs leading-[14px] text-black">Cost: ฿35</p>
          </div>
        </template>
      </FormWrapper>
      <FormWrapper variant="details">
        <template #body>
          <p class="text-sm leading-[17px] font-semibold text-black">
            Product Details
          </p>
          <hr class="border-primary-100 border-[1px]" />
          <div class="flex gap-x-4">
            <div
              class="
                w-[94px]
                text-xs
                leading-[14px]
                text-neutral-700 text-start
              "
            >
              Category
            </div>
            <div
              class="
                w-fit
                text-xs
                leading-[14px]
                text-black text-start
                break-all
              "
            >
              {{ product.category }}
            </div>
          </div>
          <div
            class="flex gap-x-4"
            v-for="attribute in product.productAttribute"
            :key="attribute"
          >
            <div
              class="
                w-[94px]
                text-xs
                leading-[14px]
                text-neutral-700 text-start
              "
            >
              {{ attribute.attribute.attribute }}
            </div>
            <div
              class="
                w-fit
                text-xs
                leading-[14px]
                text-black text-start
                break-all
              "
            >
              {{ attribute.text }}
            </div>
          </div>
          <hr class="border-primary-100 border-[1px]" />
          <p class="text-xs leading-[14px] text-black">{{ product.details }}</p>
        </template>
      </FormWrapper>
    </div>

    <!-- Auction Only -->
    <div
      class="space-y-2 px-2 pt-2 pb-4 mb-12"
      v-if="product.saleTypeName == 'Auction only'"
    >
      <FormWrapper variant="details">
        <template #body>
          <p class="text-base leading-[19px] text-black">
            {{ product.productName }}
          </p>
          <div class="grid grid-cols-3 gap-2 items-center">
            <div class="text-center">
              <p class="text-xs leading-[14px] text-neutral-900 font-semibold">
                Time Left
              </p>
              <p class="text-sm leading-[17px] text-error-500 font-semibold">
                {{ toHHMMSS(timerCount) }}
              </p>
            </div>
            <div class="text-center">
              <p class="text-xs leading-[14px] text-neutral-900 font-semibold">
                Current Bid
              </p>
              <p
                class="text-sm leading-[17px] text-primary-900 font-semibold"
                v-if="auctionWinner"
              >
                ฿{{ Number(auctionWinner.bidAmount).toLocaleString() }}
              </p>
              <p
                class="text-sm leading-[17px] text-primary-900 font-semibold"
                v-else
              >
                ฿{{ Number(product.auction.startingBid).toLocaleString() }}
              </p>
            </div>
            <div class="text-center">
              <p class="text-xs leading-[14px] text-neutral-900 font-semibold">
                Current Winner
              </p>
              <p class="text-sm leading-[17px] text-black font-semibold">
                <span
                  class="text-ellipsis overflow-hidden"
                  v-if="auctionWinner"
                >
                  {{ auctionWinnerName }}
                </span>
                <span class="text-ellipsis overflow-hidden" v-else> - </span>
              </p>
            </div>
          </div>
        </template>
      </FormWrapper>
      <div class="rounded-2xl bg-white space-y-4 px-2 py-4">
        <div class="flex items-center w-full justify-between">
          <div
            class="flex items-center gap-x-2 w-3/4"
            @click="
              () => {
                this.$store.dispatch('setRegisterShop', shops);
                this.$router.push({
                  name: 'ShopPage',
                  params: { id: shops.id },
                });
              }
            "
          >
            <img :src="shops.shopLogoImagePath" class="w-8 h-8 rounded-full" />
            <p class="text-xs font-semibold">{{ shops.shopName }}</p>
          </div>
          <div class="w-1/4 flex justify-end mr-4">
            <ChevronRightIcon />
          </div>
        </div>
      </div>
      <FormWrapper variant="details">
        <template #body>
          <p
            class="
              text-sm
              leading-[17px]
              font-semibold
              text-black
              flex
              items-center
              gap-x-2
            "
          >
            <TruckIcon /> Shipping
          </p>
          <div v-for="shipment in product.shipments" :key="shipment">
            <p class="text-xs leading-[14px] text-black">
              {{ shipment }}
            </p>
            <p class="text-xs leading-[14px] text-black">Cost: ฿35</p>
          </div>
        </template>
      </FormWrapper>
      <FormWrapper variant="details">
        <template #body>
          <p class="text-sm leading-[17px] font-semibold text-black">
            Product Details
          </p>
          <hr class="border-primary-100 border-[1px]" />
          <div class="flex gap-x-4">
            <div
              class="
                w-[94px]
                text-xs
                leading-[14px]
                text-neutral-700 text-start
              "
            >
              Category
            </div>
            <div
              class="
                w-fit
                text-xs
                leading-[14px]
                text-black text-start
                break-all
              "
            >
              {{ product.category }}
            </div>
          </div>
          <div
            class="flex gap-x-4"
            v-for="attribute in product.productAttribute"
            :key="attribute"
          >
            <div
              class="
                w-[94px]
                text-xs
                leading-[14px]
                text-neutral-700 text-start
              "
            >
              {{ attribute.attribute.attribute }}
            </div>
            <div
              class="
                w-fit
                text-xs
                leading-[14px]
                text-black text-start
                break-all
              "
            >
              {{ attribute.text }}
            </div>
          </div>
          <hr class="border-primary-100 border-[1px]" />
          <p class="text-xs leading-[14px] text-black">{{ product.details }}</p>
        </template>
      </FormWrapper>
    </div>

    <!-- Sale Only -->
    <div
      class="space-y-2 px-2 pt-2 pb-4 mb-12"
      v-if="product.saleTypeName == 'Sale only'"
    >
      <FormWrapper variant="details">
        <template #body>
          <p class="text-base leading-[19px] text-black">
            {{ product.productName }}
          </p>
          <p class="text-lg leading-[19px] font-semibold text-primary-900">
            ฿{{ Number(product.salePrice).toLocaleString() }}
          </p>
        </template>
      </FormWrapper>
      <FormWrapper variant="details">
        <template #body>
          <p class="text-sm leading-[17px] font-semibold text-black">
            Variations
          </p>
          <p class="text-sm leading-[17px] text-black">
            <span
              v-for="(variation, index) in product.variations"
              :key="variation"
              >{{ variation.variationName }} {{ variation.options.length
              }}<span v-if="index < product.variations.length - 1">, </span>
            </span>
          </p>
          <img
            v-for="productImg in optionImage()"
            :key="productImg"
            :src="productImg"
            class="w-11 h-12 border-[1px] boder-solid border-primary-100"
          />
        </template>
      </FormWrapper>
      <div class="rounded-2xl bg-white space-y-4 px-2 py-4">
        <div class="flex items-center w-full justify-between">
          <div
            class="flex items-center gap-x-2 w-3/4"
            @click="
              () => {
                this.$store.dispatch('setRegisterShop', shops);
                this.$router.push({
                  name: 'ShopPage',
                  params: { id: shops.id },
                });
              }
            "
          >
            <img :src="shops.shopLogoImagePath" class="w-8 h-8 rounded-full" />
            <p class="text-xs font-semibold">{{ shops.shopName }}</p>
          </div>
          <div class="w-1/4 flex justify-end mr-4">
            <ChevronRightIcon />
          </div>
        </div>
      </div>
      <FormWrapper variant="details">
        <template #body>
          <p
            class="
              text-sm
              leading-[17px]
              font-semibold
              text-black
              flex
              items-center
              gap-x-2
            "
          >
            <TruckIcon /> Shipping
          </p>
          <div v-for="shipment in product.shipments" :key="shipment">
            <p class="text-xs leading-[14px] text-black">
              {{ shipment }}
            </p>
            <p class="text-xs leading-[14px] text-black">Cost: ฿35</p>
          </div>
        </template>
      </FormWrapper>
      <FormWrapper variant="details">
        <template #body>
          <p class="text-sm leading-[17px] font-semibold text-black">
            Product Details
          </p>
          <hr class="border-primary-100 border-[1px]" />
          <div class="flex gap-x-4">
            <div
              class="
                w-[94px]
                text-xs
                leading-[14px]
                text-neutral-700 text-start
              "
            >
              Category
            </div>
            <div
              class="
                w-fit
                text-xs
                leading-[14px]
                text-black text-start
                break-all
              "
            >
              {{ product.category }}
            </div>
          </div>
          <div
            class="flex gap-x-4"
            v-for="attribute in product.productAttribute"
            :key="attribute"
          >
            <div
              class="
                w-[94px]
                text-xs
                leading-[14px]
                text-neutral-700 text-start
              "
            >
              {{ attribute.attribute.attribute }}
            </div>
            <div
              class="
                w-fit
                text-xs
                leading-[14px]
                text-black text-start
                break-all
              "
            >
              {{ attribute.text }}
            </div>
          </div>
          <hr class="border-primary-100 border-[1px]" />
          <p class="text-xs leading-[14px] text-black">{{ product.details }}</p>
        </template>
      </FormWrapper>
    </div>
    <div class="flex gap-x-1 fixed bottom-0 left-0 right-0 bg-white">
      <PrimaryButton
        v-if="
          product.saleTypeName == 'Auction and Sale' ||
          product.saleTypeName == 'Sale only'
        "
        class="w-1/4 rounded-lg bg-primary-500"
        :click="openAddToCart"
      >
        <div class="grid justify-center w-full">
          <div class="flex justify-center"><AddToCartIcon class="" /></div>
          <div class="text-[10px]">Add to Cart</div>
        </div>
      </PrimaryButton>
      <div class="flex gap-x-1 w-full">
        <PrimaryButton
          v-if="
            product.saleTypeName == 'Auction and Sale' ||
            product.saleTypeName == 'Auction only'
          "
          class="
            w-full
            rounded-lg
            bg-error-500
            active:bg-error-700
            focus:bg-error-600
            hover:bg-error-600
          "
          :click="openPlaceBid"
          >PLACE BID</PrimaryButton
        >
        <PrimaryButton
          v-if="
            product.saleTypeName == 'Auction and Sale' ||
            product.saleTypeName == 'Sale only'
          "
          class="
            w-full
            rounded-lg
            bg-warning-500
            active:bg-warning-700
            focus:bg-warning-600
          "
          :click="openBuyNow"
          >BUY NOW</PrimaryButton
        >
      </div>
    </div>
  </div>
  <div>
    <SwipeableBottomSheet
      ref="BuyNow"
      v-if="
        product.saleTypeName == 'Sale only' ||
        product.saleTypeName == 'Auction and Sale'
      "
    >
      <div
        class="grid gap-4 px-4"
        v-if="product.saleTypeName == 'Auction and Sale'"
      >
        <div class="text-center">
          <div class="flex justify-center">
            <img :src="slide[0]" class="w-[128px] h-[128px]" />
          </div>
        </div>
        <div class="flex justify-between">
          <div class="flex">
            <div><!-- Shopping Bag Icon --></div>
            <div>
              <div class="text-[14px]">Quantity</div>
              <div class="text-neutral-900 text-[10px]">
                {{ product.storage }} items available
              </div>
            </div>
          </div>

          <div class="flex h-2 w-1/5">
            <div
              class="w-2/5"
              @click="() => (amount > 1 ? decreaseAmount() : null)"
            >
              <MinusIcon :class="[amount > 1 ? '' : 'opacity-10']" />
            </div>
            <p class="text-sm w-full flex justify-center">
              {{ amount }}
            </p>
            <div
              class="w-2/5"
              @click="
                () => (product.storage > amount ? increaseAmount() : null)
              "
            >
              <PlusIcon
                :class="[product.storage > this.amount ? '' : 'opacity-10']"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <div>Price</div>
          <div class="font-semibold text-[14px] text-primary-900">
            ฿{{ Number(product.salePrice * amount).toLocaleString() }}
          </div>
        </div>
        <div
          class="text-error-500 text-[12px]"
          v-if="product.storage == this.amount"
        >
          You have reached the maximum quantity available for this item
        </div>
        <PrimaryButton
          class="
            w-full
            rounded-full
            bg-warning-500
            active:bg-warning-700
            focus:bg-warning-600
          "
          :click="() => buyNowForSaleAndAuction()"
          >BUY NOW</PrimaryButton
        >
      </div>
      <Form
        @submit="buyNowForSaleOnly"
        v-if="product.saleTypeName == 'Sale only'"
      >
        <div class="grid gap-4 px-4">
          <div class="text-center">
            <p class="text-[16px] font-semibold mb-4">Variations</p>
            <div class="flex justify-center">
              <img :src="slide[0]" class="w-[128px] h-[128px]" />
            </div>
          </div>
          <div>
            <div
              v-for="(variation, index) in product.variations"
              :key="variation"
            >
              <div class="text-[14px]">{{ variation.variationName }}</div>
              <div class="flex gap-x-4">
                <div v-for="option in variation.options" :key="option">
                  <Field :name="'options' + index" v-slot="{ field }">
                    <input
                      v-bind="field"
                      class="sr-only peer"
                      type="radio"
                      :value="option.id"
                      :id="option.optionName"
                    />
                    <label
                      class="
                        flex
                        rounded-3xl
                        border-2
                        px-4
                        py-2
                        bg-white
                        border border-gray-300
                        cursor-pointer
                        focus:outline-none
                        hover:bg-gray-50
                        peer-checked:ring-primary-500
                        peer-checked:ring-2
                        peer-checked:border-transparent
                      "
                      :for="option.optionName"
                      >{{ option.optionName }}</label
                    >
                  </Field>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div><!-- Shopping Bag Icon --></div>
              <div>
                <div class="text-[14px]">Quantity</div>
                <div class="text-neutral-900 text-[10px]">
                  {{ product.storage }} items available
                </div>
              </div>
            </div>

            <div class="flex h-2 w-1/5">
              <div
                class="w-2/5"
                @click="() => (amount > 1 ? decreaseAmount() : null)"
              >
                <MinusIcon :class="[amount > 1 ? '' : 'opacity-10']" />
              </div>
              <p class="text-sm w-full flex justify-center">
                {{ amount }}
              </p>
              <div
                class="w-2/5"
                @click="
                  () => (product.storage > amount ? increaseAmount() : null)
                "
              >
                <PlusIcon
                  :class="[product.storage > this.amount ? '' : 'opacity-10']"
                />
              </div>
            </div>
          </div>
          <div class="flex justify-between">
            <div>Price</div>
            <div class="font-semibold text-[14px] text-primary-900">
              ฿{{ Number(product.salePrice * amount).toLocaleString() }}
            </div>
          </div>
          <div
            class="text-error-500 text-[12px]"
            v-if="product.storage == this.amount"
          >
            You have reached the maximum quantity available for this item
          </div>
          <PrimaryButton
            class="
              w-full
              rounded-full
              bg-warning-500
              active:bg-warning-700
              focus:bg-warning-600
            "
            type="submit"
            >BUY NOW</PrimaryButton
          >
        </div>
      </Form>
    </SwipeableBottomSheet>
    <SwipeableBottomSheet
      ref="AddToCart"
      v-if="
        product.saleTypeName == 'Sale only' ||
        product.saleTypeName == 'Auction and Sale'
      "
    >
      <div
        class="grid gap-4 px-4"
        v-if="product.saleTypeName == 'Auction and Sale'"
      >
        <div class="text-center">
          <div class="flex justify-center">
            <img :src="slide[0]" class="w-[128px] h-[128px]" />
          </div>
        </div>

        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <div><ShoppingBagIcon /></div>
            <div>
              <div class="text-[14px]">Quantity</div>
              <div class="text-neutral-900 text-[10px]">
                {{ product.storage }} items available
              </div>
            </div>
          </div>

          <div class="flex h-2 w-1/5">
            <div
              class="w-2/5"
              @click="() => (amount > 1 ? decreaseAmount() : null)"
            >
              <MinusIcon :class="[amount > 1 ? '' : 'opacity-10']" />
            </div>
            <p class="text-sm w-full flex justify-center">
              {{ amount }}
            </p>
            <div
              class="w-2/5"
              @click="
                () => (product.storage > amount ? increaseAmount() : null)
              "
            >
              <PlusIcon
                :class="[product.storage > this.amount ? '' : 'opacity-10']"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <div>Price</div>
          <div class="font-semibold text-[14px] text-primary-900">
            ฿{{ Number(product.salePrice * amount).toLocaleString() }}
          </div>
        </div>
        <div
          class="text-error-500 text-[12px]"
          v-if="product.storage == this.amount"
        >
          You have reached the maximum quantity available for this item
        </div>
        <PrimaryButton
          class="
            w-full
            rounded-full
            bg-primary-500
            active:bg-primary-700
            focus:bg-primary-600
          "
          :click="() => addToCartForSaleAndAuction()"
          >ADD TO CART
        </PrimaryButton>
      </div>
      <Form
        @submit="addToCartForSaleOnly"
        v-if="product.saleTypeName == 'Sale only'"
      >
        <div class="grid gap-4 px-4">
          <div class="text-center">
            <p class="text-[16px] font-semibold mb-4">Variations</p>
            <div class="flex justify-center">
              <img :src="slide[0]" class="w-[128px] h-[128px]" />
            </div>
          </div>
          <div>
            <div
              v-for="(variation, index) in product.variations"
              :key="variation"
            >
              <div class="text-[14px]">{{ variation.variationName }}</div>
              <div class="flex gap-x-4">
                <div v-for="option in variation.options" :key="option">
                  <Field :name="'optionsAddToCart' + index" v-slot="{ field }">
                    <input
                      v-bind="field"
                      class="sr-only peer"
                      type="radio"
                      :value="option.id"
                      :id="option.optionName + '1'"
                    />
                    <label
                      class="
                        flex
                        rounded-3xl
                        border-2
                        px-4
                        py-2
                        bg-white
                        border border-gray-300
                        cursor-pointer
                        focus:outline-none
                        hover:bg-gray-50
                        peer-checked:ring-primary-500
                        peer-checked:ring-2
                        peer-checked:border-transparent
                      "
                      :for="option.optionName + '1'"
                      >{{ option.optionName }}
                    </label>
                  </Field>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <div><ShoppingBagIcon /></div>
              <div>
                <div class="text-[14px]">Quantity</div>
                <div class="text-neutral-900 text-[10px]">
                  {{ product.storage }} items available
                </div>
              </div>
            </div>

            <div class="flex h-2 w-1/5">
              <div
                class="w-2/5"
                @click="() => (amount > 1 ? decreaseAmount() : null)"
              >
                <MinusIcon :class="[amount > 1 ? '' : 'opacity-10']" />
              </div>
              <p class="text-sm w-full flex justify-center">
                {{ amount }}
              </p>
              <div
                class="w-2/5"
                @click="
                  () => (product.storage > amount ? increaseAmount() : null)
                "
              >
                <PlusIcon
                  :class="[product.storage > this.amount ? '' : 'opacity-10']"
                />
              </div>
            </div>
          </div>
          <div class="flex justify-between">
            <div>Price</div>
            <div class="font-semibold text-[14px] text-primary-900">
              ฿{{ Number(product.salePrice * amount).toLocaleString() }}
            </div>
          </div>
          <div
            class="text-error-500 text-[12px]"
            v-if="product.storage == this.amount"
          >
            You have reached the maximum quantity available for this item
          </div>
          <PrimaryButton
            class="
              w-full
              rounded-full
              bg-primary-500
              active:bg-primary-700
              focus:bg-primary-600
            "
            type="submit"
            >ADD TO CART
          </PrimaryButton>
        </div>
      </Form>
    </SwipeableBottomSheet>
    <SwipeableBottomSheet
      ref="PlaceBid"
      v-if="
        product.saleTypeName == 'Auction only' ||
        product.saleTypeName == 'Auction and Sale'
      "
    >
      <div class="grid gap-4 px-4">
        <div class="text-center">
          <div class="flex justify-center">
            <img :src="slide[0]" class="w-[128px] h-[128px]" />
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div>Current Bid</div>
          <div
            class="font-semibold text-[14px] text-primary-900"
            v-if="auctionWinner"
          >
            ฿{{ Number(auctionWinner.bidAmount).toLocaleString() }}
          </div>
          <p
            class="text-sm leading-[17px] text-primary-900 font-semibold"
            v-else
          >
            ฿{{ Number(product.auction.startingBid).toLocaleString() }}
          </p>
        </div>
        <div>Place Bid</div>
        <Form @submit="placeBid">
          <div class="flex">
            <span class="mt-2">฿</span>
            <TextField
              type="text"
              name="bid"
              placeholder="Place Bid"
              regex="numberOnly"
              class="ml-2"
            />
          </div>
          <PrimaryButton
            type="submit"
            class="
              w-full
              rounded-full
              bg-error-500
              active:bg-error-700
              focus:bg-error-600
              hover:bg-error-600
            "
            >PLACE BID
          </PrimaryButton>
        </Form>
      </div>
    </SwipeableBottomSheet>
  </div>
</template>

<script>
import liff from "@line/liff";
import slide from "@wyhaya/vue-slide";
import { Form, Field } from "vee-validate";
import ProductService from "@/services/product/product-service";
import FormWrapper from "@/components/form/form-wrapper.vue";
import TextLabel from "@/components/field/text-label.vue";
import PrimaryButton from "@/components/button/primary-button.vue";
import ShoppingBagIcon from "@/assets/icons/shopping-bag-black.svg?inline";
import TruckIcon from "@/assets/icons/truck-outlined-black.svg?inline";
import BackIcon from "@/assets/icons/chevron-solid-left.svg?inline";
import CartIcon from "@/assets/icons/shopping-cart.svg?inline";
import AddToCartIcon from "@/assets/icons/cart-outlined.svg?inline";
import ChevronRightIcon from "@/assets/icons/chevron-right.svg?inline";
import MinusIcon from "@/assets/icons/minus-circle.svg?inline";
import PlusIcon from "@/assets/icons/plus-circle.svg?inline";
import TextButton from "@/components/button/text-button.vue";
import { showAlert } from "@/hooks/sweet-alert/sweet-alert.js";
import shopService from "@/services/shop/shop-service";
import { ref } from "vue";
import { SwipeableBottomSheet } from "vue-swipeable-bottom-sheet";
import tradingService from "@/services/trading/trading-service";
import TextField from "@/components/field/text-field/text-field.vue";
import auctionService from "@/services/trading/auction-service";
export default {
  name: "ProductDetailsPageForBuyer",
  components: {
    slide,
    Form,
    FormWrapper,
    TextLabel,
    PrimaryButton,
    ShoppingBagIcon,
    TruckIcon,
    BackIcon,
    CartIcon,
    AddToCartIcon,
    TextButton,
    SwipeableBottomSheet,
    ChevronRightIcon,
    MinusIcon,
    PlusIcon,
    TextField,
    Field,
  },
  data() {
    return {
      slide: [],
      product: null,
      shops: "",
      amount: 1,
      timerCount: 0,
      timeUnit: 0,
      auctionWinner: "",
      auctionWinnerName: "",
      inCartItemCount: 0,
    };
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.toHHMMSS(this.timerCount--);
            auctionService
              .getAuctionWinner(this.product.auction.id)
              .then((res) => {
                if (res.data.data.getAuctionWinner != null) {
                  this.auctionWinner = res.data.data.getAuctionWinner;
                  if (res.data.data.getAuctionWinner.user.lastname.length > 3) {
                    this.auctionWinnerName =
                      res.data.data.getAuctionWinner.user.firstname +
                      " " +
                      res.data.data.getAuctionWinner.user.lastname.substring(
                        0,
                        3
                      ) +
                      "...";
                  } else {
                    this.auctionWinnerName =
                      res.data.data.getAuctionWinner.user.firstname +
                      " " +
                      res.data.data.getAuctionWinner.user.lastname;
                  }
                }
              });
          }, 1000);
        } else {
          try {
            auctionService
              .getAuctionWinner(this.product.auction.id)
              .then((res) => {
                if (res.data.data.getAuctionWinner != null) {
                  let object = {
                    users: res.data.data.getAuctionWinner.user.id,
                    products: this.$route.params.id,
                    shop: this.shops.id,
                    quantity: 1,
                    optionsList: [],
                  };
                  tradingService.addToCart(object);
                  showAlert(
                    "error",
                    "The time is up",
                    "This auction is already end"
                  ).then((response) => {
                    if (response.isConfirmed) {
                      this.$router.go();
                    }
                  });
                }
              });
          } catch (error) {}
        }
      },
      immediate: true,
    },
  },
  created() {
    ProductService.getProduct(this.$route.params.id).then((res) => {
      this.product = res.data.data.getProduct;
      try {
        if (
          res.data.data.getProduct.auction.timeUnitForAuctionPeriod == "minute"
        ) {
          this.timeUnit = 60;
        } else if (
          res.data.data.getProduct.auction.timeUnitForAuctionPeriod == "second"
        ) {
          this.timeUnit = 1;
        } else if (
          res.data.data.getProduct.auction.timeUnitForAuctionPeriod == "hour"
        ) {
          this.timeUnit = 3600;
        }
        this.timerCount =
          parseInt(res.data.data.getProduct.auction.auctionPeriod) *
          this.timeUnit;
      } catch (error) {
        this.timerCount = 0;
      }

      if (res.data.data.getProduct.storage <= 0) {
        showAlert(
          "error",
          "Sold out",
          "This product is already sold out for now"
        ).then((response) => {
          if (response.isConfirmed) {
            this.$router.go(-1);
          }
        });
      }
      let content = res.data.data.getProduct.imagesPath;
      for (let index = 0; index < content.length; index++) {
        this.slide.push(content[index]);
      }
      shopService
        .getRegisterShop(res.data.data.getProduct.shop.id)
        .then((response) => {
          this.shops = response.data.data.getRegisterShop;
        });
      try {
        auctionService
          .getAuctionWinner(res.data.data.getProduct.auction.id)
          .then((res) => {
            if (res.data.data.getAuctionWinner != null) {
              this.auctionWinner = res.data.data.getAuctionWinner;
              if (res.data.data.getAuctionWinner.user.lastname.length > 3) {
                this.auctionWinnerName =
                  res.data.data.getAuctionWinner.user.firstname +
                  " " +
                  res.data.data.getAuctionWinner.user.lastname.substring(0, 3) +
                  "...";
              } else {
                this.auctionWinnerName =
                  res.data.data.getAuctionWinner.user.firstname +
                  " " +
                  res.data.data.getAuctionWinner.user.lastname;
              }
            }
          });
      } catch (error) {}
      tradingService
        .getAddToCartProduct(this.$store.getters.getUser.id)
        .then((response) => {
          this.inCartItemCount = response.data.data.getAddToCartProduct.length;
        });
    });
  },
  methods: {
    toHHMMSS(secs) {
      var sec_num = parseInt(secs, 10);
      var hours = Math.floor(sec_num / 3600);
      var minutes = Math.floor(sec_num / 60) % 60;
      var seconds = sec_num % 60;

      return [hours, minutes, seconds]
        .map((v) => (v < 10 ? "0" + v : v))
        .filter((v, i) => v !== "00" || i > 0)
        .join(":");
    },
    deleteProduct() {
      showAlert(
        "delete",
        "Confirmation",
        "Are you sure to delete this product?"
      ).then((res) => {
        if (res.isConfirmed) {
          let productStatus = {
            id: this.$route.params.id,
            productStatus: "DELETED",
          };
          ProductService.updateProductStatus(productStatus).then(() => {
            this.$router.push({ name: "MyShopPage" });
          });
        }
      });
    },
    optionImage() {
      try {
        if (this.product.variations.options.image) {
          return this.product.variations.options.image;
        } else {
          return [];
        }
      } catch (error) {
        return [];
      }
    },
    openPlaceBid() {
      this.$refs.PlaceBid.setState("open");
    },
    openAddToCart() {
      this.$refs.AddToCart.setState("open");
    },
    openBuyNow() {
      this.$refs.BuyNow.setState("open");
    },
    increaseAmount() {
      this.amount = this.amount + 1;
    },
    decreaseAmount() {
      this.amount = this.amount - 1;
    },
    addToCartForSaleOnly(options) {
      let optionArr = [];
      if (options.optionsAddToCart0) {
        optionArr.push(options.optionsAddToCart0);
      }
      if (options.optionsAddToCart1) {
        optionArr.push(options.optionsAddToCart1);
      }
      let object = {
        users: this.$store.getters.getUser.id,
        products: this.$route.params.id,
        shop: this.shops.id,
        quantity: this.amount,
        optionsList: optionArr,
      };
      tradingService.addToCart(object).then(() => {
        showAlert(
          "Success",
          "Successfully",
          "You have been adding items successfully"
        ).then((response) => {
          tradingService
            .getAddToCartProduct(this.$store.getters.getUser.id)
            .then((response) => {
              this.inCartItemCount =
                response.data.data.getAddToCartProduct.length;
            });
          if (response.isConfirmed) {
            this.$refs.AddToCart.setState("close");
          }
        });
      });
    },
    addToCartForSaleAndAuction() {
      let object = {
        users: this.$store.getters.getUser.id,
        products: this.$route.params.id,
        shop: this.shops.id,
        quantity: this.amount,
        optionsList: [],
      };
      tradingService.addToCart(object).then(() => {
        showAlert(
          "Success",
          "Successfully",
          "You have been adding items successfully"
        ).then((response) => {
          tradingService
            .getAddToCartProduct(this.$store.getters.getUser.id)
            .then((response) => {
              this.inCartItemCount =
                response.data.data.getAddToCartProduct.length;
            });
          if (response.isConfirmed) {
            this.$refs.AddToCart.setState("close");
          }
        });
      });
    },
    buyNowForSaleOnly(options) {
      let optionArr = [];
      if (options.options0) {
        optionArr.push(options.options0);
      }
      if (options.options1) {
        optionArr.push(options.options1);
      }
      let object = {
        users: this.$store.getters.getUser.id,
        products: this.$route.params.id,
        shop: this.shops.id,
        quantity: this.amount,
        optionsList: optionArr,
      };
      tradingService.buyProduct(object).then(() => {
        showAlert(
          "Success",
          "Successfully",
          "You have been bought this items successfully"
        ).then((response) => {
          if (response.isConfirmed) {
            this.$refs.BuyNow.setState("close");
          }
        });
      });
    },
    buyNowForSaleAndAuction() {
      let object = {
        users: this.$store.getters.getUser.id,
        products: this.$route.params.id,
        shop: this.shops.id,
        quantity: this.amount,
        optionsList: [],
      };
      tradingService.buyProduct(object).then(() => {
        showAlert(
          "Success",
          "Successfully",
          "You have been bought this items successfully"
        ).then((response) => {
          if (response.isConfirmed) {
            this.$refs.BuyNow.setState("close");
          }
        });
      });
    },
    placeBid(bid) {
      if (bid.bid == undefined) {
        showAlert("error", "Error", "Please enter bid price");
      } else if (bid.bid < this.auctionWinner.bidAmount) {
        if (bid.bid == this.product.auction.startingBid) {
          showAlert(
            "error",
            "Error",
            "Bid has to be greater than starting bid " +
              this.product.auction.startingBid +
              " THB."
          );
        } else {
          showAlert(
            "error",
            "Error",
            "Bid has to be greater than max bid " +
              this.auctionWinner.bidAmount +
              " THB."
          );
        }
      } else {
        let object = {
          bidAmount: bid.bid,
          userId: this.$store.getters.getUser.id,
          productId: this.$route.params.id,
          shopId: this.shops.id,
        };
        showAlert(
          "confirm",
          "Confirmation",
          "Are you sure to bid for this price?"
        ).then((response) => {
          if (response.isConfirmed) {
            auctionService.addBid(object).then(() => {
              showAlert(
                "Success",
                "Successfully",
                "You have been placing bids successfully"
              ).then((response) => {
                if (response.isConfirmed) {
                  this.$router.go();
                }
                setTimeout(() => {
                  this.$router.go();
                }, 3000);
              });
            });
          }
        });
      }
    },
  },
  mounted() {
    if (
      this.product.saleTypeName == "Auction and Sale" ||
      this.product.saleTypeName == "Auction only"
    ) {
      this.$refs.PlaceBid.setState("close");
    }
    if (
      this.product.saleTypeName == "Auction and Sale" ||
      this.product.saleTypeName == "Sale only"
    ) {
      this.$refs.AddToCart.setState("close");
      this.$refs.BuyNow.setState("close");
    }
  },
  /*   mounted() {
    liff
      .init({
        liffId: process.env.VUE_APP_LINELIFF_BUEYR_PRODUCT_DETAILS,
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
  }, */
};
</script>
