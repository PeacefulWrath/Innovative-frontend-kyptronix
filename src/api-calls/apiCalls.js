import axios from "axios";


export const signUp = async (userData) => {
    let tempUsers = [];
    try {
        // console.log("userData", userData);

        await axios
            (
                {
                    method: "post",
                    url: `${process.env.REACT_APP_BASE_URL}/api/user/signup`,
                    data: userData,
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
            .then((res) => {
                tempUsers = res.data;
            });
    } catch (error) {
        console.log("can not save users");
    } finally {
        return tempUsers;
    }
};

export const logIn = async (userData) => {
    let tempUsers = [];
    try {
        // console.log("userData", userData);

        await axios
            (
                {
                    method: "post",
                    url: `${process.env.REACT_APP_BASE_URL}/api/user/signin`,
                    data: userData,
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
            .then((res) => {
                tempUsers = res.data;
            });
    } catch (error) {
        console.log("can not login");
    } finally {
        return tempUsers;
    }
};