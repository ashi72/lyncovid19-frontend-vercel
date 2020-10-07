import React, {useState, useEffect} from 'react';
import ListRender from './ListRender'
import axios from 'axios';
const GoogleSheetAPI = (props) => {
    const [profiles,setProfiles] = useState([]);
    useEffect(() => {
      const getURL = async () => {
        if (props.user) {
          const url = await axios.get("https://lyncovid-new-backend.herokuapp.com/api/users/geturl/" + props.user.email).then(response => {
            console.log(response.data)
            return response.data.toString()});
          return await url;
        }
        return "";
      }


      const googleJSON = async (googleSheetURL) => {
        console.log("hi");
        const startIndex = 39;
        const endIndex = googleSheetURL.indexOf("edit")-1;
        const firstURLHalf = "https://spreadsheets.google.com/feeds/worksheets/";
        const secondURLHalf = "/public/basic?alt=json";
        const resultURL = firstURLHalf + googleSheetURL.substring(startIndex, endIndex) + secondURLHalf;
        const {data} = await axios.get(resultURL);
        return await data.feed.entry[0].id.$t;
      };
      const finalGoogleJSON = async (googleTerm, googleSheetURL) => {
        const starInd = googleTerm.indexOf("basic");
        const wkstID = googleTerm.substring(starInd+6);
        const finalFirstHalf = "https://spreadsheets.google.com/feeds/list/";
        const finalSecondHalf = "/public/values?alt=json";
        const finalURL = finalFirstHalf + googleSheetURL.substring(39, googleSheetURL.indexOf("edit")-1) + "/" + wkstID + finalSecondHalf;
        const {data} = await axios.get(finalURL);
        console.log("this is the final google term")
        return await data;
      };
      const setter = async(final) => {
        console.log(final.feed.entry);
        setProfiles(final.feed.entry.reverse());
      }
      const asyncRunner = async () => {
        const zerothThing = await getURL();
        const firstThing = await googleJSON(zerothThing);
        const secondThing = await finalGoogleJSON(firstThing, zerothThing);
        await setter(secondThing);
      }
      asyncRunner();
      },[]);
      return (
        <ListRender profiles={profiles}></ListRender>
      )
}
export default GoogleSheetAPI;
