<template>
  <div
    class="flex flex-col justify-center bg-left bg-no-repeat  background-services sm:bg-none"
  >
    <div class="w-11/12 mx-auto mt-48 text-center">
      <h2 class="mb-16 text-4xl font-bold">Our services</h2>

      <p class="w-9/12 mx-auto text-lg font-light leading-8 text-color-gray">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>

      <div class="justify-around mx-auto mt-20 md:flex">
        <div
          class="pt-16 pl-10 mb-10 text-left bg-white border  shadow-card rounded-2xl card"
        >
          <img class="w-auto h-auto mb-5" src="@/assets/svg/lupa.svg" alt="" />
          <h3 class="mb-5 text-2xl font-bold leading-10">Search Doctor</h3>
          <p class="text-base font-light leading-7 card-p text-color-gray">
            Choose your doctor from thousands of specialist, general, and
            trusted hospitals
          </p>
        </div>
        <div
          class="pt-16 pl-10 mb-10 text-left bg-white border  shadow-card rounded-2xl card"
        >
          <img
            class="w-auto h-auto mb-5"
            src="@/assets/svg/medicina.svg"
            alt=""
          />
          <h3 class="mb-5 text-2xl font-bold leading-10">Online Pharmacy</h3>
          <p class="text-base font-light leading-7 card-p text-color-gray">
            Buy your medicines with our mobile application with a simple
            delivery system
          </p>
        </div>
        <div
          class="pt-16 pl-10 mb-10 text-left bg-white border  shadow-card rounded-2xl card"
        >
          <img
            class="w-auto h-auto mb-5"
            src="@/assets/svg/resultados.svg"
            alt=""
          />
          <h3 class="mb-5 text-2xl font-bold leading-10">Consultation</h3>
          <p class="text-base font-light leading-7 card-p text-color-gray">
            Free consultation with our trusted doctors and get the best
            recomendations
          </p>
        </div>
      </div>

      <div class="justify-around mx-auto mt-20 mb-16 md:flex">
        <div
          class="pt-16 pl-10 mb-10 text-left bg-white border  rounded-2xl shadow-card card"
        >
          <img
            class="w-auto h-auto mb-5"
            src="@/assets/svg/detail.svg"
            alt=""
          />
          <h3 class="mb-5 text-2xl font-bold leading-10">Details info</h3>
          <p class="text-base font-light leading-7 card-p text-color-gray">
            Free consultation with our trusted doctors and get the best
            recomendations
          </p>
        </div>

        <div
          class="pt-16 pl-10 mb-10 text-left bg-white border  rounded-2xl shadow-card card"
        >
          <img
            class="w-auto h-auto mb-5"
            src="@/assets/svg/botiquin.svg"
            alt=""
          />
          <h3 class="mb-5 text-2xl font-bold leading-10">Emergency care</h3>
          <p class="text-base font-light leading-7 card-p text-color-gray">
            You can get 24/7 urgent care for yourself or your children and your
            lovely family
          </p>
        </div>

        <div
          class="pt-16 pl-10 mb-10 text-left bg-white border  rounded-2xl shadow-card card"
        >
          <img class="w-auto h-auto mb-5" src="@/assets/svg/track.svg" alt="" />
          <h3 class="mb-5 text-2xl font-bold leading-10">Tracking</h3>
          <p class="text-base font-light leading-7 card-p text-color-gray">
            Track and save your medical history and health data
          </p>
        </div>
      </div>
    </div>
    <a class="mx-auto" href="#">
      <span class="px-12 py-3 text-blue-500 border rounded-full">
        Learn more
      </span>
    </a>
  </div>
</template>
<script>
export default {
  name: "PxServices",
};
</script>
