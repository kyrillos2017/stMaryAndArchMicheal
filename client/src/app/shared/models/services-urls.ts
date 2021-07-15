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
    SECTION: "api/Fathers/GetSection"
  },
  MASSES: {
    GET_ALL: "api/Masses",
    UPDATE_SEC: "api/Masses/UpdateSection",
    CREATE_OR_UPDATE: "api/Masses/CreateOrUpdate"
  },
  ABOUT_CHURCH: {
    MAIN: "api/AboutChurch"
  },
  CHURCH_SERVICES: {
    MAIN: "api/ChurchService"
  },
  SUNDAY_MEETINGS: {
    MAIN: "api/SundayMeeting"
  }

}

export { ApiUrls }
