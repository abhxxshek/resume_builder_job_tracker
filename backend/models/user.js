const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    purchasedTemplates: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "ResumeTemplate",
    }],
    isPremiumUser: {
      type: Boolean,
      default: false,
    },
  });
  