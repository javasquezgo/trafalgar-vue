<template>
  <header class="mt-10">
    <div class="w-11/12 mx-auto">
      <div class="items-center justify-between text-center md:flex">
        <figure>
          <img
            loading="lazy"
            class="mx-auto"
            src="../assets/logo.svg"
            :alt="msg"
          />
        </figure>
        <nav>
          <ul class="md:flex">
            <li class="ml-10">
              <a href="#"
                ><span class="opacity-50 text-color-t hover:opacity-100"
                  >Home</span
                ></a
              >
            </li>
            <li class="ml-10">
              <a href="#"
                ><span class="opacity-50 text-color-t hover:opacity-100"
                  >Find Doctor</span
                ></a
              >
            </li>
            <li class="ml-10">
              <a href="#"
                ><span class="opacity-50 text-color-t hover:opacity-100"
                  >Apps</span
                ></a
              >
            </li>
            <li class="ml-10">
              <a href="#"
                ><span class="opacity-50 text-color-t hover:opacity-100"
                  >Testimonial</span
                ></a
              >
            </li>
            <li class="ml-10">
              <a href="#"
                ><span class="opacity-50 text-color-t hover:opacity-100"
                  >About us</span
                ></a
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="justify-between mt-20 md:flex">
        <div class="flex flex-col md:mt-32">
          <h1 class="w-8/12 mb-6 text-5xl font-bold leading-10">
            Virtual healthcare for you
          </h1>
          <p class="w-2/4 mb-11 text-color-gray">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <a class="mb-20" href="#">
            <span class="px-10 py-3 text-white bg-blue-500 rounded-full">
              Consult today
            </span>
          </a>
        </div>
        <figure class="md:w-1/2">
          <img src="@/assets/webp/trafalgar-header.webp" :alt="msg" />
        </figure>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "PxHeader",
  data() {
    return {
      msg: "Logo de empresa",
    };
  },
};
</script>
