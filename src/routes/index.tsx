export default function Home() {
  return (
    <main class="max-w-7xl w-full mx-auto">
      <div class="md:p-18 p-9 bg-[url(/EDGR_WebAssets_Pillar-TEMP.jpg)] h-[720px] bg-cover bg-center">
        <div class="w-full flex justify-between md:justify-start gap-24 items-center">
          <a href="./">
            <img width="96" src="./edgar.png" />
          </a>
          <div class="flex gap-6">
            <a
              href="./#services"
              class="font-[georgia] text-sm border-b border-b-transparent hover:border-b-white"
            >
              Services
            </a>
            {/*<a
              href="./work"
              class="font-[georgia] text-sm border-b border-b-transparent hover:border-b-white"
            >
              Our Work
            </a>*/}
            <a
              href="./#contact"
              class="font-[georgia] text-sm border-b border-b-transparent hover:border-b-white"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div class="mx-auto text-center w-fit h-full flex items-center">
          <div class="grid gap-6">
            <h1 class="text-5xl font-[georgia]">
              Edgar is a grassroots creative studio.
            </h1>
            <p class="text-xl font-sans">
              Passion-fueled, collectively-run, we’re a tight team with{" "}
              <strong>bold ideas.</strong>
            </p>
          </div>
        </div>
      </div>
      <div class="w-full justify-center grid border-t border-b border-neutral-800 bg-gradient-to-tl from-black to-neutral-900">
        <div class="md:flex p-9 pt-18 grid gap-12 w-full max-w-5xl mx-auto justify-center">
          <div class="w-full flex justify-center">
            <img class="w-72 object-contain" src="./crow.png" />
          </div>
          <div class="items-center md:flex">
            <div class="grid gap-12">
              <h2 class="text-3xl font-[georgia]">
                We have the expertise without the overhead.
              </h2>
              <p class="font-sans border-dotted border-l-3 border-neutral-800 pl-6">
                <strong>
                  We’re obsessed with our craft, and we want to extend that to
                  you.
                </strong>{" "}
                Whether it’s a fresh brand identity, engaging social media
                content, or captivating video, our passions are yours to tap in
                to.
              </p>
            </div>
          </div>
        </div>
        {/*<div class="w-full flex justify-center md:pl-4 lg:pl-6 md:pt-6">
          <button class="cursor-pointer border border-white bg-transparent text-white w-fit px-8 py-4 hover:bg-white hover:text-black font-bold">
            See Our Work
          </button>
        </div>*/}
        <div class="md:flex p-9 md:p-18 md:pt-0 grid gap-12 w-full max-w-5xl mx-auto justify-center">
          <div class="items-center md:flex">
            <div class="grid gap-12">
              <h2 class="text-3xl font-[georgia]">
                Our workflows are constantly evolving.
              </h2>
              <p class="font-sans border-dotted border-l-3 border-neutral-800 pl-6">
                The AI-driven marketing landscape is rapidly growing.{" "}
                <strong>So are we.</strong> From rapid prototyping to automated
                design workflows, we use the latest creative tools to deliver
                with future-proofing in mind.
              </p>
            </div>
          </div>
          <div class="w-full flex justify-center">
            <img class="w-96 object-contain" src="./nest.png" />
          </div>
        </div>
      </div>
      <div
        id="services"
        class="p-9 md:p-18 py-24 mx-auto grid gap-12 justify-center"
      >
        <h2 class="text-3xl font-[georgia] text-center">
          Our services include:
        </h2>
        <div class="grid md:grid-cols-2 gap-24 justify-center">
          <div class="grid gap-4 justify-center">
            <div class="h-fit w-full flex justify-center">
              <img class="object-contain w-18" src="./monitor.png" />
            </div>
            <h3 class="text-xl border-b border-dotted border-neutral-800 p-4 font-bold font-sans text-center uppercase tracking-widest">
              Creative Development
            </h3>
            <ul class="row-span-5 list-disc list-inside pl-6">
              <li>Brand Identity & Creative Assets</li>
              <li>Web Design & Development</li>
              <li>Digital Ad Campaigns</li>
              <li>Motion Graphics</li>
            </ul>
          </div>
          <div class="grid gap-4 justify-center">
            <div class="h-fit w-full flex justify-center">
              <img class="object-contain w-18" src="./tv.png" />
            </div>
            <h3 class="text-xl border-b border-dotted border-neutral-800 p-4 font-bold font-sans text-center uppercase tracking-widest">
              Photography/Video
            </h3>
            <ul class="row-span-5 list-disc list-inside pl-6">
              <li>Long-format Video</li>
              <li>Lifestyle & Product Photoshoots</li>
              <li>Editing & Retouching</li>
              <li>Social Media Content Creation</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id="contact"
        class="w-full justify-center p-9 md:p-18 py-24 grid md:flex gap-6 border-t border-b border-neutral-800 bg-gradient-to-tl from-black to-neutral-900"
      >
        <div class="grid w-full">
          <div class="pb-12 grid gap-2">
            <h2 class="text-3xl font-[georgia]">Reach out to us.</h2>
            <p>
              We'd love to work on your next project. Please fill out the form
              below to get in contact.
            </p>
            <p class="text-sm text-neutral-500">
              <em>We don't collect any data.</em>
            </p>
          </div>
          <form action="https://api.web3forms.com/submit" method="post">
            <div class="grid gap-6">
              <input
                type="hidden"
                name="access_key"
                value="4ead391c-7d7a-4e29-9e39-9a81fd36f09e"
              />
              <div class="grid gap-2 w-full max-w-sm">
                <label>Email</label>
                <input
                  class="bg-white px-2 py-1 text-black"
                  placeholder="Enter your email"
                  type="text"
                  name="email"
                  required
                />
              </div>
              <div class="grid gap-2 w-full max-w-xl">
                <label>Message</label>
                <textarea
                  class="bg-white h-[72px] text-black px-2 py-1"
                  name="message"
                  placeholder="What would you like to ask?"
                  required
                />
              </div>
              <input
                type="hidden"
                name="redirect"
                value="https://web3forms.com/success"
              />
              <button
                type="submit"
                class="cursor-pointer w-fit px-4 py-2 border border-white hover:bg-white hover:text-black"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div class="w-full flex justify-center md:max-w-sm">
          <img src="./scroll.png" class="object-contain w-36" />
        </div>
      </div>
    </main>
  );
}
