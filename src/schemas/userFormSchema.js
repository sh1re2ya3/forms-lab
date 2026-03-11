export const formData = {
  basicInfo: {
    fullName: "",
    username: "",
    email: "",
    password: "",
    birthDate: "",
    bio: ""
  },

  location: {
    country: "",
    city: ""
  },

  personality: {
    earlyBirdOrNightOwl: "",
    petPreference: ""
  },

  interests: {
    thingsYouEnjoy: [],
    weekendActivities: [],
    favoriteFoods: []
  },

  lifestyle: {
    shoesCount: 0,
    moodLevel: 50,
    favoriteColor: "#000000"
  },

  media: {
    profilePhoto: null
  },

  futurePlans: {
    bucketList: [{ item: "" }],
  },

  memories: {
    travels: [ {
      place: "",
      year: "",
      memory: ""
    }]
  }
}