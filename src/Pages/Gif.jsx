/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../assets/arrow-right.png";
import UploadImg1 from "../assets/img1.png";
import UploadImg2 from "../assets/img2.png";
import UploadImg3 from "../assets/img3.png";
import UploadMini from "../assets/upload-mini.png";
import UploadImg from "../assets/upload.png";

const Gif = () => {

  return (
    <section className="gif">
      <div className="point pt-14 pb-10 px-14 mt-20 mb-28 bg-white max-w-[1010px] w-full mx-auto rounded-[10px]">
        <div className="section_heading mb-9">
          <p className="text-[34px] font-bold text-primary">Gif Details</p>
        </div>
        {/* drag and drop */}
        <div className="drag_and_drop">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-6">
              <div className="title mb-5">
                <input
                  type="text"
                  className="bg-[#EFF3F7] py-4 px-5 rounded-xl outline-none w-full"
                  placeholder="Title"
                />
              </div>
              <div className="description">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Description"
                  className="bg-[#EFF3F7] py-4 px-5 rounded-xl outline-none w-full"></textarea>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="drag_and_drop_wrapper">
                <div className="drag_and_drop border-dashed border border-[#1765FC] rounded-2xl w-full h-[320px] flex flex-col items-center justify-center">
                  <div className="upload-img">
                    <img src={UploadImg} alt="" />
                  </div>

                  <div className="inline-block">
                    <div className="file-input text-center">
                      <label
                        className="inline-flex gap-1 items-center"
                        htmlFor="file-input">
                        <span className="text-[#2020278f] text-sm font-medium">
                          Drag file here or{" "}
                        </span>
                        <span className="cursor-pointer text-[#1765FC] text-sm font-medium">
                          browse
                        </span>
                      </label>
                      <input
                        type="file"
                        name="file-input"
                        id="file-input"
                        className="file-input__input w-[0.1px] h-[0.1px] opacity-0 overflow-hidden absolute z-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="status flex items-center justify-between mt-3">
                  <div className="status_update flex items-center gap-2">
                    <p className="text-[#2020278f] text-sm font-medium">
                      Status:
                    </p>
                    <p className="text-[#1765FC] text-sm font-medium">
                      Uploading
                    </p>
                  </div>

                  <div className="status-parcent text-[#1765FC] text-sm font-medium">
                    0%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-7 flex items-center justify-between">
            <div className="pub_btn">
              <Link
                to={"#"}
                className="py-4 w-[170px] inline-block bg-[#1765FC] rounded-[60px] text-center text-base font-medium text-white border hover:bg-white hover:border-[#1765FC] hover:text-[#1765FC] transition-all duration-300">
                Publish
              </Link>
            </div>

            <div className="lib_title">
              <Link
                to={"/library"}
                className="text-[#0D0D0E] text-2xl font-bold flex items-center">
                Library
                <img src={ArrowRight} alt="" />
              </Link>
            </div>
          </div>

          <div className="mini_img bg-[#D7DDE2] py-2 px-3 rounded-xl">
            <div className="flex flex-wrap gap-3">
              <div className="upload_img border-[7px] border-white rounded-[10px]">
                <img src={UploadImg1} alt="" />
              </div>
              <div className="upload_img border-[7px] border-white rounded-[10px]">
                <img src={UploadImg2} alt="" />
              </div>
              <div className="upload_img border-[7px] border-white rounded-[10px]">
                <img src={UploadImg3} alt="" />
              </div>
              <div className="upload-img border-dashed border border-[#1765FC] rounded-[10px] w-[120px] h-[120px] bg-[#e4f1ff80] flex items-center justify-center">
                <div className="upload_img_icon flex flex-col items-center">
                  <img src={UploadMini} alt="" />
                  <p className="text-[#2020278f] text-sm font-medium">Upload</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gif;
