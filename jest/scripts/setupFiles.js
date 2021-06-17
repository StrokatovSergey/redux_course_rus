// Mocks
import { LocalStorage } from './mocks/localStorage';
import { fetch } from './mocks/fetch';

const successMesasge = 'TEST_SUCCESS_MESSAGE.';
const errorMessage = 'TEST_ERROR_MESSAGE.';
const token = 'TEST_TOKEN';
const error = new Error(errorMessage);

const users = [
    {
        id: '5b630eb31d4d04323b00e262',
        firstName: 'Jack',
        lastName: 'Jackson',
        avatar: 'https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/KnNp0tNYtg.jpg'
    },
    {
        id: '5b6a05101d4d047c7500e2d4',
        firstName: 'Elon22',
        lastName: 'Musk',
        avatar: 'https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg'
    },
    {
        id: '5b6ab2781d4d04585a00e2e3',
        firstName: 'New',
        lastName: 'User',
        avatar: 'https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/UV0MNKGq2Q.jpg'
    },
    {
        id: '5b6ac5f01d4d04ea3500e2e7',
        firstName: 'Jony',
        lastName: 'Ive',
        avatar: 'https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg'
    }
]

const userProfile = {
    id:        'TEST_ID',
    avatar:    'TEST_AVATAR',
    firstName: 'Walter',
    lastName:  'White',
    token,
};

const credentials = {
    email:    'test@email.com',
    password: '1111',
    remember: true,
};

const responseDataSuccess = {
    data:    userProfile,
    message: successMesasge,
};

const responseDataFail = {
    message: errorMessage,
};

const fetchResponseSuccess = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(responseDataSuccess)),
};

const fetchResponseFail401 = {
    status: 401,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const fetchResponseFail400 = {
    status: 400,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const url = 'https://www.url.com';

global.__ = {
    userProfile,
    errorMessage,
    token,
    error,
    responseDataSuccess,
    responseDataFail,
    fetchResponseSuccess,
    fetchResponseFail401,
    fetchResponseFail400,
    credentials,
    url,
    users
};
global.fetch = fetch;
global.localStorage = new LocalStorage();
