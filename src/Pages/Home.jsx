const Home = () => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
          <p className="text-[24px] font-bold text-[#0D0D0E] mb-8">
            Lets get Started
          </p>
          <div
            className="h-[500px] mb-[28px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 97.77%)",
            }}></div>
          <div className="pub_btn">
            <button
              className="py-4 w-full inline-block bg-[#1765FC] rounded-[60px] text-center text-base font-medium text-white border hover:bg-white hover:border-[#1765FC] hover:text-[#1765FC]
         transition-all duration-300">
              Lets get Started
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="bg-white w-[100%] h-[300px] md:h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
