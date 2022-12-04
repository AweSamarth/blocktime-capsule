import { useStorageUpload, useAddress } from "@thirdweb-dev/react";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import AutoConnect from "./AutoConnect"
export default function Component() {

  const address = useAddress()
  const { mutateAsync: upload } = useStorageUpload();
  const [checker, setChecker] = useState("");
  const [doesExist, setDoesExist] = useState(0)
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const uris = await upload({ data: acceptedFiles });
      console.log(uris);
      setChecker(uris[0]);
    },
    [upload]
  );

    function dragevent(){
     const x= document.getElementById("draggist")
     if (x!=undefined)
     x.classList.add("itisdragged")
    }
    function undragevent(){
      const x = document.getElementById("draggist");
      if (x!=undefined)
      x.classList.remove("itisdragged")
    }
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="border-2 flex-col border-white h-full  min-h-screen bg-[#161616] text-white py-4 px-72" >
      <div className="font-[Poppins] font-bold  text-[2.1em] w-[100%] text-center text-[#F8F8F8]  mb-1">
          BlockTime Capsule
        </div>
      <div className="font-[Inter] font-light  text-center text-[1.3em] text-[#b1b1b1] mb-[-4px]">
        Capture a moment.
      </div>
      <div className="font-[Inter] font-light  text-center text-[1.3em] text-[#b1b1b1]  mb-6">
        Relive it anytime.{" "}
      </div>
      <div className="font-[Inter] font-light text-[1.2em] text-white mb-4 ">
        Upload anything you find memorable - it could be an audio recording of you and your friends, a note for your future self and possibly, anything you can imagine!
       </div> 
        <div className="font-[Inter] font-light text-[1.1em] text-white ">
        To get started, drag and drop your desired file and specify the date and time when you want to be 
        reminded of it. Once the set time is reached, you will get an NFT containing your file airdropped into your wallet address. You will also receive 
        a Push notification so that it doesn't go unnoticed!
      </div>
      <div className="border-2 border-white" >TIME</div>
      <div
      id="draggist"
        {...getRootProps()}
        className="dragger py-52 text-center border-4 border-white bg-[#222222] hover:bg-[#272727]  transition duration-150 hover:cursor-pointer"
        onDragEnter={dragevent}
        onDragLeave={undragevent}
      >
        <input {...getInputProps()} className="border-2 border-red" />
        <p className="text-white font-[Inter]">Drop files here to upload them to IPFS</p>
      </div>
      <div className="border-2 flex align-middle">
        <div className="border-2 px-2 h-min self-center ">Send me the unique link as an NFT:</div> 
        <div className=" focus:outline-none"><AutoConnect /></div>
        <div>{address !=undefined? address:""}</div>
      </div>
      <div>{checker != "" ? <a href={"https://dweb.link/"+checker}>File uploaded successfully {checker}!</a> : ""}</div>

    </div>
  );
}
