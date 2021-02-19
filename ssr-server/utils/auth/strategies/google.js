const passport = require('passport');
const axios = require('axios');
const boom = require('@hapi/boom');
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth');

const { config } = require('../../../config');

const GOOGLE_AUTHORIZATION_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
const GOOGLE_TOKEN_URL = 'https://www.googleapis.com/oauth2/v4/token';
const GOOGLE_USERINFO_URL = 'https://www.googleapis.com/oauth2/v3/userinfo';

passport.use(
    new GoogleStrategy({
        clientID: config.googleClientId, 
        clientSecret:config.googleClientSecret,
        callbackURL: "/auth/google/callback"
    }, async function(accessToken, refreshToken, profile, cb) {
        try {
            const { data, status } = await axios({
                url: `${config.apiUrl}/api/auth/sign-provider`,
                method: 'post',
                data: {
                    name: profile._json.name,
                    email: profile._json.email,
                    password: profile.id,
                    apiKeyToken: config.apiKeyToken
                }
            });

            if( !data || status !== 200) {
                return cb(boom.unauthorized(),false);
            }
            return cb(null, data);
        } catch (error) {
            return cb(error,false);
        }
    })
);