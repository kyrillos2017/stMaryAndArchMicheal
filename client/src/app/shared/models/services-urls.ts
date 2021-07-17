const ApiUrls = {
  ACCOUNT: {
    ACCOUNT: "api/Account",
    LOGIN: "api/Account/login",
    REGISTER: "api/Account/register",
    CHECK_EMAIL: "api/account/emailexists"
  },
  LIVE: {
    LIVE: "api/live",
  },
  IMAGE_ASSETS: {
    MAIN: "api/ImageAssets"
  },
  FATHERS: {
    MAIN: "api/Fathers",
    SECTION: "api/Fathers/GetSection",
    UPDATE_SECTION: "api/Fathers/UpdateSection"
  },
  MASSES: {
    GET_ALL: "api/Masses",
    GET_BY_ID: "api/Masses/GetById",
    UPDATE_SEC: "api/Masses/UpdateSection",
    CREATE_OR_UPDATE: "api/Masses/CreateOrUpdate"
  },
  ABOUT_CHURCH: {
    MAIN: "api/AboutChurch"
  },
  CHURCH_SERVICES: {
    MAIN: "api/ChurchService",
    GET_BY_ID: "api/ChurchService/GetById"
  },
  SUNDAY_MEETINGS: {
    MAIN: "api/SundayMeeting"
  },
  CONFESSIONS: {
    MAIN: "api/Confession"
  }

}

export { ApiUrls }
