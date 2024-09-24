import { _bucket_, apiUrl } from '../helper/path';

const configs = {
    shadhin: {
        site_logo: {
            logo: 'meet_mates_logo',
            width: '150px',
            icon: 'meetmates_icon',
        },
        // fav_icon: `${window.location.origin}/meetmates.png`,
        photo_avatar: 'photo_avatar',
        user_avatar: 'line-md:account-small', // iconify icon name
        base_urls: {
            api: apiUrl(),
            // ws: wsUrl(),
            // chat_api: chatAPIurl(),
        },
        // constants: {
        //     identityPoolId: identityId(),
        //     userPoolId: cognitoUserPoolId(),
        //     userPoolWebClientId: userPoolWebClientId(),
        //     bucket: _bucket_(),
        //     recording_concat_bucket: concatBucket(),
        //     s3FileBaseUrl: s3BaseUrl(),
        // },
    },
};

export default {
    ...configs[process.env.NEXT_APP_COMPANY_NAME],
    site_company: process.env.NEXT_APP_COMPANY_NAME,
    site_name: process.env.NEXT_APP_COMPANY_NAME,
};
