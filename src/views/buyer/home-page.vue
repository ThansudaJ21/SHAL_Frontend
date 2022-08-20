<template>
  <MobileLayout>
    <!--     <p class="text-[14px] leading-[17px] text-black uppercase">CATEGORY</p>
    <Category /> -->
  </MobileLayout>
</template>

<script>
import liff from "@line/liff";
import MobileLayout from "@/components/layout/mobile-app-layout.vue";
import Category from "@/components/category/category.vue";

export default {
  name: "HomePage",
  components: {
    MobileLayout,
    Category,
  },
  data() {
    return {
      userId: "",
      picture: "",
      name: "",
    };
  },
  mounted() {
    liff
      .init({
        liffId: process.env.VUE_APP_LINELIFF_BUYER_HOMEPAGE,
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