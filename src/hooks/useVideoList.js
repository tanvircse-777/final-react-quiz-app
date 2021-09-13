import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList() {
  const [loading, setLoading] = useState(true);
  const [eroor, setError] = useState(false);
  useEffect(() => {
    async function fetchVideos() {
      //database related works

      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(videosRef, orderByKey());
      try {
        setError(false);
        setLoading(true);
        //request firebase database
        const snapshot = await get(videoQuery);
        setLoading(false);
        if (snapshot.exists()) {
        } else {
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchVideos();
  }, []);
}
