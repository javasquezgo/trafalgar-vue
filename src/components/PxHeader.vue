<template>
  <header class="mt-10">
    <div>
      <div class="w-11/12 mx-auto flex justify-between items-center">
        <figure>
          <img src="@/assets/logo.svg" :alt="msg" />
        </figure>
        <nav>
          <ul class="flex">
            <li class="ml-10">
              <a href="#"
                ><span class="text-color-t opacity-50 hover:opacity-100"
                  >Home</span
                ></a
              >
            </li>
            <li class="ml-10">
              <a href="#"
                ><span class="text-color-t opacity-50 hover:opacity-100"
                  >Find Doctor</span
                ></a
              >
            </li>
            <li class="ml-10">
              <a href="#"
                ><span class="text-color-t opacity-50 hover:opacity-100"
                  >Apps</span
                ></a
              >
            </li>
            <li class="ml-10">
              <a href="#"
                ><span class="text-color-t opacity-50 hover:opacity-100"
                  >Testimonial</span
                ></a
              >
            </li>
            <li class="ml-10">
              <a href="#"
                ><span class="text-color-t opacity-50 hover:opacity-100"
                  >About us</span
                ></a
              >
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <div>
          <h1>Virtual healthcare for you</h1>
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <a href="#"><span>Consult today</span></a>
        </div>
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
