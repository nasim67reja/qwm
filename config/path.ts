const path = {
    home: '/',
    userGuide: '/userguide',
    signin: '/auth/signin',
    forgetPassword: '/auth/forget-password',
    resetPassword: '/auth/reset-password',
    calender_auth: '/auth/add-event-to-calender/',
    signout: '/auth/authentication/global-logout',
    signup: '/auth/signup',
    join_meeting: '/join/',
    meeting_list: '/my-meetings',
    meeting_details: '/meeting-details/',
    drawing: '/drawing/',
    error_404: '/404',
};

// export const wsUrl = () => {
//     return {
//         shadhin: {
//             dev_local: () => `http://127.0.0.1:5000`,
//             dev: () => `https://coredev.shadhin.ai`,
//             qa: () => `https://coreqa.shadhin.ai`,
//             stage: () => `https://core.shadhin.ai`,
//         },
//     }.shadhin[process.env.NEXT_PUBLIC_APP_ENV || 'dev'];
// };

// export const chatAPIurl = () => {
//     return {
//         shadhin: {
//             dev_local: `http://127.0.0.1:5000/`,
//             dev: `https://coredev.shadhin.ai/`,
//             qa: `https://coreqa.shadhin.ai/`,
//             stage: `https://core.shadhin.ai/`,
//         },
//     }.shadhin[process.env.NEXT_PUBLIC_APP_ENV || 'dev'];
// };

export const API_BASE_URL = () => {
    return {
        dev_local: 'http://localhost:5000/api/',
        dev: 'https://coredev.shadhin.ai/api/',
        qa: 'https://coreqa.shadhin.ai/api/',
        stage: 'https://core.shadhin.ai/api/',
    }[process.env.NEXT_PUBLIC_APP_ENV || 'dev'];
};
export const SOCKET_BASE_URL = () => {
    return {
        dev_local: 'http://localhost:5000',
        dev: 'https://coredev.shadhin.ai',
        qa: 'https://coreqa.shadhin.ai',
        stage: 'https://core.shadhin.ai',
    }[process.env.NEXT_PUBLIC_APP_ENV || 'dev'];
};

// export const _bucket_ = () => {
//     return {
//         shadhin: {
//             dev: 'shadhin-bot-bot-files-bucket-dev',
//             qa: 'shadhin-bot-bot-files-bucket-dev',
//             stage: 'shadhin-bot-bot-files-bucket-dev',
//         },
//     }[process.env.REACT_APP_COMPANY_NAME][process.env.REACT_APP_ENV_MODE || 'dev'];
// };

// export const identityId = () => {
//     return {
//         shadhin: {
//             dev: 'us-east-1:d4047dd3-ad01-4b50-af1d-6256b7f672a7',
//             qa: 'us-east-1:d4047dd3-ad01-4b50-af1d-6256b7f672a7',
//             stage: 'us-east-1:d4047dd3-ad01-4b50-af1d-6256b7f672a7',
//         },
//     }[process.env.REACT_APP_COMPANY_NAME][process.env.REACT_APP_ENV_MODE || 'dev'];
// };

// export const cognitoUserPoolId = () => {
//     return {
//         shadhin: {
//             dev: 'us-east-1_DfJoWPWJO',
//             qa: 'us-east-1_DfJoWPWJO',
//             stage: 'us-east-1_DfJoWPWJO',
//         },
//     }[process.env.REACT_APP_COMPANY_NAME][process.env.REACT_APP_ENV_MODE || 'dev'];
// };

// export const userPoolWebClientId = () => {
//     return {
//         shadhin: {
//             dev: '151re7qrqisvftvjhhehko1pli',
//             qa: '151re7qrqisvftvjhhehko1pli',
//             stage: '151re7qrqisvftvjhhehko1pli',
//         },
//     }[process.env.REACT_APP_COMPANY_NAME][process.env.REACT_APP_ENV_MODE || 'dev'];
// };

// export const concatBucket = () => {
//     return {
//         shadhin: {
//             dev: 'lms-meetmates-concat-bucket-lms-meetmates-qa',
//             qa: 'lms-meetmates-concat-bucket-lms-meetmates-qa',
//             stage: 'lms-meetmates-concat-bucket-lms-meetmates-qa',
//         },
//     }[process.env.REACT_APP_COMPANY_NAME][process.env.REACT_APP_ENV_MODE || 'dev'];
// };

// export const s3BaseUrl = () => {
//     return `https://${_bucket_()}.s3.${cRegion}.amazonaws.com/`;
// };

export default path;
