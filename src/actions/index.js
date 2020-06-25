//Action Creator

export const selectCountry = country => {
    //retun Action
    return {
        type: 'COUNTRY_SELECTED',
        payload: country
    };
};

