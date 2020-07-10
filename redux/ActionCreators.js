import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchComments = () => dispatch => {
    return fetch(baseUrl + 'comments')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchCampsites = () => dispatch => {

    dispatch(campsitesLoading());

    return fetch(baseUrl + 'campsites')
        .then(response => {
                if (response.ok) {
                return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(campsites => dispatch(addCampsites(campsites)))
        .catch(error => dispatch(campsitesFailed(error.message)));
};

export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});

export const fetchPromotions = () => dispatch => {
    
    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)))
        .catch(error => dispatch(promotionsFailed(error.message)));
};

export const promotionsLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});

export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});

export const fetchPartners = () => dispatch => {
    
    dispatch(partnersLoading());

    return fetch(baseUrl + 'partners')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(partners => dispatch(addPartners(partners)))
        .catch(error => dispatch(partnersFailed(error.message)));
};

export const partnersLoading = () => ({
    type: ActionTypes.PARTNERS_LOADING
});

export const partnersFailed = errMess => ({
    type: ActionTypes.PARTNERS_FAILED,
    payload: errMess
});

export const addPartners = partners => ({
    type: ActionTypes.ADD_PARTNERS,
    payload: partners
});

export const postFavorite = campsiteId => dispatch => {
    setTimeout(() => {
        dispatch(addFavorite(campsiteId));
    }, 2000);
};

export const addFavorite = campsiteId => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: campsiteId
});

//HOMEPAGECARDS
export const fetchHomepagecards = () => dispatch => {
    dispatch(homepagecardsLoading());

    return fetch(baseUrl + 'homepagecards')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
        }
    )
    .then(response => response.json())
    .then(homepagecards => dispatch(addHomepagecards(homepagecards)));
};

export const homepagecardsLoading = () => ({
    type: ActionTypes.HOMEPAGECARDS_LOADING
});

export const homepagecardsFailed = errMess => ({
    type: ActionTypes.HOMEPAGECARDS_FAILED,
    payload: errMess
});

export const addHomepagecards = homepagecards => ({
    type: ActionTypes.ADD_HOMEPAGECARDS,
    payload: homepagecards
});

//HOMEPAGECAROUSEL
export const fetchHomepagecarousel = () => dispatch => {
    dispatch(homepagecarouselLoading());

    return fetch(baseUrl + 'homepagecarousel')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
     }
    )
    .then(response => response.json())
    .then(homepagecarousel => dispatch(addHomepagecarousel(homepagecarousel)));
};

export const homepagecarouselLoading = () => ({
    type: ActionTypes.HOMEPAGECAROUSEL_LOADING
});

export const homepagecarouselFailed = errMess => ({
    type: ActionTypes.HOMEPAGECAROUSEL_FAILED,
    payload: errMess
});

export const addHomepagecarousel = homepagecarousel => ({
    type: ActionTypes.ADD_HOMEPAGECAROUSELPAGE,
    payload: homepagecarousel
});

