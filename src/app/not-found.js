import BackToHome from "@/components/button/BackToHome";

export default function Notfound() {
  return (
    <div className="flex justify-center items-center h-screen">
      <section class="">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
              404
            </h1>
            <p class="mb-4 text-3xl tracking-tight font-bold md:text-4xl ">
              Something&apos;s missing.
            </p>
            <p class="mb-4 text-lg font-light">
              Sorry, we can&apos;t find that page. You&apos;ll find lots to
              explore on the home page.
            </p>
            <BackToHome />
          </div>
        </div>
      </section>
    </div>
  );
}
