<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container flex flex-row bg-black p-10">
          <div class="basis-1/3 flex flex-col justify-between">
            <h1 class="text-4xl text-white">Lorem</h1>
            <img
              class="w-[100px] h-[120px] rounded-lg"
              :src="`src${selectedbook.details.book_image}`"
              alt=""
            />
            <div
              class="w-1/3 h-16 bg-gray-600 rounded-lg flex flex-row justify-center items-center"
            >
              <h1 class="text-white text-lg font-semibold">
                Add to Favorites +
              </h1>
            </div>
          </div>
          <div class="basis-1/3 flex flex-col gap-6">
            <div>
              <h1 class="text-white text-lg">Lorem ipsum</h1>
              <h3 class="text-white text-sm">Lorem ipsum</h3>
            </div>

            <p class="text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div class="basis-1/3 flex flex-row justify-end">
            <div
              @click="show = false"
              class="rounded-full w-10 h-10 closeImg bg-center bg-no-repeat bg-black cursor-pointer"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    show: Boolean,
    selectedbook: Object,
  },
  data() {
    return {};
  },
};
</script>

<style>
.closeImg {
  background-image: url("../assets/close.png");
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: bottom;
}

.modal-container {
  width: 100%;
  height: 40%;
  padding: 20px 30px;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
