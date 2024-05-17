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

export const fetchTrainingModules = async () => {
    let moduleData = [];
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/training-module`
        );
        moduleData = response.data.fetchedData;
    } catch (error) {
        console.log("err", error);
    } finally {
        return moduleData;
    }
}

export const fetchTestimonials = async () => {
    let testimonialData = [];
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/testimonial`
        );
        testimonialData = response.data.fetchedData;
    } catch (error) {
        console.log("err", error);
    } finally {
        return testimonialData;
    }
}

export const fetchFaqs = async () => {
    let faqsData = [];
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/faq`
        );
        faqsData = response.data.allFaqData;
    } catch (error) {
        console.log("err", error);
    } finally {
        return faqsData;
    }
}

export const fetchCus = async () => {
    let cusData = [];
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/choose-us`
        );
        cusData = response.data.allCusData;
    } catch (error) {
        console.log("err", error);
    } finally {
        return cusData;
    }
}

export const fetchServices = async () => {
    let serviceData = [];
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/service`
        );
        serviceData = response.data.fetchedData;
    } catch (error) {
        console.log("err", error);
    } finally {
        return serviceData;
    }
}

export const fetchCategories = async () => {
    let categoriesData = [];
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/category`
        );
        categoriesData = response.data.allCategoryData;
    } catch (error) {
        console.log("err", error);
    } finally {
        return categoriesData;
    }
}

export const fetchProducts = async () => {
    let productsData = [];
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/product`
        );
        productsData = response.data.fetchedData;
    } catch (error) {
        console.log("err", error);
    } finally {
        return productsData;
    }
}

export const fetchGalleries = async () => {
    let galleriesData = [];
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/gallery`
        );
        galleriesData = response.data.allGalleryData;
    } catch (error) {
        console.log("err", error);
    } finally {
        return galleriesData;
    }
}

export const fetchPartners = async () => {
    let partnersData = [];
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/partner`
        );
        partnersData = response.data.allPartnerData;
    } catch (error) {
        console.log("err", error);
    } finally {
        return partnersData;
    }
}