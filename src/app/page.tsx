export default function Home() {
  return (
    <div className="bg-background">
      <section className="min-h-screen bg-[url('/bgImg/home-bg.png')] relative">
        <div className="absolute top-0 left-0 min-h-screen lg:w-1/2 bg-[#000] bg-opacity-[0.52]">
          <div className="max-w-[560px] px-3 mt-48 ml-auto">
            <div className="text-[13px]">KHAWAJA YANNI</div>
            <h1 className="text-[68px] font-playfair">The new era of luxury</h1>
            <p className="text-[15px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>

      <div className="min-h-screen">
        <h2 className="text-[50px]">Mall Of: Endless Possibilities</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry{"'"}s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}
