

import { getPalette, usePalette } from "react-palette";
import fds from "./fds.jpg";
import "./globals.css";

import { useState } from "react";



export default function Home() {

  const [file, setFile] = useState()
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<string | null>(null); // O estado aceita 'string' ou 'null'


  const { data, loading, error } = usePalette(imageFile || "");


  const handleImageUpload = (files: FileList) => {
    const file = files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImageFile(reader.result); // Define o estado apenas se o resultado for uma string
        }
      };
      reader.readAsDataURL(file); // Converte a imagem para base64
    }
  };

    
  
    return (
      <div>
        <div  id='imagem' className="text-center w-50 p-3">
          <label htmlFor="formFileLg" className="form-label">Paleta de cores usadas na imagem!</label>
          <h6>Em hexadecimal</h6>
          <input onChange={(e) => {
            if (e.target.files){
              handleImageUpload(e.target.files)
            }
          }}  className="form-control form-control-lg" id="formFileLg" type="file"></input>
        </div>
  
  
        <div className="d-flex flex-row gap-5 justify-content-center justify-content-md-center flex-wrap">
          
            <div className="p-2">
              <p>{data.darkMuted}</p>
              <div style={{ backgroundColor: data.darkMuted }} id="roda"></div>
            </div>
            <div className="p-2">
              <p>{data.darkVibrant}</p>
              <div style={{ backgroundColor: data.darkVibrant }} id="roda"></div>
            </div>
            <div className="p-2">
              <p>{data.lightMuted}</p>
              <div style={{ backgroundColor: data.lightMuted }} id="roda"></div>
            </div>
          
  
          
        </div>
        <div className="d-flex flex-row gap-5 justify-content-center flex-wrap">
      
            <div className="p-2">
              <p>{data.lightVibrant}</p>
              <div style={{ backgroundColor: data.lightVibrant }} id="roda"></div>
            </div>
            <div className="p-2">
              <p>{data.muted}</p>
              <div style={{ backgroundColor: data.muted}} id="roda"></div>
            </div>
            <div className="p-2">
              <p>{data.vibrant}</p>
              <div style={{ backgroundColor: data.vibrant }} id="roda"></div>
            </div>
          
          </div>
      </div>
    );
  

  };








  
