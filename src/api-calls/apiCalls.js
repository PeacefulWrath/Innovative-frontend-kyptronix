import axios from "axios";


export const signUp = async (userData) => {
  let tempSignUpData = [];
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
        tempSignUpData = res?.data;
      });
  } catch (error) {
    tempSignUpData = error?.response?.data;
  } finally {
    return tempSignUpData;
  }
};

export const logIn = async (userData) => {
  let tempLoginData = [];
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
        tempLoginData = res?.data
      });
  } catch (error) {
    // console.log("can not login");
    tempLoginData = error?.response?.data;
  } finally {
    return tempLoginData;
  }
};

export const fetchTrainingModules = async () => {
  let moduleData = [];
  const token = localStorage.getItem("token");
  if (token) {


    try {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/api/training-module`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      moduleData = response.data.fetchedData;
    } catch (error) {
      // console.log("err", error);
      moduleData = error?.response?.data;
    } finally {
      return moduleData;
    }
  } else {
    moduleData = { success: "no", message: "jwt not present" }
    return moduleData
  }
};

export const fetchTestimonials = async () => {
  let testimonialData = [];
  const token = localStorage.getItem("token");
  if (token) {


    try {
      const response = await axios({
        method: "get",

        url: `${process.env.REACT_APP_BASE_URL}/api/testimonial`,

        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      testimonialData = response.data.fetchedData;
    } catch (error) {
      // console.log("err", error);
      testimonialData = error?.response?.data;
    } finally {
      return testimonialData;
    }
  } else {
    testimonialData = { success: "no", message: "jwt not present" }
    return testimonialData
  }
};

export const fetchFaqs = async () => {
  let faqsData = [];
  const token = localStorage.getItem("token");
  // console.log("fetch faq")
  if (token) {

    try {

      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/api/faq`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      faqsData = response.data.allFaqData;
    } catch (error) {
      // console.log("err", error);
      faqsData = error?.response?.data;
    } finally {
      return faqsData;
    }
  } else {
    faqsData = { success: "no", message: "jwt not present" }
    return faqsData
  }
};

export const fetchCus = async () => {
  let cusData = [];
  const token = localStorage.getItem("token");
  if (token) {

    try {

      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/api/choose-us`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      cusData = response.data.allCusData;
    } catch (error) {
      // console.log("err", error);
      cusData = error?.response?.data;
    } finally {
      return cusData;
    }
  } else {
    cusData = { success: "no", message: "jwt not present" }
    return cusData
  }
};

export const fetchServices = async () => {
  let serviceData = [];
  const token = localStorage.getItem("token");
  if (token) {

    try {

      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/api/service`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      serviceData = response.data.fetchedData;
    } catch (error) {
      // console.log("err", error);
      serviceData = error?.response?.data;
    } finally {
      return serviceData;
    }
  } else {
    serviceData = { success: "no", message: "jwt not present" }
    return serviceData
  }
};

export const fetchCategories = async () => {
  let categoriesData = [];
  const token = localStorage.getItem("token");
  if (token) {

    try {

      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/api/category`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      categoriesData = response.data.allCategoryData;
    } catch (error) {
      // console.log("err", error);
      categoriesData = error?.response?.data;
    } finally {
      return categoriesData;
    }
  } else {
    categoriesData = { success: "no", message: "jwt not present" }
    return categoriesData
  }
};


export const fetchProducts = async () => {
  let productsData = [];
  const token = localStorage.getItem("token");
  if (token) {

    try {

      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/api/product`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      productsData = response.data.fetchedData;
    } catch (error) {
      // console.log("err", error);
      productsData = error?.response?.data;
    } finally {
      return productsData;
    }
  } else {
    productsData = { success: "no", message: "jwt not present" }
    return productsData
  }
};

export const fetchGalleries = async () => {
  let galleriesData = [];
  const token = localStorage.getItem("token");
  if (token) {

    try {

      const response = await axios(
        {
          method: "get",
          url: `${process.env.REACT_APP_BASE_URL}/api/gallery`,
          headers: {
            authorization: `Bearer ${token}`
          },
        }
      );
      galleriesData = response.data.allGalleryData;
    } catch (error) {
      // console.log("err", error);
      galleriesData = error?.response?.data;
    } finally {
      return galleriesData;
    }
  } else {
    galleriesData = { success: "no", message: "jwt not present" }
    return galleriesData
  }
};

export const fetchPartners = async () => {
  let partnersData = [];
  const token = localStorage.getItem("token");
  if (token) {

    try {

      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/api/partner`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      partnersData = response.data.allPartnerData;
    } catch (error) {
      // console.log("err", error);
      partnersData = error?.response?.data;
    } finally {
      return partnersData;
    }
  } else {
    partnersData = { success: "no", message: "jwt not present" }
    return partnersData
  }
};

export const verifyToken = async () => {
  let tokenData = [];
  const token = localStorage.getItem("token");
  if (!token) {
    tokenData = { success: "no", message: "jwt not present" }
    return tokenData
  }

  try {


    await axios({
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}/api/user/verify-token`,
      data: { jwt_token: token },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      tokenData = res.data;
    });
  } catch (error) {
    tokenData = error?.response?.data;
  } finally {
    return tokenData;
  }
};

