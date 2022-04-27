<template>
  <div class="flex flex-col p-6 gap-6">
    <navBar></navBar>
    <div class="w-[40%] mt-10 ml-10">
      <h1 class="text-8xl text-white font-thin font-mono">
        Bookshelfs & Book Racks
      </h1>
      <p class="text-white">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
    </div>

    <div>
      <slider @bookDetails="bookInfo"></slider>
    </div>

    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <bookdetails
        :show="showModal"
        :selectedbook="selectedbookInfo"
        @close="showModal = false"
      >
        <template #header>
          <h3>custom header</h3>
        </template>
      </bookdetails>
    </Teleport>
  </div>
</template>

<script>
import navBar from "./components/Navbar.vue";
import slider from "./components/slider.vue";
import bookdetails from "./components/bookDetails.vue";
export default {
  components: {
    slider,
    navBar,
    bookdetails,
  },
  data() {
    return {
      selectedbookInfo: {},
      showModal: false,
    };
  },
  methods: {
    bookInfo(data) {
      this.selectedbookInfo = data;
      this.showModal = true;
    },
  },
};
</script>

<style></style>
