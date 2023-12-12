import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MiniSlide from "../components/MiniSlide";
import ApiService from "../api/ApiService";
import SortData from "../components/SortData";
function Movie() {
  const { BASE_URL: URL } = ApiService;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryWord = searchParams.get("category");
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {

    try {
      let response;
      if (categoryWord === null) {
        response = await ApiService.getMovie1(); // getKids1 메서드 호출
      } else {
        response = await ApiService.getMovie2(categoryWord); // getKids2 메서드에 categoryWord 전달
        console.log(categoryWord)
      }
      const data = response.data;
      console.log(data);
      setMovie(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getData();
  }, [categoryWord]);

  if (categoryWord === null) {
    return (
      <div className=" mx-44  ">
        <div className="">
          <div className="">
            <h1 className="my-10">영화 인기 TOP5</h1>
            <MiniSlide data={movie} />
          </div>
          <div className="text-center mt-3"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mx-44">
        {loading === true ? <div>loading</div> : <SortData data={movie} />}
      </div>
    );
  }
}

export default Movie;