export const createPurchaseOrders = async (addData) => {
  let tempPurchaseOrders = [];
  const token = localStorage.getItem("token");
  if (token) {
    try {
      // console.log("po data", addData);

      await axios({
        method: "post",
        url: `${process.env.REACT_APP_BASE_URL}/api/purchase-order`,
        data: addData,
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        tempPurchaseOrders = res.data;
      });
    } catch (error) {
      // console.log("can not create purchase order");
      tempPurchaseOrders = error?.response?.data;
    } finally {
      return tempPurchaseOrders;
    }
  } else {
    tempPurchaseOrders = { success: "no", message: "jwt not present" }
    return tempPurchaseOrders
  }
};

export const fetchPurchaseOrders = async () => {
  let tempPurchaseOrders = [];
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/api/purchase-order`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      tempPurchaseOrders = response.data.fetchedData;
    } catch (error) {
      // console.log("err", error);
      tempPurchaseOrders = error?.response?.data;
    } finally {
      return tempPurchaseOrders;
    }
  } else {
    tempPurchaseOrders = { success: "no", message: "jwt not present" }
    return tempPurchaseOrders
  }
};



export const fetchEmailUs = async () => {
  let tempEmailUsData = [];
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/api/email-us`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      tempEmailUsData = response.data.allEmailUsData;
    } catch (error) {
      tempEmailUsData = error?.response?.data;
    } finally {
      return tempEmailUsData;
    }
  } else {
    tempEmailUsData = { success: "no", message: "jwt not present" }
    return tempEmailUsData
  }
};


export const fetchCallUs = async () => {
  let tempCallUsData = [];
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/api/call-us`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      tempCallUsData = response.data.allCallUsData;
    } catch (error) {
      tempCallUsData = error?.response?.data;
    } finally {
      return tempCallUsData;
    }
  } else {
    tempCallUsData = { success: "no", message: "jwt not present" }
    return tempCallUsData
  }
};

export const fetchAboutUs = async () => {
  let tempAboutUsData = [];
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/api/about-us`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      tempAboutUsData = response.data.allAboutUsData;
    } catch (error) {
      tempAboutUsData = error?.response?.data;
    } finally {
      return tempAboutUsData;
    }
  } else {
    tempAboutUsData = { success: "no", message: "jwt not present" }
    return tempAboutUsData
  }
};

export const fetchOurVision = async () => {
  let tempOurVision = [];
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/api/our-vision`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      tempOurVision = response.data.allOvData;
    } catch (error) {
      tempOurVision = error?.response?.data;
    } finally {
      return tempOurVision;
    }
  } else {
    tempOurVision = { success: "no", message: "jwt not present" }
    return tempOurVision
  }
};

export const fetchOurMission = async () => {
  let tempOurMission = [];
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/api/our-mission`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      tempOurMission = response.data.allOmData;
    } catch (error) {
      tempOurMission = error?.response?.data;
    } finally {
      return tempOurMission;
    }
  } else {
    tempOurMission = { success: "no", message: "jwt not present" }
    return tempOurMission
  }
};

export const handleCheckout = async (product) => {
  let sessionData=""
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const data={
        product_name:product.name,
        amount:product.discounted_price,
        quantity:1
      }
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      sessionData= await response.json();
    
    } catch (error) {
      sessionData = error?.response?.data;
    } finally {
      return sessionData;
    }
  } else {
    sessionData = { success: "no", message: "jwt not present" }
    return sessionData
  }
  
  
  
};

export const updateUsers = async (userData) => {
  let tempUsers = [];
  const token = localStorage.getItem('token');

  if (token) {
    try {
      // console.log("userData", userData);

      await axios({
        method: 'put',
        url: `${process.env.REACT_APP_BASE_URL}/api/user/`,
        data: userData,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        tempUsers = res.data;
      });
    } catch (error) {
      // console.log("can not update users");
      tempUsers = error?.response?.data;
    } finally {
      return tempUsers;
    }
  } else {
    return { message: 'jwt not present' };
  }
};

export const fetchUsers = async () => {
  let usersData = [];
  const token = localStorage.getItem('token');

  if(token){
  try {
    const response = await axios({
      method: "get",
      url: `${process.env.REACT_APP_BASE_URL}/api/user`,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    usersData = response.data.allUserData;
  } catch (error) {
    // console.log("err", error);
    usersData=error?.response?.data;
  } finally {
    return usersData;
  }
}
};

export const updateMcqTemplatesAttempts = async (updateData) => {
  let tempTemplates = [];
  const token = localStorage.getItem('token');

  if (token) {
    try {
      await axios({
        method: 'put',
        url: `${process.env.REACT_APP_BASE_URL}/api/mcq-template`,
        data: updateData,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        tempTemplates = res.data;
      });
    } catch (error) {
      // console.log("can not create templates");
      tempTemplates = error?.response?.data;
    } finally {
      return tempTemplates;
    }
  } else {
    return { message: 'jwt not present' };
  }
};
