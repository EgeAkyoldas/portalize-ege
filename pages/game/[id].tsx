
import { Button, ButtonGroup, Textarea } from "@material-tailwind/react";
import React, { Fragment,useRef,useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import UnityInstance from "react-unity-webgl/declarations/unity-instance";
import {
  Input
} from "@material-tailwind/react";
import fetch from 'node-fetch'




export const getServerSideProps = async(req) => {
    const {id} = req.query
  const [floormapRes, interiorRes] = await Promise.all([fetch(`http://localhost:3000/api/worlds/floormap/${id}`), fetch(`http://localhost:3000/api/worlds/interior/${id}`)]);
  const [floormap, interior] = await Promise.all([floormapRes.json(), interiorRes.json()])
  const [floormapdata, interiordata] = await Promise.all([JSON.stringify(floormap),JSON.stringify(interior)])
  const data = [floormapdata, interiordata]
  return{
    
    props:{data}
    
  };
  
}
function App({data}) {
  const[unityNumber, setUnityNumber] = useState(0);
  const[unityString, setUnityString] = useState('text');
 
  const { unityProvider, loadingProgression, isLoaded, sendMessage } = useUnityContext({
    loaderUrl: "/build/webgl-api-test.loader.js",
    dataUrl: "/build/webgl-api-test.data.unityweb",
    frameworkUrl: "/build/webgl-api-test.framework.js.unityweb",
    codeUrl: "/build/webgl-api-test.wasm.unityweb",
  });

  if(isLoaded === true){
    console.log(data)
    sendMessage('JavascriptHook','SetString', `${data}`)
  }
  
  return (
    <Fragment>
      {!isLoaded && (
        <p className="w-[100vh] h-[100vh] text-center">Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        className="-z-10"
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? "visible" : "hidden", "width": "100%", "height": "100vh" }}
      />
      <>
      </>
      <ButtonGroup className="fixed top-5 left-5">
      <Input type="number" value={unityNumber} onChange={(e) => {setUnityNumber(e.target.valueAsNumber)}}/>
      <Input type="text" onChange={(e) => {e.preventDefault(); setUnityString(e.target.value)}}/>
      <Button onClick={() => sendMessage('JavascriptHook','TintRed')}>Red</Button>
      <Button onClick={() => sendMessage('JavascriptHook','TintGreen')}>Green</Button>
      <Button onClick={() => sendMessage('JavascriptHook', 'SetNumber', unityNumber)}>number</Button>
      <Button onClick={() => sendMessage('JavascriptHook','SetString', unityString)}>text</Button>
      {/* <Button onClick={() => sendMessage('JavascriptHook','SetString', floormapdata)}>floormapdata</Button>
      <Button onClick={() => sendMessage('JavascriptHook','SetString', interiordata)}>interiordata</Button> */}
    </ButtonGroup>
    </Fragment>
  );
}

export default App