import * as React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { useNavigate,useLocation } from "react-router-dom";
import { BiBarcodeReader } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineMicrophone } from "react-icons/hi";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState } from "react";
import "./SearchBar.css";

export default function SearchInput({
  placeholder,
  url,
  dinamic = false,
  action,
}) {
  const navigate = useNavigate();
  const location=useLocation()
  const dispatch = useDispatch();
  const [input, setInput] = React.useState("");
  const [micInput, setMicInput] = React.useState("");

  console.log("Location:",location)


  const handleChange = (e) => {
    setInput(() => e.target.value);
  };

  const click = () => {
    console.log("input", input);
    // if(location!==`${url}`)navigate(`${url}`)
    dispatch(action(input));
    navigate(`${url}`);
  };

  React.useEffect(() => {
    dinamic && dispatch(action(micInput ? micInput : input)).then(navigate(`${url}`));
  }, [micInput ? micInput : input]);

  
  const Microphone = () => {
    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition,
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }
    setMicInput(transcript);
    return (
      <HiOutlineMicrophone
        className={listening ? "activeMic" : "mic"}
        onClick={
          listening
            ? SpeechRecognition.stopListening
            : SpeechRecognition.startListening
        }
      />
    );
  };

  micInput ? dinamic = true : dinamic = false
  return (
    <div className="ContainerBackground">
      <form
        className="SearchbarConteiner"
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(action(micInput ? micInput : input));
          navigate(`${url}`);
          //setInput(()=>'')
        }}
      >
        <div className="SearchbarIconContent">
          <IoSearchOutline />
        </div>
        <input
          placeholder={placeholder}
          value={micInput ? micInput : input}
          onChange={(e) => handleChange(e)}
        />
        <div className="SearchbarIconContent2">
          <Microphone/>
          <BiBarcodeReader className="barcode"/>
        </div>
      </form>
    </div>
  );
}