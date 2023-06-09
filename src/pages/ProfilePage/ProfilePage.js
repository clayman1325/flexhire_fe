import {  useFragment, usePreloadedQuery, /* ... */ } from "react-relay";
import graphql from 'babel-plugin-relay/macro'
import classes from "./ProfilePage.module.css";
import Header from "./Header";
import Options from "./Options/Options";
import BackgroundPhoto from "./background_photo.jpg"
import Main from "./Main/Main";
import axios from "axios";

const ProfilePage = () => {
    // const queryFlexHire = async () =>{
    //     const response = await axios.post(
    //         "https://api.flexhire.com/api/v2", {
    //             headers: {
    //                 'content-type':     'text/json',
    //                 "FLEXHIRE-API-KEY": "lvzmksuscj52xdzj"
    //             }
    //         } );
    //     const data = response.data;
    //     console.log(data)

    // }
    // const data = usePreloadedQuery(
    //     graphql`
    //         query ProfilePageQuery {
    //             currentUser {
    //                 name
    //             }
    //         }
    //     `,
    // );
    // console.log("....", data);
    return (
        <body className={classes.body}>
            <div className={classes.header}>
               <Header />
            </div>
            <div className={classes.options}>
                <Options classes={classes} />
            </div>
            <div className={classes.background}>
                <img src={BackgroundPhoto} alt="background image" />
            </div>
            <div className={classes.main}>
                <Main />
            </div>
        </body>
    )
}

export default ProfilePage;