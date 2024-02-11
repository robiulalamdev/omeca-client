import { Link } from "react-router-dom";
import UploadImg1 from "../assets/img1.png";
import UploadImg2 from "../assets/img2.png";
import UploadImg3 from "../assets/img3.png";
import NewVideo from "../assets/new_video_img.png";
import OtherLibImg2 from "../assets/other-lib-2.png";
import OtherLibImg3 from "../assets/other-lib-3.png";
import OtherLibImg4 from "../assets/other-lib-4.png";
import OtherLibImg1 from "../assets/other-lib.png";

const Library = () => {
  const newVideo = [
    {
      vieoId: 1,
      videoImg: NewVideo,
      videoName: "New Video",
      campaignId: "Campaign ID",
    },
    {
      vieoId: 2,
      videoImg: NewVideo,
      videoName: "New Video",
      campaignId: "Campaign ID",
    },
    {
      vieoId: 3,
      videoImg: NewVideo,
      videoName: "New Video",
      campaignId: "Campaign ID",
    },
  ];

  const otherLibrary = [
    {
      videoId: 1,
      videoImg: OtherLibImg1,
      videoName: "New Video",
      campaignId: "Campaign ID",
    },
    {
      videoId: 1,
      videoImg: OtherLibImg2,
      videoName: "New Video",
      campaignId: "Campaign ID",
    },
    {
      videoId: 1,
      videoImg: OtherLibImg3,
      videoName: "New Video",
      campaignId: "Campaign ID",
    },
    {
      videoId: 1,
      videoImg: OtherLibImg4,
      videoName: "New Video",
      campaignId: "Campaign ID",
    },
  ];



  return (
    <section className="library px-8">
      <div className="point mb-28 bg-white">
        <div className="grid grid-cols-12 bg-white">
          <div className="col-span-12 md:col-span-8">
            <div className="library_section flex flex-col md:h-[100vh] justify-between">
              <div className="pl-14">
                <div className="section_heading mb-9 pt-20">
                  <p className="text-[34px] font-bold text-primary">Library</p>
                </div>

                <div className="mini_img py-2 px-3 rounded-xl">
                  <div className="flex flex-wrap gap-3">
                    <div className="upload_img border-[7px] border-[#D7DDE2] rounded-[10px] hover:scale-95 hover:shadow transition-all duration-300 cursor-pointer">
                      <img src={UploadImg1} alt="" />
                    </div>
                    <div className="upload_img border-[7px] border-[#D7DDE2] rounded-[10px] hover:scale-95 hover:shadow transition-all duration-300 cursor-pointer">
                      <img src={UploadImg2} alt="" />
                    </div>
                    <div className="upload_img border-[7px] border-[#D7DDE2] rounded-[10px] hover:scale-95 hover:shadow transition-all duration-300 cursor-pointer">
                      <img src={UploadImg3} alt="" />
                    </div>
                    <div className="upload_img border-[7px] border-[#D7DDE2] rounded-[10px] hover:scale-95 hover:shadow transition-all duration-300 cursor-pointer">
                      <img src={UploadImg3} alt="" />
                    </div>
                    <div className="upload_img border-[7px] border-[#D7DDE2] rounded-[10px] hover:scale-95 hover:shadow transition-all duration-300 cursor-pointer">
                      <img src={UploadImg3} alt="" />
                    </div>
                    <div className="upload_img border-[7px] border-[#D7DDE2] rounded-[10px] hover:scale-95 hover:shadow transition-all duration-300 cursor-pointer">
                      <img src={UploadImg3} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="other_lib px-5 py-4 border">
                <div className="other_lib_heading flex items-center justify-between py-4">
                  <div className="other_lib_title">
                    <h4 className="text-2xl font-medium text-[#0D0D0E]">
                      Other library
                    </h4>
                  </div>

                  <div className="save_btn">
                    <Link
                      to={"#"}
                      className="py-4 capitalize w-[184px] inline-block bg-[#1765FC] rounded-[60px] text-center text-base font-medium text-white border hover:bg-white hover:border-[#1765FC] hover:text-[#1765FC] transition-all duration-300"
                    >
                      save
                    </Link>
                  </div>
                </div>
                <div className="other_lib_cards flex flex-wrap justify-center md:justify-normal gap-4">
                  {otherLibrary.map((overLibItem, index) => (
                    <>
                      <div
                        className="hover:scale-95 hover:shadow transition-all duration-300 other_lib_card py-5 px-12 border border-[#DFDFDF] rounded-lg flex flex-col items-center text-center"
                        key={index}
                      >
                        <div className="card_img">
                          <img src={overLibItem.videoImg} alt="" />
                        </div>
                        <div className="card_conent">
                          <h5 className="text-base text-[#0D0D0E] font-medium">
                            {overLibItem.videoName}
                          </h5>
                          <p className="text-xs text-[#999EAB] font-normal">
                            {overLibItem.campaignId}
                          </p>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="campain_section border border-[#D7DDE2]">
              <div className="title">
                <p className="bg-[#D7DDE2] text-2xl font-medium py-5 text-center">
                  SIGS add title
                </p>
              </div>
              <div className="campain border-b border-b-[#D7DDE2]">
                <p className="text-[#68686B] text-lg font-medium py-6 text-center">
                  Campaign ID
                </p>
              </div>

              <div className="video py-7 px-4">
                {newVideo.map((newVideoItem, index) => (
                  <>
                    <div
                      className="hover:scale-95 hover:shadow transition-all duration-300 new_video_card flex flex-col items-center text-center py-3 px-4 bg-white rounded-[6px] shadow-prompts relative mb-5"
                      key={index}
                    >
                      <div className="new_video_img">
                        <img src={newVideoItem.videoImg} alt="" />
                      </div>
                      <div className="video_info mt-2">
                        <h4 className="text-[#0D0D0E] text-lg font-medium">
                          {newVideoItem.videoName}
                        </h4>
                        <p className="text-[#999EAB] text-sm font-normal">
                          {newVideoItem.campaignId}
                        </p>
                      </div>

                      <p className="w-[32px] h-[32px] rounded-full bg-[#EFF3F7] text-[#999EAB] text-sm font-normal flex items-center justify-center absolute top-[12px] left-[14px]">
                        0{newVideoItem.vieoId}
                      </p>
                    </div>
                  </>
                ))}

                <div className="save_btn py-[42px]">
                  <Link
                    to={"#"}
                    className="py-4 capitalize w-full inline-block bg-[#1765FC] rounded-[60px] text-center text-base font-medium text-white border hover:bg-white hover:border-[#1765FC] hover:text-[#1765FC] transition-all duration-300"
                  >
                    save
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Library;
