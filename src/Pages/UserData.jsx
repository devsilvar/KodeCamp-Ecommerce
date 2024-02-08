import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Config/Firebase";
import { AuthContext } from "../Context/AuthContext";
const UserData = () => {
  const [Data, setData] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!currentUser) navigate("//Login");

  const retriveUserData = async () => {
    const docRef = doc(db, "users", currentUser.uid);
    const docSnap = await getDoc(docRef);
    let list = [];
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      //   list.push(docSnap.data());
      setData([docSnap.data()]);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    retriveUserData();
  }, []);
  if (!Data[0]) return "Loading...";

  return (
    <section className="pt-32">
      {console.log(Data)}
      <div className="w-4/6 h-3/4 mx-auto bg-white font-Nunito ">
        {Data[0].firstName && (
          <>
            <h2>Name : {Data[0].firstName} </h2>
            <h2>Last Name: {Data[0].lastName}</h2>
            <h2>Phone Number: {Data[0].phoneNumber}</h2>
            <h2>Email: {Data[0].Email}</h2>
          </>
        )}
      </div>
    </section>
  );
};

export default UserData;
