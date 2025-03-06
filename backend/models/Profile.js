const profileSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    personalDetails: {
      fullName: String,
      email: String,
      phone: String,
      address: String,
      linkedIn: String,
      github: String,
    },
    skills: [{
      name: String,
      proficiency: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced"],
      },
    }],
    experience: [{
      title: String,
      company: String,
      location: String,
      startDate: Date,
      endDate: Date,
      currentJob: Boolean,
      description: String,
    }],
    education: [{
      degree: String,
      institution: String,
      fieldOfStudy: String,
      startYear: Number,
      endYear: Number,
    }],
    certifications: [{
      name: String,
      issuer: String,
      date: Date,
    }],
  });
  