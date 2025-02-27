import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GenerateData from "../services/GenerateData";
import "./.././../styles/carrousel.scss";

export default function Carrousel() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); 
  useEffect(() => {
    if (id) {
      setData(null);
    }
  }, [id]);
  return (
    <>
      <GenerateData setData={setData} />
      {data ? (
        <div className="carrousel">
          <img
            className="arrow-left"
            src="../src/assets/logo/arrow-left.png"
            alt="Fleche gauche"
            onClick={() =>
                setCurrentIndex((prevIndex) => (prevIndex - 1 + data.pictures.length) % data.pictures.length)} 
          />
          <img
            src={data.pictures[currentIndex]} 
            alt="Photos du logement"
          />
          <img
            className="arrow-right"
            src="../src/assets/logo/arrow-right.png"
            alt="Fleche droite"
            onClick={() =>
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.pictures.length)
            }
          />
        </div>
      ) : (
        <div>Chargement...</div>
      )}
    </>
  );
}
